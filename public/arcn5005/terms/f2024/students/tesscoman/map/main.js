const map = new maplibregl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/7956a6e0-863a-4a79-8da5-4875b9e62109/style.json?key=LNyBxuKgHvbjegAONO4N',
    center: [-92.39801700051551, 52.57241840824311],
    zoom: 3.3
});

map.on('load', async () => {
    const image = await map.loadImage('../images/mappointer.png');

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
                            '<strong>Fundy National Park</strong> <p><em>New Brunswick</em></p> <img src="../images/fundy.jpg" alt="Fundy National Park" style="width:100%; height:auto;"> <p>Fundy National Park was recently designated as a Dark-Sky Preserve. In the past year, the park saved 69% of energy via reduction in light pollution.</p>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-65.032, 45.614]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Kouchibouguac National Park</strong><p><em>New Brunswick</em></p> <img src="../images/kouch.jpg" alt="National Park image" style="width:100%; height:auto;"><p>Kouchibouguac National Park Dark-sky Preserve is a great spot for stargazing, but it also benefits local nocturnal ecology including birds, bats and insects.</p>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-64.966, 46.830]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Kejimkujik National Park and National Historic Site</strong><p><em>Nova Scotia</em></p> <img src="../images/keji.jpg" alt="National Park image" style="width:100%; height:auto;"><p>At Kejimkujik National Park, you can stargaze and learn how stars have inspired centuries of story, song, and legend.</p>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-65.214, 44.435]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Terra Nova National Park</strong><p><em>Newfoundland & Labrador</em></p> <img src="../images/terra.jpg" alt="National Park image" style="width:100%; height:auto;"><p>Terra Nova was designated as a Dark Sky Preserve in 2018, and continues to retrofit light fixtures to reduce energy, protect ecology, and provide atronomy education.</p>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-53.966, 48.525]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Point Pelee National Park</strong><p><em>Ontario</em></p> <img src="../images/pelee.jpg" alt="National Park image" style="width:100%; height:auto;"><p>At Point Pelee, there are focused efforts to educate visitors about the ecological and cultural importance of preserving the night sky.</p>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-82.517, 41.954]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Bruce Peninsula National Park</strong><p><em>Ontario</em></p> <img src="../images/bruce.jpg" alt="National Park image" style="width:100%; height:auto;"><p>This park is in the traditional territory of the Saugeen Ojibway Nation. The Bruce trail runs through it - a world famous hiking trail known for cliffs, orchids, ferns and black bears.</p>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-81.531, 45.220]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Fathom Five National Marine Park</strong><p><em>Ontario</em></p> <img src="../images/five.jpg" alt="National Park image" style="width:100%; height:auto;"><p>This site is the traditional territory of the Saugeen Ojibway Nation. The Dark Sky preserve sees sparkling blue water during the day, and dark quiet waves at night. </p>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-81.656, 45.257]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Fort Walsh National Historic Site</strong><p><em>Saskatchewan</em></p> <img src="../images/walsh.jpg" alt="National Park image" style="width:100%; height:auto;"><p>This site is part of the Cypress Dark Sky Preserve, and is also a National Historic Site that tells the story of settlers impact on the Nakoda people since the 1800s. </p>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-109.882, 49.573]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Grasslands National Park</strong><p><em>Saskatchewan</em></p> <img src="../images/grasslands.jpg" alt="National Park image" style="width:100%; height:auto;"><p>This park works with both dark sky organizations and the local community to limit light pollution and protect the views of the night sky. </p>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-107.446, 49.131]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Elk Island National Park</strong><p><em>Alberta</em></p> <img src="../images/elk.jpg" alt="National Park image" style="width:100%; height:auto;"><p> This site is part of the Beaver Hills Dark Sky Preserve. Experience seasonal meteor showers and northern lights!</p>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-112.864, 53.603]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Jasper National Park</strong><p><em>Alberta</em></p> <img src="../images/jasper.jpg" alt="National Park image" style="width:100%; height:auto;"><p>Visit this park in October for the Annual Jasper Dark Sky Festival. Encompassing over 11,000 km2, Jasper National Park is the second largest dark sky preserve in the world!  </p>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-117.954, 52.874]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Waterton-Glacier International Peace Park</strong><p><em>Alberta</em></p> <img src="../images/waterton.jpg" alt="National Park image" style="width:100%; height:auto;"><p>Craters and mountains on the surface of the moon can been easily seen at a dark sky preserve of this size.</p>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-113.906, 49.054]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Wood Buffalo National Park</strong><p><em>Northwest Territories</em></p> <img src="../images/wood.jpg" alt="National Park image" style="width:100%; height:auto;"><p>This spot is unique for stargazing because there is a good chance of seeing the northern lights too. It is the largest protected dark sky on Earth!</p>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-114.239, 60.096]
                    }
                }
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
        popup.remove();
    });
});