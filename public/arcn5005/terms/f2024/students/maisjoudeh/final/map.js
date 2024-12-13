const map = new maplibregl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/470d6019-657f-4f7d-a018-6ec6ae0d0093/style.json?key=4xF6FrxAyNgBUQ4n4bUN',
    center: [-75.67950422374716, 45.39769113511524],
    zoom: 0.2
});
const cafeData = [
    { 
        name: 'AlAktham', 
        coords: [35.7263, 32.0343], 
        continent: 'Asia',
        image: 'aktham.jpg', 
        description: 'Located in a historic building in Al Salt, Jordan, known for its unique Ottoman-era architecture.'
    },
    { 
        name: 'Cafe Florian', 
        coords: [12.3375, 45.4343], 
        continent: 'Europe',
        image: 'florian.jpg', 
        description: 'One of the oldest coffee houses in the world, established in 1720, located in Piazza San Marco, Venice.'
    },
    { 
        name: 'The Queen Victoria Building Café', 
        coords: [151.2111, -33.8698], 
        continent: 'Australia',
        image: 'victoria.jpg', 
        description: 'Located inside the Queen Victoria Building, a heritage-listed structure built in 1898, showcasing Romanesque architecture in the heart of Sydney.'
    },
    { 
        name: 'Café Tasse', 
        coords: [31.2357, 30.0444], 
        continent: 'Africa',
        image: 'cafetasse.jpg', 
        description: 'Situated in a historic building near Tahrir Square, this café offers a blend of traditional Egyptian coffee in a setting with French and Ottoman architectural influences.'
    },
    { 
        name: 'Victoria & Alfred Waterfront Café ', 
        coords: [18.4232, -33.9007], 
        continent: 'Africa',
        image: 'alfred.jpg', 
        description: 'Located in the historic Victoria & Alfred Waterfront area in Cape Town, which dates back to the late 19th century, offering stunning views of Table Mountain.'
    },
    { 
        name: 'Café Central', 
        coords: [16.3669, 48.2100], 
        continent: 'Europe',
        image: 'central.jpg', 
        description: 'A historic coffee house in Vienna, Austria, frequented by notable figures such as Sigmund Freud.'
    },
    { 
        name: 'Café de la Paix', 
        coords: [2.3310, 48.8709], 
        continent: 'Europe',
        image: 'cafedelapaix.jpg', 
        description: 'Located in Paris, France, this café is housed in a heritage building near the Palais Garnier.'
    },
    { 
        name: 'Blue Bottle Coffee Kiyosumi', 
        coords: [139.7976, 35.6822], 
        continent: 'Asia',
        image: 'bluebottle.jpg', 
        description: 'Located in a historic warehouse in Tokyo, Japan, combining traditional architecture with modern design.'
    },
    { 
        name: 'Tim Wendelboe', 
        coords: [10.7528, 59.9270], 
        continent: 'Europe',
        image: 'tim.jpg', 
        description: 'A coffee shop in Oslo, Norway, housed in a building with significant local architectural value.'
    },
    { 
        name: 'Coffee Collective Godthåbsvej', 
        coords: [12.5271, 55.6866], 
        continent: 'Europe',
        image: 'collective.jpg', 
        description: 'Located in Copenhagen, Denmark, in a historic building reflecting classic Scandinavian architecture.'
    },
    { 
        name: 'Café Tortoni', 
        coords: [-58.3816, -34.6099], 
        continent: 'South America',
        image: 'tortoni.jpg', 
        description: 'A historic coffee house in Buenos Aires, Argentina, established in 1858, known for its Art Nouveau design.'
    },
    { 
        name: 'The Warming Hut Café', 
        coords: [-122.4760, 37.8078], 
        continent: 'North America',
        image: 'hut.jpg', 
        description: 'Situated in a historic military building near the Golden Gate Bridge in San Francisco, California.'
    },
    { 
        name: 'La Biela', 
        coords: [-58.3916, -34.5885], 
        continent: 'South America',
        image: 'biela.jpg', 
        description: 'Located in Recoleta, Buenos Aires, Argentina, in a historic building surrounded by cultural landmarks.'
    },
    { 
        name: 'Caffè Gambrinus', 
        coords: [14.2492, 40.8376], 
        continent: 'Europe',
        image: 'gambrinus.jpg', 
        description: 'A historic café in Naples, Italy, established in the 19th century, featuring stunning frescoes and chandeliers.'
    }
];


map.on('load', () => {
   
    map.loadImage(
        'bean.png',
        (error, image) => {
            if (error) throw error;

            map.addImage('cafe-marker', image);

            function addCafeMarkers(filteredData) {
                const cafeFeatures = filteredData.map((cafe) => ({
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: cafe.coords
                    },
                    properties: {
                        Shop: cafe.name,
                        Image: cafe.image, 
                        Description: cafe.description
                    }
                }));

                if (map.getSource('Cafes')) {
                    map.removeLayer('cafe-markers');
                    map.removeSource('Cafes');
                }

                map.addSource('Cafes', {
                    type: 'geojson',
                    data: {
                        type: 'FeatureCollection',
                        features: cafeFeatures
                    }
                });

                map.addLayer({
                    id: 'cafe-markers',
                    type: 'symbol',
                    source: 'Cafes',
                    layout: {
                        'icon-image': 'cafe-marker',
                        'icon-size': 0.5,
                        'text-field': ['get', 'Shop'],
                        'text-font': ['Open Sans Bold'],
                        'text-offset': [0, 0.7],
                        'text-anchor': 'top'
                    },
                    paint: {
                        'text-color': '#6F4F37'
                    }
                });
            }
            addCafeMarkers(cafeData);
            const nav = new maplibregl.NavigationControl();
            map.addControl(nav, 'bottom-right');
            document.getElementById('continent-filter').addEventListener('change', (e) => {
                const selectedContinent = e.target.value;
                const filteredCafes = cafeData.filter(cafe => 
                    selectedContinent === 'All' || cafe.continent === selectedContinent
                );
                addCafeMarkers(filteredCafes); 
            });
     
            map.on('click', 'cafe-markers', (e) => {
                const cafe = e.features[0].properties;
                new maplibregl.Popup()
                    .setLngLat(e.lngLat)
                    .setHTML(`
                        <div class="popup-title">${cafe.Shop}</div>
                        <div class="popup-description">${cafe.Description}</div>
                        <img class="popup-image" src="${cafe.Image}" alt="Cafe image">
                    `)
                    .addTo(map);
            });
        }
    );
});
