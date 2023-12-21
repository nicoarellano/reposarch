const MAPTILER_KEY = 'get_your_own_OpIi9ZULNHzrESv6T2vL';
const map = new maplibregl.Map({
    style: `https://api.maptiler.com/maps/backdrop/style.json?key=${MAPTILER_KEY}`,
    center: [-35.631350486385614, 47.90310711396825],
    zoom: 0.7,
    pitch: 45,
    bearing: -17.6,
    container: 'map',
    antialias: true
});

// The 'building' layer in the streets vector source contains building-height
// data from OpenStreetMap.
map.on('load', () => {
    // Insert the layer beneath any symbol layer.
    const layers = map.getStyle().layers;

    let labelLayerId;
    for (let i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
            labelLayerId = layers[i].id;
            break;
        }
    }

    map.addSource('openmaptiles', {
        url: `https://api.maptiler.com/tiles/v3/tiles.json?key=${MAPTILER_KEY}`,
        type: 'vector',
    });

    map.addLayer(
        {
            'id': '3d-buildings',
            'source': 'openmaptiles',
            'source-layer': 'building',
            'type': 'fill-extrusion',
            'minzoom': 15,
            'paint': {
                'fill-extrusion-color': [
                    'interpolate',
                    ['linear'],
                    ['get', 'render_height'], 0, '#808080', 200, '#000000', 400, '#333333'
                ],
                'fill-extrusion-height': [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    15,
                    0,
                    16,
                    ['get', 'render_height']
                ],
                'fill-extrusion-base': ['case',
                    ['>=', ['get', 'zoom'], 16],
                    ['get', 'render_min_height'], 0
                ]
            }
        },
        labelLayerId
    );
});

  map.on('load', () => {
    //Time_Machine Marker
    map.loadImage(
        './Thumbnail/Small version to show 1.png',

        (error, image) => {
            if (error) throw error;
            map.addImage('custom-marker', image);
        
            //Adding Time_Machine
            map.addSource('Time_Machine', {
                'type': 'geojson',
                'data': {
                    "type": "FeatureCollection",
                    "features": [

                      
                        {
                          'type': 'Feature',
                          'properties': {
                            'Name': 'Time Machine',
                            'Date': '2020 Sept 16-Oct 6',
                            'iconSize': [40, 40],
                            'thumbnail': '1',
                            'expanded': './images/Time Machine.jpg',
                            'Location': 'Omlands Park',
                          },
                          'geometry': {
                            'type': 'Point',
                            'coordinates': [-97.19154689, 49.87889176],
                          },
                        },
                        {
                          'type': 'Feature',
                          'properties': {
                            'Name': 'Markings',
                            'Date': '2020 Oct 14-Nov 6th',
                            'iconSize': [40, 40],
                            'thumbnail': '2',
                            'expanded': './images/Markings.jpg',
                            'Location': 'Legislative Map of Assiniboine',
                          },
                          'geometry': {
                            'type': 'Point',
                            'coordinates': [-97.14602947, 49.88406789],
                          },
                        },
                        {
                          'type': 'Feature',
                          'properties': {
                            'Name': 'Personalize',
                            'Date': '2020 Nov 6th-Nov 16th',
                            'iconSize': [40, 40],
                            'thumbnail': '3',
                            'expanded': './images/Personalize 2.jpg',
                            'Location': 'Midtown Bridge',
                          },
                          'geometry': {
                            'type': 'Point',
                            'coordinates': [-97.13833385, 49.884506820264164],
                          },
                        },
                        {
                          'type': 'Feature',
                          'properties': {
                            'Name': 'Estrad',
                            'Date': '2021 Feb 26-Mar 22',
                            'iconSize': [40, 40],
                            'thumbnail': '4',
                            'expanded': './images/Estrad.jpg',
                            'Location': 'Exchange District (Winnipeg)',
                          },
                          'geometry': {
                            'type': 'Point',
                            'coordinates': [-97.14248566, 49.89723636843283],
                          },
                        },
                        {
                          'type': 'Feature',
                          'properties': {
                            'Name': 'Roost',
                            'Date': '2021 Mar 26th-Apr 16th',
                            'iconSize': [40, 40],
                            'thumbnail': '5',
                            'expanded': './images/Roost.jpg',
                            'Location': 'Exchange District (Winnipeg)',
                          },
                          'geometry': {
                            'type': 'Point',
                            'coordinates': [-97.14263326, 49.89735718238106],
                          },
                        },
                        {
                          'type': 'Feature',
                          'properties': {
                            'Name': 'Icebox',
                            'Date': '2022 Jan 9-Apr 21',
                            'iconSize': [40, 40],
                            'thumbnail': '6',
                            'expanded': './images/Icebox.jpg',
                            'Location': 'Forks',
                          },
                          'geometry': {
                            'type': 'Point',
                            'coordinates': [-97.12936284, 49.885282245609346],
                          },
                        },
                        {
                          'type': 'Feature',
                          'properties': {
                            'Name': 'Pano',
                            'Date': '2022 Sept 8-Dec-19th',
                            'iconSize': [40, 40],
                            'thumbnail': '7',
                            'expanded': './images/Pano.jpg',
                            'Location': 'Grindavik',
                          },
                          'geometry': {
                            'type': 'Point',
                            'coordinates': [-22.43130065, 63.86641449],
                          },
                        },
                        {
                          'type': 'Feature',
                          'properties': {
                            'Name': 'Cloud"s of Glory',
                            'Date': '2023 Jan 29-Aprl 18',
                            'iconSize': [40, 40],
                            'thumbnail': '8',
                            'expanded': './images/Cloud.jpg',
                            'Location': 'Berlin',
                          },
                          'geometry': {
                            'type': 'Point',
                            'coordinates': [13.41643053, 52.5357665],
                          },
                        },
                        {
                          'type': 'Feature',
                          'properties': {
                            'Name': 'Basin',
                            'Date': '2023 Sept 8-Sept 29',
                            'iconSize': [40, 40],
                            'thumbnail': '9',
                            'expanded': './images/Basin.jpg',
                            'Location': 'Ottawa',
                          },
                          'geometry': {
                            'type': 'Point',
                            'coordinates': [-75.73155367, 45.40032357],
                          },
                        },
                        {
                          'type': 'Feature',
                          'properties': {
                            'Name': 'SOLas',
                            'Date': '2023 Oct 13-Dec 18',
                            'iconSize': [40, 40],
                            'thumbnail': '10',
                            'expanded': './images/SOLAR 1.jpg',
                            'Location': 'Ottawa',
                          },
                          'geometry': {
                            'type': 'Point',
                            'coordinates': [-75.73086568, 45.40049213],
                          },
                        }
//
                 ]
                 }
            });
  
            // Add a symbol layer for Time_Machines
            map.addLayer({
                'id': 'Time_Machine',
                'type': 'symbol',
                'source': 'Time_Machine',
                'layout': {
                    'icon-image': 'custom-marker',
                    'icon-size': 0.5
  
                }
            });
        }
    )
  
  });
  
  
  //Time_Machine Popups
  map.on('click', 'Time_Machine', (e) => {
    const coordinates = e.features[0].geometry.coordinates.slice();
    const Time_Machine = e.features[0];
  
  
    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) 
      {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }
  
        new maplibregl.Popup()
            .setLngLat(coordinates)
            .setHTML(`
                <h3>${Time_Machine.properties.Name}</h3>
                <p>Date: ${Time_Machine.properties.Date}</p>
                <p>Location: ${Time_Machine.properties.Location}</p>
                <p><img src="${Time_Machine.properties.expanded}" alt="${Time_Machine.properties.Name} Expanded" style="width: 200px; max-width: 200px; height: auto;"></p>
                `)
            .addTo(map);
    });
  
  //Markings_2 Popups
  map.on('click', 'Markings_2', (e) => {
    const coordinates = e.features[0].geometry.coordinates.slice();
    const Markings_2 = e.features[0];
  
  
    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) 
      {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }
  
        new maplibregl.Popup()
            .setLngLat(coordinates)
            .setHTML(`
                <h3>${Markings_2.properties.Name}</h3>
                <p>Type: ${Markings_2.properties.Type}</p>
                <p>Location: ${Markings_2.properties.Location}</p>
                `)
            .addTo(map);
  });
  
  // Change the cursor to a pointer when the mouse is over the places layer.
  map.on('mouseenter', 'places', () => {
      map.getCanvas().style.cursor = 'pointer';
  });
  
  // Change it back to a pointer when it leaves.
  map.on('mouseleave', 'places', () => {
      map.getCanvas().style.cursor = '';
   });
  
  // After the last frame rendered before the map enters an "idle" state.
  map.on('idle', () => {
    // If these two layers were not added to the map, abort
      if (!map.getLayer('Time_Machine') || !map.getLayer('Markings_2')) 
      {
      return;
      }
   
    // Enumerate ids of the layers.
      const toggleableLayerIds = ['Time_Machine', 'Markings_2'];
   
    // Set up the corresponding toggle button for each layer.
      for (const id of toggleableLayerIds) {
    // Skip layers that already have a button set up.
      if (document.getElementById(id)) 
      {
      continue;
      }
  
    // Create a link.
      const link = document.createElement('a');
        link.id = id;
        link.href = '#';
        link.textContent = id;
        link.className = 'active';
   
    // Show or hide layer when the toggle is clicked.
      link.onclick = function (e) {
      const clickedLayer = this.textContent;
        e.preventDefault();
        e.stopPropagation();
   
     const visibility = map.getLayoutProperty(
      clickedLayer,
      'visibility'
      );
   
  // Toggle layer visibility by changing the layout object's visibility property.
    if (visibility === 'visible') {
       map.setLayoutProperty(clickedLayer, 'visibility', 'none');
        this.className = '';
    } else {
        this.className = 'active';
      map.setLayoutProperty(
        clickedLayer,
        'visibility',
        'visible'
      );
      }
  };
   
  const layers = document.getElementById('menu');
  layers.appendChild(link);
  }
  
  window.addEventListener("resize", () => {
    resize();
  });
  
  const resize = () => {
    size.width = window.innerWidth * (fullScreen ? 0.92 : 0.6);
    size.height = window.innerHeight * (fullScreen ? 0.9 : 0.4);
    camera.aspect = size.width / size.height;
    camera.updateProjectionMatrix();
    renderer.setSize(size.width, size.height);
  };
  
  });
  const goTo = document.getElementById("go-to");
let toggleGoTo = true;
goTo.onclick = function () {
  if (toggleGoTo) {
    this.setAttribute("title", "Go to Canada");
    document.getElementById("go-to-icon").setAttribute("d", icons.worldIcon);
    // Fly to Carleton
    flyTo(map, -75.697, 45.384, 15.6);
  } else {
    this.setAttribute("title", "Go to site");
    document.getElementById("go-to-icon").setAttribute("d", icons.goToIcon);
    // Fly to Canada
    flyTo(map, -98.74, 56.415, 3, 0);
  }
  toggleGoTo = !toggleGoTo;
};

function flyTo(map, lng, lat, zoom = 15, pitch = 50) {
  map.flyTo({
    center: [lng, lat],
    zoom: zoom,
    pitch: pitch,
    duration: 2000,
  });
}

const customLayer2 = {
  id: "3d-model",
  type: "custom",
  renderingMode: "3d",
  onAdd(map, gl) {
    this.camera = new THREE.Camera();
    this.scene = new THREE.Scene();

    // create two three.js lights to illuminate the model
    const directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(0, -70, 100).normalize();
    this.scene.add(directionalLight);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff);
    directionalLight2.position.set(0, 70, 100).normalize();
    this.scene.add(directionalLight2);

  }
}

  // parameters to ensure the model is georeferenced correctly on the map
  const modelOrigin = [-75.73086568, 45.40049213];
  const modelAltitude = 0;
  const modelRotate = [Math.PI / 2, 0, 0];

  const modelAsMercatorCoordinate = maplibregl.MercatorCoordinate.fromLngLat(
      modelOrigin,
      modelAltitude
  );

  // transformation parameters to position, rotate and scale the 3D model onto the map
  const modelTransform = {
      translateX: modelAsMercatorCoordinate.x,
      translateY: modelAsMercatorCoordinate.y,
      translateZ: modelAsMercatorCoordinate.z,
      rotateX: modelRotate[0],
      rotateY: modelRotate[1],
      rotateZ: modelRotate[2],
      /* Since our 3D model is in real world meters, a scale transform needs to be
      * applied since the CustomLayerInterface expects units in MercatorCoordinates.
      */
      scale: modelAsMercatorCoordinate.meterInMercatorCoordinateUnits()
  };

  const THREE = window.THREE;

  // configuration of the custom layer for a 3D model per the CustomLayerInterface
  const customLayer = {
      id: '3d-model',
      type: 'custom',
      renderingMode: '3d',
      onAdd (map, gl) {
          this.camera = new THREE.Camera();
          this.scene = new THREE.Scene();

          // create two three.js lights to illuminate the model
          const directionalLight = new THREE.DirectionalLight(0xffffff);
          directionalLight.position.set(0, -70, 100).normalize();
          this.scene.add(directionalLight);

          const directionalLight2 = new THREE.DirectionalLight(0xffffff);
          directionalLight2.position.set(0, 70, 100).normalize();
          this.scene.add(directionalLight2);

          // use the three.js GLTF loader to add the 3D model to the three.js scene
          loader.load(
            './models/Cole_Marotta_3dModel.gltf',
            (gltf) => {
                this.scene.add(gltf.scene);
            },
            undefined,
            (error) => {
                console.error('Error loading GLTF model:', error);
            }
        );
          this.map = map;
          // use the MapLibre GL JS map canvas for three.js
          this.renderer = new THREE.WebGLRenderer({
              canvas: map.getCanvas(),
              context: gl,
              antialias: true
          });

          this.renderer.autoClear = false;
      },
      render (gl, matrix) {
          const rotationX = new THREE.Matrix4().makeRotationAxis(
              new THREE.Vector3(1, 0, 0),
              modelTransform.rotateX
          );
          const rotationY = new THREE.Matrix4().makeRotationAxis(
              new THREE.Vector3(0, 1, 0),
              modelTransform.rotateY
          );
          const rotationZ = new THREE.Matrix4().makeRotationAxis(
              new THREE.Vector3(0, 0, 1),
              modelTransform.rotateZ
          );

          const m = new THREE.Matrix4().fromArray(matrix);
          const l = new THREE.Matrix4()
              .makeTranslation(
                  modelTransform.translateX,
                  modelTransform.translateY,
                  modelTransform.translateZ
              )
              .scale(
                  new THREE.Vector3(
                      modelTransform.scale,
                      -modelTransform.scale,
                      modelTransform.scale
                  )
              )
              .multiply(rotationX)
              .multiply(rotationY)
              .multiply(rotationZ);

          this.camera.projectionMatrix = m.multiply(l);
          this.renderer.resetState();
          this.renderer.render(this.scene, this.camera);
          this.map.triggerRepaint();
      }
  };

  function zoomToModel() {
    // Coordinates of the model
    const modelLngLat = [-75.73086568, 45.40049213];

    // Fly to the model
    map.flyTo({
        center: modelLngLat,
        zoom: 18, // Adjust the zoom level as needed
        pitch: 50,
        duration: 2000,
    });
}


  map.on('style.load', () => {
      map.addLayer(customLayer);
  });


   // Add a 3D model to the map
   const loader = new THREE.GLTFLoader();
   loader.load(
       './/models/Cole_Marotta_3dModel.gltf',
       (gltf) => {
           const model = gltf.scene;
           model.scale.set(100, 100, 100); // Adjust the scale as needed

           map.on('render', () => {
               const coords = map.getCenter().toArray();
               const altitude = map.getZoom();
               const scale = map.project(coords).y / 20000; // Adjust the scale factor

               model.position.set(coords[0], coords[1], altitude);
               model.scale.set(scale, scale, scale);

               map.triggerRepaint();
           });

           map.on('load', () => {
               map.addLayer({
                   id: '3d-model',
                   type: 'custom',
                   renderingMode: '3d',
                   onAdd: (map, gl) => {
                       this.camera = new THREE.Camera();
                       this.scene = new THREE.Scene();
                       this.scene.add(model);

                       const directionalLight = new THREE.DirectionalLight(0xffffff);
                       directionalLight.position.set(0, -70, 100).normalize();
                       this.scene.add(directionalLight);

                       const directionalLight2 = new THREE.DirectionalLight(0xffffff);
                       directionalLight2.position.set(0, 70, 100).normalize();
                       this.scene.add(directionalLight2);

                       this.map = map;

                       this.renderer = new THREE.WebGLRenderer({
                           canvas: map.getCanvas(),
                           context: gl,
                           antialias: true
                       });
                       this.renderer.autoClear = false;
                   },
                   render: (gl, matrix) => {
                       const m = new THREE.Matrix4().fromArray(matrix);
                       const l = new THREE.Matrix4().makeTranslation(0, 0, 0);

                       this.camera.projectionMatrix = m.multiply(l);
                       this.renderer.resetState();
                       this.renderer.render(this.scene, this.camera);
                       this.map.triggerRepaint();
                   }
               });
           });
       }
   );