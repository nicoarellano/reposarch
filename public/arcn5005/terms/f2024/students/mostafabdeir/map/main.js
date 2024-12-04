const map = new maplibregl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/ce87f1c2-fd16-42e4-a32c-1f0255f6ca7e/style.json?key=9rjyXAz4R6YbFE1fPEDk',
    center: [-75.73557800919684, 45.386881937300366],
    zoom: 12
});
//45.386881937300366, -75.73557800919684
map.on('load', async () => {
    const image = await map.loadImage('shawarmapixel.png'); 
    // Add an image to use as a custom marker
    map.addImage('custom-marker', image.data);

    map.addSource('places', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>SHAWARMA GLORY</strong><p>- 5 STARS<br>- 1309 Carling Ave, Ottawa, ON K1Z 7L3<br>- Mon-Sat 11:AM to 6:PM</p><img src="os_shawarma.webp"width=250px>' 
                    
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-75.73557800919684, 45.386881937300366]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>SHAWARMA GARLIC AND ONION</strong><p>- 4.7 STARS<br>- 1465 Richmond Rd, Ottawa, ON K2B 6R9<br>- Mon-Sun 11:AM to 9:PM</p><img src="os_shawarma.webp"width=250px>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-75.79045600567501, 45.364709521162176]  
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>SHAWARMA ANDALOS</strong><p>- 4.5 STARS<br>- 2121 Carling Ave, Ottawa, ON K2A 1H2<br>- HOURS UNAVAILABLE</p><img src="os_shawarma.webp"width=250px>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-75.77037162449571, 45.37508084270522]  
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>OSMOWS SHAWARMA</strong><p>- 4.2 STARS<br>- 1365 Woodroffe Ave, Nepean, ON K2G 1V7<br>- Mon-Sun 11:AM-2:AM</p><img src="os_shawarma.webp"width=250px>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-75.7570678677472, 45.351983965244514]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>SHAWARMA PRINCE</strong><p>- 4.1 STARS<br>- 1667 Merivale Rd, Nepean, ON K2G 3K2<br>- 11:AM to 12:AM</p><img src="os_shawarma.webp"width=250px>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-75.73320693626067, 45.350536327374094]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>OTTAWA SHAWARMA</strong><p>- 4.8 STARS<br>- 1383 Clyde Ave. unit 1, Ottawa, ON K2G 3H7<br>- Mon-Sun 11:AM to 11:PM</p><img src="os_shawarma.webp"width=250px>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-75.73492355003668, 45.36078963119835]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>SHAWARMA DE ROZA</strong><p>- 4.7 STARS<br>- 1896 Prince of Wales Dr, Ottawa, ON K2C 3W9<br>- Mon-Sun 11:AM to 9:PM</p><img src="os_shawarma.webp"width=250px>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-75.70471114757892, 45.356326656691934]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>CARLETON SHAWARMA PALACE</strong><p>- 2.1 STARS<br>- Nideyinàn Food Court, 1125 Colonel By Dr, Ottawa, ON K1S 5B6<br>- Mon-Fri 11:AM tp 6:PM</p><img src="os_shawarma.webp"width=250px>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-75.6983596766077, 45.38454602827634]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>SHAWARMA MANGOS</strong><p>- 4.3 STARS<br>- 2682 Alta Vista Dr, Ottawa, ON K1V 1A3<br>- Mon-Sun 11:AM to 11:PM</p><img src="os_shawarma.webp"width=250px>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-75.66454238522032, 45.37502054976641]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>SHAWARMA ANDALOS</strong><p>- 3.8 STARS<br>- 2277 Riverside Dr., Ottawa, ON K1H 7X6<br>- Mon-Fri 11:AM-9:PM, Sat 6:AM-6:PM, Sun 5:AM-5:PM</p><img src="os_shawarma.webp"width=250px>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-75.677014589119222, 45.38628961229726]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>STRAND SHAWARMA AND CAFE</strong><p>- 4.5 STARS<br>- 1265 Bank St, Ottawa, ON K1S 3Y2<br>- Mon-Thurs 10:AM to 10:PM, Fri-Sun 8:AM to 10:PM</p><img src="os_shawarma.webp"width=250px>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-75.67907452561741, 45.391594082649284]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>BANK SHAWARMA</strong><p>- 4.3 STARS<br>- 1227 Bank St, Ottawa, ON K1S 3X7<br>- Mon-Sun 11:AM to 1:AM</p><img src="os_shawarma.webp"width=250px>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-75.68061947801581, 45.39237765539175]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>3 BROTHERS SHAWARMA</strong><p>- 4.7 STARS<br>- 931 Bank St, Ottawa, ON K1S 3W5<br>- Mon-Sun 11:AM to 3:AM</p><img src="os_shawarma.webp"width=250px>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-75.68662762622341, 45.400755177397684]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>SHAWARMA AL MOUNA</strong><p>- 4.9 STARS<br>- 1266 Wellington St. W, Ottawa, ON K1Y 3A5<br>- Mon-Sun 11:AM to 9:PM</p><img src="os_shawarma.webp"width=250px>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-75.73357701299726, 45.399067718947286]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>FIRE SHAWARMA</strong><p>- 4.5 STARS<br>- 1230 Wellington St. W, Ottawa, ON K1Y 3A1<br>- Mon-Sun 11:AM to 10:PM</p><img src="os_shawarma.webp"width=250px>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-75.73143124577724, 45.400333317509805] 
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>LAHEEB GRILL AND SHAWARMA</strong><p>- 4.4 STARS<br>- 947 Somerset St W, Ottawa, ON K1R 6R8<br>- Mon-Sun 11:AM to 11:PM</p><img src="os_shawarma.webp"width=250px>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-75.71538090697157, 45.409131457187094]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>NEW KING SHAWARMA PLUS</strong><p>- 4.6 STARS<br>- 205 Bank St, Ottawa, ON K2P 1W7<br>- Mon-Sat 10:AM to 9:30PM </p><img src="os_shawarma.webp"width=250px>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-75.69804310782933, 45.41853069502925]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>MR. FEZ SHAWARMA</strong><p>- 4.7 STARS<br>- 129 Bank St, Ottawa, ON K1P 5N7<br>- Mon-Sun 11:AM - 3:AM</p><img src="os_shawarma.webp"width=250px>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-75.69993138299104, 45.42039830601747]
                    }
                },
            ]
        }
    });

    // Add a layer showing the places.
    map.addLayer({
        'id': 'places',
        'type': 'symbol',
        'source': 'places',
        'layout': {
            'icon-image': 'custom-marker',
            'icon-overlap': 'always'
        }
    });

    // Create a popup, but don't add it to the map yet.
    const popup = new maplibregl.Popup({
        closeButton: false,
        closeOnClick: false
    });

    map.on('mouseenter', 'places', (e) => {
        // Change the cursor style as a UI indicator.
        map.getCanvas().style.cursor = 'pointer';

        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.description;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        // Populate the popup and set its coordinates
        // based on the feature found.
        popup.setLngLat(coordinates).setHTML(description).addTo(map);
    });

    map.on('mouseleave', 'places', () => {
        map.getCanvas().style.cursor = '';
       //popup.remove(); 
    });
});