const map = new maplibregl.Map({
  container: 'map',
  style:
    'https://api.maptiler.com/maps/4049a80c-b10e-4b0b-bed2-1c2a0597cd2a/style.json?key=RIZ6BCBj3R5IJWHw5HmN',
  center: [10, 30],
  zoom: 1.8,
});

map.loadImage('./images/RedBullBCOne.png', (error, image) => {
  if (error) throw error;
  map.addImage('custom-marker', image);

  map.addSource('places', {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: [
        {
          // Red Bull BC One 2004
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
          // 2004 LineString
          type: 'Feature',
          properties: {
            Name: 'Red Bull BC One 2004',
            lineId: 'line-2004',
          },
          geometry: {
            type: 'LineString',
            coordinates: [
              [-98.50609868950923, 29.40421103003061],
              [7.249954099253301, 47.13597682713882],
            ],
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
          // 2005 LineString
          type: 'Feature',
          properties: { Name: 'Red Bull BC One 2005', lineId: 'line-2005' },
          geometry: {
            type: 'LineString',
            coordinates: [
              [2.3533057144091742, 48.85928070543886],
              [13.38869561302269, 52.52392474052428],
            ],
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
          // 2006 LineString
          type: 'Feature',
          properties: { Name: 'Red Bull BC One 2006', lineId: 'line-2006' },
          geometry: {
            type: 'LineString',
            coordinates: [
              [126.98983792024688, 37.531670181705366],
              [-46.662115270331185, -23.528016372888246],
            ],
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
          // 2007 LineString
          type: 'Feature',
          properties: { Name: 'Red Bull BC One 2007', lineId: 'line-2007' },
          geometry: {
            type: 'LineString',
            coordinates: [
              [-117.96829054017074, 35.125819243103194],
              [27.90374734835254, -26.260418412961002],
            ],
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
          // 2008 LineString
          type: 'Feature',
          properties: { Name: 'Red Bull BC One 2008', lineId: 'line-2008' },
          geometry: {
            type: 'LineString',
            coordinates: [
              [126.98983792024688, 37.531670181705366],
              [2.3703632438351576, 48.890181029266785],
            ],
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
          // 2009 LineString
          type: 'Feature',
          properties: { Name: 'Red Bull BC One 2009', lineId: 'line-2009' },
          geometry: {
            type: 'LineString',
            coordinates: [
              [2.3533057144091742, 48.85928070543886],
              [-73.994133508816, 40.752917715156514],
            ],
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
          // 2010 LineString
          type: 'Feature',
          properties: { Name: 'Red Bull BC One 2010', lineId: 'line-2010' },
          geometry: {
            type: 'LineString',
            coordinates: [
              [-53.463024820524865, -24.953713547111747],
              [139.69813548579106, 35.664302445967266],
            ],
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
          // 2011 LineString
          type: 'Feature',
          properties: { Name: 'Red Bull BC One 2011', lineId: 'line-2011' },
          geometry: {
            type: 'LineString',
            coordinates: [
              [-122.8159042009737, 38.54547255060581],
              [37.62000910407522, 55.770629040469544],
            ],
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
          // 2012 LineString
          type: 'Feature',
          properties: { Name: 'Red Bull BC One 2012', lineId: 'line-2012' },
          geometry: {
            type: 'LineString',
            coordinates: [
              [2.3533057144091742, 48.85928070543886],
              [-43.180337250197226, -22.912039431840213],
            ],
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
          // 2014 LineString
          type: 'Feature',
          properties: { Name: 'Red Bull BC One 2014', lineId: 'line-2014' },
          geometry: {
            type: 'LineString',
            coordinates: [
              [5.0838307159131375, 51.5579725071392],
              [2.3912968724455084, 48.89086871473603],
            ],
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
          // 2015 LineString
          type: 'Feature',
          properties: { Name: 'Red Bull BC One 2015', lineId: 'line-2015' },
          geometry: {
            type: 'LineString',
            coordinates: [
              [-81.41087321554845, 28.30839476279948],
              [12.474919287849303, 41.833980891839815],
            ],
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
            Location: '1-1 Ninomaru, Naka Ward, Nagoya, Aichi 460-0032, Japan',
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
            Name: 'Red Bull BC One 2018a',
            Image: './images/b-boy lil zoo.jpg',
            Location: 'Wallisellenstrasse 45, 8050 Zürich, Switzerland',
            Description: 'Champion B-boy Lil Zoo, representing Austria',
            Video: 'https://youtu.be/XkqFeIQ-e98?si=ay5FludT3adWLAfI',
          },
        },

        {
          // 2018 bboy LineString
          type: 'Feature',
          properties: { Name: 'Red Bull BC One 2018a', lineId: 'line-2018a' },
          geometry: {
            type: 'LineString',
            coordinates: [
              [11.394922181387273, 47.26335931976192],
              [8.551076107862798, 47.41159761669553],
            ],
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
            Name: 'Red Bull BC One 2018b',
            Image: './images/b-girl ami.avif',
            Location: 'Wallisellenstrasse 45, 8050 Zürich, Switzerland',
            Description: 'Champion B-girl Ami, representing Japan',
            Video: 'https://youtu.be/GmoCdid5P2E?si=csHf0XFiRgue9Ucm',
          },
        },

        {
          // 2018 bgirl LineString
          type: 'Feature',
          properties: { Name: 'Red Bull BC One 2018b', lineId: 'line-2018b' },
          geometry: {
            type: 'LineString',
            coordinates: [
              [139.6631061593892, 35.87672557937593],
              [8.552241771689495, 47.411658296363186],
            ],
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
            Name: 'Red Bull BC One 2019a',
            Image: './images/b-boy menno3.avif',
            Location:
              'Lala Lajpatrai Marg, Lotus Colony, Worli, Mumbai, Maharashtra 400018, India',
            Description: 'Champion B-boy Menno, representing Netherlands',
            Video: 'https://youtu.be/FhwzYeCWxf4?si=VTnoQDX7UecetiTu',
          },
        },

        {
          // 2019 bboy LineString
          type: 'Feature',
          properties: { Name: 'Red Bull BC One 2019a', lineId: 'line-2019a' },
          geometry: {
            type: 'LineString',
            coordinates: [
              [5.0838307159131375, 51.5579725071392],
              [72.8145197987109, 18.990116880369456],
            ],
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
            Name: 'Red Bull BC One 2019b',
            Image: './images/b-girl kastet.jpg',
            Location:
              'Lala Lajpatrai Marg, Lotus Colony, Worli, Mumbai, Maharashtra 400018, India',
            Description: 'Champion B-girl Kastet, representing Russia',
            Video: 'https://www.youtube.com/watch?v=WRGSRQEoCKY',
          },
        },

        {
          // 2019 bgirl LineString
          type: 'Feature',
          properties: { Name: 'Red Bull BC One 2019b', lineId: 'line-2019b' },
          geometry: {
            type: 'LineString',
            coordinates: [
              [38.97551530954024, 45.02709853316878],
              [72.81491703625724, 18.99018373985318],
            ],
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
            Name: 'Red Bull BC One 2020a',
            Image: './images/b-boy shigekix.avif',
            Location: '5020 Salzburg, Austria',
            Description: 'Champion B-boy Shigekix, representing Japan',
            Video: 'https://youtu.be/jmLSoBxxyhc?si=JtCaF9hCLTx6gQLE',
          },
        },

        {
          // 2020 bboy LineString
          type: 'Feature',
          properties: { Name: 'Red Bull BC One 2020a', lineId: 'line-2020a' },
          geometry: {
            type: 'LineString',
            coordinates: [
              [135.5529187397389, 34.685262971990284],
              [13.02748114611748, 47.825250522130204],
            ],
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
            Name: 'Red Bull BC One 2020b',
            Image: './images/b-girl kastet2.jpg',
            Location: '5020 Salzburg, Austria',
            Description: 'Champion B-girl Kastet, representing Russia',
            Video: 'https://youtu.be/ne_w_zaNOLs?si=cw5_rf9SOdgR9tTJ',
          },
        },

        {
          // 2020 bgirl LineString
          type: 'Feature',
          properties: { Name: 'Red Bull BC One 2020b', lineId: 'line-2020b' },
          geometry: {
            type: 'LineString',
            coordinates: [
              [38.97551530954024, 45.02709853316878],
              [13.028413861773117, 47.82536980194354],
            ],
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
            Name: 'Red Bull BC One 2021a',
            Image: './images/b-boy amir.avif',
            Location: 'Nowe Ogrody 8/12, 80-803 Gdańsk, Poland',
            Description: 'Champion B-boy Amir, representing Kazakhstan',
            Video: 'https://youtu.be/0qzIhcOq2HM?si=hgbPPFYnZm8xbPfn',
          },
        },

        {
          // 2021 bboy LineString
          type: 'Feature',
          properties: { Name: 'Red Bull BC One 2021a', lineId: 'line-2021a' },
          geometry: {
            type: 'LineString',
            coordinates: [
              [69.13859674742713, 54.87702512603235],
              [18.640673984934864, 54.350932224399116],
            ],
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
            Name: 'Red Bull BC One 2021b',
            Image: './images/b-girl logistx.jpg',
            Location: 'Nowe Ogrody 8/12, 80-803 Gdańsk, Poland',
            Description: 'Champion B-girl Logistx, representing USA',
            Video: 'https://youtu.be/XKE4m5WXKj4?si=VwQG4uDYlTfeb0Qy',
          },
        },

        {
          // 2021 bgirl LineString
          type: 'Feature',
          properties: { Name: 'Red Bull BC One 2021b', lineId: 'line-2021b' },
          geometry: {
            type: 'LineString',
            coordinates: [
              [-117.0787955205654, 32.631158708013515],
              [18.641371680852075, 54.35096791517063],
            ],
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
            Name: 'Red Bull BC One 2022a',
            Image: './images/b-boy victor2.avif',
            Location: '311 W 34th St., New York, NY 10001, United States',
            Description: 'Champion B-boy Victor, representing USA',
            Video: 'https://youtu.be/9CWzXWW1Q-s?si=MdBZpdBUEqv8ro6-',
          },
        },

        {
          // 2022 bboy LineString
          type: 'Feature',
          properties: { Name: 'Red Bull BC One 2022a', lineId: 'line-2022a' },
          geometry: {
            type: 'LineString',
            coordinates: [
              [-81.41087321554845, 28.30839476279948],
              [-73.99366614579246, 40.750108786812575],
            ],
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
            Name: 'Red Bull BC One 2022b',
            Image: './images/b-girl india.avif',
            Location: '311 W 34th St., New York, NY 10001, United States',
            Description: 'Champion B-girl India, representing Netherlands',
            Video: 'https://youtu.be/gq27dTJUkKE?si=Mb_xB7B0Et3fXvL',
          },
        },

        {
          // 2022 bgirl LineString
          type: 'Feature',
          properties: { Name: 'Red Bull BC One 2022b', lineId: 'line-2022b' },
          geometry: {
            type: 'LineString',
            coordinates: [
              [5.558168024807827, 52.03048082206948],
              [-73.99305487377865, 40.75096616297148],
            ],
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
            Name: 'Red Bull BC One 2023a',
            Image: './images/b-boy hong103.jpg',
            Location: '2 Av. Gordon Bennett, 75016 Paris, France',
            Description: 'Champion B-boy Hong10, representing South Korea',
            Video: 'https://youtu.be/w1hqlImawmc?si=PT2aJuve3xdqglQS',
          },
        },

        {
          // 2023 bboy LineString
          type: 'Feature',
          properties: { Name: 'Red Bull BC One 2023a', lineId: 'line-2023a' },
          geometry: {
            type: 'LineString',
            coordinates: [
              [126.98983792024688, 37.531670181705366],
              [2.248813740903387, 48.84731308622801],
            ],
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
            Name: 'Red Bull BC One 2023b',
            Image: './images/b-girl ami.avif',
            Location: '2 Av. Gordon Bennett, 75016 Paris, France',
            Description: 'Champion B-girl Ami, representing Japan',
            Video: 'https://youtu.be/c3DmalBYa-A?si=XabuAuUgL96hMtOj',
          },
        },

        {
          // 2023 bgirl LineString
          type: 'Feature',
          properties: { Name: 'Red Bull BC One 2023b', lineId: 'line-2023b' },
          geometry: {
            type: 'LineString',
            coordinates: [
              [139.6631061593892, 35.87672557937593],
              [2.2497278747744076, 48.847137668763736],
            ],
          },
        },
        {
          //Red Bull BC One 2024_bboy
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-43.39084730089456, -22.97535319911273],
          },
          properties: {
            Name: 'Red Bull BC One 2024',
            Image: './images/b-boy samuka.jpg',
            Location: 'Jeunasse Arena, Rio de Janeiro, Brazil',
            Description: 'Champion B-boy Samuka, representing Brazil',
            Video: 'https://youtu.be/PjAFwiq9YvU?si=xoljg6PcmGbVwCpy',
          },
        },

        {
          //Red Bull BC One 2024_bgirl
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-43.389978840580795, -22.975272343738197],
          },
          properties: {
            Name: 'Red Bull BC One 2024b',
            Image: './images/b-girl nicka.avif',
            Location: 'Jeunasse Arena, Rio de Janeiro, Brazil',
            Description: 'Champion B-girl Nicka, representing Lithuania',
            Video: 'https://youtu.be/M1UuziAC7e0?si=X1kpunZgpd9FA3_Y',
          },
        },

        {
          // 2024 bgirl LineString
          type: 'Feature',
          properties: { Name: 'Red Bull BC One 2024b', lineId: 'line-2024b' },
          geometry: {
            type: 'LineString',
            coordinates: [
              [23.931544899773968, 54.90115986582134],
              [-43.389978840580795, -22.975272343738197],
            ],
          },
        },
      ],
    },
  });

  //Points
  map.addLayer({
    id: 'places',
    type: 'symbol',
    source: 'places',
    layout: {
      'icon-image': 'custom-marker',
      'icon-size': 0.08,
    },
    filter: ['==', '$type', 'Point'],
  });

  // LineString
  map.addLayer({
    id: 'line',
    type: 'line',
    source: 'places',
    paint: {
      'line-color': '#c92a1d',
      'line-width': 2,
    },
    filter: ['==', 'lineID', ''],
  });

  const popup = new maplibregl.Popup({
    closeButton: true,
    closeOnClick: false,
  });

  map.on('mouseenter', 'places', (e) => {
    const feature = e.features[0];
    const coordinates = feature.geometry.coordinates.slice();
    const properties = feature.properties;

    // Pop-up Features
    new maplibregl.Popup()
      .setLngLat(coordinates)
      .setHTML(
        `
                <h3>${properties.Name}</h3>
                <img src="${properties.Image}" alt="${
          properties.Name
        }" style="max-width: 100%; height: auto;">
                <p>Location: ${properties.Location}</p>
                <p>Description: ${properties.Description}</p>
                <p>Video: ${
                  properties.Video
                    ? `<a href="${properties.Video}" target="_blank">${properties.Video}</a>`
                    : 'Not available'
                }</p>
            `
      )
      .addTo(map);
  });

  map.on('mouseleave', 'places', () => {
    if (popup) {
      popup.remove();
      popup = null;
    }
    map.getCanvas().style.cursor = '';
  });

  map.on('mouseenter', 'places', () => {
    map.getCanvas().style.cursor = 'pointer';
  });

  //Zoom In
  map.on('click', 'places', (e) => {
    const clickedFeature = e.features[0];
    const clickedName = clickedFeature.properties.Name;
    const clickedLineId = `line-${clickedName.split(' ')[3]}`;

    // Zoom to the clicked location
    const coordinates = clickedFeature.geometry.coordinates.slice();
    map.flyTo({
      center: coordinates,
      zoom: 16,
      essential: true,
    });

    map.setFilter('line', ['==', 'Name', clickedName]);
  });
});
