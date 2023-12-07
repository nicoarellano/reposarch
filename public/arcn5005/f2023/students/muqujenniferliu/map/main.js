const map = new maplibregl.Map({
    container: 'map',
    style:
        'https://api.maptiler.com/maps/ccea525f-b835-4ab4-a9ca-2aefeffc947a/style.json?key=CANW9UF7KaSSR9Doo1Ab',
    center: [-97.17, 49.85],
    zoom: 12
});

//Restaurants Layer
map.on('load', () => {





  
    // Restaurants Marker
    map.loadImage(
        'https://png.pngtree.com/png-vector/20221130/ourmid/pngtree-restaurant-location-pin-icon-in-gold-yellow-color-png-image_6485373.png',
        (error, image) => {
            if (error) throw error;
            map.addImage('custom-marker', image);
        
            //Adding Restaurants
            map.addSource('Restaurants', {
                'type': 'geojson',
                'data': {
                    "type": "FeatureCollection",
                    "features": [
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -97.15350827578035, 49.84631405909782 ]
                     },
                     "properties": {
                     "Shop":"Cho-Ichi Ramen",
                     "Website":"http://choichi.ca/",
                     "Hours":"11:30am - 9pm",
                     "Location":"1151 Pembina Hwy",
                     "Rating":4.1,
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -97.15320962251923, 49.815127325302754 ]
                     },
                     "properties": {
                     "Shop":"Sun Fortune Restaurant",
                     "Website":"https://sunfortunerestaurant.com/",
                     "Hours":"4pm - 9pm",
                     "Location":"2077 Pembina Hwy",
                     "Rating":4.3
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -97.15516877191216, 49.82256536024122 ]
                     },
                     "properties": {
                     "Shop":"Morals Village Hot Pot",
                     "Website":"/",
                     "Hours":"11:30am - 9pm",
                     "Location":"1855 Pembina Hwy #102",
                     "Rating":3.9
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -97.158198547296, 49.79101822911923  ]
                     },
                     "properties": {
                     "Shop":"Gol's Lanzhou Noodle",
                     "Website":"https://order.mrsdigi.com/dowo.php/263509210508070/96bdbb59-91af-5018-8e79-f157a69c27e2",
                     "Hours":"11:30am - 9:30pm",
                     "Location":"2795 Pembina Hwy #1",
                     "Rating":4.5
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.7266669,45.40221259 ]
                     },
                     "properties": {
                     "Shop":"The Spaniel's Tale",
                     "Neighbourhood":"Hintonburg",
                     "Hours":"10am - 6pm",
                     "Location":"1131 Wellington St. West",
                     "Rating":4.9
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -97.19504371610135, 49.82282200254828 ]
                     },
                     "properties": {
                     "Shop":"The Keg Steakhouse + Bar - Southside",
                     "Website":"http://www.thekeg.com/en/locations/southside",
                     "Hours":"11:30am - 11pm",
                     "Location":"2034 McGillivray Blvd",
                     "Rating":4.5
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -97.20843368563811, 49.832414827495 ]
                     },
                     "properties": {
                     "Shop":"Trans Canada Brewing Co.",
                     "Website":"http://www.tcb.beer/",
                     "Hours":"9am  - 11pm",
                     "Location":"1290 Kenaston Blvd #1",
                     "Rating":4.7
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -97.20115468476033, 49.8564705177206 ]
                     },
                     "properties": {
                     "Shop":"Yujiro Japanese Restaurant",
                     "Website":"http://www.yujirowinnipeg.com/",
                     "Hours":"11:30am - 2pm, 5pm - 9pm",
                     "Location":"1822 Grant Ave",
                     "Rating":4.5
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -97.20542308237006, 49.857754699865595 ]
                     },
                     "properties": {
                     "Shop":"Bimi Korean/Japanese Restaurant",
                     "Website":"https://www.bimijapaneserestaurantwinnipeg.com/",
                     "Hours":"12pm - 9:30pm",
                     "Location":"1893 Grant Ave",
                     "Rating":3.4
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -97.15332574876253, 49.889805724504086 ]
                     },
                     "properties": {
                     "Shop":"Banh Mi King",
                     "Website":"http://banhmiking.ca/",
                     "Hours":"11am - 8:30pm",
                     "Location":"510 Portage Ave",
                     "Rating":4.6
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -97.13727377854924, 49.90251074697764 ]
                     },
                     "properties": {
                     "Shop":"Kum Koon Garden",
                     "Website":"http://www.kumkoongarden.com/",
                     "Hours":"11am - 3pm, 4:30pm - 10pm",
                     "Location":"257 King St",
                     "Rating":4.2
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -97.13161312457753, 49.88693270927958 ]
                     },
                     "properties": {
                     "Shop":"Fergies Fish N Chips",
                     "Website":"http://www.fergiesfishandchips.ca/",
                     "Hours":"11am - 10pm",
                     "Location":"Parking lot, 1 Forks Market Rd",
                     "Rating":4.6
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [  -97.13824021395781, 49.89398416744575 ]
                     },
                     "properties": {
                     "Shop":"OEB Breakfast Co.",
                     "Website":"https://eatoeb.com/",
                     "Hours":"10am - 3pm",
                     "Location":"330 Main St #100",
                     "Rating":4.5
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -97.11035438476637, 49.86695424512621 ]
                     },
                     "properties": {
                     "Shop":"Juneberry",
                     "Website":"http://www.juneberrywpg.ca/",
                     "Hours":"9am - 3pm",
                     "Location":"531 St Mary's Rd",
                     "Rating":4.6
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -97.19813263925062, 49.8740205445549 ]
                     },
                     "properties": {
                     "Shop":"Jenna Rae Cakes",
                     "Website":"https://jennaraecakes.com/",
                     "Hours":"10am - 6pm",
                     "Location":"580 Academy Rd",
                     "Rating":4.2
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -97.14400086093407, 49.87679036343599 ]
                     },
                     "properties": {
                     "Shop":"Wakoya Sushi",
                     "Website":"http://www.wakoyasushi.com/",
                     "Hours":"4 pm - 10 pm",
                     "Location":"167 Osborne St",
                     "Rating":4.2
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -97.13743310705675, 49.88547549553861 ]
                     },
                     "properties": {
                     "Shop":"Fete Ice Cream + Coffee",
                     "Website":"http://www.feteicecreamcoffee.com/",
                     "Hours":"10 am - 6 pm",
                     "Location":"300 Assiniboine Ave Unit B",
                     "Rating":4.7
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -97.15113367449699, 49.8389983242012 ]
                     },
                     "properties": {
                     "Shop":"Cottage Bakery",
                     "Website":"http://cottagebakerywinnipeg.com/",
                     "Hours":"7:30 am - 6pm",
                     "Location":"1382 Pembina Hwy",
                     "Rating":4.6
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -97.14298782882008, 49.855959503298074 ]
                     },
                     "properties": {
                     "Shop":"BDI",
                     "Website":"766 Jubilee Ave",
                     "Hours":"2 pm - 9 pm ",
                     "Location":"766 Jubilee Ave",
                     "Rating":4.5
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -97.15904005341288, 49.79534806762323 ]
                     },
                     "properties": {
                     "Shop":"Hey I am Yogost",
                     "Website":"https://order.online/business/hey-i-am-yogost-11394901",
                     "Hours":"11 am - 11 pm ",
                     "Location":"2677 Pembina Hwy Unit 2",
                     "Rating":4.1
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -97.20795613286275, 49.8234426182853 ]
                     },
                     "properties": {
                     "Shop":"Clay Oven",
                     "Website":"https://www.clayoven.ca/",
                     "Hours":"11:30 am - 10 pm",
                     "Location":"1600 Kenaston Blvd #240",
                     "Rating":3.7
                     }
                   }
                 ]
                 }
            });
          
            // Add a symbol layer for Restaurants
            map.addLayer({
                'id': 'Restaurants',
                'type': 'symbol',
                'source': 'Restaurants',
                'layout': {
                    'icon-image': 'custom-marker',
                    'icon-size': 0.1
                }
            });
        }
    )
  });

//Shop Layer
map.on('load', () => {
  // Shop Marker
  map.loadImage(
      'https://png.pngtree.com/png-vector/20221130/ourmid/pngtree-store-or-shop-location-pin-icon-in-orange-color-png-image_6485372.png',
      (error, image) => {
          if (error) throw error;
          map.addImage('Shop-marker', image);
          
          //Adding Shop
          map.addSource('Shop', {
                  'type': 'geojson',
                  'data': {
                    "type": "FeatureCollection",
                    "features": [
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -97.19856727440839, 49.88444161092179 ]
                     },
                     "properties": {
                     "Shop":"Polo Park",
                     "Website":"https://www.cfshops.com/polo-park.html?cid=lis_ppk_en_hp_gb",
                     "Hours":"10 am - 9pm",
                     "Location":"1485 Portage Ave #233",
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -97.14578208021338, 49.87885178219762 ]
                     },
                     "properties": {
                     "Shop":"Unique Bunny",
                     "Website":"http://www.uniquebunny.com/",
                     "Hours":"11 am - 6 pm",
                     "Location":"106 Osborne St",
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -97.16572993500483, 49.858098891132045 ]
                     },
                     "properties": {
                     "Shop":"Grant Park Shopping Center",
                     "Website":"http://www.grantparkshoppingcentre.com/",
                     "Hours":"10 am -6 pm",
                     "Location":"1120 Grant Ave",
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -97.10939336128028, 49.82897540107583 ]
                     },
                     "properties": {
                     "Shop":"St. Vital Center",
                     "Website":"http://stvitalcentre.com/",
                     "Hours":"10 am - 9 pm",
                     "Location":"1225 St Mary's Rd",
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -97.13449493033347, 49.8094679924792 ]
                     },
                     "properties": {
                     "Shop":"UofM Bookstore",
                     "Website":"https://umanitoba.ca/bookstore/",
                     "Hours":"9 am - 4:30 pm",
                     "Location":"University Centre",
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -97.2117436756351, 49.83961289922616 ]
                     },
                     "properties": {
                     "Shop":"IKEA",
                     "Website":"https://www.ikea.com/ca/en/stores/winnipeg/?utm_source=google&utm_medium=organic&utm_campaign=map&utm_content=winnipeg",
                     "Hours":"10 am - 8 pm",
                     "Location":"500 Sterling Lyon Pkwy",
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -97.13167317109308, 49.88775102673285 ]
                     },
                     "properties": {
                     "Shop":"The Forks Market",
                     "Website":"http://www.theforks.com/",
                     "Hours":"10 am - 9 pm",
                     "Location":"1 Forks Market Rd",
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -97.14458654120529, 49.88913024233391 ]
                     },
                     "properties": {
                     "Shop":"RBC Convention Center",
                     "Website":"http://www.wcc.mb.ca/",
                     "Hours":" / ",
                     "Location":"375 York Ave",
                    }
                  }
                ]
                }

          });
  
          // Add a symbol layer for Restaurants
          map.addLayer({
              'id': 'Shop',
              'type': 'symbol',
              'source': 'Shop',
              'layout': {
                  'icon-image': 'Shop-marker',
                  'icon-size': 0.1
  
              }
           });
      }
  )

});

//Neighbourhood Layers


  

//Restaurants Popups
  map.on('click', 'Restaurants', (e) => {
    const coordinates = e.features[0].geometry.coordinates.slice();
    const Restaurants = e.features[0];

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
                <h3>${Restaurants.properties.Shop}</h3>
                <p>Website: ${Restaurants.properties.Website}</p>
                <p>Hours: ${Restaurants.properties.Hours}</p>
                <p>Location: ${Restaurants.properties.Location}</p>
                `)
            .addTo(map);
    });

//Shop Popups
  map.on('click', 'Shop', (e) => {
    const coordinates = e.features[0].geometry.coordinates.slice();
    const Shop = e.features[0];
  
  
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
                <h3>${Shop.properties.Shop}</h3>
                <p>Website: ${Shop.properties.Website}</p>
                <p>Hours: ${Shop.properties.Hours}</p>
                <p>Location: ${Shop.properties.Location}</p>
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


//Toggle between the two layers
  // After the last frame rendered before the map enters an "idle" state.
  map.on('idle', () => {
    // If these two layers were not added to the map, abort
      if (!map.getLayer('Restaurants') 
      || !map.getLayer('Shop')   
      ) 
      {
      return;
      }
   
    // Layer IDs
      const toggleableLayerIds = ['Restaurants', 'Shop'];
   
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


  });