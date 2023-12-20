const map = new maplibregl.Map({
    container: 'map',
    style:
        'https://api.maptiler.com/maps/backdrop/style.json?key=n2UqeTpVL8iS1Gw18m9b',
    center: [-35.631350486385614, 47.90310711396825],
    zoom: 2.5,
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
                      
                  
  
                 ]
                 }
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
  
  
  })
}
    )})
