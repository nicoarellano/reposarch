const map = new maplibregl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/f669a349-d288-4337-9e41-9b554a05967c/style.json?key=rUIDuTCBZ89Datpb5uOP',
    center: [-98.062503, 53.942918],
    zoom: 5
});

map.on('load', () => {
    map.loadImage('pin.png', (error, image) => {
        if (error) throw error;

        map.addImage('custom-pin', image);

        map.addSource('ManitobaTour', {
            'type': 'geojson',
            'data': {
                "type": "FeatureCollection",
                "features": [
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-97.136667, 50.188333]
                        },
                        "properties": {
                            "PlaceName": "Oak Hammock Marsh",
                            "Location": "Rockwood, Manitoba",
                            "Area": "35.8 km²",
                            "Description": "Oak Hammock Marsh is a marsh/wetland and a wildlife management area",
                            "Image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Oak_Hammock_Marsh%2C_1_Snow_Goose_Bay%2C_Stonewall_-_panoramio_%283%29.jpg/284px-Oak_Hammock_Marsh%2C_1_Snow_Goose_Bay%2C_Stonewall_-_panoramio_%283%29.jpg"
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-99.2644, 49.5987]
                        },
                        "properties": {
                            "PlaceName": "Spruce Woods Provincial Park",
                            "Location": "Carberry, Manitoba",
                            "Area": "269 km²",
                            "Description": "A provincial park featuring unique sand dunes, hiking trails, and diverse ecosystems.",
                            "Image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Spirit_Sands_2.JPG/1280px-Spirit_Sands_2.JPG"
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-97.431389, 49.569444]
                        },
                        "properties": {
                            "PlaceName": "Tall Grass Prairie Preserve",
                            "Location": "Stuartburn, Manitoba",
                            "Area": "20 km²",
                            "Description": "The Tall Grass Prairie Preserve is one of the largest remaining pieces of native tall grass prairie in Manitoba.",
                            "Image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Tall_Grass_Preserve_Signage.JPG/250px-Tall_Grass_Preserve_Signage.JPG"
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-97.529325, 50.733903]
                        },
                        "properties": {
                            "PlaceName": "Narcisse Snake Dens",
                            "Location": "Narcisse, Manitoba",
                            "Area": "Unique wildlife habitat",
                            "Description": "The Narcisse Snake Dens are home to the largest concentration of red-sided garter snakes in the world.",
                            "Image": "https://www.todocanada.ca/wp-content/uploads/narcisse-snake-den.jpg"
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-95.4286, 50.1730]
                        },
                        "properties": {
                            "PlaceName": "Whiteshell Provincial Park",
                            "Location": "Eastern Manitoba",
                            "Area": "2,721 km²",
                            "Description": "Boreal forests filled with towering pines, birch, and spruce, with lakes and rivers throughout.",
                            "Image": "https://www.explorethewhiteshell.com/wp-content/uploads/2019/05/Roberto-Gomez-permission-to-use-w_-credit-5-640x400.jpg"
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-96.2901, 49.3921]
                        },
                        "properties": {
                            "PlaceName": "Sandilands Provincial Forest",
                            "Location": "Southeastern Manitoba",
                            "Area": "2,600 km²",
                            "Description": "A boreal forest known for its sand dunes, mixed woodlands, and diverse wildlife habitats.",
                            "Image": "https://www.brmbmaps.com/nodeserver/BrmbMapsImages?src=02e7ddfa39d475fb2d76235c2485886f:e73f276d4e82f6d470448759296a5a04a6aef721524e050c731e28f58345bbee6685117294aaed04a7531ab5ea052a73fd188605e93f94f066c582fc295fb1309209389c14a89940eafcb8904396016d&width=600&height=600"
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-100.914444, 51.666111]
                        },
                        "properties": {
                            "PlaceName": "Duck Mountain Provincial Park",
                            "Location": "Northwest of Dauphin, Manitoba",
                            "Area": "1,424 km²",
                            "Description": "A mix of forest and parkland ecology, home to Manitoba maple and trembling aspen and is shared by Manitoba and Saskatchewan.",
                            "Image": "https://www.mustdocanada.com/wp-content/uploads/2024/02/0441-Old-Park-Road.jpg"
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-99.925833, 50.570833]
                        },
                        "properties": {
                            "PlaceName": "Riding Mountain National Park",
                            "Location": "Wasagaming, Manitoba",
                            "Area": "2,969 km²",
                            "Description": "National Park that includes grasslands, upland boreal and eastern deciduous forest ecosystems, and is home to one of the largest populations of black bears in North America, as well as a herd of about 40 bison.",
                            "Image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Bison_herd_-_Lake_Audy_-_Riding_Mountain_National_Park.JPG/1280px-Bison_herd_-_Lake_Audy_-_Riding_Mountain_National_Park.JPG"
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-94.165, 58.768]
                        },
                        "properties": {
                            "PlaceName": "Churchill",
                            "Location": "Churchill, Manitoba",
                            "Area": "Vast Northern ecosystem",
                            "Description": "A unique northern tundra ecosystem located along Hudson Bay characterized by lichens, mosses, and dwarf shrubs. Uniquely nicknamed the Polar Bear Capital of the World.",
                            "Image": "https://www.travelmanitoba.com/imager/s3_us-west-1_amazonaws_com/manitoba-2020/images/Northern-Lights_Credit-Alex-de-Vries_DSC_7812_TMB-Use-Only_eac247f0590611751abbceb5cda27ef8.jpg"
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-96.003888, 50.145278]
                        },
                        "properties": {
                            "PlaceName": "Pinawa Trails",
                            "Location": "Pinawa, Manitoba",
                            "Area": "Various trails",
                            "Description": "A scenic trail system in Pinawa, Manitoba, featuring forested paths, river views, and access to historical sites like the Old Pinawa Dam.",
                            "Image": "https://www.trailsmanitoba.ca/wp-content/uploads/2021/05/TCT_Pinawa_Meagan-Glowa-min.jpg"
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-96.8275, 50.4517]
                        },
                        "properties": {
                            "PlaceName": "Lake Winnipeg Shores",
                            "Location": "Lake Winnipeg, Manitoba",
                            "Area": "25,514 km²",
                            "Description": "Lake Winnipeg's shores are known for their sandy beaches, limestone cliffs, and bat caves. Native vegetation includes willows, grasses, and wildflowers.",
                            "Image": "https://vbspa.wordpress.com/wp-content/uploads/2011/04/img_0211.jpg"
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-98.396667, 55.197778]
                        },
                        "properties": {
                            "PlaceName": "Pisew Falls Provincial Park",
                            "Location": "Mystery Lake, Manitoba",
                            "Area": "6.3 km²",
                            "Description": "Because of the continuous flow of water over the falls, the area has developed its own microclimate. A wide variety of mosses, lichens, and fungi can be found in the immediate area around the base of the falls. There are also a variety of ferns whose origins date back to before the last ice age.",
                            "Image": "https://www.travelmanitoba.com/imager/assets_simpleviewinc_com/simpleview/image/upload/crm/manitoba/03-Pisew-Falls_9b9299a5-5056-a36f-235cda3ef582f91a_8dc87f60f43f0f6a441f07bfdf7a1d87.jpg"
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-99.971944, 54.793056]
                        },
                        "properties": {
                            "PlaceName": "Wekusko Falls Provincial Park",
                            "Location": "Snow Lake, Manitoba",
                            "Area": "4.9 km²",
                            "Description": "Wekusko Falls Provincial Park is a provincial park straddling the Grass River and Wekusko Lake, located in central Manitoba.",
                            "Image": "https://www.travelmanitoba.com/imager/assets_simpleviewinc_com/simpleview/image/upload/crm/manitoba/suspension-bridge-wekusko-falls0-f56f90c25056a36_f5704b6c-5056-a36f-2314d1bbbea1c873_ae9217944f0738f696c093bccdcb3e55.jpg"
                        }
                    }
                ]
            }
        });

        map.addLayer({
            'id': 'markers',
            'type': 'symbol',
            'source': 'ManitobaTour',
            'layout': {
                'icon-image': 'custom-pin',
                'icon-size': 0.0350
            }
        });

        

        let currentPopup = null; 

        map.on('mouseenter', 'markers', (e) => {
            if (currentPopup) {
                currentPopup.remove();
            }

            const feature = e.features[0];
            const coordinates = feature.geometry.coordinates.slice();
            const popupContent = `
                <strong>${feature.properties.PlaceName}</strong><br>
                Location: ${feature.properties.Location}<br>
                Area: ${feature.properties.Area}<br>
                Description: ${feature.properties.Description}<br>
                <img src="${feature.properties.Image}" width="200">
            `;

            currentPopup = new maplibregl.Popup()
                .setLngLat(coordinates)
                .setHTML(popupContent)
                .addTo(map);
        });

        map.on('mouseleave', 'markers', () => {
            if (currentPopup) {
                currentPopup.remove();
                currentPopup = null; 
            }
        });
    });
});