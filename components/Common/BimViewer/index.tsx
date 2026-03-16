'use client';

import { useEffect, useRef } from 'react';
import * as BUI from '@thatopen/ui';
import * as OBC from '@thatopen/components';
import * as OBCF from '@thatopen/components-front';
import * as BUIC from '@thatopen/ui-obc';
import type * as FRAGS from '@thatopen/fragments';
import * as THREE from 'three'

export default function BimViewer() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        //  Init BUI 
        BUI.Manager.init();

        //  Viewport 
        const viewport = document.createElement('bim-viewport') as BUI.Viewport;

        //  OBC setup 
        const components = new OBC.Components();
        const worlds = components.get(OBC.Worlds);
        const world = worlds.create<OBC.SimpleScene, OBC.SimpleCamera, OBC.SimpleRenderer>();
        world.name = 'main';

        const sceneComponent = new OBC.SimpleScene(components);
        sceneComponent.setup();
        world.scene = sceneComponent;

        const rendererComponent = new OBC.SimpleRenderer(components, viewport);
        world.renderer = rendererComponent;

        const cameraComponent = new OBC.SimpleCamera(components);
        world.camera = cameraComponent;

        cameraComponent.controls.setLookAt(65, 19, -27, 12.6, -5, -1.4);

        viewport.addEventListener('resize', () => {
            rendererComponent.resize();
            cameraComponent.updateAspect();
        });

        components.init();
        world.scene.config.backgroundColor = new THREE.Color('white');

        const grids = components.get(OBC.Grids);
        grids.create(world);

        //  Fragments 
        const fragments = components.get(OBC.FragmentsManager);
        fragments.init('/utils/bim/worker.mjs');

        cameraComponent.controls.addEventListener('update', () => {
            fragments.core.update(true);
        });



        // Double-click: combined behavior
        // - Ctrl+dblclick: fly to predefined position/target
        // - Shift+dblclick: console.log current position/target
        // - dblclick (no Ctrl): dispatch current position/target via CustomEvent
        let flyAnimId: number | null = null;
        const flyTo = (toPos: number[], toTarget: number[], duration = 800) => {
            const cam: any = world.camera;
            if (!cam || !cam.three) return;

            const startPos = (cam.three.position as THREE.Vector3).clone();
            const startTarget = new THREE.Vector3();
            const controls = cam.controls as any;
            if (controls && controls.target && controls.target instanceof THREE.Vector3) {
                startTarget.copy(controls.target);
            } else {
                cam.three.getWorldDirection(startTarget);
                startTarget.add(startPos);
            }

            const endPos = new THREE.Vector3().fromArray(toPos);
            const endTarget = new THREE.Vector3().fromArray(toTarget);

            const t0 = performance.now();

            const step = (now: number) => {
                const t = Math.min(1, (now - t0) / duration);
                const ease = t * (2 - t);

                const curPos = startPos.clone().lerp(endPos, ease);
                const curTarget = startTarget.clone().lerp(endTarget, ease);

                cam.three.position.copy(curPos);
                if (controls && controls.target && controls.target instanceof THREE.Vector3) {
                    controls.target.copy(curTarget);
                } else if (typeof controls.setLookAt === 'function') {
                    controls.setLookAt(curPos.x, curPos.y, curPos.z, curTarget.x, curTarget.y, curTarget.z);
                } else {
                    cam.three.lookAt(curTarget);
                }

                if (controls && typeof controls.update === 'function') controls.update();

                if (t < 1) {
                    flyAnimId = requestAnimationFrame(step);
                } else {
                    flyAnimId = null;
                }
            };

            if (flyAnimId) cancelAnimationFrame(flyAnimId);
            flyAnimId = requestAnimationFrame(step);
        };

        const onDblClick = (e: MouseEvent) => {
            const cam: any = world.camera;
            if (!cam || !cam.three) return;

            // Ctrl + dblclick: log current camera position/target
            if (e.ctrlKey) {
                const pos = (cam.three.position as THREE.Vector3).clone();
                const controls = cam.controls as any;
                let target: THREE.Vector3 | null = null;

                if (controls) {
                    if (controls.target && controls.target instanceof THREE.Vector3) {
                        target = controls.target.clone();
                    } else if (typeof controls.getTarget === 'function') {
                        try {
                            const maybe = controls.getTarget();
                            if (maybe instanceof THREE.Vector3) target = maybe.clone();
                            else if (Array.isArray(maybe)) target = new THREE.Vector3().fromArray(maybe);
                        } catch (err) {
                            // ignore
                        }
                    }
                }

                if (!target) {
                    const dir = new THREE.Vector3();
                    cam.three.getWorldDirection(dir);
                    target = pos.clone().add(dir);
                }

                const positionArr = pos.toArray();
                const targetArr = target.toArray();
                console.log('camera:dblclick (ctrl)', { position: positionArr, target: targetArr });
                return;
            }

            // Plain dblclick: fly to predefined destination
            const position = [-15.065493696794935, 6.9118486040943345, 31.05191078632189];
            const target = [-4.762749667264913, 5.5235950700449585, 14.132624895649673];
            flyTo(position, target, 1000);
        };

        viewport.addEventListener('dblclick', onDblClick as EventListener);

        fragments.list.onItemSet.add(({ value: model }: { value: FRAGS.FragmentsModel }) => {
            model.useCamera((world.camera as OBC.SimpleCamera).three);
            world.scene.three.add(model.object);
            fragments.core.update(true);
        });

        //  Highlighter 
        const highlighter = components.get(OBCF.Highlighter);
        highlighter.setup({ world });

        //  Items Data Table 
        const [propertiesTable, updatePropertiesTable] = BUIC.tables.itemsData({
            components,
            modelIdMap: {},
        });
        propertiesTable.preserveStructureOnFilter = true;
        propertiesTable.indentationInText = false;

        highlighter.events.select.onHighlight.add((modelIdMap: OBC.ModelIdMap) => {
            updatePropertiesTable({ modelIdMap });
        });

        highlighter.events.select.onClear.add(() => {
            updatePropertiesTable({ modelIdMap: {} });
        });

        // Load sample model
        const loadFragment = async () => {
            // you can provide as many files as you need
            const fragPath = '/models/cdc-Architecture_Building-arch.frag';

            const modelId = 'ArchBuilding';
            if (!modelId) return null;
            const file = await fetch(fragPath);
            const buffer = await file.arrayBuffer();
            // this is the main function to load the fragments
            return fragments.core.load(buffer, { modelId });
        };


        //  Spatial Tree 
        const [spatialTree, updateSpatialTree] = BUIC.tables.spatialTree({
            components,
            models: [],
            selectHighlighterName: 'select',
        });
        spatialTree.preserveStructureOnFilter = true;

        fragments.list.onItemSet.add(() => {
            updateSpatialTree({ models: fragments.list.values() });
        });
        fragments.list.onItemDeleted.add(() => {
            updateSpatialTree({ models: fragments.list.values() });
        });

        let modelLoaded = false;

        fragments.onFragmentsLoaded.add(() => {
            if (!modelLoaded) {
                modelLoaded = true;
                loadFragment();
            }
        });

        //  Panel 
        const propertiesPanel = BUI.Component.create(() => {
            const [loadFragBtn] = BUIC.buttons.loadFrag({ components, world });
            loadFragBtn.label = 'Load BIM model (.frag)';

            const onTextInput = (e: Event) => {
                const input = e.target as BUI.TextInput;
                const q = input.value !== '' ? input.value : null;
                propertiesTable.queryString = q;
                spatialTree.queryString = input.value || '';
            };

            const loadExampleBtn = BUI.html`
      <bim-button label="Load Example (Arch building)" @click=${loadFragment}></bim-button>
    `;

            return BUI.html`
        <bim-panel label="Properties" style="overflow: hidden; display: flex; flex-direction: column;">
          <bim-panel-section label="Element Data" style="overflow-y: auto; flex: 1; min-height: 0;">
            <div style="display: flex; flex-direction: column; gap: 0.5rem; width: 100%; box-sizing: border-box;">
              ${loadFragBtn}
              ${loadExampleBtn}
              <br/>
              <bim-text-input
                    @input=${onTextInput}
                    placeholder="Search tree & properties"
                    debounce="250">
                  </bim-text-input>
                  <p>Properties:</p>
                  ${propertiesTable}
                  <p>Spatial Tree:</p>
                  ${spatialTree}                    
      `;
        });

        //  Grid layout 
        const app = document.createElement('bim-grid') as BUI.Grid;
        app.style.width = '100%';
        app.style.height = '100%';
        (app as any).layouts = {
            main: {
                template: `
          "propertiesPanel viewport"
          / 22rem 1fr
        `,
                elements: { propertiesPanel, viewport },
            },
        };
        (app as any).layout = 'main';

        containerRef.current.appendChild(app);

        return () => {
            // cleanup dblclick and any running fly animation
            viewport.removeEventListener('dblclick', onDblClick as EventListener);
            if (typeof flyAnimId !== 'undefined' && flyAnimId) cancelAnimationFrame(flyAnimId);
            app.remove();
            components.dispose();
        };
    }, []);

    return <div ref={containerRef} className="w-full h-full overflow-hidden" />;
}

