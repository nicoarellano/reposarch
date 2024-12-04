const map = new maplibregl.Map({
  container: 'map',
  style:
    'https://api.maptiler.com/maps/470d6019-657f-4f7d-a018-6ec6ae0d0093/style.json?key=4xF6FrxAyNgBUQ4n4bUN',
  center: [2.335859408310957, 48.86120018357241],
  zoom: 11,
});

//landmark Layer
map.on('load', () => {
  // landmark Marker
  map.loadImage(
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLmRLBw2lSt6pIIrsApSXsz3zL1Tmew3uqJQ&s',
    (error, image) => {
      if (error) throw error;
      map.addImage('landmark-marker', image);

      //Adding landmarks
      map.addSource('landmarks', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [2.335859408310957, 48.86120018357241],
              },
              properties: {
                Place: 'Louvre Museum landmark',
                Neighbourhood: '2nd ARR.',
                Hours: '9:00am - 6:00pm',
                Location: 'Louvre Museum, 75001 Paris, France',
                Description:
                  "Former historic palace housing huge art collection, from Roman sculptures to da Vinci's Mona Lisa.",
              },
            },
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [2.2946587825252553, 48.87502572365458],
              },
              properties: {
                Place: 'Arc de Triomphe',
                Neighbourhood: '8th ARR',
                Hours: '24 hrs',
                Location:
                  'Arc de Triomphe, Pl. Charles de Gaulle, 75008 Paris, France',
                Description:
                  "Iconic triumphal arch built to commemorate Napoleon's victories, with an observation deck.",
              },
            },
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [2.295194293474075, 48.85899207254637],
              },
              properties: {
                Place: 'Eiffel Tower',
                Neighbourhood: '7th ARR.',
                Hours: '9am -12 am',
                Location:
                  'Eiffel Tower, Av. Gustave Eiffel, 75007 Paris, France',
                Description:
                  "Gustave Eiffel's iconic, wrought-iron 1889 tower, with steps and elevators to observation decks.",
              },
            },
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [2.346200682252635, 48.84614159149865],
              },
              properties: {
                Place: 'Panthéon',
                Neighbourhood: '5th ARR',
                Hours: '10am - 6:30pm',
                Location: 'Panthéon, Pl. du Panthéon, 75005 Paris, France',
                Description:
                  '18th-century mausoleum with colonnaded facade, housing remains of notable French citizens.',
              },
            },
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [2.3638789020494855, 48.844724399607536],
              },
              properties: {
                Place: 'Jardin de roches et de pivoines',
                Neighbourhood: '5th ARR',
                Hours: '8am - 5:30pm',
                Location: 'Pl. Valhubert, 75000 Paris, France',
                Description: 'Beautiful Parc in the heart of Paris.',
              },
            },
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [2.3497468224731377, 48.853101060984855],
              },
              properties: {
                Place: 'Cathédrale Notre-Dame de Paris',
                Neighbourhood: '5th ARR.',
                Hours: 'Closed',
                Location:
                  '6 Parvis Notre-Dame - Pl. Jean-Paul II, 75004 Paris, France',
                Description:
                  "Towering, 12th-century cathedral with flying buttresses & gargoyles, setting for Hugo's novel.",
              },
            },
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [2.340971423179971, 48.85638861478928],
              },
              properties: {
                Place: 'Pont Neuf',
                Neighbourhood: '5th ARR.',
                Hours: '24 hours',
                Location: 'Pont Neuf, 75001 Paris, France',
                Description:
                  'Arched stone bridge, opened in 1607, with 2 spans & a bronze, equine statue of King Henri IV.',
              },
            },
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [2.3374939954877023, 48.858338657071045],
              },
              properties: {
                Place: 'Pont des Arts',
                Neighbourhood: '5th ARR',
                Hours: '24 hours',
                Location: 'Pont des Arts, 75006 Paris, France',
                Description:
                  'Picturesque bridge over the Seine connecting the Louvre & the Institut de France.',
              },
            },
          ],
        },
      });

      // Add a symbol layer for bookstores
      map.addLayer({
        id: 'landmarks',
        type: 'symbol',
        source: 'landmarks',
        layout: {
          'icon-image': 'landmark-marker',
          'icon-size': 0.1,
        },
      });
    }
  );
});

//Paris
map.on('load', () => {
  map.addSource('Paris', {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {
            Neighbourhood: 'Paris',
            stroke: '#555555',
            'stroke-width': 2,
            'stroke-opacity': 1,
            fill: '#ff5c5c',
            'fill-opacity': 0.5,
          },
          geometry: {
            coordinates: [
              [
                [2.279887068088954, 48.878575884299934],
                [2.3202842821268423, 48.90104428197504],
                [2.387131680646371, 48.90212922809091],
                [2.396070494441452, 48.897155962645996],
                [2.3990814510707037, 48.882605258062384],
                [2.4146766660801955, 48.84394931070708],
                [2.4701908758039193, 48.84021819684164],
                [2.4609130699915656, 48.817632167150286],
                [2.402498644002849, 48.82894943657759],
                [2.359031132004155, 48.81558303564634],
                [2.356143416225143, 48.815242248075464],
                [2.352281951792631, 48.81826157952045],
                [2.34642537393851, 48.81574488424608],
                [2.2794736284204107, 48.83296715483079],
                [2.2670823608703095, 48.827832951869986],
                [2.266835505954082, 48.83454780243171],
                [2.252042610020919, 48.83727667372018],
                [2.252035682690787, 48.845426124414864],
                [2.2223650130196244, 48.85386981913002],
                [2.2439580703399145, 48.8777008262405],
                [2.255409092812111, 48.87450704015577],
                [2.2585616399691566, 48.88089921077905],
                [2.279887068088954, 48.878575884299934],
              ],
            ],
            type: 'Polygon',
          },
          id: 2,
        },
        {
          type: 'Feature',
          properties: {
            name: 'Paris',
          },
          geometry: {
            type: 'Point',
            coordinates: [2.3541679547767083, 48.857789934235626],
          },
        },
      ],
    },
  });

  map.addLayer({
    id: 'Paris',
    type: 'fill',
    source: 'Paris',
    layout: {},
    paint: {
      'fill-color': '#FF0000',
      'fill-opacity': 0.2,
    },
  });

  map.addLayer({
    id: 'Paris-label',
    type: 'symbol',
    source: 'Paris',
    layout: {
      'text-field': ['get', 'name'],
      'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
      'text-radial-offset': 0.5,
      'text-justify': 'auto',
    },
    filter: ['==', '$type', 'Point'],
  });
});

//landmark Popups
map.on('click', 'landmarks', (e) => {
  const coordinates = e.features[0].geometry.coordinates.slice();
  const landmark = e.features[0];

  // Ensure that if the map is zoomed out such that multiple
  // copies of the feature are visible, the popup appears
  // over the copy being pointed to.
  while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  }

  new maplibregl.Popup()
    .setLngLat(coordinates)
    .setHTML(
      `
              <h3>${landmark.properties.Place}</h3>
              <p>Neighbourhood: ${landmark.properties.Neighbourhood}</p>
              <p>Hours: ${landmark.properties.Hours}</p>
              <p>Location: ${landmark.properties.Location}</p>
              <p>Description: ${landmark.properties.Description}</p>
              `
    )
    .addTo(map);
});

map.on('idle', () => {
  if (!map.getLayer('landmarks')) {
    return;
  }

  // Change the cursor to a pointer when the mouse is over the places layer.
  map.on('mouseenter', 'places', () => {
    map.getCanvas().style.cursor = 'pointer';
  });

  
  // Toggle Layers
  for (const id of toggleableLayerIds) {
    // Skip layers with a button set up.
    if (document.getElementById(id)) {
      continue;
    }


    // Show or hide layer when toggle is clicked.
    link.onclick = function (e) {
      const clickedLayer = this.textContent;
      e.preventDefault();
      e.stopPropagation();

      const visibility = map.getLayoutProperty(clickedLayer, 'visibility');

      // Toggle layer visibility by changing the layout object's visibility property.
      if (visibility === 'visible') {
        map.setLayoutProperty(clickedLayer, 'visibility', 'none');
        this.className = '';
      } else {
        this.className = 'active';
        map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
      }
    };

    const layers = document.getElementById('menu');
    layers.appendChild(link);
  }
});
