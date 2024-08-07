const map = new maplibregl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/dataviz/style.json?key=ffdkwHD7F1qFvBnxU3Ii',
    center: [-95, 55],
    zoom: 2.5,
    pitch: 0,
    bearing: 0
  });
  
  let hoveredVanId = null;
  
  map.on('load', () => {
    // Minivan picture
    map.loadImage(
      'https://static.thenounproject.com/png/121801-200.png',
      (error, image) => {
        if (error) throw error;
        map.addImage('van-icon', image);
  
        // Adding vans
        map.addSource('CanadaTour', {
          'type': 'geojson',
          'data': {
            "type": "FeatureCollection",
            "features": [
              {
                /// (1) - Cabot Trail
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [-60.746113, 46.486942]
                },
                "properties": {
                  "PlaceName": "Cabot Trail",
                  "Location": "Cape Breton, NS",
                  "Date Visited": "July 27, 2023",
                  "Description": "A scenic drive through the beautiful Cape Breton Highlands",
                  "Image": "https://www.novascotia.com/sites/default/files/2023-04/Cruising-Cabot-Trail-1920x1080.jpg"
                }
              },
              {
                ////// (2) - Bothwell Beach
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [-62.083500, 46.399600]
                },
                "properties": {
                  "PlaceName": "Bothwell Beach",
                  "Location": "Bothwell, PE",
                  "Date Visited": "August 2, 2023",
                  "Description": "Hear the sand sing as you walk along the beach",
                  "Image": "https://images.squarespace-cdn.com/content/v1/525d2c3fe4b0fb967a4d62ec/1605731383162-OH35YH6OSZJSWSVTFYNQ/%2317.jpg?format=1000w"
                }
              },
              /// (3) - Hartland Covered Bridge
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [-67.527992, 46.298119]
                },
                "properties": {
                  "PlaceName": "Hartland Covered Bridge",
                  "Location": "Hartland, NB",
                  "Date Visited": "August 3, 2023",
                  "Description": "The world's longest covered bridge (390.75m)",
                  "Image": "https://youimg1.tripcdn.com/target/100f1f000001gqbse39AE.jpg?proc=source%2Ftrip"
                }
              },
              {
                /// (4) - Camping Domaine Champêtre
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [-70.821419, 46.891418]
                },
                "properties": {
                  "PlaceName": "Camping Domaine Champêtre",
                  "Location": "Saint-Vallier, QC",
                  "Date Visited": "August 4, 2023",
                  "Description": "Best campground ever!",
                  "Image": "https://bellechasse.chaudiereappalaches.com/uploads/filer_public_thumbnails/filer_public/5e/21/5e219b5b-6da2-4084-acea-0e9765a8b916/domainechampetre_11.jpeg__945x680_q75_crop_subsampling-2.jpg"
                }
              },
              {
                /// (5) - Niagara Falls
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [-79.064240, 43.081528]
                },
                "properties": {
                  "PlaceName": "Niagara Falls",
                  "Location": "Niagara Falls, ON",
                  "Date Visited": "August 13, 2023",
                  "Description": "The Las Vegas of Canada",
                  "Image": "https://www.cliftonhill.com/sites/default/files/styles/slider/public/niagarafalls-canada.jpg?itok=d-cKo-4T"
                }
              },
              {
                ////// (6) - Toronto Zoo
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [-79.1854, 43.8179]
                },
                "properties": {
                  "PlaceName": "Toronto Zoo",
                  "Location": "Toronto, ON",
                  "Date Visited": "August 14, 2023",
                  "Description": "The Gorillas were the highlight",
                  "Image": "https://live.staticflickr.com/1706/26151258946_9540d7bc5b_b.jpg"
                }
              },
              /// (7) - Forks Market
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [-97.131187, 49.887379]
                },
                "properties": {
                  "PlaceName": "Forks Market",
                  "Location": "Winnipeg, MB",
                  "Date Visited": "August 17, 2023",
                  "Description": "Open daily year-round, the market offers an array of ethnic delicacies and crafts",
                  "Image": "https://www.theforks.com/uploads/public/2017/_MG_1663.jpg"
                }
              },
              {
                /// (8) - Tunnels Of Moose Jaw
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [-105.5349, 50.3901]
                },
                "properties": {
                  "PlaceName": "Tunnels Of Moose Jaw",
                  "Location": "Moose Jaw, SK",
                  "Date Visited": "August 18, 2023",
                  "Description": "A historic tunnel system dug in the early 1900s, used during Prohibition",
                  "Image": "https://www.todocanada.ca/wp-content/uploads/Tunnels-of-Moose-Jaw-1.jpg"
                }
              },
              /// (9) - West Edmonton Mall
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [-113.623055, 53.522778]
                },
                "properties": {
                  "PlaceName": "West Edmonton Mall",
                  "Location": "Edmonton, AB",
                  "Date Visited": "August 19, 2023",
                  "Description": "Prior to 2004, the West Edmonton Mall was the largest indoor shopping center in the world",
                  "Image": "https://www.kayak.com/rimg/himg/1b/9c/7b/expediav2-17722-816021-403372.jpg?width=1366&height=768&crop=true"
                }
              },
              {
                /// (10) - Lake Louise
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [-116.1773, 51.4254]
                },
                "properties": {
                  "PlaceName": "Lake Louise",
                  "Location": "Banff National Park, AB",
                  "Date Visited": "August 22, 2023",
                  "Description": "Breathtaking views",
                  "Image": "https://destinationlesstravel.com/wp-content/uploads/2023/03/Lake-Louise-foreshore-in-summer.jpg.webp"
                }
              },
              {
                /// (11) - Vallea Lumina
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [-122.9227, 50.1724]
                },
                "properties": {
                  "PlaceName": "Vallea Lumina",
                  "Location": "Whistler, BC",
                  "Date Visited": "August 23, 2023",
                  "Description": "Enchanting hike through an illuminated forest",
                  "Image": "https://tagwhistler.com/wp-content/uploads/2022/03/vallea_gallery_1.jpg"
                }
              },
              {
                /// (12) - Red's Bakery
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [-123.93709, 49.16571]
                },
                "properties": {
                  "PlaceName": "Red's Bakery",
                  "Location": "Nanaimo, BC",
                  "Date Visited": "August 25, 2023",
                  "Description": "Ate authentic Nanaimo bars",
                  "Image": "https://s3.amazonaws.com/socast-superdesk/media/20200810170848/f08c0eae-b041-4bfb-9ea2-fe7bd9c12329.jpg"
                }
              },
            ]
          }
        });
  
        // Add a symbol layer for vans
        map.addLayer({
          'id': 'vans',
          'type': 'symbol',
          'source': 'CanadaTour',
          'layout': {
            'icon-image': 'van-icon',
            'icon-size': 0.3
          }
        });
      }
    );
  
    // Create a new popup instance
    const popup = new maplibregl.Popup();
  
    // Van Popups on hover
    map.on("mouseenter", "vans", (e) => {
      // Change the cursor style as a UI indicator.
      map.getCanvas().style.cursor = "pointer";
  
      const coordinates = e.features[0].geometry.coordinates.slice();
      const description = e.features[0].properties.Description;
  
      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }
  
      // Populate the popup and set its coordinates based on the feature found.
      popup.setLngLat(coordinates).setHTML(`
        <h3>${e.features[0].properties.PlaceName}</h3>
        <img src="${e.features[0].properties.Image}" alt="${e.features[0].properties.PlaceName}" style="max-width: 100%; height: auto;">
        <p>Location: ${e.features[0].properties.Location}</p>
        <p>Date Visited: ${e.features[0].properties["Date Visited"]}</p>
        <p>Description: ${description}</p>
      `).addTo(map);
    });
  
    map.on('mousemove', 'vans', (e) => {
      const coordinates = e.features[0].geometry.coordinates.slice();
      const van = e.features[0];
  
      if (van.id !== hoveredVanId) {
        hoveredVanId = van.id;
  
        const imageUrl = van.properties.Image || 'https://example.com/default-image.jpg';
  
        new maplibregl.Popup({
          closeButton: false // Hide the close button
        })
          .setLngLat(coordinates)
          .setHTML(`
            <h3>${van.properties.PlaceName}</h3>
            <img src="${van.properties.Image}" alt="${van.properties.PlaceName}" style="max-width: 100%; height: auto;">
            <p>Location: ${van.properties.Location}</p>
            <p>Date Visited: ${van.properties["Date Visited"]}</p>
            <p>Description: ${van.properties.Description}</p>
          `)
          .addTo(map);
      }
    });
  
    map.on('mouseout', 'vans', () => {
      if (hoveredVanId) {
        map.getCanvas().style.cursor = '';
        hoveredVanId = null;
      }
    });
  });
  