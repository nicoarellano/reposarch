const map = new maplibregl.Map({
  container: 'map',
  style:
    'https://api.maptiler.com/maps/4049a80c-b10e-4b0b-bed2-1c2a0597cd2a/style.json?key=RIZ6BCBj3R5IJWHw5HmN',
  center: [155, 30],
  zoom: 1.88,
});

map.on('styledata', () => {
  // ⚠️⚠️ Alvin your markers were not showing up because you were trying to add the markers before the style was loaded. I moved the code to add the markers inside the styledata event listener. This event listener is triggered when the style has been loaded.
  map.loadImage('./images/RedBullBCOne.png', (error, image) => {
    if (error) throw error;
    map.addImage('custom-marker', image);

    map.addSource('places', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            //Red Bull BC One 2004
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [7.249954099253301, 47.13597682713882],
            },
            properties: {
              Name: 'Red Bull BC One 2004',
              Image: './images/b-boy omar.jpg',
              Location:
                'Chessu Coupole, Zentralstrasse 79l, 2502 Biel, Switzerland',
              Description: 'Champion B-boy Omar, representing USA',
              Video: 'https://youtu.be/ME0nMuawtEg?si=rWYeJF8kwjpno7vB',
            },
          },
          {
            //Red Bull BC One 2005
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [13.38869561302269, 52.52392474052428],
            },
            properties: {
              Name: 'Red Bull BC One 2005',
              Image: './images/b-boy lilou.avif',
              Location:
                'Friedrichstadt-Palast, Friedrichstraße 107, 10117 Berlin, Germany',
              Description: 'Champion B-boy Lilou, representing France',
              Video: 'https://youtu.be/JKQ83Bo9g3s?si=m_3t7q5Q6Iv-3vb3',
            },
          },
          {
            //Red Bull BC One 2006
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-46.662115270331185, -23.528016372888246],
            },
            properties: {
              Name: 'Red Bull BC One 2006',
              Image: './images/b-boy hong10.jpg',
              Location:
                'Av. Mário de Andrade, 664 - Barra Funda, São Paulo - SP, 01156-001, Brazil',
              Description: 'Champion B-boy Hong10, representing South Korea',
              Video: 'https://youtu.be/O0yeU4vYbMY?si=0Gf0YkCOVjQ0Sryz',
            },
          },
          {
            //Red Bull BC One 2007
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [27.90374734835254, -26.260418412961002],
            },
            properties: {
              Name: 'Red Bull BC One 2007',
              Image: './images/b-boy ronnie.jpg',
              Location: 'Klipspruit 318-Iq, Soweto, 1809, South Africa',
              Description: 'Champion B-boy Ronnie, representing USA',
              Video: 'https://youtu.be/EFZUV6JF7_Y?si=exq255D6udqjlew0',
            },
          },
          {
            //Red Bull BC One 2008
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [2.3703632438351576, 48.890181029266785],
            },
            properties: {
              Name: 'Red Bull BC One 2008',
              Image: './images/b-boy wing.jpg',
              Location: '5 Rue Curial, 75019 Paris, France',
              Description: 'Champion B-boy Wing, representing South Korea',
              Video: 'https://youtu.be/Z2YgNJMz12A?si=2PzCdzXSXDp38GBh',
            },
          },
          {
            //Red Bull BC One 2009
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-73.994133508816, 40.752917715156514],
            },
            properties: {
              Name: 'Red Bull BC One 2009',
              Image: './images/b-boy lilou2.avif',
              Location: '311 W 34th St., New York, NY 10001, United States',
              Description: 'Champion B-boy Lilou, representing France',
              Video: 'https://youtu.be/e8m-PQdFqV4?si=iO05yHKUHnT0cpMf',
            },
          },
          {
            //Red Bull BC One 2010
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [139.69813548579106, 35.664302445967266],
            },
            properties: {
              Name: 'Red Bull BC One 2010',
              Image: './images/b-boy neguin.jpg',
              Location: '2 Chome-1-1 Jinnan, Shibuya, Tokyo 150-0041, Japan',
              Description: 'Champion B-boy Neguin, representing Brazil',
              Video: 'https://youtu.be/8ZqVTXksYa4?si=cgt5xL1OoIlCBLh0',
            },
          },
          {
            //Red Bull BC One 2011
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [37.62000910407522, 55.770629040469544],
            },
            properties: {
              Name: 'Red Bull BC One 2011',
              Image: './images/b-boy roxrite.avif',
              Location: 'Tsvetnoy Blvd, 13, Moscow, Russia, 127051',
              Description: 'Champion B-boy Roxrite, representing USA',
              Video: 'https://youtu.be/RS0mFARO1x4?si=Zu0Q2j2BZzy8OfxA',
            },
          },
          {
            //Red Bull BC One 2012
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-43.180337250197226, -22.912039431840213],
            },
            properties: {
              Name: 'Red Bull BC One 2012',
              Image: './images/b-boy mounir.jpg',
              Location:
                'R. dos Arcos, 24 - a 50 - Centro, Rio de Janeiro - RJ, 20230-060, Brazil',
              Description: 'Champion B-boy Mounir, representing France',
              Video: 'https://youtu.be/3YIx3vARyEs?si=y2K4V4ax_5Haj9-4',
            },
          },
          {
            //Red Bull BC One 2013
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [127.07595103636464, 37.516249037353305],
            },
            properties: {
              Name: 'Red Bull BC One 2013',
              Image: './images/b-boy hong 10.avif',
              Location: '25 Olympic-ro, Songpa District, Seoul, South Korea',
              Description: 'Champion B-boy Hong10, representing South Korea',
              Video: 'https://youtu.be/N5Qu7t4Mb4I?si=dH-p848xuHJYP45M',
            },
          },
          {
            //Red Bull BC One 2014
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [2.3912968724455084, 48.89086871473603],
            },
            properties: {
              Name: 'Red Bull BC One 2014',
              Image: './images/b-boy menno.jpg',
              Location: '211 Av. Jean Jaurès, 75019 Paris, France',
              Description: 'Champion B-boy Menno, representing Netherlands',
              Video: 'https://youtu.be/hJb6sTLnY80?si=3mD2dhSCQgpM7Mt8',
            },
          },
          {
            //Red Bull BC One 2015
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [12.474919287849303, 41.833980891839815],
            },
            properties: {
              Name: 'Red Bull BC One 2015',
              Image: './images/b-boy victor.avif',
              Location: 'Piazza John Kennedy, 1, 00144 Roma RM, Italy',
              Description: 'Champion B-boy Victor, representing USA',
              Video: 'https://youtu.be/frLZOat3qKY?si=eUG5yiBVvm6CL_XG',
            },
          },
          {
            //Red Bull BC One 2016
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [136.9025430052995, 35.18313291238151],
            },
            properties: {
              Name: 'Red Bull BC One 2016',
              Image: './images/b-boy issei.jpg',
              Location:
                '1-1 Ninomaru, Naka Ward, Nagoya, Aichi 460-0032, Japan',
              Description: 'Champion B-boy Issei, representing Japan',
              Video: 'https://youtu.be/veAripGsyuM?si=oCKDe8CuMFEpVAse',
            },
          },
          {
            //Red Bull BC One 2017
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [4.868943945998154, 52.38684140631656],
            },
            properties: {
              Name: 'Red Bull BC One 2017',
              Image: './images/b-boy menno.avif',
              Location: 'Klönneplein 1, 1014 DD Amsterdam, Netherlands',
              Description: 'Champion B-boy Menno, representing Netherlands',
              Video: 'https://youtu.be/zsE4Lb1-MmE?si=RxO-PA4bNTdIE3Ft',
            },
          },
          {
            //Red Bull BC One 2018_bboy
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [8.551076107862798, 47.41159761669553],
            },
            properties: {
              Name: 'Red Bull BC One 2018',
              Image: './images/b-boy lil zoo.jpg',
              Location: 'Wallisellenstrasse 45, 8050 Zürich, Switzerland',
              Description: 'Champion B-boy Lil Zoo, representing Austria',
              Video: 'https://youtu.be/XkqFeIQ-e98?si=ay5FludT3adWLAfI',
            },
          },
          {
            //Red Bull BC One 2018_bgirl
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [8.552241771689495, 47.411658296363186],
            },
            properties: {
              Name: 'Red Bull BC One 2018',
              Image: './images/b-girl ami.avif',
              Location: 'Wallisellenstrasse 45, 8050 Zürich, Switzerland',
              Description: 'Champion B-girl Ami, representing Japan',
              Video: 'https://youtu.be/GmoCdid5P2E?si=csHf0XFiRgue9Ucm',
            },
          },
          {
            //Red Bull BC One 2019_bboy
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [72.8145197987109, 18.990116880369456],
            },
            properties: {
              Name: 'Red Bull BC One 2019',
              Image: './images/b-boy menno3.avif',
              Location:
                'Lala Lajpatrai Marg, Lotus Colony, Worli, Mumbai, Maharashtra 400018, India',
              Description: 'Champion B-boy Menno, representing Netherlands',
              Video: 'https://youtu.be/FhwzYeCWxf4?si=VTnoQDX7UecetiTu',
            },
          },
          {
            //Red Bull BC One 2019_bgirl
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [72.81491703625724, 18.99018373985318],
            },
            properties: {
              Name: 'Red Bull BC One 2019',
              Image: './images/b-girl kastet.jpg',
              Location:
                'Lala Lajpatrai Marg, Lotus Colony, Worli, Mumbai, Maharashtra 400018, India',
              Description: 'Champion B-girl Kastet, representing Russia',
              Video: 'https://www.youtube.com/watch?v=WRGSRQEoCKY',
            },
          },
          {
            //Red Bull BC One 2020_bboy
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [13.02748114611748, 47.825250522130204],
            },
            properties: {
              Name: 'Red Bull BC One 2020',
              Image: './images/b-boy shigekix.avif',
              Location: '5020 Salzburg, Austria',
              Description: 'Champion B-boy Shigekix, representing Japan',
              Video: 'https://youtu.be/jmLSoBxxyhc?si=JtCaF9hCLTx6gQLE',
            },
          },
          {
            //Red Bull BC One 2020_bgirl
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [13.028413861773117, 47.82536980194354],
            },
            properties: {
              Name: 'Red Bull BC One 2020',
              Image: './images/b-girl kastet2.jpg',
              Location: '5020 Salzburg, Austria',
              Description: 'Champion B-girl Kastet, representing Russia',
              Video: 'https://youtu.be/ne_w_zaNOLs?si=cw5_rf9SOdgR9tTJ',
            },
          },
          {
            //Red Bull BC One 2021_bboy
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [18.640673984934864, 54.350932224399116],
            },
            properties: {
              Name: 'Red Bull BC One 2021',
              Image: './images/b-boy amir.avif',
              Location: 'Nowe Ogrody 8/12, 80-803 Gdańsk, Poland',
              Description: 'Champion B-boy Amir, representing Kazakhstan',
              Video: 'https://youtu.be/0qzIhcOq2HM?si=hgbPPFYnZm8xbPfn',
            },
          },
          {
            //Red Bull BC One 2021_bgirl
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [18.641371680852075, 54.35096791517063],
            },
            properties: {
              Name: 'Red Bull BC One 2021',
              Image: './images/b-girl logistx.jpg',
              Location: 'Nowe Ogrody 8/12, 80-803 Gdańsk, Poland',
              Description: 'Champion B-girl Logistx, representing USA',
              Video: 'https://youtu.be/XKE4m5WXKj4?si=VwQG4uDYlTfeb0Qy',
            },
          },
          {
            //Red Bull BC One 2022_bboy
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-73.99366614579246, 40.750108786812575],
            },
            properties: {
              Name: 'Red Bull BC One 2022',
              Image: './images/b-boy victor2.avif',
              Location: '311 W 34th St., New York, NY 10001, United States',
              Description: 'Champion B-boy Victor, representing USA',
              Video: 'https://youtu.be/9CWzXWW1Q-s?si=MdBZpdBUEqv8ro6-',
            },
          },
          {
            //Red Bull BC One 2022_bgirl
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-73.99305487377865, 40.75096616297148],
            },
            properties: {
              Name: 'Red Bull BC One 2022',
              Image: './images/b-girl india.avif',
              Location: '311 W 34th St., New York, NY 10001, United States',
              Description: 'Champion B-girl India, representing Netherlands',
              Video: 'https://youtu.be/gq27dTJUkKE?si=Mb_xB7B0Et3fXvL',
            },
          },
          {
            //Red Bull BC One 2023_bboy
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [2.248813740903387, 48.84731308622801],
            },
            properties: {
              Name: 'Red Bull BC One 2023',
              Image: './images/b-boy hong103.jpg',
              Location: '2 Av. Gordon Bennett, 75016 Paris, France',
              Description: 'Champion B-boy Hong10, representing South Korea',
              Video: 'https://youtu.be/w1hqlImawmc?si=PT2aJuve3xdqglQS',
            },
          },
          {
            //Red Bull BC One 2023_bgirl
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [2.2497278747744076, 48.847137668763736],
            },
            properties: {
              Name: 'Red Bull BC One 2023',
              Image: './images/b-girl ami.avif',
              Location: '2 Av. Gordon Bennett, 75016 Paris, France',
              Description: 'Champion B-girl Ami, representing Japan',
              Video: 'https://youtu.be/c3DmalBYa-A?si=XabuAuUgL96hMtOj',
            },
          },
        ],
      },
    });

    // Add a layer showing the places.
    map.addLayer({
      id: 'places',
      type: 'symbol',
      source: 'places',
      layout: {
        'icon-image': 'custom-marker',
        'icon-overlap': 'always',
        'icon-size': 0.08,
      },
    });

    // Create a popup, but don't add it to the map yet.
    const popup = new maplibregl.Popup({
      closeButton: true,
      closeOnClick: false,
    });

    //Location Pop-ups
    map.on('click', 'places', (e) => {
      const coordinates = e.features[0].geometry.coordinates.slice();
      const visit = e.features[0];

      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      new maplibregl.Popup()
        .setLngLat(coordinates)
        .setHTML(
          `
                <h3>${visit.properties.Name}</h3>
                <img src="${visit.properties.Image}" alt="${
            visit.properties.PlaceName
          }" style="max-width: 100%; height: auto;">
                <p>Location: ${visit.properties.Location}</p>
                <p>Description: ${visit.properties.Description}</p>
                <p>Video: ${
                  visit.properties.Video
                    ? `<a href=${visit.properties.Video}" target="_blank">${visit.properties.Video}</a>`
                    : 'Not available'
                }</p>
                `
        )
        .addTo(map);
    });

    map.on('mouseenter', 'places', () => {
      map.getCanvas().style.cursor = 'pointer';

      const coordinates = e.features[0].geometry.coordinates.slice();
      const description = e.features[0].properties.description;
    });
  });
});
