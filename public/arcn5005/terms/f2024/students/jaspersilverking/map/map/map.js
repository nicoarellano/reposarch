const map = new maplibregl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/backdrop/style.json?key=HMd6lwnNoAcHwhzjz7aB',
    center: [-74.33457, 45.26192], // Midpoint of Ottawa and Montreal
    zoom: 8
});

map.on('load', () => {
    
    const routeCoordinates = [
        [-75.6972, 45.4215], // Ottawa
        [-75.5788, 45.4561], // 2
        [-75.4596, 45.5136], // 3
        [-75.3076, 45.5334], // 4
        [-75.0528, 45.5590], // 5
        [-74.8604, 45.5641], // 6
        [-74.6804, 45.6133], // 7
        [-74.3862, 45.5373], // 8
        [-74.3092, 45.4882], // 9
        [-74.1470, 45.4363], // 10
        [-74.0201, 45.4157], // 11
        [-73.7981, 45.4774], // 12
        [-73.5673, 45.5017]  // Montreal (end)
    ];

    map.addControl(new maplibregl.NavigationControl(), 'top-left');


    // Add the route (line) source and layer
    map.addSource('route', {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
                'type': 'LineString',
                'coordinates': routeCoordinates
            }
        }
    });



    map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': 'orange',
            'line-width': 4,
            'line-opacity': 0.9,  
           
        }
    });
    

    // Add circles at the start and end points (Ottawa and Montreal)
    const points = [
        { longitude: -75.6972, latitude: 45.4215, description: 'Start: Ottawa' },  // Ottawa
        { longitude: -73.5673, latitude: 45.5017, description: 'End: Montreal' }  // Montreal
    ];

    map.addSource('points', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': points.map(point => ({
                'type': 'Feature',
                'geometry': {
                    'type': 'Point',
                    'coordinates': [point.longitude, point.latitude]
                },
                'properties': {
                    'description': point.description
                }
            }))
        }
    });

    map.addLayer({
        'id': 'start-end-circles',
        'type': 'circle',
        'source': 'points',
        'paint': {
            'circle-radius': 8,
            'circle-color': ['match', ['get', 'description'],
                'Start: Ottawa', '#ff0000',  
                'End: Montreal', '#00ff00',  
                '#0000ff'  
            ],
            'circle-opacity': 0.7
        }
    });


    const carIconUrl = 'https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/vhs/Mazda-RX-7_0.png'; 

    const animatedPoint = new maplibregl.Marker({
        element: createCarIcon()  // Use a custom element for the car icon
    })
        .setLngLat(routeCoordinates[0]) // Start at the first coordinate (Ottawa)
        .addTo(map);

    let progress = 0;  
    let direction = 1;  

    function createCarIcon() {
        
        const img = document.createElement('img');
        img.src = carIconUrl;  
        img.style.width = '60px';  
        img.style.height = '40px'; 
        img.style.transform = 'translate(-50%, -50%)'; 
        return img;
    }

    let lastTimestamp = null;

function animatePoint(timestamp) {
    if (!lastTimestamp) {
        lastTimestamp = timestamp;
    }
    const deltaTime = timestamp - lastTimestamp;  
    const speed = 0.0002 * deltaTime; 

    
    progress += direction * speed;
    
    

    if (progress >= 1 || progress <= 0) {
        
    }

    lastTimestamp = timestamp;
    requestAnimationFrame(animatePoint);
}



// Start animating the point
requestAnimationFrame(animatePoint);


    function animatePoint() {
        // Calculate the current position along the path
        const index = Math.floor(progress * (routeCoordinates.length - 1));
        const nextIndex = Math.min(index + 1, routeCoordinates.length - 1);
        const start = routeCoordinates[index];
        const end = routeCoordinates[nextIndex];

        // Interpolate between the two points
        const ratio = (progress * (routeCoordinates.length - 1)) % 1; 
        const lng = start[0] + ratio * (end[0] - start[0]);
        const lat = start[1] + ratio * (end[1] - start[1]);

        // Update the marker position
        animatedPoint.setLngLat([lng, lat]);

        // Update the progress based on direction
        progress += direction * 0.002;  

        
        if (progress >= 1) {
            progress = 1;  
            direction = -1;  
        } else if (progress <= 0) {
            progress = 0;  
            direction = 1;  
        }

        // Continue the animation
        requestAnimationFrame(animatePoint);
    }

    // Start animating the point
    animatePoint();

    
});