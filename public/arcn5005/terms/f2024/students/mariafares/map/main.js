const map = new maplibregl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/74a53f5f-87f8-4476-8bc8-3125688f5b36/style.json?key=kqBHe9UNTz8B0hojQqKP',
    center: [-78.01435878026419, 43.63888902089662,],
    
    zoom: 7
});

map.on('load', async () => {
    const image = await map.loadImage('starrr.png');
    // Add an image to use as a custom marker
    map.addImage('starrr.png', image.data);

    map.addSource('places', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong> Joseph Brant Hospital, Burlington</strong><p> In video games, we call this the spawning point.</p>'+
                            '<img src="./PLACES/1JB.png" style="width: 100%; height: auto;"/>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-79.80216895581788, 43.31673728479727]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Jacksons Square Farmers Market</strong><p> This place has many unique vendors. My mom used to shop here when I was little, I dont remember at all but It holds a special place in mt heart.</p>'+
                            '<img src="./PLACES/02 JK.jpg" style="width: 100%; height: auto;"/>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-79.87010221220656, 43.25907061509756]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong> Tansley Woods, Burlington</strong><p> In a time before ipad kids existed, most of my spare time in the summers were spent in this rec centre swimming or trying to read as many books as possible.</p>'+
                            '<img src="./PLACES/03 TW.jpg" style="width: 100%; height: auto;"/>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-79.80076891044253, 43.38211648823582]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Binbrook Fair Grounds</strong><p> Every September my little town of Binbrook holds a fair, my favourite part is the car derby, beat up cars basically play bumper cars till one is left standiing.</p>'+
                            '<img src="./PLACES/04 bf.jpg" style="width: 100%; height: auto;"/>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-79.8039542665564, 43.122766023257824]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong> St. Mary & St Athanasius Coptic Orthodox Church</strong><p> The design of this church is WILD, I think it subconsciously fuled my interest for architecture.</p>'+
                            '<img src="./PLACES/05 sm.jpg" style="width: 100%; height: auto;"/>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-79.68340184410881, 43.580319323207206]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Stacked Pancakes</strong><p> Ironically, this pancake house has THE best waffles ever.</p>'+
                            '<img src="./PLACES/06 ST.jpg" style="width: 100%; height: auto;"/>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-79.78513935889055, 43.17437491144715]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>St. Mina Hamilton</strong><p> This Church is my home base, headquaters so to speak, I have grown up with this community since birth and I love them to pieces.</p>'+
                            '<img src="./PLACES/07 smpk.jpg" style="width: 100%; height: auto;"/>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-79.82426092043059, 43.185505722455595]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>St Moses and St. Katherine</strong><p>This little church community kept me grounded when I moved to Toronto for University, it has the most beatiful iconagraphy</p>'+
                            '<img src="./PLACES/08 smsk.jpg" style="width: 100%; height: auto;"/>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-79.40819439951284,43.65817275758742]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Daniels Faculty of Architecture Landscape and Design</strong><p> Here I graduated with Bachelor of Arts in Architecture with a Minor in Visual Studies. I learned how to live on my own and had a blast living in the city.</p>'+
                            '<img src="./PLACES/09 da.jpg" style="width: 100%; height: auto;"/>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-79.40061171081678,43.65976657980193]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Azreli School of Architecture and Urban Design</strong><p> Moving from my family to pursue a Master in Architecture is equally THE scariest and most unexpected thing I have ever done in my life. So far its worth it.</p>'+
                            '<img src="./PLACES/11 az.jpg" style="width: 100%; height: auto;"/>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-75.69749731846943,45.38420521663571 ]
                    }
                },
                 {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>St. Marys Coptic Orthodox Church</strong><p> Yup, another church to keep me grounded, this one happens to be the first Coptic church in Ottawa.</p>'+
                            '<img src="./PLACES/10 smm.JPG" style="width: 100%; height: auto;"/>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-75.78236336403648,45.33017448244684 ]
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
            'icon-image': 'starrr.png',
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