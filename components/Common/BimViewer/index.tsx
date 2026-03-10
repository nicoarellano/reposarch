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

            return BUI.html`
        <bim-panel label="Properties" style="overflow: hidden; display: flex; flex-direction: column;">
          <bim-panel-section label="Element Data" style="overflow-y: auto; flex: 1; min-height: 0;">
            <div style="display: flex; flex-direction: column; gap: 0.5rem; width: 100%; box-sizing: border-box;">
              ${loadFragBtn}
              <bim-text-input
                @input=${onTextInput}
                placeholder="Search tree & properties"
                debounce="250">
              </bim-text-input>
              ${spatialTree}
              ${propertiesTable}
            </div>
          </bim-panel-section>
        </bim-panel>
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
            app.remove();
            components.dispose();
        };
    }, []);

    return <div ref={containerRef} className="w-full h-full overflow-hidden" />;
}

