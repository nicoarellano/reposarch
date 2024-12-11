const map = new maplibregl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/2d5301ff-8c1b-42cd-ba85-b75f430968aa/style.json?key=9rjyXAz4R6YbFE1fPEDk',
    center: [-79.43960930642513, 43.6742809917925],
    zoom: 12.2
});

map.on('load', async () => {
    const image = await map.loadImage('drumicon.png'); 
    // Add an image to use as a custom marker
    map.addImage('custom-marker', image.data);

    map.addSource('places', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                //SECTION FOR MARKER //<strong>VENUE NAME</strong><p>VENUE TYPE<br>CAPACITY<br>DESCRIPTION</p><video src="clip1.mp4" autoplay width=250px>
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>The Baby G</strong><p>- 1608 Dundas St W, Toronto, ON M6K 1T8<br>- Description: The Baby G is owned by Shaun Bowring - the same guy behind  The Garrison  and former booker at  Sneaky Dees . Smaller than The Garrison, it kind of feels like the size<br>- Venue Type & Capacity: Club/Bar 150 people</p><video src="babyg.mov" autoplay width=250px>' 
                            
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-79.43553234870713, 43.65059303558744]
                    }
                },

                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Bovine Sex Club</strong><p>- 542 Queen St W, Toronto, ON M5V 2B5<br>- Description: The Bovine Sex Club is a bar on Torontos Queen Street West strip. In operation since January 1991, the Bovine Sex Club often shortened to the Bovine has at various times found itself at the forefront of Torontos rock, punk, alternative, and rockabilly music scenes.<br>- Venue Type & Capacity: Bar 100 people</p><video src="Bovinesexclub.mov" autoplay width=250px>' 
                            
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-79.40274098756167, 43.647679087801286]
                    }
                },

                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Junction underground</strong><p>- 2907 Dundas St W, Toronto, ON M6P 1Z1<br>- Description: Junction Underground is a local entertainment and events venue in Toronto, Ontario that hosts a variety of events including live music, DJ sets, comedy and drag shows, and parties for kids<br>- Venue Type & Capacity: Club/Bar 150 people</p><video src="Junctionunderground.mov" autoplay width=250px>' 
                            
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [ -79.46624524708189, 43.66533295386738]
                    }
                },

                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>The Dock Ellis</strong><p>- 1280 Dundas St W, Toronto, ON M6J 1X7 <br>- Description: The Dock Ellis Sports Bar providing the finest in sports viewing, food and libations. <br>- Venue Type & Capacity: Club/Bar 100 people</p><video src="Docellis.mov" autoplay width=250px>' 
                            
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [ -79.42536649878156, 43.6499883249943]
                    }
                },

                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong> Duffys Tavern </strong><p>- 1238 Bloor St W, Toronto, ON M6H 1N3 <br>-Description: Duffys Tavern is located in the heart of Bloordale in the west of Toronto. Were one of the oldest bars in the city and have been the one constant in the ever changing Bloordale neighbourhood, having faithfully served our regulars since 1949. Anyone whos ever walked west of Dufferin on Bloor knows Bloordale.<br>- Venue Type & Capacity: Bar/Patio 100 people</p><video src="Duffys.mov" autoplay width=250px>' 
                            
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [ -79.43974474893187, 43.659374188802715]
                    }
                },

                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Sneaky Dees </strong><p>- 431 College St, Toronto, ON M5T 1T1 <br>- Description: Sneaky Dees is a concert venue and Tex-Mex restaurant in Toronto, Ontario, Canada. Originally opened in 1987 on the north west corner of Bloor Street and Bathurst, it moved to its present location at College and Bathurst in 1990. <br>- Venue Type & Capacity: Club/Bar 300 people</p><video src="Sneakydees.mov" autoplay width=250px>' 
                            
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-79.4074646182467, 43.65639814038028]
                    }
                },

                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>The Smiling Buddha</strong><p>- 961 College St, Toronto, ON M6H 1A6<br>- Description: Self-proclaimed dive bar & event venue hosting live metal punk & hardcore music, plus comedy shows.<br>- Venue Type & Capacity:  Small Dive Bar 75 people</p><video src="Smilingbuddah.mov" autoplay width=250px>' 
                            
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-79.42705926127236, 43.653477905808224]
                    }
                },

                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Tail of the Junction </strong><p>- 3367 Dundas St W, York, ON M6S 2R9<br>- Description: Tail of the Junction is a lively dive bar and concert venue in Torontos Junction neighborhood. With its unique atmosphere and a variety of bands, this place is a must-see for music enthusiasts. Enjoy live performances and exciting drink deals at this popular spot for music lovers in the city.<br>- Venue Type & Capacity: Bar 100 people</p><video src="tailjunction1.mov" autoplay width=250px>' 
                            
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [ -79.4828096339373 , 43.66568596629212]
                    }
                },

                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Bar Orwell </strong><p>- 1595 Dundas St W, Toronto, ON M6K 1T9<br>- Description: A place for joy and community: live music, art, comedy, art markets, beers with friends, and whatever you care to book. We have an open room and open hearts.<br>- Venue Type & Capacity: Small Bar 50 people </p><video src="barorwell.mov" autoplay width=250px>' 
                            
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [ -79.43493661719285 , 43.649867811251575]
                    }
                },

                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong> Houndstooth </strong><p>- 818 College St, Toronto, ON M6G 1C8<br>- Description: A place to enjoy a beer and live music, comedy, and art.<br>- Venue Type & Capacity: Bar 100 people </p><video src="houndstooth.mov" autoplay width=250px>' 
                            
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-79.42202357069077 , 43.65480607027785]
                    }
                },
                
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong> Supermarket Bar and Variety </strong><p>- 268 Augusta Ave, Toronto, ON M5T 2L9<br>- Description: Casual restaurant & bar offering Asian small plates, plus late-night dancing & concerts.<br>- Venue Type & Capacity: Club/Bar 200 people </p><video src="Supermarket.mov" autoplay width=250px>' 
                            
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [ -79.40330564602854 , 43.65679011159397]
                    }
                },
                //SECTION FOR MARKER
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