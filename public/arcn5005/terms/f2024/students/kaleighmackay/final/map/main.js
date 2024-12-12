async function main() {

  const THREE = window.THREE;

  const map = new maplibregl.Map({
      container: 'map',
      center: [11.5257, 47.668],
      zoom: 16.27,
      pitch: 60,
      bearing: -28.5,
      antialias: true,
      style: {
          version: 8,
          layers: [
              {
                  id: 'baseColor', // Hides edges of terrain tiles, which have 'walls' going down to 0.
                  type: 'background',
                  paint: {
                      'background-color': '#fff',
                      'background-opacity': 1.0,
                  },
              }, 
          ],
          terrain: {
              source: 'terrainSource',
              exaggeration: 1,
          },
          sources: {
              terrainSource: {
                  type: 'raster-dem',
                  url: 'https://demotiles.maplibre.org/terrain-tiles/tiles.json',
                  tileSize: 256
              },
              hillshadeSource: {
                  type: 'raster-dem',
                  url: 'https://demotiles.maplibre.org/terrain-tiles/tiles.json',
                  tileSize: 256
              }
          },
      }
  });

  /*
  * Helper function used to get threejs-scene-coordinates from mercator coordinates.
  * This is just a quick and dirty solution - it won't work if points are far away from each other
  * because a meter near the north-pole covers more mercator-units
  * than a meter near the equator.
  */
  function calculateDistanceMercatorToMeters(from, to) {
      const mercatorPerMeter = from.meterInMercatorCoordinateUnits();
      // mercator x: 0=west, 1=east
      const dEast = to.x - from.x;
      const dEastMeter = dEast / mercatorPerMeter;
      // mercator y: 0=north, 1=south
      const dNorth = from.y - to.y;
      const dNorthMeter = dNorth / mercatorPerMeter;
      return {dEastMeter, dNorthMeter};
  }

  async function loadModel() {
    const loader = new THREE.GLTFLoader();
    try {
      const gltf = await loader.loadAsync('https://maplibre.org/maplibre-gl-js/docs/assets/34M_17/34M_17.gltf');
      const model = gltf.scene;
      return model;
    } catch (error) {
      console.error('Error loading model:', error);
      console.log('Loaded Model:', model1);
    }
  }

  // Known locations. We'll infer the elevation of those locations once terrain is loaded.
  const sceneOrigin = new maplibregl.LngLat(-63.287523, 46.53000);
  const model1Location = new maplibregl.LngLat(-63.287523, 46.53000);

  // Configuration of the custom layer for a 3D model, implementing `CustomLayerInterface`.
  const customLayer = {
      id: '3d-model',
      type: 'custom',
      renderingMode: '3d',

      onAdd(map, gl) {
          /**
           * Setting up three.js scene.
           * We're placing model1 and model2 in such a way that the whole scene fits over the terrain.
           */

          this.camera = new THREE.Camera();
          this.scene = new THREE.Scene();
          // In threejs, y points up - we're rotating the scene such that it's y points along maplibre's up.
          this.scene.rotateX(Math.PI / 2);
          // In threejs, z points toward the viewer - mirroring it such that z points along maplibre's north.
          this.scene.scale.multiply(new THREE.Vector3(10, 10, -10));
          // We now have a scene with (x=east, y=up, z=north)


          const light = new THREE.DirectionalLight(0xffffff);
          // Making it just before noon - light coming from south-east.
          light.position.set(50, 70, -30).normalize();
          this.scene.add(light);

          // Axes helper to show how threejs scene is oriented.
          const axesHelper = new THREE.AxesHelper(60);
          this.scene.add(axesHelper);

          // Getting model elevations (in meters) relative to scene origin from maplibre's terrain.
          const sceneElevation = map.queryTerrainElevation(sceneOrigin) || 0;
          const model1Elevation = map.queryTerrainElevation(model1Location) || 0;
          const model1up = model1Elevation - sceneElevation;

          // Getting model x and y (in meters) relative to scene origin.
          const sceneOriginMercator = maplibregl.MercatorCoordinate.fromLngLat(sceneOrigin);
          const model1Mercator = maplibregl.MercatorCoordinate.fromLngLat(model1Location);
          const {dEastMeter: model1east, dNorthMeter: model1north} = calculateDistanceMercatorToMeters(sceneOriginMercator, model1Mercator);

          model1.position.set(mercator.x, mercator.z, mercator.y);
          this.scene.add(model1);
          this.scene.scale.multiply(new THREE.Vector3(100, 100, 100));

          // Use the MapLibre GL JS map canvas for three.js.
          this.renderer = new THREE.WebGLRenderer({
              canvas: map.getCanvas(),
              context: gl,
              antialias: true
          });

          loadModel().then((model) => {
            if (model) {
              model.position.set(mercator.x, mercator.z, mercator.y);
              model.scale.set(10,10,10);
              this.scene.add(model);
              console.log('Model added to scene');
            } else {
              console.error('Model failed to load');
            }
          })

          this.renderer.autoClear = false;
      },

      render(gl, mercatorMatrix) {

          // `queryTerrainElevation` gives us the elevation of a point on the terrain
          // **relative to the elevation of `center`**,
          // where `center` is the point on the terrain that the middle of the camera points at.
          // If we didn't account for that offset, and the scene lay on a point on the terrain that is
          // below `center`, then the scene would appear to float in the air.
          const offsetFromCenterElevation = map.queryTerrainElevation(sceneOrigin) || 0;
          const sceneOriginMercator = maplibregl.MercatorCoordinate.fromLngLat(sceneOrigin, offsetFromCenterElevation);

          const sceneTransform = {
              translateX: sceneOriginMercator.x,
              translateY: sceneOriginMercator.y,
              translateZ: sceneOriginMercator.z,
              scale: sceneOriginMercator.meterInMercatorCoordinateUnits()
          };
          const mapMatrix = new THREE.Matrix4().fromArray(mercatorMatrix);
          const transformMatrix = new THREE.Matrix4()
            .makeTranslation(transform.translateX, transform.translateY, transform.translateZ)
            .scale(new THREE.Vector3(transform.scale, -transform.scale, transform.scale));
        
          this.camera.projectionMatrix = mapMatrix.multiply(transformMatrix);
          this.renderer.resetState();
          this.renderer.render(this.scene, this.camera);
          map.triggerRepaint();

          const m = new THREE.Matrix4().fromArray(mercatorMatrix);
          const l = new THREE.Matrix4()
              .makeTranslation(sceneTransform.translateX, sceneTransform.translateY, sceneTransform.translateZ)
              .scale(new THREE.Vector3(sceneTransform.scale, -sceneTransform.scale, sceneTransform.scale));

          this.camera.projectionMatrix = m.multiply(l);
          this.renderer.resetState();
          this.renderer.render(this.scene, this.camera);
          map.triggerRepaint();

          const axesHelper = new THREE.AxesHelper(100);
          this.scene.add(axesHelper);
      }
  };

  const results = await Promise.all([map.once('load'), loadModel()]);
  const model1 = results[1];

  map.addLayer(customLayer);
}

main();

const map = new maplibregl.Map({
    container: 'map',
    center: [-63.08752, 46.43000],
    zoom: 8.5,
    style: 'style.json',
    pitch: 60,
  });
  
  function addPointCoordinates(coordinates, properties) {
    const el = document.createElement('img');
    el.src = 'lighthouse.png';
    el.className = 'marker';
    el.style.width = '75px';
    el.style.height = '75px';
  
    const marker = new maplibregl.Marker({
      element: el,
      anchor: 'bottom', // This ensures the icon is positioned at its bottom point
    })
      .setLngLat(coordinates)
      .addTo(map);
  
    marker.setPopup(
      new maplibregl.Popup().setHTML(`
          <img src="${properties.image}" alt="${properties.name}" style="width:auto;height:50%;justify:center"/>
          <h3>${properties.name}</h3>
          <li><strong>Construction Date:</strong> ${properties.constructiondate}</li>
          <li><strong>Address:</strong> ${properties.address}</li>
          <li><strong>More Historic Info:</strong> <a href="${properties.website}" target="_blank">${properties.website}</a></li>
      `)
    );
  }
  
  map.on('load', () => {
    const textOverlay = document.createElement('div');
    textOverlay.style.position = 'fixed';
    textOverlay.style.top = '30px';
    textOverlay.style.right = '30px';
    textOverlay.style.backgroundColor = '#f8f8f8';
    textOverlay.style.color = '#bc3c33';
    textOverlay.style.padding = '20px';
    textOverlay.style.borderRadius = '25px';
    textOverlay.style.boxShadow = '0 0 0 4px rgba(248,248,248,0.5)';
    textOverlay.style.zIndex = '1';
    textOverlay.style.width = '300px';
    textOverlay.style.fontSize = '12pt';
    textOverlay.style.fontFamily = 'Arial, Helvetica, sans-serif';
    textOverlay.innerHTML =
      '<strong>Map of Recognized Heritage Lighthouses in Prince Edward Island</strong><br><br>Learn more about each lighthouse by clicking the lighthouse markers.';
  
    document.getElementById('map').appendChild(textOverlay);
  
    const points = [
      {
        coordinates: [-63.129366, 46.190501],
        properties: {
          image: './images/blockhouse.png',
          name: 'Blockhouse Lighthouse',
          constructiondate: '1876',
          address: '285 Blockhouse Rd, Rocky Point, PE C0A 1H2',
          website: 'https://www.historicplaces.ca/en/rep-reg/place-lieu.aspx?id=24755&pid=0',
        },
      },
      {
        coordinates: [-62.747747, 46.441988],
        properties: {
          image: './images/stpeters.png',
          name: 'St. Peters Harbour Lighthouse',
          constructiondate: '1878',
          address:
            '302 Lighthouse Rd, Morell, PE C0A 1S0',
          website: 'https://www.historicplaces.ca/en/rep-reg/place-lieu.aspx?id=21013',
        },
      },
      {
        coordinates: [-62.466539, 46.144196],
        properties: {
          image: './images/panmure.png',
          name: 'Panmure Head Lighthouse',
          constructiondate: '1853',
          address: '62 Lighthouse Road, Panmure Island, Prince Edward Island, C0A, Canada',
          website: 'https://www.historicplaces.ca/en/rep-reg/place-lieu.aspx?id=19723',
        },
      },
      {
        coordinates: [-62.436785, 46.266220],
        properties: {
          image: './images/annandale.png',
          name: 'Annandale Rear Range Lighthouse',
          constructiondate: '1901',
          address:
            '222 Nortons Rd, Cardigan, PE C0A 1G0',
          website: 'https://www.historicplaces.ca/en/rep-reg/place-lieu.aspx?id=22597',
        },
      },
      {
        coordinates: [-63.147495, 46.230688],
        properties: {
          image: './images/brighton.png',
          name: 'Brighton Beach Front Range Lighthouse',
          constructiondate: '1889',
          address:
            '160 York Ln, Charlottetown, PE C1A 7W5',
          website: 'https://www.historicplaces.ca/en/rep-reg/place-lieu.aspx?id=20370&pid=0',
        },
      },
      {
        coordinates: [-62.457855, 46.003564],
        properties: {
          image: './images/capebear.png',
          name: 'Cape Bear Lighthouse',
          constructiondate: '1881',
          address: '42 Black Brook Rd, Murray Harbour, PE C0A 1V0',
          website: 'https://www.historicplaces.ca/en/rep-reg/place-lieu.aspx?id=21134',
        },
      },
      {
        coordinates: [-63.506196, 46.534006],
        properties: {
          image: './images/capetryon.png',
          name: 'Cape Tryon Lighthouse',
          constructiondate: '1964',
          address: 'Cape Tryon Rd, French River, PE C0A 2B0',
          website:
            'https://www.historicplaces.ca/en/rep-reg/place-lieu.aspx?id=21614&pid=0',
        },
      },
      {
        coordinates: [-63.143225, 46.430027],
        properties: {
          image: './images/covehead.png',
          name: 'Covehead Harbour Lighthouse',
          constructiondate: '1975',
          address: '1530 Gulf Shore Parkway, Stanhope, Prince Edward Island, C0A, Canada',
          website: 'https://www.historicplaces.ca/en/rep-reg/place-lieu.aspx?id=21634',
        },
      },
      {
        coordinates: [-64.062366, 46.793978],
        properties: {
          image: './images/northport.png',
          name: 'Northport Rear Range Lighhouse',
          constructiondate: '1885',
          address: '224 Rte. 152, Northport, Prince Edward Island, C0B, Canada',
          website: 'https://www.historicplaces.ca/en/rep-reg/place-lieu.aspx?id=20884&pid=0',
        },
      },
      {
        coordinates: [-63.039079, 46.050233],
        properties: {
          image: './images/pointprim.png',
          name: 'Point Prim Lighthouse',
          constructiondate: '1845',
          address: 'Point Prim Road, Point Prim, Belfast, Prince Edward Island',
          website: 'https://www.pc.gc.ca/apps/dfhd/page_hl_eng.aspx?id=14835&i=74544',
        },
      },
      //Additional Lighthouses//
      {
        coordinates: [-61.971800, 46.452428],
        properties: {
          image: './images/eastpoint.png',
          name: 'East Point Lighthouse',
          constructiondate: '1867',
          address: '398 Lighthouse Road, East Point, Prince Edward Island, C0A, Canada',
          website: 'https://www.historicplaces.ca/en/rep-reg/place-lieu.aspx?id=19729&pid=0',
        },
      },
      {
        coordinates: [-63.810162, 46.315838],
        properties: {
          image: './images/seacowhead.png',
          name: 'Seacow Head Lighthouse',
          constructiondate: '1863',
          address: '198 Lighthouse Road, Fernwood, Prince Edward Island, C0B, Canada',
          website: 'https://www.historicplaces.ca/en/rep-reg/place-lieu.aspx?id=19528&pid=0',
        },
      },
      {
        coordinates: [-62.745623, 45.949902],
        properties: {
          image: './images/woodislands.png',
          name: 'Wood Islands Lighthouse',
          constructiondate: '1876',
          address: '173 Lighthouse Road, Wood Islands, Prince Edward Island, C0A, Canada',
          website: 'https://www.historicplaces.ca/en/rep-reg/place-lieu.aspx?id=19722&pid=0',
        },
      },
      {
        coordinates: [-63.817286, 46.379643],
        properties: {
          image: './images/indianhead.png',
          name: 'Indian Head Lighthouse',
          constructiondate: '1881',
          address: '3930 Rte. 112, Lower Bedeque, Prince Edward Island, C0B, Canada',
          website: 'https://www.historicplaces.ca/en/rep-reg/place-lieu.aspx?id=19730&pid=0',
        },
      },
      {
        coordinates: [-63.487297, 46.510196],
        properties: {
          image: './images/newlondon.png',
          name: 'New London Lighthouse',
          constructiondate: '1876',
          address: '821 Cape Road, Park Corner, Prince Edward Island, C0B, Canada',
          website: 'https://www.historicplaces.ca/en/rep-reg/place-lieu.aspx?id=19731',
        },
      },
      {
        coordinates: [-64.134128, 46.401791],
        properties: {
          image: './images/capeegmont.png',
          name: 'Cape Egmont Lighthouse',
          constructiondate: '1883',
          address: '161 Phare du Cap Egmont Road, Cape Egmont, Prince Edward Island, C0B, Canada',
          website: 'https://www.historicplaces.ca/en/rep-reg/place-lieu.aspx?id=19206&pid=0',
        },
      },
      {
        coordinates: [-63.996927, 47.057652],
        properties: {
          image: './images/northcape.png',
          name: 'North Cape Lighthouse',
          constructiondate: '1866',
          address: '2183 Rte. 12, Seacow Pond, Prince Edward Island, C0B, Canada',
          website: 'https://www.historicplaces.ca/en/rep-reg/place-lieu.aspx?id=19725&pid=0',
        },
      },
      {
        coordinates: [-62.247511, 46.345866],
        properties: {
          image: './images/souris.png',
          name: 'Souris Historic Lighthouse',
          constructiondate: '1880',
          address: '134 Breakwater Street, Souris, Prince Edward Island, Canada',
          website: 'https://www.historicplaces.ca/en/rep-reg/place-lieu.aspx?id=18696&pid=0',
        },
      },
      {
        coordinates: [-63.488943, 46.214049],
        properties: {
          image: './images/leards.png',
          name: 'Leards Range Front Lighthouse',
          constructiondate: '1879',
          address: '2 Russell Street, Victoria, Prince Edward Island, C0A, Canada',
          website: 'https://www.historicplaces.ca/en/rep-reg/place-lieu.aspx?id=19185&pid=0',
        },
      },
      {
        coordinates: [-64.386854, 46.620252],
        properties: {
          image: './images/westpoint.png',
          name: 'West Point Lighthouse',
          constructiondate: '1876',
          address: '364 Cedar Dunes Park Road, West Point, Prince Edward Island, C0B, Canada',
          website: 'https://www.historicplaces.ca/en/rep-reg/place-lieu.aspx?id=18794&pid=0',
        },
      },
      {
        coordinates: [-63.292818, 46.455105],
        properties: {
          image: './images/northrustico.png',
          name: 'North Rustico Lighthouse',
          constructiondate: '1876',
          address: '383 Harbourview Drive, North Rustico, Prince Edward Island, C0A, Canada',
          website: 'https://www.historicplaces.ca/en/rep-reg/place-lieu.aspx?id=19724&pid=0',
        },
      },
      {
        coordinates: [-63.772267, 46.391138],
        properties: {
          image: './images/summerside.png',
          name: 'Summerside Back Range Light',
          constructiondate: '1895',
          address: '14 Glovers Shore Road, Summerside, Prince Edward Island, C1N, Canada',
          website: 'https://www.historicplaces.ca/en/rep-reg/place-lieu.aspx?id=10116&pid=0',
        },
      },
    ]
  
    points.forEach((point) => {
      addPointCoordinates(point.coordinates, point.properties);
    });
  });
  
  function addMarkerWithPopup(coordinates, popupText) {
    const el = document.createElement('div');
  }