const map = new maplibregl.Map({
    container: 'map',
    style:
        'https://api.maptiler.com/maps/796d5626-a56d-4364-abd2-2aac0c78803b/style.json?key=QsGfQjSm2Iz5b2nXrsMk',
    center: [-73.56561102153994, 45.502433888180576],
    zoom: 11
});

map.on('load', () => {
    // Location pin
    map.loadImage(
        'https://img.icons8.com/?size=512&id=uJIAJ96tuCoX&format=png',
        (error, image) => {
            if (error) throw error;
            map.addImage('custom-marker', image);
           
            map.addSource('place', {
                'type': 'geojson',
                'data': 
                {
                    "type": "FeatureCollection",
                    "features": [
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.58869929,45.47346732 ]
     },
     "properties": {
     "Place":"TRAN Cantine",
     "Type":"Restaurant",
     "Price":"$$",
     "Address":"4690 Notre-Dame St W, Montreal, Quebec H4C 1S6",
     "Website": "https://trancantine.com/"
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.59188243,45.47012763 ]
     },
     "properties": {
     "Place":"Elena",
     "Type":"Restaurant",
     "Price":"$$",
     "Address":"5090 Notre-Dame St W, Montreal, Quebec H4C 1T1",
     "Website":"https://www.coffeepizzawine.com/"
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.59110744,45.47060995 ]
     },
     "properties": {
     "Place":"Loic",
     "Type":"Bar/Restaurant",
     "Price":"$$",
     "Address":"5001 Notre-Dame St W, Montreal, Quebec H4C 1T2",
     "Website":"http://barloic.ca/"
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.59020671,45.47154377 ]
     },
     "properties": {
     "Place":"Bon Delire",
     "Type":"Bar",
     "Price":"$$",
     "Address":"4855 Notre-Dame St W, Montreal, Quebec H4C 1S9",
     "Website":"http://bondelirebar.com/"
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.58837836,45.47356849 ]
     },
     "properties": {
     "Place":"Arthurs Nosh Bar",
     "Type":"Restaurant",
     "Price":"$$",
     "Address":"4621 Notre-Dame St W, Montreal, Quebec H4C 1S5",
     "Website":"http://arthursmtl.com/take-out-menu/"
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.5871374,45.4744851 ]
     },
     "properties": {
     "Place":"BarBara",
     "Type":"Bar/Restaurant",
     "Price":"$$",
     "Address":"4450 Notre-Dame St W, Montreal, Quebec H4C 1S1",
     "Website":"http://www.barbaravin.com/"
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.58815492,45.4733048 ]
     },
     "properties": {
     "Place":"Campanelli",
     "Type":"Coffee shop",
     "Price":"$",
     "Address":"4634 Notre-Dame St W, Montreal, Quebec H4C 1S4",
     "Website":""
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.58813612,45.47365778 ]
     },
     "properties": {
     "Place":"Lloydie's St-Henri",
     "Type":"Restaurant",
     "Price":"$",
     "Address":"4601 Notre-Dame St W, Montreal, Quebec H4C 1S5",
     "Website":"http://lloydies.ca/wp-content/uploads/2020/07/Covid-Menu_Lloydies_SquareIG-Prices.jpg"
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.58406378,45.47809484 ]
     },
     "properties": {
     "Place":"Evalina's",
     "Type":"Restaurant",
     "Price":"$$",
     "Address":"3981 Notre-Dame St W, Montreal, Quebec H4C 1R2",
     "Website":""
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.58187999,45.4793475 ]
     },
     "properties": {
     "Place":"Satay Brothers Resto",
     "Type":"Bar/Restaurant",
     "Price":"$$",
     "Address":"3721 Notre-Dame St W, Montreal, Quebec H4C 1P8",
     "Website":"http://www.sataybrothers.com/"
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.57820459,45.4812637 ]
     },
     "properties": {
     "Place":"Foiegwa",
     "Type":"Restaurant",
     "Price":"$$$",
     "Address":"3001 Notre-Dame St W, Montreal, Quebec H4C 1N9",
     "Website":"http://www.foiegwa.com/"
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.57833334,45.4814471 ]
     },
     "properties": {
     "Place":"Atwater Cocktail Club",
     "Type":"Bar",
     "Price":"$$",
     "Address":"512 Atwater Ave, Montreal, Quebec H4C 2G5",
     "Website":"http://atwatercocktailclub.com/"
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.58098514,45.46975913 ]
     },
     "properties": {
     "Place":"Messorem",
     "Type":"Bar",
     "Price":"$$",
     "Address":"2233 Rue Pitt, Montreal, QC H4E 4H2",
     "Website":"http://messorem.co/"
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.58842821,45.46912293 ]
     },
     "properties": {
     "Place":"Riverside St-Henri",
     "Type":"Bar",
     "Price":"$$",
     "Address":"5020 Saint Ambroise St, Montreal, Quebec H4C 2G1",
     "Website":"http://www.riversidemtl.com/"
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.56711879,45.46098113 ]
     },
     "properties": {
     "Place":"BOSSA Pret a manger",
     "Type":"Restaurant",
     "Price":"$$",
     "Address":"4354 Wellington St, Montreal, Quebec H4G 1W4",
     "Website":"http://www.bossa.ca/"
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.62281484,45.47534453 ]
     },
     "properties": {
     "Place":"MELK Cafe Monkland",
     "Type":"Coffee shop",
     "Price":"$",
     "Address":"5612 Monkland Ave, Montreal, Quebec H4A 1E3",
     "Website":"http://melk-cafe.myshopify.com/"
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.62262998,45.47618871 ]
     },
     "properties": {
     "Place":"Ye Olde Orchard Pub & Grill",
     "Type":"Bar/Restaurant",
     "Price":"$$",
     "Address":"5563 Monkland Ave, Montreal, Quebec H4A 1E1",
     "Website":"http://yeoldeorchard.com/menu-ndg/"
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.62442321,45.47407321 ]
     },
     "properties": {
     "Place":"Le Petit Tokebi",
     "Type":"Restaurant",
     "Price":"$$",
     "Address":"5737 Monkland Ave, Montreal, Quebec H4A 1E7",
     "Website":""
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.62442386,45.479567 ]
     },
     "properties": {
     "Place":"Cote St Luc BBQ",
     "Type":"Restaurant",
     "Price":"$",
     "Address":"5403 Cote Saint Luc Rd, Montreal, Quebec H3X 2C3",
     "Website":"http://www.cotestlucbbq.com/?lang=fr"
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.62241583,45.49758824 ]
     },
     "properties": {
     "Place":"Resto-Bar La Maisonnee",
     "Type":"Bar/Restaurant",
     "Price":"$",
     "Address":"5385 Av. Gatineau, Montreal, QC H3T 1X2",
     "Website":"http://www.restobarmaisonnee.com/"
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.60190179,45.52281907 ]
     },
     "properties": {
     "Place":"St-Viateur Bagel",
     "Type":"Restaurant",
     "Price":"$",
     "Address":"263 Rue Saint-Viateur O, Montreal, QC H2V 1Y1",
     "Website":"http://www.stviateurbagel.com/"
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.59342746,45.51886728 ]
     },
     "properties": {
     "Place":"La Buvette Chez Simone",
     "Type":"Bar/Restaurant",
     "Price":"$$",
     "Address":"4869 Park Ave, Montreal, Quebec H2V 4E7",
     "Website":"http://labuvettechezsimone.com/"
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.55627195,45.49979238 ]
     },
     "properties": {
     "Place":"HA Vieux-Montreal",
     "Type":"Restaurant",
     "Price":"$$",
     "Address":"600 William St, Montreal, Quebec H3C 1N6",
     "Website":"http://www.restaurantha.com/"
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.60806947,45.53087965 ]
     },
     "properties": {
     "Place":"Pizza Bouquet",
     "Type":"Restaurant",
     "Price":"$",
     "Address":"45 Rue Beaubien E, Montreal, QC H2S 1P8",
     "Website":"http://pizzabouquet.ca/"
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.61891694,45.468803 ]
     },
     "properties": {
     "Place":"Honey Martin",
     "Type":"Bar",
     "Price":"$$",
     "Address":"5916 Sherbrooke St W, Montreal, Quebec H4A 1X7",
     "Website":""
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.60771343,45.47573613 ]
     },
     "properties": {
     "Place":"NextDoor Pub & Grill",
     "Type":"Bar",
     "Price":"$",
     "Address":"5175A Sherbrooke St W, Montreal, Quebec H4A 1T5",
     "Website":"http://www.nextdoorpub.ca/"
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.62342441,45.46661063 ]
     },
     "properties": {
     "Place":"Boustan NDG",
     "Type":"Restaurant",
     "Price":"$",
     "Address":"6202 Sherbrooke St W, Montreal, Quebec H4B 1M2",
     "Website":"https://boustan.ca/menus/"
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.58590148,45.52003652 ]
     },
     "properties": {
     "Place":"Le Salon Daome",
     "Type":"Bar",
     "Price":"$$",
     "Address":"4465 St Laurent Blvd, Montreal, Quebec H2W 1Z8",
     "Website":""
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.60213781,45.52718129 ]
     },
     "properties": {
     "Place":"Ping Pong Club",
     "Type":"Bar",
     "Price":"$$",
     "Address":"5788 St Laurent Blvd, Montreal, Quebec H2T 1S8",
     "Website":"http://www.pingpongclub.ca/"
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.57760192,45.49832813 ]
     },
     "properties": {
     "Place":"Stogies Cigar Lounge",
     "Type":"Bar",
     "Price":"$$",
     "Address":"2015 Crescent St, Montreal, Quebec H3G 2C1",
     "Website":"http://www.stogiescigars.com/"
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.57964178,45.49375316 ]
     },
     "properties": {
     "Place":"Restaurant PM",
     "Type":"Restaurant",
     "Price":"$",
     "Address":"1809 Saint-Catherine St W, Montreal, Quebec H3H 1M2",
     "Website":"http://www.restaurantpm.com/"
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.58458581,45.48886164 ]
     },
     "properties": {
     "Place":"IMADAKE IZAKAYA",
     "Type":"Bar/Restaurant",
     "Price":"$$",
     "Address":"4006 Saint-Catherine St, Montreal, Quebec H3Z 1P2",
     "Website":"http://www.imadake.ca/"
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.59734993,45.51844912 ]
     },
     "properties": {
     "Place":"Lemeac",
     "Type":"Restaurant",
     "Price":"$$$",
     "Address":"1045 Av. Laurier O, Outremont, QC H2V 2L1",
     "Website":"https://www.restaurantlemeac.com/"
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.62328435,45.4755278 ]
     },
     "properties": {
     "Place":"Bangkok Express",
     "Type":"Restaurant",
     "Price":"$$",
     "Address":"5645 Monkland Ave, Montreal, Quebec H4A 1E2",
     "Website":"https://www.bangkok-express.ca/"
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.60789798,45.53073566 ]
     },
     "properties": {
     "Place":"Restaurant Gus",
     "Type":"Restaurant",
     "Price":"$$$",
     "Address":"38 Rue Beaubien E, Montreal, QC H2S 1P8",
     "Website":"http://restaurantgus.com/"
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.58200775,45.52546565 ]
     },
     "properties": {
     "Place":"Fitzroy",
     "Type":"Bar",
     "Price":"$$",
     "Address":"551 Mont-Royal Ave E, Montreal, Quebec H2J 1W4",
     "Website":"http://www.fitzroymtl.com/"
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.57116018,45.50982911 ]
     },
     "properties": {
     "Place":"BENELUX",
     "Type":"Bar",
     "Price":"$$",
     "Address":"245 Sherbrooke St W, Montreal, Quebec H2X 1X8",
     "Website":"http://brasseriebenelux.com/sherbrooke"
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.55602277,45.50147273 ]
     },
     "properties": {
     "Place":"BARROCO",
     "Type":"Restaurant",
     "Price":"$$$",
     "Address":"312 Saint-Paul St W, Montreal, Quebec H2Y 2A3",
     "Website":"https://www.barroco.ca/menu-fr/"
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.55847002,45.49527733 ]
     },
     "properties": {
     "Place":"Mano Cornuto",
     "Type":"Restaurant",
     "Price":"$$",
     "Address":"988 Ottawa St, Montreal, Quebec H3C 1S3",
     "Website":"http://www.manocornuto.com/"
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.56845155,45.48758732 ]
     },
     "properties": {
     "Place":"Perles et Paddock",
     "Type":"Restaurant",
     "Price":"$$$",
     "Address":"403 Rue des Seigneurs, Montreal, QC H3J 1X7",
     "Website":"https://www.perlesetpaddock.com/"
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.56763625,45.47969942 ]
     },
     "properties": {
     "Place":"Florence Cafe",
     "Type":"Coffee shop",
     "Price":"$",
     "Address":"2425 Centre St, Montreal, Quebec H3K 1J9",
     "Website":""
     }
   },
   {
     "type": "Feature",
     "geometry": {
        "type": "Point",
        "coordinates":  [ -73.59068106,45.46788858 ]
     },

     "properties": {
     "Place":"Terrasse St-Ambroise",
     "Type":"Bar",
     "Price":"$",
     "Address":"5080 Saint Ambroise St, Montreal, Quebec H4C 2G1",
     "Website":"https://mcauslan.com/en/terrace/menu/"
    }
}
                    ]
                }
                });
  
          // Add a symbol layer for bar/restaurants
          map.addLayer({
            'id': 'place',
            'type': 'symbol',
            'source': 'place',
            'layout': {
                'icon-image': 'custom-marker',
                'icon-size': 0.07
                
                
            }
         });
        }
    );

        // Create a popup, but don't add it to the map yet.
        const popup = new maplibregl.Popup
        ({
            closeButton: true,
            closeOnClick: true
        });

        map.on('mouseenter', 'place', (e) => 
        
        {
            // Change the cursor style as a UI indicator.
            map.getCanvas().style.cursor = 'pointer';

            const coordinates = e.features[0].geometry.coordinates.slice();
            const place = e.features[0];

            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            // Populate the popup and set its coordinates
            // based on the feature found.
            popup.setLngLat(coordinates)
            .setHTML(`
                <h3>${place.properties.Place}</h3>
                <p>Type: ${place.properties.Type}</p>
                <p>Price: ${place.properties.Price}</p>
                <p>Address: ${place.properties.Address}</p>
                <p>Website: ${place.properties.Website ? `<a href=${place.properties.Website}" target="_blank">${place.properties.Website}</a>` :'Not available'}</p>
                `)
                .addTo(map);
        });

        map.on('mouseleave', 'place', () => {
            map.getCanvas().style.cursor = '';
            
        });
});
    