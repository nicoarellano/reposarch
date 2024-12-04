
const places = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'properties': {
                'icon': 'Agricultural',
                'description': '<h2>Canada Agriculture and Food Museum</h2> <p>Established: 1983</p> <p>Location: Experimental Farm</p><p>Note: Canada Agriculture museum, demonstrating advances in farming science and technology.</p>'
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-75.706911, 45.386930]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'icon': 'Aviation',
                'description': '<h2>Canada Aviation and Space Museum</h2> <p>Established: 1982</p> <p>Location: Rockcliffe Park</p><p>Note: Canada National aviation and space museum, with the most extensive aviation collection in Canada.</p>'
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-75.643716, 45.458838]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'icon': 'Science',
                'description': "<h2>Canada Science and Technology Museum</h2> <p>Established: 1967</p> <p>Location: St. Laurent</p><p>Note: Canada’s National Science Museum displays the technological and scientific history of Canada.</p>"
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-75.618959, 45.403773]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'icon': 'History',
                'description': "<h2>Canadian Museum of History</h2> <p>Established: 1856</p> <p>Location: Hull</p><p>Note: Canada’s National History Museum; has a collection, study, and preservation of materials illuminating Canada's human history.</p>"
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-75.709179, 45.430399]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'icon': 'Science',
                'description': "<h2>Canadian Museum of Nature</h2> <p>Established: 1968</p> <p>Location: Centretown</p><p>Note: Canada’s National Natural History and Natural Sciences museum.</p>"
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-75.688540, 45.413165]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'icon': 'Military',
                'description': "<h2>Canadian War Museum</h2> <p>Established: 1942</p> <p>Location: LeBreton Flats</p><p>Note: Canada’s National Museum of Military History.</p>"
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-75.716893, 45.417280]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'icon': 'Art',
                'description': "<h2>National Arts Centre</h2> <p>Established: 1965</p> <p>Location: Centretown</p><p>Note: Canada’s Center for the Performing Arts.</p>"
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-75.693355, 45.423456]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'icon': 'Art',
                'description': "<h2>National Gallery of Canada</h2> <p>Established: 1880</p> <p>Location: Lower Town</p><p>Note: One of the largest art museums in North America.</p>"
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-75.698852, 45.429798]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'icon': 'History',
                'description': "<h2>Bytown Museum</h2> <p>Established: 1917</p> <p>Location: Centretown</p><p>Note: The city’s early history and building of the Rideau Canal.</p>"
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-75.697640, 45.426169]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'icon': 'Military',
                'description': "<h2>Cameron Highlanders of Ottawa Museum</h2> <p>Inaugurated: 1879</p> <p>Location: Centretown</p><p>Note: Canadian Army Primary Reserve infantry regiment, established as military training facility and museum.</p>"
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-75.688872, 45.421632]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'icon': 'Nature',
                'description': "<h2>Dominion Arboretum</h2> <p>Established: 1889</p> <p>Location: Experimental Farm</p><p>Note: An arboretum part of the Central Experimental Farm of Agriculture and Agri-food Canada.</p>"
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-75.706177, 45.391327]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'icon': 'Art',
                'description': "<h2>SAW Gallery</h2> <p>Established: 1973</p> <p>Location: Centretown</p><p>Note: Artist-run gallery.</p>"
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-75.688670, 45.425313]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'icon': 'Art',
                'description': "<h2>Ottawa Art Gallery (OAG)</h2> <p>Established: 1988</p> <p>Location: Centretown</p><p>Note: Contemporary and 20th-century art.</p>"
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-75.687970, 45.425414]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'icon': 'History',
                'description': "<h2>Billings House National Historic Site of Canada (Estate Museum)</h2> <p>Established: 1975</p> <p>Location: Alta Vista</p><p>Note: Historic house from 1828 home of early settlers.</p>"
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-75.672060, 45.390060]
            }
        },
    ]
};

const filterGroup = document.getElementById("filter-group");
const map = new maplibregl.Map({
    container: "map",
    style:
        'https://api.maptiler.com/maps/satellite/style.json?key=42hWlNIdOqEy0E4oMcxo#1/0/0',
    center: [-75.7, 45.4],
    zoom: 12
});

const dropdown = document.createElement('select');
dropdown.id = 'filter-select';
filterGroup.appendChild(dropdown);

['All', ...new Set(places.features.map(f => f.properties.icon))].forEach(symbol => {
    const option = document.createElement('option');
    option.value = symbol;
    option.textContent = symbol;
    dropdown.appendChild(option);
});

dropdown.addEventListener('change', (e) => {
    const value = e.target.value;
    places.features.forEach(feature => {
        const layerID = `poi-${feature.properties.icon}`;
        map.setLayoutProperty(
            layerID,
            'visibility',
            value === 'All' || feature.properties.icon === value ? 'visible' : 'none'
        );
    });
});

map.on('load', () => {
    // Add a GeoJSON source containing place coordinates and information.
    map.addSource('places', {
        'type': 'geojson',
        'data': places
    });

    places.features.forEach((feature) => {
        const symbol = feature.properties['icon'];
        const layerID = `poi-${symbol}`;

        // Add a layer for this symbol type if it hasn't been added already.
        if (!map.getLayer(layerID)) {
            map.addLayer({
                'id': layerID,
                'type': 'circle',
                'source': 'places',
                'paint': {
                    'circle-radius': 8,
                    'circle-color': '#FFFFFF',
                    'circle-stroke-width': 1,
                    'circle-stroke-color': '#3386c0',
                },
                'filter': ['==', 'icon', symbol]
            });
           let popup;
           
            map.on('mouseenter', layerID, (e) => {
                map.getCanvas().style.cursor = 'pointer';

                const coordinates = e.features[0].geometry.coordinates.slice();
                const description = e.features[0].properties.description;

                if (!popup) {
                    popup = new maplibregl.Popup({
                        closeButton: false,
                        closeOnClick: false
                    }).setLngLat(coordinates)
                      .setHTML(description)
                      .addTo(map);
                } else {
                    popup.setLngLat(coordinates)
                         .setHTML(description);
                }
            });

            map.on('mouseleave', layerID, () => {
                map.getCanvas().style.cursor = '';
                if (popup) {
                    popup.remove(); 
                    popup = undefined; 
                }
            });

            map.on('click', layerID, (e) => {
                const coordinates = e.features[0].geometry.coordinates;
                map.flyTo({ center: coordinates, zoom: 15 });
            });

            // Add checkbox and label elements for the layer.
            const input = document.createElement('input');
            input.type = 'checkbox';
            input.id = layerID;
            input.checked = true;
            filterGroup.appendChild(input);

            const label = document.createElement('label');
            label.setAttribute('for', layerID);
            label.textContent = symbol;
            filterGroup.appendChild(label);
            //
            
            input.addEventListener('change', (e) => {
                map.setLayoutProperty(
                    layerID,
                    'visibility',
                    e.target.checked ? 'visible' : 'none'
                );
            });
        }
    });

});