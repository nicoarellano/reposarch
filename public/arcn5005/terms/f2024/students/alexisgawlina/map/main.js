const map = new maplibregl.Map({
    container: 'map',
    style:
        'satellite.json',
    center: [-96.81595411588849,49.77154223266254],
    zoom: 3
});

//description box
map.on('load', () => {
  const textOverlay = document.createElement('div');
    textOverlay.style.position = 'fixed';
    textOverlay.style.top = '70px';
    textOverlay.style.right = '30px';
    textOverlay.style.backgroundColor = 'rgb(255, 255, 255 ,0.5)';
    textOverlay.style.colour = 'rgb(97, 0, 45);'
    textOverlay.style.padding = '15px';
    textOverlay.style.borderRadius = '20px';
    textOverlay.innerHTML = 
    '<strong style="font-size: 16px;">Explore 30 of the Largest Lakes in Canada<br><strong style= "font-size: 14px; font-weight: normal;">click the star icons for more information!</strong>';
  
    document.getElementById('map').appendChild(textOverlay);})
    


map.on('load', () => {
  
    //lake picture
    map.loadImage(
      'pin.png',
      (error, image) => {
        if (error) throw error;
        map.addImage('lakes-icon', image);
  
        // Adding lakes
        map.addSource('CanadaTour', {
          'type': 'geojson',
          'data': {
            "type": "FeatureCollection",
            "features": [
              {
                /// lake superior
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [ -87.1903, 48.1836]
                },
                "properties": {
                  "PlaceName": "Lake Superior",
                  "Location": "Ontario",
                  "Area": "82,100km^2",
                  "Depth": "406m",
                  "Image": "https://upload.wikimedia.org/wikipedia/commons/2/28/Miners_Castle%2C_Pictured_Rocks_National_Lakeshore.jpg"
                }
              },
              {
                /// lake huron
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [ -81.4913, 44.5304]
                },
                "properties": {
                  "PlaceName": "Lake Huron",
                  "Location": "Ontario",
                  "Area": "59,600km^2",
                  "Depth": "230m",
                  "Image": "https://upload.wikimedia.org/wikipedia/commons/c/c9/Lake_Huron.jpg"
                }
              },
              {
                /// great bear lake
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [ -120.2521, 66.0051]
                },
                "properties": {
                  "PlaceName": "Great Bear Lake",
                  "Location": "Northwest Territories",
                  "Area": "31,328km^2",
                  "Depth": "446m",
                  "Image": "https://upload.wikimedia.org/wikipedia/commons/e/e2/Bear_Mountain%2C_Great_Bear_Lake%2C_Northwest_Territories.jpg"
                }
              },
              {
                /// great slave lake
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [ -114.3903, 61.2826]
                },
                "properties": {
                  "PlaceName": "Great Slave Lake",
                  "Location": "Northwest Territories",
                  "Area": "28,568km^2",
                  "Depth": "614m",
                  "Image": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Late_April_on_Yellowknife_Bay%2C_NWT%2C_Canada..JPG"
                }
              },
              {
                /// lake erie
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [ -81.1948, 42.1841]
                },
                "properties": {
                  "PlaceName": "Lake Erie",
                  "Location": "Ontario",
                  "Area": "25,700km^2",
                  "Depth": "64m",
                  "Image": "https://upload.wikimedia.org/wikipedia/commons/5/5f/Erie_07-04-2008_01%3B14%3B23PM.JPG"
                }
              },
              {
                /// lake WINNIPEG
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [ -98.0715, 52.4205]
                },
                "properties": {
                  "PlaceName": "Lake Winnipeg",
                  "Location": "Manitoba",
                  "Area": "24,387km^2",
                  "Depth": "12m",
                  "Image": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Hecla_Island_and_Provincial_Park_in_Lake_Winnipeg_Manitoba_%2814%29.JPG"
                }
              },
              {
                /// lake ontario
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [ -78.1428, 43.4911]
                },
                "properties": {
                  "PlaceName": "Lake Ontario",
                  "Location": "Ontario",
                  "Area": "18,960km^2",
                  "Depth": "244m",
                  "Image": "https://upload.wikimedia.org/wikipedia/commons/3/34/Gimli_Manitoba_Canada_Panorama.jpg"
                }
              },
              {
                /// Lake Athabasca
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [ -109.1811, 59.2756]
                },
                "properties": {
                  "PlaceName": "Lake Athabasca",
                  "Location": "Saskatchewan & Alberta",
                  "Area": "7,935km^2",
                  "Depth": "124m",
                  "Image": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Athabasca_River%2C_Icefields_Parkway_%282987364327%29.jpg"
                }
              },
              {
                /// Reindeer Lake
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [ -102.1156, 57.3805]
                },
                "properties": {
                  "PlaceName": "Reindeer Lake",
                  "Location": "Saskatchewan & Manitoba",
                  "Area": "6,650km^2",
                  "Depth": "220m",
                  "Image": "https://esask.uregina.ca/management/app/assets/img/enc2/selectedbig/51C3A3D7-1560-95DA-43819A8E2284EA7E.jpg"
                }
              },
              {
                /// Smallwood Reservoir
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [ -64.0148, 54.0706]
                },
                "properties": {
                  "PlaceName": "Smallwood Reservoir",
                  "Location": "Newfoundland & Labrador",
                  "Area": "6,527km^2",
                  "Depth": "50m",
                  "Image": "https://upload.wikimedia.org/wikipedia/commons/c/c4/Smallwood_store.JPG"
                }
              },
              {
                /// Nettilling Lake
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [ -70.5242, 66.3350]
                },
                "properties": {
                  "PlaceName": "Nettilling Lake",
                  "Location": "Nunavut",
                  "Area": "5,542km^2",
                  "Depth": "130m",
                  "Image": "https://upload.wikimedia.org/wikipedia/commons/0/08/Koukdjuak_1_2002-08-24.jpg"
                }
              },
              {
                /// Lake Winnipegosis
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [ -99.5400, 52.4659]
                },
                "properties": {
                  "PlaceName": "Lake Winnipegosis",
                  "Location": "Manitoba",
                  "Area": "5,374km^2",
                  "Depth": "12m",
                  "Image": "https://upload.wikimedia.org/wikipedia/commons/6/62/WinnipegosisBeach.JPG"
                }
              },
              {
                /// Lake Nipigon
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [ -88.4207,50.1021 ]
                },
                "properties": {
                  "PlaceName": "Lake Nipigon",
                  "Location": "Ontario",
                  "Area": "4,848km^2",
                  "Depth": "165m",
                  "Image": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Lake_Nipigon.JPG"
                }
              },
              {
                /// Lake Manitoba
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [ -98.4427,50.5345]
                },
                "properties": {
                  "PlaceName": "Lake Manitoba",
                  "Location": "Manitoba",
                  "Area": "4,624km^2",
                  "Depth": "7m",
                  "Image": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Delta_Beach_Manitoba_Canada_%285%29.JPG"
                }
              },
              {
                /// Caniapiscau Reservoir
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [ -69.5152,54.0951]
                },
                "properties": {
                  "PlaceName": "Caniapiscau Reservoir",
                  "Location": "Quebec",
                  "Area": "4,318km^2",
                  "Depth": "50m",
                  "Image": "https://upload.wikimedia.org/wikipedia/commons/3/39/R%C3%A9servoir_Caniapiscau.jpg"
                }
              },
              {
                /// Dubawnt Lake
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [ -101.2945,63.1151]
                },
                "properties": {
                  "PlaceName": "Dubawnt Lake",
                  "Location": "Nunavut",
                  "Area": "3,833km^2",
                  "Depth": "236m",
                  "Image": "https://upload.wikimedia.org/wikipedia/commons/3/32/Dubawnt_Lake%2C_Nunavut.jpg"
                }
              },
              {
                /// Amadjuak Lake
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [ -71.1325,65.0407]
                },
                "properties": {
                  "PlaceName": "Amadjuak Lake",
                  "Location": "Nunavut",
                  "Area": "3,115km^2",
                  "Depth": "130m",
                  "Image": "https://arcticlight.com/expedition-images/baffin/files/imgThumb-37491.jpg"
                }
              },
              {
                /// Lake Melville
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [ -59.4653,53.4910]
                },
                "properties": {
                  "PlaceName": "Lake Melville",
                  "Location": "NewfoundLand & Labrador ",
                  "Area": "3,069km^2",
                  "Depth": "300m",
                  "Image": "https://imgs.mongabay.com/wp-content/uploads/sites/20/2015/11/03051925/1123Lake_Melville-440x330.jpg"
                }
              },
              {
                /// Robert-Bourassa Reservoir
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [ -76.5400,53.4826]
                },
                "properties": {
                  "PlaceName": "Robert-Bourassa Reservoir",
                  "Location": "Quebec",
                  "Area": "2,815km^2",
                  "Depth": "21.8m",
                  "Image": "https://upload.wikimedia.org/wikipedia/commons/0/0d/R%C3%A9servoir_R-B.jpg"
                }
              },
              {
                ///Wollaston Lake
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [ -103.2015,58.2333]
                },
                "properties": {
                  "PlaceName": "Wollaston Lake",
                  "Location": "Saskatchewan",
                  "Area": "2,681km^2",
                  "Depth": "71m",
                  "Image": "https://upload.wikimedia.org/wikipedia/commons/e/e5/Wollastonlake.jpg"
                }
              },
              {
                ///Lac Mistassini
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [ -73.1831,51.1439]
                },
                "properties": {
                  "PlaceName": "Lac Mistassini",
                  "Location": "Quebec",
                  "Area": "2,335km^2",
                  "Depth": "180m",
                  "Image": "https://upload.wikimedia.org/wikipedia/commons/8/8c/07-07-31_9e_chute.jpg"
                }
              },
              {
                ///Nueltin Lake
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [ -99.3021,60.2851]
                },
                "properties": {
                  "PlaceName": "Nueltin Lake",
                  "Location": "Nunavut",
                  "Area": "2,279km^2",
                  "Depth": "100m",
                  "Image": "https://ontariofishingcommunity.com/uploads/imageproxy/P1020793.jpg.f107783af728441b8063b92fed1c313c.jpg"
                }
              },
              {
                ///	Lac La Martre
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [ -118.0731,63.2928]
                },
                "properties": {
                  "PlaceName": "Lac La Martre",
                  "Location": "NorthWest Territories",
                  "Area": "1,778km^2",
                  "Depth": "30m",
                  "Image": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Lac_La_Matre.jpg"
                }
              },
              {
                ///Williston Lake
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [ -124.0819,56.0911]
                },
                "properties": {
                  "PlaceName": "Williston Lake",
                  "Location": "British Columbia",
                  "Area": "1,761km^2",
                  "Depth": "166m",
                  "Image": "https://upload.wikimedia.org/wikipedia/commons/4/43/Ominica_Arm%2C_Williston_Lake_%28274287741%29.jpg"
                }
              },
              {
                ///Lake Claire
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [ -112.1149,58.4235]
                },
                "properties": {
                  "PlaceName": "Lake Claire",
                  "Location": "Alberta",
                  "Area": "1,436km^2",
                  "Depth": "3.4m",
                  "Image": "https://upload.wikimedia.org/wikipedia/commons/1/17/Lake_St_Claire_guardian.jpg"
                }
              },
              {
                ///Lac a l'Eau-Claire
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [ -73.0357,46.3307]
                },
                "properties": {
                  "PlaceName": "Lac a l'Eau-Claire",
                  "Location": "Quebec",
                  "Area": "1,383km^2",
                  "Depth": "178m",
                  "Image": "https://upload.wikimedia.org/wikipedia/commons/a/a3/Clearwater_lake.jpg"
                }
              },
              {
                ///Cedar Lake
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [ -116.5855,51.1543]
                },
                "properties": {
                  "PlaceName": "Cedar Lake",
                  "Location": "British Columbia",
                  "Area": "1,353km^2",
                  "Depth": "15.3m",
                  "Image": "https://cedarlakecc.com/wp-content/uploads/2021/07/asfd.jpg"
                }
              },
              {
                ///Lesser Slave Lake
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [ -115.3030,55.2819]
                },
                "properties": {
                  "PlaceName": "Lesser Slave Lake",
                  "Location": "Alberta",
                  "Area": "1,160km^2",
                  "Depth": "20.5m",
                  "Image": "https://upload.wikimedia.org/wikipedia/commons/3/39/SW_Lesser_Slave_Lake.jpg"
                }
              },
              {
                ///Lake St. Clair
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [ -82.4654,42.3630]
                },
                "properties": {
                  "PlaceName": "Lake St. Clair",
                  "Location": "Ontario",
                  "Area": "1,114km^2",
                  "Depth": "3.4m",
                  "Image": "https://upload.wikimedia.org/wikipedia/commons/a/a8/Shoreline_muck_in_Lake_St._Clair_%288741968452%29.jpg"
                }
              },
              {
                ///Bras d'Or Lake
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [ -61.0227,46.0136]
                },
                "properties": {
                  "PlaceName": "Bras d'Or Lake",
                  "Location": "Nova Scotia",
                  "Area": "1,099km^2",
                  "Depth": "287m",
                  "Image": "https://upload.wikimedia.org/wikipedia/commons/0/05/Bras_d%27Or.jpg"
                }
              },
              {
                ///Kluane Lake
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [ -138.5645,61.2237]
                },
                "properties": {
                  "PlaceName": "Kluane Lake",
                  "Location": "Yukon",
                  "Area": "408km^2",
                  "Depth": "31m",
                  "Image": "https://upload.wikimedia.org/wikipedia/commons/6/65/Kluane_Lake_YT_2005.jpg"
                }
              },
            ]
          }
        });
  
        // Add a symbol layer for parks
        map.addLayer({
          'id': 'lakes',
          'type': 'symbol',
          'source': 'CanadaTour',
          'layout': {
            'icon-image': 'lakes-icon',
            'icon-size': 0.01
          }
        });
      }
    );

      
    // Create a new popup instance
    const popup = new maplibregl.Popup();
  
    // Park Popups on hover
    map.on("mouseenter", "lakes", (e) => {
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
        <p>Area: ${e.features[0].properties.Area}</p>
        <p>Depth: ${e.features[0].properties.Depth}</p>
      `).addTo(map);
    });
  
    map.on('mousemove', 'lakes', (e) => {
      const coordinates = e.features[0].geometry.coordinates.slice();
      const lakes = e.features[0];
  
      if (lakes.id !== hoveredParkId) {
        hoveredParkId = lakes.id;
  
        const imageUrl = lakes.properties.Image || 'https://example.com/default-image.jpg';
  
        new maplibregl.Popup({
          closeButton: false // Hide the close button
        })
          .setLngLat(coordinates)
          .setHTML(`
            <h3>${lakes.properties.PlaceName}</h3>
            <img src="${lakes.properties.Image}" alt="${lakes.properties.PlaceName}" style="max-width: 100%; height: auto;">
            <p>Location: ${lakes.properties.Location}</p>
            <p>Area: ${lakes.properties["Area"]}</p>
            <p>Depth: ${lakes.properties.Depth}</p>
          `)
          .addTo(map);
      }
    });
  
    map.on('mouseout', 'lakes', () => {
      if (hoveredParkId) {
        map.getCanvas().style.cursor = '';
        hoveredParkId = null;
      }
    });
  });