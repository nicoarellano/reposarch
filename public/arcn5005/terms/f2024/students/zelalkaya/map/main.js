const map = L.map('map').setView([45.503477, -73.587048], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

const marker = L.marker([45.5017, -73.5673]).addTo(map);
marker.bindPopup("<b>Welcome to Montreal!</b>").openPopup();

map.on('click', function(e) {
    const popup = L.popup()
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
});

const info = L.control();
info.onAdd = function(map) {
    this._div = L.DomUtil.create('div', 'info-panel');
    this._div.innerHTML = '<h4>Click anywhere on the map to see coordinates</h4>';
    return this._div;
};
info.addTo(map);