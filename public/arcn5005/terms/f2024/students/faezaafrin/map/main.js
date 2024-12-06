const map = new maplibregl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/849afe2a-9206-49d6-be07-fc68e8349821/style.json?key=8erYSCo3xAjhGxQ1RN3x',
    center: [-75.702358, 45.416855], 
    zoom: 11
});

const size = 100;
const pulsingDot = {
    width: size,
    height: size,
    data: new Uint8Array(size * size * 4),

    onAdd() {
        const canvas = document.createElement('canvas');
        canvas.width = this.width;
        canvas.height = this.height;
        this.context = canvas.getContext('2d');
    },

    render() {
        const duration = 1000;
        const t = (performance.now() % duration) / duration;

        const radius = (size / 2) * 0.3;
        const outerRadius = (size / 2) * 0.7 * t + radius;
        const context = this.context;

        context.clearRect(0, 0, this.width, this.height);
        context.beginPath();
        context.arc(this.width / 2, this.height / 2, outerRadius, 0, Math.PI * 2);
        context.fillStyle = `rgba(255, 200, 200,${1 - t})`;
        context.fill();

        context.beginPath();
        context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
        context.fillStyle = 'rgba(131,252,244, 1)';
        context.strokeStyle = 'white';
        context.lineWidth = 2 + 4 * (1 - t);
        context.fill();
        context.stroke();

        this.data = context.getImageData(0, 0, this.width, this.height).data;

        map.triggerRepaint();

        return true;
    }
};

map.on('load', () => {
    map.addImage('pulsing-dot', pulsingDot, { pixelRatio: 2 });

    // Multiple points with different coordinates
    map.addSource('points', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-75.69631466431616, 45.416430178931904]  // J:Unique Kitchen
                    },
                    'properties': {
                        'description': '<strong>J:Unique</strong><p>Cuisine: Japanese</p>',                        
                        'image': '.Photos/junique.jpg'
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-75.71197820905545, 45.40436245774458] // Dreamland Cafe
                        
                    },
                    'properties': {
                        'description': '<strong>Dreamland Cafe</strong><p>Cuisine: Italian</p>',                        
                        'image': '.Photos/dreamland.jpg'
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-75.69183061743028, 45.419330085674545] // Raphaël Peruvian Cuisine
                    },
                    'properties': {
                        'description': '<strong>Raphaël</strong><p>Cuisine: Peruvian</p>',                        
                        'image': '.Photos/raphael.jpg'
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-75.72371833622066, 45.40498397371746] // Suzy Q Donuts 
                    },
                    'properties': {
                        'description': '<strong>SuzyQ Donuts</strong><p>Cuisine: Dessert</p>',                        
                        'image': '.Photos/suzyq.jpg'
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-75.6956264874507, 45.41584571336555] // Trofi
                    },
                    'properties': {
                        'description': '<strong>Trofí</strong><p>Cuisine: Greek</p>',                        
                        'image': '.Photos/trofi.jpg'
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-75.88935649071486, 45.29861149577693] // Tirweka
                    },
                    'properties': {
                        'description': '<strong>Tirweka</strong><p>Cuisine: Middle Eastern</p>',                        
                        'image': '.Photos/tirweka.jpg'
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-75.69409819288798, 45.42743496169448] // Restaurant e18teen
                    },
                    'properties': {
                        'description': '<strong>Restaurant E18teen</strong><p>Cuisine: French</p>',                        
                        'image': '.Photos/e18teen.jpg'
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-75.68491782092305, 45.400159732471536] // Delysées 
                    },
                    'properties': {
                        'description': '<strong>Delysées</strong><p>Cuisine: Dessert</p>',                        
                        'image': '.Photos/delysees.jpg'
                    }                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-75.73253116363873, 45.40102090711343] // The Momo Spot
                    },
                    'properties': {
                        'description': '<strong>The Momo Spot</strong><p>Cuisine: Nepalese</p>',                        
                        'image': '.Photos/momo.jpg'
                    }                       
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-75.63810831907458, 45.4224798502152] // Fuwa Fuwa
                    },
                    'properties': {
                        'description': '<strong>Fuwa Fuwa</strong><p>Cuisine: Dessert</p>',                        
                        'image': '.Photos/fuwa.jpg'
                    }                        
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-75.90836776993031, 45.31030644167268] // Karahi Point
                    },
                    'properties': {
                        'description': '<strong>Karahi Point</strong><p>Cuisine: Pakistani</p>',                        
                        'image': '.Photos/karahi.jpg'
                    }                        
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-75.67041366917215, 45.38107913872307] // Pelican Seafood Market & Grill
                    },
                    'properties': {
                        'description': '<strong>Pelican Seafood Market & Grill</strong><p>Cuisine: Seafood</p>',                        
                        'image': '.Photos/pelican.jpg'
                    }                        
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-75.65184878907013, 45.45022508381517] // Idriss Mediterranean
                    },
                    'properties': {
                        'description': '<strong>Idriss Mediterranean</strong><p>Cuisine: Algerian</p>',                        
                        'image': '.Photos/idriss.jpg'
                    }                        
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-75.6940096716784, 45.428789059466446] // Lil Z's Pizza
                    },
                    'properties': {
                        'description': '<strong>Delysées</strong><p>Cuisine: Neopolitan/New York Fusion</p>',                        
                        'image': '.Photos/lilz.jpg'
                    }                        
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-75.6951142728929, 45.42038350093722] // Cocotte Bistro
                    },
                    'properties': {
                        'description': '<strong>Cocotte Bistro</strong><p>Cuisine: French</p>',                        
                        'image': '.Photos/cocotte.jpg'
                    }                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-75.7128053193044, 45.40580824360966] // Pasticceria Gelateria Italiana
                    },
                    'properties': {
                        'description': '<strong>Pasticceria Gelateria Italiana</strong><p>Cuisine: Dessert</p>',                        
                        'image': '.Photos/pasticceria.jpg'
                    }                    
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-75.73521007815471, 45.3530076831029] // Dao Cafe
                    },
                    'properties': {
                        'description': '<strong>Dao Café</strong><p>Cuisine: Dessert</p>',                        
                        'image': '.Photos/dao.jpg'
                    }                     
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-75.93537265100778, 45.35778437606387] // Allô mon Coco
                    },
                    'properties': {
                        'description': '<strong>Allô mon Coco</strong><p>Cuisine: Brunch</p>',                        
                        'image': '.Photos/allomoncoco.jpg'
                    }                     
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-75.51723726100188, 45.44999126079005] // Caravela
                    },
                    'properties': {
                        'description': '<strong>Caravela Restaurante</strong><p>Cuisine: Portuguese</p>',                        
                        'image': '.Photos/carvela.jpg'
                    }  
                                      
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-75.66698496672649, 45.37694432160024] // Alhalabi
                    },
                    'properties': {
                        'description': '<strong>Alhalabi</strong><p>Cuisine: Syrian</p>',                        
                        'image': '.Photos/alhalabi.jpg'
                    }                  
                }
            ]
        }
    });

    // Add layer to display points (each with pulsing dot)
    map.addLayer({
        'id': 'points',
        'type': 'symbol',
        'source': 'points',
        'layout': {
            'icon-image': 'pulsing-dot',
            'icon-allow-overlap': true, // Ensure icons overlap if needed
        }
    });

    map.on('click', 'points', (e) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.description;
        const image = e.features[0].properties.image;
    
        // Define the popup content
        const popupContent = `
            <div class="custom-popup">
                <img src="${image}" alt="Image" />
                <p>${description}</p>
            </div>
        `;
    
        // Create and add the popup
        new maplibregl.Popup({ closeOnClick: true, offset: 5 })
            .setLngLat(coordinates)
            .setHTML(popupContent)
            .addTo(map);
    
        // Slide the camera to center on the clicked dot
        map.flyTo({
            center: coordinates,
            zoom: 14, 
            speed: 0.25, 
            curve: 1.0, 
            essential: true 
        });
    });
});