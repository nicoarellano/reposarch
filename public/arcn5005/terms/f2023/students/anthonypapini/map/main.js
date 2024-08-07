mapboxgl.accessToken = 'pk.eyJ1IjoiYXBhcDE5IiwiYSI6ImNscHVqYW9pODBsbHgya3A5OXkwNzF1ZHUifQ.ff_LW487F2AmIYFYA0DlFA';

const map = new mapboxgl.Map({
    container: 'map',
    center: [-75.697193, 45.421530],
    zoom: 11,
    style: 'mapbox://styles/mapbox/streets-v11'
});

const fireStations = [
    { coords: [-75.74847539175906, 45.27783245864923], color: '#FF0000', name: 'Fire Hall 44' },
    { coords: [-75.75983386950179, 45.332743904812], color: '#FFA500', name: 'Nepean Fire and Emergency Services' },
    { coords: [-75.72206837099154, 45.34842960355928], color: '#FFFF00', name: 'Fire Hall 24' },
    { coords: [-75.76395374206653, 45.35711519759712], color: '#008000', name: 'Fire Hall 21' },
    { coords: [-75.78901630016881, 45.36676429426765], color: '#0000FF', name: 'Fire Hall 22' },
    { coords: [-75.74198108838785, 45.387745397423586], color: '#4B0082', name: 'Fire Hall 23' },
    { coords: [-75.66851002764973, 45.35301383318781], color: '#EE82EE', name: 'Fire Hall 33' },
    { coords: [-75.69082600404215, 45.37689407464371], color: '#FFC0CB', name: 'Fire Hall 34' },
    { coords: [-75.62400755911807, 45.372949194471616], color: '#A52A2A', name: 'Fire Hall 31' },
    { coords: [-75.66191637084592, 45.38358393182082], color: '#D2691E', name: 'Fire Hall 35' },
    { coords: [-75.60114767043413, 45.4160857007055], color: '#FF4500', name: 'Fire Hall 36' },
    { coords: [-75.6538477091689, 45.422833198283904], color: '#2E8B57', name: 'Fire Hall 56' },
    { coords: [-75.68268681831367, 45.403914068230335], color: '#1E90FF', name: 'Fire Hall 12' },
    { coords: [-75.71324254109801, 45.40921688402337], color: '#FFD700', name: 'Fire Hall 11' },
    { coords: [-75.68333755159276, 45.42698007944572], color: '#BC8F8F', name: 'Fire Hall 13' },
    { coords: [-75.67020005720238, 45.445576234392156], color: '#4169E1', name: 'Fire Hall 57' },
    { coords: [-75.62897550583948, 45.447324275675165], color: '#8B4513', name: 'Fire Hall 51' }
];

map.on('load', () => {
    fireStations.forEach(station => {
        
        const el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundColor = station.color;
        el.style.width = '20px';
        el.style.height = '20px';
        el.style.borderRadius = '50%';
        el.style.border = '2px solid white';

        // Add the marker to the map
        new mapboxgl.Marker(el)
            .setLngLat(station.coords)
            .addTo(map);
    });

    
    const legendEl = document.getElementById('legend');
    fireStations.forEach(station => {
        const item = document.createElement('div');
        item.style.display = 'flex';
        item.style.alignItems = 'center';
        item.style.marginBottom = '5px';

        const colorSwatch = document.createElement('div');
        colorSwatch.style.backgroundColor = station.color;
        colorSwatch.style.width = '24px';
        colorSwatch.style.height = '24px';
        colorSwatch.style.borderRadius = '50%';
        colorSwatch.style.marginRight = '10px';

        const stationName = document.createTextNode(station.name);

        item.appendChild(colorSwatch);
        item.appendChild(stationName);
        legendEl.appendChild(item);
    });
});
