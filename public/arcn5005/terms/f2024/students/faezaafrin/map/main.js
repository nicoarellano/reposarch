const map = new maplibregl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/849afe2a-9206-49d6-be07-fc68e8349821/style.json?key=8erYSCo3xAjhGxQ1RN3x',
    center: [-75.702358, 45.416851], 
    zoom: 14
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
                        'coordinates': [-75.69973, 45.40038] // First point
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-75.69000, 45.41000] // Second point
                    }
                },
                {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-75.68000, 45.42000] // Third point
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
});
