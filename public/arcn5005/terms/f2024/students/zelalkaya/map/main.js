const map = new maplibregl.Map({
    container: 'map',
    center: [-73.650944, 45.526555],
    zoom: 10,
    style: 'style.json'
});

function addPointCoordinates(coordinates, properties) {
    const el = document.createElement('div');
    el.className = 'marker';
    el.style.backgroundImage = 'url(icon.png)';
    el.style.backgroundSize = 'contain';
    el.style.width = '60px';
    el.style.height = '60px';

    const marker = new maplibregl.Marker(el)
        .setLngLat(coordinates)
        .addTo(map);

    marker.setPopup(new maplibregl.Popup()
        .setHTML(`
            <h3>${properties.name}</h3>
            <p><strong>Type:</strong> ${properties.type}</p>
            <p><strong>Rating:</strong> ${properties.rating}</p>
            <p><strong>Comment:</strong> ${properties.comment}</p>
            <p><strong>Address:</strong> ${properties.address}</p>
            <p><strong>Website:</strong> <a href="${properties.website}" target="_blank">${properties.website}</a></p>
        `)
    );
}

map.on('load', () => {
    const textOverlay = document.createElement('div');
    textOverlay.style.position = 'fixed';
    textOverlay.style.top = '10px';
    textOverlay.style.right = '10px';
    textOverlay.style.backgroundColor = 'white';
    textOverlay.style.padding = '10px';
    textOverlay.style.borderRadius = '4px';
    textOverlay.style.boxShadow = '0 0 0 2px rgba(0,0,0,0.1)';
    textOverlay.style.zIndex = '1';
    textOverlay.innerHTML = '<strong>My Cafe Guide of Montreal</strong><br>Explore the best local cafes!<br>Click on any icon for more';
    
    document.getElementById('map').appendChild(textOverlay);

    const points = [
        {
            coordinates: [-73.630630, 45.539661],
            properties: {
                name: "OUI MAIS NON",
                type: "Cafe",
                rating: "3.5/5",
                comment: "Great place to study (pro tip: hide in the basement)",
                address: "72 Rue Jarry E, Montréal, QC H2P 1T1",
                website: "www.cafeouimaisnon.com/lemenu"
            }
        },
        {
            coordinates: [-73.557380, 45.503660],
            properties: {
                name: "TOMMY CAFÉ",
                type: "Cafe",
                rating: "4/5",
                comment: "pretty location and fun drink options",
                address: "British empire building, 200 Notre-Dame St W, Montreal, Quebec H2Y 1T3",
                website: "tommycafe.ca"
            }
        },
        {
            coordinates: [-73.553360, 45.507259],
            properties: {
                name: "CAFÉ OLIMPICO",
                type: "cafe",
                rating: "4.5/5",
                comment: "amazing authentic italian coffee, definetely must try their caffe crema",
                address: "419 R. Saint-Vincent, Montréal, QC H2Y 3A6",
                website: "cafeolimpico.com"
            }
        },
        {
            coordinates: [-73.559273, 45.502239],
            properties: {
                name: "CREW COLLECTIVE & CAFÉ",
                type: "cafe",
                rating: "3.8/5",
                comment: "pretty location but tends to be overcrowded",
                address: "360 Rue Saint-Jacques, Montréal, QC H2Y 1P5419 R. Saint-Vincent, Montréal, QC H2Y 3A6",
                website: "order.koomi.com/crew-collective-cafe-8erOozBrrP/fr"
            }
        },
        {
            coordinates: [-73.82375, 45.467247],
            properties: {
                name: "PIGEON CLUB CAFE",
                type: "cafe",
                rating: "4.8/5",
                comment: "great food and great vybes",
                address: "6321 Trans-Canada Hwy bureau 148, Pointe-Claire, Quebec H9R 5A5",
                website: "www.pigeonclubcafe.com"
            }
        },
        {
            coordinates: [-73.747759, 45.556382],
            properties: {
                name: "CAFE MILANO",
                type: "cafe",
                rating: "4.8/5",
                comment: "perfect spot for catching up with friends and authentic italian food and drinks",
                address: "3352 Blvd. Saint-Martin O, Laval, QC H7T 1A1",
                website: "www.cafemilano.ca"
            }
        },
        {
            coordinates: [-73.576933, 45.482034],
            properties: {
                name: "BARLEY BAR À CÉRÉALES",
                type: "brunch",
                rating: "3.8/5",
                comment: "must try if you love cereals",
                address: "2613 R. Notre Dame O, Montréal, QC H3J 1N9",
                website: "www.barleybar.ca/_files/ugd/74ce94_29cee94750e444288b70b6a3de9ace73.pdf"
            }
        },
        {
            coordinates: [-73.6024219, 45.5268468],
            properties: {
                name: "CAFÉ ALPHABET",
                type: "cafe",
                rating: "3.8/5",
                comment: "their pink foam went viral on social media",
                address: "5765 Rue Clark, Montréal, QC H2T 2V5",
                website: "www.alphabetcafe.ca"
            }
        },
        {
            coordinates: [-73.5621771, 45.4920895],
            properties: {
                name: "LE PETIT DEP",
                type: "cafe",
                rating: "4.3/5",
                comment: "amazing hang out spot, it's also a convenience store",
                address: "300 Rue de la Montagne, Montréal, QC H3C 2B1",
                website: "www.lepetitdep.com/griffintown/#menu-griffintown"
            }
        },
        {
            coordinates: [-73.564531, 45.542346],
            properties: {
                name: "STATION W CAFÉ",
                type: "cafe",
                rating: "3.8/5",
                comment: "pretty spacious space and they have a cool theme",
                address: "124-2600 Rue William-Tremblay, Montréal, QC H1Y 3J2",
                website: "www.station-w.com/menu-angus"
            }
        },
        {
            coordinates: [-73.5584415, 45.5142628],
            properties: {
                name: "CAFÉ LÉO",
                type: "cafe",
                rating: "3.8/5",
                comment: "great place for studying as their customers are mostly students",
                address: "1215 Rue Berri, Montréal, QC H2L 0H6",
                website: "cafeleomtl.com/menu"
            }
        },
        {
            coordinates: [-73.5949893, 45.4631723],
            properties: {
                name: "TT CAFÉ",
                type: "cafe",
                rating: "4/5",
                comment: "what else can i say other than they serve ice cream, banh mi sandwiches and own a tennis table",
                address: "1215 Rue-73.5949893 Berri, Montréal, QC H2L 0H6",
                website: "order.koomi.com/tt-cafe-8v9eWD2MkZ/fr"
            }
        },
    ];

    points.forEach(point => {
        addPointCoordinates(point.coordinates, point.properties);
    });
});

function addMarkerWithPopup(coordinates, popupText) {
    const el = document.createElement('div');
    el.className = 'marker';
    el.style.backgroundImage = 'url(icon.png)';
    el.style.backgroundSize = 'contain';
    el.style.width = '60px';
    el.style.height = '60px';

    new maplibregl.Marker(el)
        .setLngLat(coordinates)
        .setPopup(new maplibregl.Popup().setHTML(`<h3>${popupText}</h3>`))
        .addTo(map);
}
