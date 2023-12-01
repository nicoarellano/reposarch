const map = new maplibregl.Map({
    container: 'map',
    style:
        'https://api.maptiler.com/maps/470d6019-657f-4f7d-a018-6ec6ae0d0093/style.json?key=4xF6FrxAyNgBUQ4n4bUN',
    center: [-75.67950422374716,45.39769113511524],
    zoom: 11
});

map.on('load', () => {
    // Book Marker
    map.loadImage(
        'https://img.icons8.com/?size=256&id=453&format=png',
        (error, image) => {
            if (error) throw error;
            map.addImage('custom-marker', image);
        
            //Adding Bookstores
            map.addSource('OttawaBookStores', {
                'type': 'geojson',
                'data': {
                    "type": "FeatureCollection",
                    "features": [
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.80659,45.34696 ]
                     },
                     "properties": {
                     "Shop":"Coles - Bayshore Shopping Centre ",
                     "Neighbourhood":"Qualicum",
                     "Hours":"9am - 9pm",
                     "Location":"100 Bayshore Dr",
                     "Rating":4.5
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.76918,45.37329 ]
                     },
                     "properties": {
                     "Shop":"Coles - Carlingwood Shopping Centre",
                     "Neighbourhood":"Bramemar Park",
                     "Hours":"10am - 8pm",
                     "Location":"2121 Carling Ave #23",
                     "Rating":4.4
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.73892445,45.35865359 ]
                     },
                     "properties": {
                     "Shop":"The Comic Book Shoppe",
                     "Neighbourhood":"City View",
                     "Hours":"9:30am - 9pm",
                     "Location":"1400 Clyde Ave",
                     "Rating":4.6
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.73647752,45.35537594 ]
                     },
                     "properties": {
                     "Shop":"Book Market Inc",
                     "Neighbourhood":"City View",
                     "Hours":"10am - 4pm",
                     "Location":"1534 Merivale Rd",
                     "Rating":4.2
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.7266669,45.40221259 ]
                     },
                     "properties": {
                     "Shop":"The Spaniel's Tale",
                     "Neighbourhood":"Hintonburg",
                     "Hours":"10am - 6pm",
                     "Location":"1131 Wellington St. West",
                     "Rating":4.9
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.69739615,45.38342257 ]
                     },
                     "properties": {
                     "Shop":"Carleton University Bookstore",
                     "Neighbourhood":"Carleton University",
                     "Hours":"8:30am - 4:30pm",
                     "Location":"University Centre, 173 Nideyinàn",
                     "Rating":4
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.65592171,45.35633946 ]
                     },
                     "properties": {
                     "Shop":"Indigo",
                     "Neighbourhood":"GreenBoro",
                     "Hours":"10am  - 9pm",
                     "Location":"2210 Bank St",
                     "Rating":4.5
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.68987002,45.39131865 ]
                     },
                     "properties": {
                     "Shop":"Haven",
                     "Neighbourhood":"Old Ottawa South",
                     "Hours":"9am - 6 pm",
                     "Location":"43 Seneca St",
                     "Rating":4.4
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.67886917,45.3848338 ]
                     },
                     "properties": {
                     "Shop":"Coles - Billings Bridge Shopping Centre",
                     "Neighbourhood":"Alta Vista",
                     "Hours":"10am - 8 pm",
                     "Location":"2269 Riverside Dr. Unit #33",
                     "Rating":4.4
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.68344135,45.39467842 ]
                     },
                     "properties": {
                     "Shop":"Black Squirrel Books & Expresso Bar",
                     "Neighbourhood":"Old Ottawa South",
                     "Hours":"9am - 5pm",
                     "Location":"1073 Bank St",
                     "Rating":4.7
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.68863172,45.40269306 ]
                     },
                     "properties": {
                     "Shop":"Octopus Books",
                     "Neighbourhood":"The Glebe",
                     "Hours":"10am - 6pm",
                     "Location":"116 Third Ave",
                     "Rating":4.7
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.69392904,45.41267935 ]
                     },
                     "properties": {
                     "Shop":"Book Bazaar",
                     "Neighbourhood":"Centretown",
                     "Hours":"10am - 5pm",
                     "Location":"417 Bank St",
                     "Rating":4.5
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.70002659,45.41945886 ]
                     },
                     "properties": {
                     "Shop":"The Comic Book Shoppe 2",
                     "Neighbourhood":"Centretown",
                     "Hours":"10am - 6pm",
                     "Location":"128 Bank St",
                     "Rating":4.5
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.69069015,45.41796947 ]
                     },
                     "properties": {
                     "Shop":"Perfect Books",
                     "Neighbourhood":"Centretown",
                     "Hours":"10am - 6pm",
                     "Location":"258 Elgin St",
                     "Rating":4.8
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.67763887,45.40805559 ]
                     },
                     "properties": {
                     "Shop":"Singing Pebble Books",
                     "Neighbourhood":"Old Ottawa East",
                     "Hours":"10am - 6pm",
                     "Location":"206 Main St",
                     "Rating":4.8
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.69295031,45.42521735 ]
                     },
                     "properties": {
                     "Shop":"Indigo",
                     "Neighbourhood":"Byward Market",
                     "Hours":"10 am - 9 pm",
                     "Location":"50 Rideau St",
                     "Rating":4.5
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.69564274,45.42899653 ]
                     },
                     "properties": {
                     "Shop":"Patrick McGahern Books",
                     "Neighbourhood":"Byward Market",
                     "Hours":"Weekends Only",
                     "Location":"11 Murray St",
                     "Rating":4.4
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.68451356,45.42943911 ]
                     },
                     "properties": {
                     "Shop":"All Books",
                     "Neighbourhood":"Lower Town",
                     "Hours":"1pm - 7pm",
                     "Location":"327 Rideau St",
                     "Rating":4.4
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.68066607,45.42764467 ]
                     },
                     "properties": {
                     "Shop":"Barely Bruised Books",
                     "Neighbourhood":"Lower Town",
                     "Hours":"11am - 7pm",
                     "Location":"315 Rue Wilbrod St 2",
                     "Rating":4.5
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.67698765,45.43955947 ]
                     },
                     "properties": {
                     "Shop":"Books on Beechwood",
                     "Neighbourhood":"New Edinburgh",
                     "Hours":"10am - 5pm ",
                     "Location":"35 Beechwood Ave",
                     "Rating":4.7
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.72978146,45.40070971 ]
                     },
                     "properties": {
                     "Shop":"World of Maps",
                     "Neighbourhood":"Hintonburgh",
                     "Hours":"9am - 5pm",
                     "Location":"1191 Wellington St. W",
                     "Rating":4.6
                     }
                   }
                 ]
                 }
            });

            // Add a symbol layer for bookstores
            map.addLayer({
                'id': 'OttawaBookStores',
                'type': 'symbol',
                'source': 'OttawaBookStores',
                'layout': {
                    'icon-image': 'custom-marker',
                    'icon-size': 0.1

                }
            });
        }
    )

  });


map.on('load', () => {
  // Cafe Marker
  map.loadImage(
      'https://img.icons8.com/?size=256&id=101277&format=png',
      (error, image) => {
          if (error) throw error;
          map.addImage('cafe-marker', image);
          
          //Adding Cafes
          map.addSource('Cafes', {
                  'type': 'geojson',
                  'data': {
                    "type": "FeatureCollection",
                    "features": [
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.72939312,45.34444883 ]
                     },
                     "properties": {
                     "Shop":"Second Cup Cafe",
                     "Neighbourhood":"Crestview",
                     "Hours":"7:30am - 10pm",
                     "Location":"1715 Merivale Rd",
                     "Rating":4.2
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.75371068,45.39162871 ]
                     },
                     "properties": {
                     "Shop":"Equator Cofee Westboro",
                     "Neighbourhood":"Westboro",
                     "Hours":"7am - 5pm",
                     "Location":"412 Churchill Ave N",
                     "Rating":4.6
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.73291867,45.38563521 ]
                     },
                     "properties": {
                     "Shop":"Cafe 1274",
                     "Neighbourhood":"Carlington",
                     "Hours":"7am -12 pm & 5pm - 10pm",
                     "Location":"1274 Carling Ave",
                     "Rating":4.3
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.73477358,45.39922097 ]
                     },
                     "properties": {
                     "Shop":"Bridgehead Coffee",
                     "Neighbourhood":"Wellington Village",
                     "Hours":"6am - 7pm",
                     "Location":"1277 Wellington St. W",
                     "Rating":4.4
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.73086551,45.40222233 ]
                     },
                     "properties": {
                     "Shop":"Drip House",
                     "Neighbourhood":"Hintonburg",
                     "Hours":"8am - 5pm",
                     "Location":"340B Parkdale Ave",
                     "Rating":4.5
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.73218016,45.39979912 ]
                     },
                     "properties": {
                     "Shop":"Second Cup Cafe",
                     "Neighbourhood":"Hintonburg",
                     "Hours":"6am - 7pm",
                     "Location":"1235 Wellington St. W",
                     "Rating":4.4
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.72369079,45.40498195 ]
                     },
                     "properties": {
                     "Shop":"The Ministry of Coffee and Social Affairs",
                     "Neighbourhood":"Hintonburg",
                     "Hours":"7am - 5pm",
                     "Location":"1013 Wellington St. W",
                     "Rating":4.5
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.72269943,45.40563254 ]
                     },
                     "properties": {
                     "Shop":"Ceaser Rosa's U-Rock Cafe",
                     "Neighbourhood":"Hintonburgh",
                     "Hours":"10am - 5pm",
                     "Location":"986 Wellington St. W",
                     "Rating":4.9
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.71720626,45.40537979 ]
                     },
                     "properties": {
                     "Shop":"Happy Goat Coffee Co.",
                     "Neighbourhood":"Little Italy",
                     "Hours":"8am - 6pm",
                     "Location":"35 Laurel St",
                     "Rating":4.7
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.71855804,45.40794426 ]
                     },
                     "properties": {
                     "Shop":"Art-Is-In Bakery",
                     "Neighbourhood":"Little Italy",
                     "Hours":"9am - 3pm",
                     "Location":"250 City Centre Ave #112",
                     "Rating":4.3
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.6828047,45.3929577 ]
                     },
                     "properties": {
                     "Shop":"Oat Coutore Oatmal Cafe",
                     "Neighbourhood":"Old Ottawa South",
                     "Hours":"7am - 5pm",
                     "Location":"1154 Bank St",
                     "Rating":4.5
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.68350265,45.39468379 ]
                     },
                     "properties": {
                     "Shop":"Black Squirrel Books & Expresso Bar",
                     "Neighbourhood":"Old Ottawa South ",
                     "Hours":"9am - 5pm",
                     "Location":"1073 Bank St",
                     "Rating":4.7
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.68306852,45.393915 ]
                     },
                     "properties": {
                     "Shop":"Stella Luna Gelato Cafe",
                     "Neighbourhood":"Old Ottawa South",
                     "Hours":"10am - 9pm",
                     "Location":"1103 Bank St",
                     "Rating":4.7
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.68974916,45.39145848 ]
                     },
                     "properties": {
                     "Shop":"Haven",
                     "Neighbourhood":"Old Ottawa South",
                     "Hours":"9am - 6pm",
                     "Location":"43 Seneca St",
                     "Rating":4.4
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.68806355,45.40274639 ]
                     },
                     "properties": {
                     "Shop":"Little Victories Coffee Roasters",
                     "Neighbourhood":"The Glebe",
                     "Hours":"7am - 6pm",
                     "Location":"801 Bank St",
                     "Rating":4.7
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.68882219,45.40356668 ]
                     },
                     "properties": {
                     "Shop":"Bridgehead Coffee",
                     "Neighbourhood":"The Glebe",
                     "Hours":"6:30am - 6pm",
                     "Location":"750 Bank St",
                     "Rating":4.4
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.68914255,45.40401628 ]
                     },
                     "properties": {
                     "Shop":"Happy Goat Coffee Co.",
                     "Neighbourhood":"The Glebe",
                     "Hours":"8am - 5pm",
                     "Location":"734 Bank St",
                     "Rating":4.6
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.69287749,45.40996938 ]
                     },
                     "properties": {
                     "Shop":"Arlington Five",
                     "Neighbourhood":"Centretown",
                     "Hours":"8am - 4pm",
                     "Location":"5 Arlington Ave",
                     "Rating":4.7
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.69294026,45.41714484 ]
                     },
                     "properties": {
                     "Shop":"Cafe Deluxe",
                     "Neighbourhood":"Centretown",
                     "Hours":"7am - 3pm",
                     "Location":"200 Kent St",
                     "Rating":4.7
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.70241148,45.41303022 ]
                     },
                     "properties": {
                     "Shop":"Art House",
                     "Neighbourhood":"Centretown",
                     "Hours":"10am - 10pm",
                     "Location":"555 Somerset St W",
                     "Rating":4.6
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.69742326,45.42259072 ]
                     },
                     "properties": {
                     "Shop":"Bridgehead",
                     "Neighbourhood":"Downtown",
                     "Hours":"6am - 6pm",
                     "Location":"96 Sparks St.",
                     "Rating":4.3
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.68860932,45.42604113 ]
                     },
                     "properties": {
                     "Shop":"Presse Cafe",
                     "Neighbourhood":"Byward Market",
                     "Hours":"7am - 5pm",
                     "Location":"130 Besserer St",
                     "Rating":4
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.69339944,45.42719992 ]
                     },
                     "properties": {
                     "Shop":"Planet Coffee",
                     "Neighbourhood":"Byward Market",
                     "Hours":"7:30am - 7pm",
                     "Location":"24a York St",
                     "Rating":4.3
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.69406462,45.42885642 ]
                     },
                     "properties": {
                     "Shop":"Swizzle's Cafe",
                     "Neighbourhood":"Byward Market",
                     "Hours":"7am - 6:30pm",
                     "Location":"47 Clarence St",
                     "Rating":4.3
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.69451962,45.432447 ]
                     },
                     "properties": {
                     "Shop":"Ideal Cafe",
                     "Neighbourhood":"Lower Town",
                     "Hours":"8am - 5pm",
                     "Location":"176 Dalhousie St",
                     "Rating":4.6
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.68438166,45.42478633 ]
                     },
                     "properties": {
                     "Shop":"Second Cup Cafe",
                     "Neighbourhood":"University of Ottawa",
                     "Hours":"7am - 8pm",
                     "Location":"153 Laurier Ave E",
                     "Rating":4
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.64046238,45.41031995 ]
                     },
                     "properties": {
                     "Shop":"Figaro Coffee House",
                     "Neighbourhood":"East Way Garden",
                     "Hours":"7am - 9pm",
                     "Location":"650 Industrial Ave",
                     "Rating":4.5
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.6835106,45.42950191 ]
                     },
                     "properties": {
                     "Shop":"Egg Pops Cafe & Grill",
                     "Neighbourhood":"Lower Town",
                     "Hours":"8am - 3pm",
                     "Location":"358 Rideau St",
                     "Rating":4.8
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.68063351,45.42762511 ]
                     },
                     "properties": {
                     "Shop":"Happy Goat Coffee",
                     "Neighbourhood":"Sandy Hill",
                     "Hours":"8am - 7pm",
                     "Location":"317 Rue Wilbrod St",
                     "Rating":4.5
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.67703111,45.43963065 ]
                     },
                     "properties": {
                     "Shop":"The Scone Witch",
                     "Neighbourhood":"New Edinburgh",
                     "Hours":"8am - 4pm",
                     "Location":"35 Beechwood Ave.",
                     "Rating":4.3
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.67293901,45.44168876 ]
                     },
                     "properties": {
                     "Shop":"Red Door Provisions",
                     "Neighbourhood":"New Edinburgh",
                     "Hours":"7am - 6pm",
                     "Location":"117 Beechwood Ave.",
                     "Rating":4.6
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.67203263,45.44207435 ]
                     },
                     "properties": {
                     "Shop":"Bridgehead Coffee",
                     "Neighbourhood":"New Edinburgh",
                     "Hours":"6am - 8pm",
                     "Location":"131 Beechwood Ave.",
                     "Rating":4.4
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.65408372,45.43133792 ]
                     },
                     "properties": {
                     "Shop":"Zourinos Cafe",
                     "Neighbourhood":"Castle Heights",
                     "Hours":"7am - 9pm",
                     "Location":"320 McArthur Ave.",
                     "Rating":4
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.6954335,45.42322217 ]
                     },
                     "properties": {
                     "Shop":"Little Victories Coffee Roasters",
                     "Neighbourhood":"Downtown",
                     "Hours":"7am - 6pm",
                     "Location":"44 Elgin St",
                     "Rating":4.6
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.70531213,45.40696217 ]
                     },
                     "properties": {
                     "Shop":"Oat Coutore Oatmal Cafe",
                     "Neighbourhood":"Chinatown",
                     "Hours":"7:30am - 3pm",
                     "Location":"750 Gladstone Ave",
                     "Rating":4.5
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.70543972,45.40604849 ]
                     },
                     "properties": {
                     "Shop":"Good Eats Cafe",
                     "Neighbourhood":"Chinatown",
                     "Hours":"8am - 9pm",
                     "Location":"207 Bell St N",
                     "Rating":4.3
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.70673704,45.40686479 ]
                     },
                     "properties": {
                     "Shop":"Bello E Buono Caffè Italiano",
                     "Neighbourhood":"Chinatown",
                     "Hours":"8am - 3pm",
                     "Location":"777 Gladstone Ave",
                     "Rating":4.9
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.70418528,45.40846817 ]
                     },
                     "properties": {
                     "Shop":"Besti Coffee",
                     "Neighbourhood":"Chinatown",
                     "Hours":"8am - 10pm",
                     "Location":"440 Bronson Ave",
                     "Rating":null
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.70645414,45.41100754 ]
                     },
                     "properties": {
                     "Shop":"Drip House",
                     "Neighbourhood":"Chinatown",
                     "Hours":"8am - 5pm & 6pm -12am",
                     "Location":"692 Somerset St W",
                     "Rating":4.6
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.71223567,45.4090932 ]
                     },
                     "properties": {
                     "Shop":"Ten Toes Coffee House & Laundry",
                     "Neighbourhood":"Little Italy",
                     "Hours":"8am - 8pm",
                     "Location":"837 Somerset St W",
                     "Rating":4.8
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.71319046,45.40727944 ]
                     },
                     "properties": {
                     "Shop":"Bridgehead Roastery and Coffeehouse",
                     "Neighbourhood":"Little Italy",
                     "Hours":"6am - 7pm",
                     "Location":"130 Anderson St",
                     "Rating":4.5
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.7128686,45.40647348 ]
                     },
                     "properties": {
                     "Shop":"Sanguiccio Deli-Cafe",
                     "Neighbourhood":"Little Italy",
                     "Hours":"11am - 6pm",
                     "Location":"183 Preston St",
                     "Rating":4.8
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.7130188,45.40606673 ]
                     },
                     "properties": {
                     "Shop":"Cosenza bar and cafe",
                     "Neighbourhood":"Little Italy",
                     "Hours":"10am - 11pm",
                     "Location":"184 Preston St",
                     "Rating":4.8
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.70654391,45.39964858 ]
                     },
                     "properties": {
                     "Shop":"Morning Owl",
                     "Neighbourhood":"The Glebe",
                     "Hours":"8am - 2pm",
                     "Location":"538 Rochester St",
                     "Rating":4.5
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.71055401,45.40172937 ]
                     },
                     "properties": {
                     "Shop":"Carmelito Cafe",
                     "Neighbourhood":"The Glebe",
                     "Hours":"9am - 9pm",
                     "Location":"354 Preston St",
                     "Rating":4.3
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.73018753,45.40193311 ]
                     },
                     "properties": {
                     "Shop":"Morning Owl",
                     "Neighbourhood":"Hintonburgh",
                     "Hours":"8am - 3pm",
                     "Location":"229 Armstrong St",
                     "Rating":4.7
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.69664941,45.38411663 ]
                     },
                     "properties": {
                     "Shop":"Bridgehead",
                     "Neighbourhood":"Carleton University",
                     "Hours":"7am - 7pm",
                     "Location":"Nicol Building",
                     "Rating":4.5
                     }
                   },
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ -75.69791395,45.38338417 ]
                     },
                     "properties": {
                     "Shop":"Rooster's Coffeehouse",
                     "Neighbourhood":"Carleton University",
                     "Hours":"8am - 8pm",
                     "Location":"Nideyinàn Buildin",
                     "Rating":4.4
                    }
                  }
                ]
                }

          });
  
          // Add a symbol layer for bookstores
          map.addLayer({
              'id': 'Cafes',
              'type': 'symbol',
              'source': 'Cafes',
              'layout': {
                  'icon-image': 'cafe-marker',
                  'icon-size': 0.1
  
              }
           });
      }
  )

});

  //Bookstore Popups
  map.on('click', 'OttawaBookStores', (e) => {
    const coordinates = e.features[0].geometry.coordinates.slice();
    const bookstore = e.features[0];


    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) 
      {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

        new maplibregl.Popup()
            .setLngLat(coordinates)
            .setHTML(`
                <h3>${bookstore.properties.Shop}</h3>
                <p>Neighbourhood: ${bookstore.properties.Neighbourhood}</p>
                <p>Hours: ${bookstore.properties.Hours}</p>
                <p>Location: ${bookstore.properties.Location}</p>
                <p>Rating: ${bookstore.properties.Rating}</p>
                `)
            .addTo(map);
    });

  //Cafe Popups
  map.on('click', 'Cafes', (e) => {
    const coordinates = e.features[0].geometry.coordinates.slice();
    const cafe = e.features[0];
  
  
    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) 
      {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }
  
        new maplibregl.Popup()
            .setLngLat(coordinates)
            .setHTML(`
                <h3>${cafe.properties.Shop}</h3>
                <p>Neighbourhood: ${cafe.properties.Neighbourhood}</p>
                <p>Hours: ${cafe.properties.Hours}</p>
                <p>Location: ${cafe.properties.Location}</p>
                <p>Rating: ${cafe.properties.Rating}</p>
                `)
            .addTo(map);
  });

  // Change the cursor to a pointer when the mouse is over the places layer.
  map.on('mouseenter', 'places', () => {
      map.getCanvas().style.cursor = 'pointer';
  });

  // Change it back to a pointer when it leaves.
  map.on('mouseleave', 'places', () => {
      map.getCanvas().style.cursor = '';
   });

  // After the last frame rendered before the map enters an "idle" state.
  map.on('idle', () => {
    // If these two layers were not added to the map, abort
      if (!map.getLayer('OttawaBookStores') || !map.getLayer('Cafes')) 
      {
      return;
      }
   
    // Enumerate ids of the layers.
      const toggleableLayerIds = ['OttawaBookStores', 'Cafes'];
   
    // Set up the corresponding toggle button for each layer.
      for (const id of toggleableLayerIds) {
    // Skip layers that already have a button set up.
      if (document.getElementById(id)) 
      {
      continue;
      }

    // Create a link.
      const link = document.createElement('a');
        link.id = id;
        link.href = '#';
        link.textContent = id;
        link.className = 'active';
   
    // Show or hide layer when the toggle is clicked.
      link.onclick = function (e) {
      const clickedLayer = this.textContent;
        e.preventDefault();
        e.stopPropagation();
   
     const visibility = map.getLayoutProperty(
      clickedLayer,
      'visibility'
      );
   
  // Toggle layer visibility by changing the layout object's visibility property.
    if (visibility === 'visible') {
       map.setLayoutProperty(clickedLayer, 'visibility', 'none');
        this.className = '';
    } else {
        this.className = 'active';
      map.setLayoutProperty(
        clickedLayer,
        'visibility',
        'visible'
      );
      }
  };
   
  const layers = document.getElementById('menu');
  layers.appendChild(link);
  }


  });

