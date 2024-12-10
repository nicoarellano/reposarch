
    const map = new maplibregl.Map({
        container: 'map',
        style: 'https://api.maptiler.com/maps/deb4d5c6-6dda-4b1f-b113-6ea3f79f76ad/style.json?key=B7Tfa6reQu1yt03Mspzx',
        center: [-95, 45],
        zoom: 4.3
    });


    map.on('load', async () => {
        const image = await map.loadImage("./Thumbnail/bigbluestem.png");
        map.addImage('custom-marker', image.data, { pixelRatio: 27 });

        map.addSource('places', {
            'type': 'geojson',
            'data': {
                'type': 'FeatureCollection',
                'features': [
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>LIVING PRAIRIE MUSEUM</strong><p>[Winnipeg, MB]</p><p>The City of St. James-Assiniboia set aside 26.5 acres of virgin land untouched by urban development in Assiniboia, Manitoba, a suburb of Winnipeg to create the Living Prairie Museum in 1970.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [-97.27249964516791, 49.8880544382085]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>TALLGRASS PRAIRIE PRESERVE</strong><p>[Tolstoi, MB]</p><p>Over 2,000 hectares of tall-grass prairies are protected within this preserve near Tolstoi and Gardenton. It is home to over 150 plant species and is accessible year-round for hiking and walking with a 1.6 km self-guiding interpretive trail.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [-96.8083003856832, 49.074630572430976]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>TALLGRASS PRAIRIE HERITAGE PARK</strong><p>[Windsor, ON]</p><p>Adjacent to Ojibway Prairie Provincial Nature Reserve is Tallgrass Prairie Heritage Park, created in 1990 as a cooperative natural heritage protection project of the Carolinian Canada Program.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [-83.06719318640853, 42.26514669294023]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>ALDERVILLE FIRST NATION BLACK OAK SAVANNA</strong><p>[Roseneath, ON]</p><p>Located on Alderville First Nation, the Alderville Black Oak Savanna is the largest intact tract of native grassland in Central Ontario.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [-78.08727514236303, 44.177086715062764]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>JOSEPH H. WILLIAMS TALLGRASS PRAIRIE PRESERVE</strong><p>[Pawhuska, OK]</p><p>The Joseph H. Williams Tallgrass Prairie Preserve at 39,650 acres is the largest protected piece of tallgrass prairie left on earth. Since 1989, The Nature Conservancy in Oklahoma has worked to restore this fully functioning portion of the tallgrass prairie ecosystem with the use of 2,500 free-ranging bison and a “patch-burn” model approach to prescribed burning.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [-96.4229347288358, 36.84631042168485]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>TALLGRASS PRAIRIE NATIONAL PRESERVE</strong><p>[Chase County, KS]</p><p>Tallgrass Prairie National Preserve is a United States National Preserve located in the Flint Hills region of Kansas, north of Strong City. There are over 40 miles (64 km) of maintained hiking trails in the preserve allowing visitors access to the tallgrass prairie. During the summer, narrated bus tours of the prairie are offered.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [-96.55714358805163, 38.43238822410288]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>MIDEWIN NATIONAL TALLGRASS PRAIRIE</strong><p>[Wilmington, IL]</p><p>The first national tallgrass prairie ever designated in the United States and the largest conservation site in the Chicago Wilderness region, it is located on the site of the former Joliet Army Ammunition Plant between the towns of Elwood, Manhattan and Wilmington in northeastern Illinois. Since 2015, it has hosted a conservation herd of American bison to study their interaction with prairie restoration and conservation.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [-88.1319216051229, 41.34281693417472]
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
            popup.remove();
        });
    });