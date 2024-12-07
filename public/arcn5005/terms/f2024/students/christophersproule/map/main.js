const map = new maplibregl.Map({
    container: 'map',
    style:
        'style.json',
    center: [-96.81595411588849,49.77154223266254],
    zoom: 3
});

map.on('load', async () => {
    const image = await map.loadImage("./Pin.png");
    // Add an image to use as a custom marker
    map.addImage('custom-marker', image.data, { pixelRatio: 25 });

    map.addSource('places', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'properties': {
                        'description': '<strong>Waterfront Park</strong>' +
                                       '<p>Vancouver, Washington</p>' +
                                       '<p>2022 | Large-Scale Public Landscapes</p>' +
                                       '<p>PWL Partnership & WSP</p>' +
                                       '<img src="./Park Images/WaterfrontPark.jpg" alt="Waterfront Park" style="width: 100%; height: auto;"/>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-122.67721555564663, 45.62346102574113]
                    }
                },
                {
                    'type': 'Feature',
                   'properties': {
                        'description': '<strong>Surrey Bend Regional Park</strong>' +
                                       '<p>Surrey, British Colombia</p>' +
                                       '<p>2018 | Large-Scale Public Landscapes</p>' +
                                       '<p>space2place</p>' +
                                       '<img src="./Park Images/SurreyBend.jpg" alt="Surrey Bend Regional Park" style="width: 100%; height: auto;"/>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-122.72851710597747, 49.19471979075495]
                    }
                },
                {
                    'type': 'Feature',
                   'properties': {
                        'description': '<strong>Dale Hodges Park</strong>' +
                                       '<p>Calgary, Alberta</p>' +
                                       '<p>2021 | Large-Scale Public Landscapes</p>' +
                                       '<p>O2 Planning & Design and Source 2 Source Inc. with AECOM and Sans façon for Watershed+</p>' +
                                       '<img src="./Park Images/Dale.jpg" alt="Dale Hodges Park" style="width: 100%; height: auto;"/>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-114.17034326517708, 51.087750042265746]
                    }
                },
                {
                    'type': 'Feature',
                   'properties': {
                        'description': '<strong>Harvie Passage Flood Damage and Repair</strong>' +
                                       '<p>Calgary, Alberta</p>' +
                                       '<p>2024 | Large-Scale Public Landscapes</p>' +
                                       '<p>O2 Planning & Design</p>' +
                                       '<img src="./Park Images/image+4.jpg" alt="Harvie Passage Flood Damage and Repair" style="width: 100%; height: auto;"/>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-114.01435767277697, 51.043142923151535,]
                    }
                },
                {
                    'type': 'Feature',
                   'properties': {
                        'description': '<strong>Walterdale Bridge</strong>' +
                                       '<p>Edmonton, Alberta</p>' +
                                       '<p>2020 | Large-Scale Public Landscapes</p>' +
                                       '<p>DIALOG</p>' +
                                       '<img src="./Park Images/Walterdale.jpg" alt="Walterdale Bridge" style="width: 100%; height: auto;"/>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-113.50168234826529, 53.5284888775385, ]
                    }
                },
                {
                    'type': 'Feature',
                   'properties': {
                        'description': '<strong>Wanuskewin</strong>' +
                                       '<p>Saskatoon, Saskatchewan</p>' +
                                       '<p>2022 | Large-Scale Public Landscapes</p>' +
                                       '<p>Crosby Hanna & Associates</p>' +
                                       '<img src="./Park Images/Wanuskewin.jpg" alt="Wanuskewin" style="width: 100%; height: auto;"/>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-106.59626295396612, 52.22421616369754]
                    }
                },
                {
                    'type': 'Feature',
                   'properties': {
                        'description': '<strong>The Leaf at Assiniboine Park</strong>' +
                                       '<p>Winnipeg, Manitoba</p>' +
                                       '<p>2024 | Large-Scale Public Landscapes</p>' +
                                       '<p>HTFC Planning & Design</p>' +
                                       '<img src="./Park Images/TheLeaf.jpg" alt="The Leaf" style="width: 100%; height: auto;"/>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-97.22267335080271, 49.868645923648614]
                    }
                },
                {
                    'type': 'Feature',
                   'properties': {
                        'description': '<strong>Brokenhead Wetland Interpretive Trail and Boardwalk</strong>' +
                                       '<p>Beaconia, Manitoba</p>' +
                                       '<p>2017 | Large-Scale Public Landscapes</p>' +
                                       '<p>Manitoba Sustainable Development, Parks and Protected Spaces Branch</p>' +
                                       '<img src="./Park Images/Brokenhead.jpg" alt="Brokenhead Wetland Interpretive Trail and Boardwalk" style="width: 100%; height: auto;"/>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-96.53915890202103, 50.41531613498139]
                    }
                },
                {
                    'type': 'Feature',
                   'properties': {
                        'description': '<strong>The David Braley and Nancy Gordon Rock Garden at the Royal Botanical Gardens</strong>' +
                                       '<p>Hamilton, Ontario</p>' +
                                       '<p>2017 | Large-Scale Public Landscapes</p>' +
                                       '<p>Janet Rosenberg & Studio Inc.</p>' +
                                       '<img src="./Park Images/Rock.jpg" alt="The David Braley and Nancy Gordon Rock Garden" style="width: 100%; height: auto;"/>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-79.89170378298792, 43.28931795014784]
                    }
                },
                {
                    'type': 'Feature',
                   'properties': {
                        'description': '<strong>Peace Garden at Nathan Phillips Square</strong>' +
                                       '<p>Toronto, Ontario</p>' +
                                       '<p>2016 | Large-Scale Public Landscapes</p>' +
                                       '<p>PLANT Architect Inc,</p>' +
                                       '<img src="./Park Images/PLANT.jpg" alt="Peace Garden at Nathan Phillips Square" style="width: 100%; height: auto;"/>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-79.3840455295589, 43.65343365365212]
                    }
                },
                {
                    'type': 'Feature',
                   'properties': {
                        'description': '<strong>The West Don Lands</strong>' +
                                       '<p>Toronto, Ontario</p>' +
                                       '<p>2016 | Large-Scale Public Landscapes</p>' +
                                       '<p>The Planning Partnership</p>' +
                                       '<img src="./Park Images/WestDon.jpg" alt="West Don Lands" style="width: 100%; height: auto;"/>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-79.35231995626572, 43.654111819683884]
                    }
                },
                {
                    'type': 'Feature',
                   'properties': {
                        'description': '<strong>Kingston Waterfront Master Plan</strong>' +
                                       '<p>Kingston, Ontario</p>' +
                                       '<p>2017 | Large-Scale Public Landscapes</p>' +
                                       '<p>thinc design</p>' +
                                       '<img src="./Park Images/render.jpg" alt="West Don Lands" style="width: 100%; height: auto;"/>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-76.48029614826861, 44.24262474975673]
                    }
                },
                {
                    'type': 'Feature',
                   'properties': {
                        'description': '<strong>Lansdowne Park</strong>' +
                                       '<p>Ottawa, Ontario</p>' +
                                       '<p>2016 | Large-Scale Public Landscapes</p>' +
                                       '<p>PFS Studio | Jeffrey Staates</p>' +
                                       '<img src="./Park Images/LP10.jpg" alt="Lansdowne Park" style="width: 100%; height: auto;"/>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-75.68143208311851, 45.39974132288774]
                    }
                },
                {
                    'type': 'Feature',
                   'properties': {
                        'description': '<strong>Parliament Hill Escarpment</strong>' +
                                       '<p>Ottawa, Ontario</p>' +
                                       '<p>2023 | Large-Scale Public Landscapes</p>' +
                                       '<p>Vlan Paysages</p>' +
                                       '<img src="./Park Images/Parliament.jpg" alt="Parliament Hill Escarpment" style="width: 100%; height: auto;"/>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-75.70224471715969, 45.424334422717635]
                    }
                },
                {
                    'type': 'Feature',
                   'properties': {
                        'description': '<strong>Escales découvertes</strong>' +
                                       '<p>Montreal, Quebec</p>' +
                                       '<p>2019 | Large-Scale Public Landscapes</p>' +
                                       '<p>Civiliti + Julie Margot Design with Vlan Paysages and LN Paysage</p>' +
                                       '<img src="./Park Images/esc.jpg" alt="Parliament Hill Escarpment" style="width: 100%; height: auto;"/>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-73.57946596123743, 45.511408483782354]
                    }
                },
                {
                    'type': 'Feature',
                   'properties': {
                        'description': '<strong>Technopôle Angus</strong>' +
                                       '<p>Montreal, Quebec</p>' +
                                       '<p>2016 | Large-Scale Public Landscapes</p>' +
                                       '<p>NIPPAYSAGE in collaboration with / en collaboration avec Provencher_Roy</p>' +
                                       '<img src="./Park Images/ANGUS.jpg" alt="Parliament Hill Escarpment" style="width: 100%; height: auto;"/>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-73.56428920547253, 45.54338438868655, ]
                    }
                },
                {
                    'type': 'Feature',
                   'properties': {
                        'description': '<strong>Promenade Samuel de Champlain - Phase 3</strong>' +
                                       '<p>Qubec City, Quebec</p>' +
                                       '<p>2024 | Large-Scale Public Landscapes</p>' +
                                       '<p>DAOUST LESTAGE LIZOTTE STECKER</p>' +
                                       '<img src="./Park Images/DLLS.jpg" alt="Parliament Hill Escarpment" style="width: 100%; height: auto;"/>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-71.25366839471751, 46.768639575824594, ]
                    }
                },
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
