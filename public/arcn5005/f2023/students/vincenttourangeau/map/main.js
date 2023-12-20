import { observatories } from "./Astro Observatories.js";

mapboxgl.accessToken = 'pk.eyJ1IjoidmluY2V0aGVwcmluY2UiLCJhIjoiY2xwdW1rY2lrMG0zczJqb2p0OWEzbHBnaSJ9.v3S-H2FHiB-087uX72BAwQ';
const map = new mapboxgl.Map({
container: 'map',
center: [0, 0],
zoom: 2,
style: 'mapbox://styles/mapbox/streets-v12'
});
 
const size = 100;
 
const pulsingDot = {
width: size,
height: size,
data: new Uint8Array(size * size * 4),
 

onAdd: function () {
    const canvas = document.createElement('canvas');
    canvas.width = this.width;
    canvas.height = this.height;
    this.context = canvas.getContext('2d', { willReadFrequently: true }); 
},

 
render: function () {
const duration = 1000;
const t = (performance.now() % duration) / duration;
 
const radius = (size / 2) * 0.3;
const outerRadius = (size / 2) * 0.7 * t + radius;
const context = this.context;
 
context.clearRect(0, 0, this.width, this.height);
context.beginPath();
context.arc(
this.width / 2,
this.height / 2,
outerRadius,
0,
Math.PI * 2
);
context.fillStyle = `rgba(255, 200, 200, ${1 - t})`;
context.fill();
 
context.beginPath();
context.arc(
this.width / 2,
this.height / 2,
radius,
0,
Math.PI * 2
);
context.fillStyle = 'rgba(255, 100, 100, 1)';
context.strokeStyle = 'white';
context.lineWidth = 2 + 4 * (1 - t);
context.fill();
context.stroke();
 
this.data = context.getImageData(
0,
0,
this.width,
this.height
).data;
 
map.triggerRepaint();
 
return true;
}
};

const observatoriesFeatureCollection = [];

observatories.forEach((observatory) => {
    const image =
        observatory.image && observatory.image.trim() !== ""
            ? observatory.image
            : "./images/Generic Observatory.jpg";

    const imageAlt = observatory.image
        ? observatory.image.replace(/\.[^/.]+$/, "")
        : "Generic Observatory";

    let observatoryFeature = {
        ID: `${observatory.ID}`,
        type: "Feature",
        properties: {
            description: `<h1>${observatory.Name}</h1>
            <ul>
            <li>ID: ${observatory.ID}</li>
            <li>Country: ${observatory.Country}</li>
            <li>latitude: ${observatory.Latitude}</li>
            <li>longitude: ${observatory.Longitude}</li>
            <li>Elevation_m: ${observatory.Elevation_m}</li>
            <li>light_pollution: ${observatory["Light pollution"]}</li>
            <li>limiting)magnitude: ${observatory["Limiting magnitude"]}</li>
            </ul>
            <img src="${image}" alt="${imageAlt}" width="200px">`,
        },
        geometry: {
            type: "Point",
            coordinates: [
                parseFloat(observatory.Longitude),
                parseFloat(observatory.Latitude),
            ],
        },
    };
    observatoriesFeatureCollection.push(observatoryFeature);
});

console.log('Number of features:', observatoriesFeatureCollection.length);

map.on('load', () => {
    observatoriesFeatureCollection.forEach((observatory) => {
        const pulsingDotName = `${observatory.ID}-pulsing-dot`;
        map.addImage(pulsingDotName, pulsingDot, { pixelRatio: 2, iconSize: size });

        map.addSource(`${observatory.ID}-source`, {
            type: 'geojson',
            data: {
                type: 'FeatureCollection',
                features: [observatory],
            },
        });

        map.addLayer({
            id: `${observatory.ID}-layer-with-pulsing-dot`,
            type: 'symbol',
            source: `${observatory.ID}-source`,
            layout: {
                'icon-image': pulsingDotName,
                'icon-allow-overlap': true,
            },
        });
    });

    const popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false,
    });

    observatoriesFeatureCollection.forEach((observatory) => {
        map.on("mouseenter", `${observatory.ID}-layer-with-pulsing-dot`, (e) => {
            map.getCanvas().style.cursor = "pointer";
            const coordinates = e.features[0].geometry.coordinates.slice();
            const description = e.features[0].properties.description;

            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            popup.setLngLat(coordinates).setHTML(description).addTo(map);
        });

        map.on("mouseleave", `${observatory.ID}-layer-with-pulsing-dot`, () => {
            map.getCanvas().style.cursor = "";
            popup.remove();
        });
    });
});




