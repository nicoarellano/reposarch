import { Toc } from '@/app/types/types';

import Image from '@/components/Common/Image';
import Video from '@/components/Common/Video';
import Quote from '@/components/Common/Quote';
import EmojiTitle from '@/components/Common/EmojiTitle';
import PdfViewer from '@/components/Common/PdfViewer';

import CartesianPlane from '@/components/CartesianPlane';
import Cartography from './Cartography.mdx';
import SimpleButton from '@/components/Common/SimpleButton';
import CodeButton from '@/components/Common/CodeButton';

export const content: Toc = [
  {
    element: (
      <Image
        src="/images/computer-graphics/from-the-renaissance.jpg"
        alt="Medieval hacker"
        caption={'From the Renaissance to the Computer Era'}
      />
    ),
  },
  {
    element: (
      <Video
        src="https://www.youtube.com/embed/lFfr5UmHCFE?si=d4DH0oJC--MCQtRC"
        title="Web-based OS mapping and GIS - Fall 2024"
        caption={'Web-based OS mapping and GIS - Fall 2024'}
      />
    ),
  },
  {
    element: (
      <div className="grow">
        <h3>
          🗺️ Homework: Watch this video and start creating a map using Maplibre
          🌎
        </h3>
        <Video
          src="https://www.youtube.com/embed/SIZWzM5N6T8?si=FjN8uEHo9vLrhSnK&amp;start=2709"
          title="Assignment 3 - Create a Map application - Recording from Fall 2023"
          caption={
            'Assignment 3 - Create a Map application - Recording from Fall 2023'
          }
        />
      </div>
    ),
  },

  { element: <EmojiTitle emoji={'🗺️❔'} title={'What is a map?'} /> },
  {
    element: (
      <Image
        alt="Map"
        src="/images/maps/world-map-1570.jpg"
        href="https://en.wikipedia.org/wiki/Map"
        caption={'Early World Map (1570) - Wikipedia'}
      />
    ),
    notes:
      'A map is a symbolic depiction emphasizing relationships between elements \
        of some space, such as objects, regions, or themes. Many maps are static, \
        fixed to paper or some other durable medium, while others are dynamic or \
        interactive. The most commonly used to depict geography [...]\
        The space being mapped may be two dimensional, such as \
        the surface of the earth in a cartographic map or an atlas, or three dimensional, such as a world globe. \
        Although the earliest maps known are of the heavens, geographic maps of territory \
        have a very long tradition and exist from ancient times. The word map \
        comes from the medieval Latin: Mappa mundi, wherein mappa meant napkin \
        or cloth and mundi the world. Thus, map became a shortened term \
        referring to a two-dimensional representation of the surface of the \
        world.',
  },
  {
    element: <EmojiTitle emoji={'🗺️❔'} title={'What is Cartography'} />,
  },

  {
    element: (
      <Image
        alt="Cartography"
        src="/images/maps/cartography.jpg"
        href="https://en.wikipedia.org/wiki/Cartography"
        caption={
          'A medieval depiction of the Ecumene (inhabited world) (1482) - Wikipedia'
        }
      />
    ),
    notes:
      'Cartography is the study and practice of making and using maps. Combining science, \
    aesthetics and technique, cartography builds on the premise that \
    reality (or an imagined reality) can be modeled in ways that \
    communicate spatial information effectively.',
  },
  {
    element: <Cartography />,
    notes:
      "Fundamental objectives of traditional cartography \
      - Select traits of the object to be mapped \
        - Physical, such as roads or land masses \
        - Abstract, such as toponyms or political boundaries \
      - Represent the terrain of the mapped object on flat media → projections. \
      - Eliminate the mapped object's characteristics that are irrelevant to the map's purpose and reduce complexities→ generalization. \
      - Orchestrate the elements of the map to best convey its message to its audience. This is the concern of map design.",
  },

  {
    element: (
      <Image
        src="/images/computer-graphics/rome-maps.png"
        alt="Maps of rome"
        caption={
          'Graziano Mario Valenti, Jessica Romor: Leon Battista Alberti and the Survey of the Walls of Rome'
        }
      />
    ),
    notes:
      "Pre-renaissance maps were pre-scientific, symbolic. They didn't have the right proportions. They were not efficient navigation tools. non-precise ",
  },
  {
    element: (
      <Image
        src="/images/computer-graphics/rome-maps2.png"
        alt="Maps of rome"
        caption={
          'Graziano Mario Valenti, Jessica Romor: Leon Battista Alberti and the Survey of the Walls of Rome'
        }
      />
    ),
  },

  {
    element: (
      <Image
        src="/images/computer-graphics/albertis-device.png"
        alt="Alberti's device"
        caption={
          'Leon Battista Alberti’s device for the topographical survey of the city of Rome (1450)'
        }
      />
    ),
    notes:
      'Alberti’s survey of Rome records the passage and lineamenta (outline) of certain features in the city of Rome including: \
      walls, rivers, streets, hills, and buildings, as well as the locations of temples, public works, gates, and monuments.\
      An early version of CAD',
  },
  {
    element: (
      <Image
        src="/images/computer-graphics/albertis-grid.png"
        alt="Alberti's grid"
        caption={
          'Leon Battista Alberti’s De Pictura (Treatise on Painting) 1435 (Figures from the 1804 edition of Della pittura)'
        }
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/computer-graphics/durers-window.jpg"
        alt="Durer's Window"
        caption={
          "Albrecht Durer's window 'Instruction on Measurement with Compass and Ruller' 1525"
        }
      />
    ),
    notes:
      "In this famous woodcut known as Durer's Window in the book 'Instruction on Measurement with Compass and Ruller' 1525 \
      Durer describes a way of painting using a similar grid than to the one described by Alberti almost a century before",
  },
  {
    element: (
      <Image
        src="/images/computer-graphics/durers-window2.jpg"
        alt="Durer's Window"
        caption={
          "Albrech Durer's window 'Instruction on Measurement with Compass and Ruller' 1525"
        }
      />
    ),
    notes:
      'In the fifteenth century,  Albrecht Durer revolutionized drawing by adding precision and science to the process.',
  },
  {
    element: <CartesianPlane />,
    notes:
      "Cartesian or analytic geometry, which uses algebra to describe geometry. Descartes 'invented the convention of representing unknowns in equations by x, y, and z'\
      The Cartesian refers to the French mathematician and philosopher René Descartes, who published this idea in 1637",
  },

  {
    element: <EmojiTitle emoji={'⛵🗺️'} title={'World mapping'} />,
  },

  {
    element: (
      <Image
        alt="Map"
        src="/images/maps/world-map-1526.jpg"
        href="https://en.wikipedia.org/wiki/Map"
        caption={'Early World Map (1570) - Wikipedia'}
      />
    ),
    notes:
      ' \
      History of Cartography, or map-making. \
      Maps have been one of the most \
      important human inventions for millennia, allowing humans to explain \
      and navigate their way through the world. The earliest surviving maps \
      include cave paintings followed by \
      extensive maps produced by ancient Babylon, Greece and Rome, China, and India.',
  },
  // projections:
  {
    element: (
      <Image
        src="/images/maps/flatearth.jpg"
        alt="Flat Earth"
        caption={'Traditional maps are 2 dimensional'}
      />
    ),
    notes: ' In their most simple form maps are two dimensional constructs',
  },

  {
    element: (
      <Image
        src="/images/maps/globe.png"
        alt="Spherical Earth"
        caption={'World globes, spherical interpretation of the earth'}
      />
    ),
    notes:
      'However since the age of Classical Greece maps have also \
    been projected onto a three-dimensional sphere known as a globe.',
  },

  {
    element: <EmojiTitle emoji={'🌎➡️🗺️'} title={'World map projections'} />,
  },

  {
    element: (
      <Image
        src="/images/maps/ProjectionCylindrical.png"
        alt="Cylindrical Projection "
        caption={
          'Cylindrical projections are used for areas near the equator and for the entire earth but with very large distortions. - Source: https://gsp.humboldt.edu/olm/Lessons/GIS/03%20Projections/ProjectionFamilies3.html'
        }
      />
    ),
  },

  {
    element: (
      <Image
        src="/images/maps/ProjectionConic.png"
        alt="Conic Projection "
        caption={
          'Conical projections are good for areas near the mid-latitudes. - Source: https://gsp.humboldt.edu/olm/Lessons/GIS/03%20Projections/ProjectionFamilies3.html'
        }
      />
    ),
  },

  {
    element: (
      <Image
        src="/images/maps/ProjectionPlanar.png"
        alt="Planar Projection "
        caption={
          'Planar - Azimuthal (or planar) are good for areas near the pole - Source: https://gsp.humboldt.edu/olm/Lessons/GIS/03%20Projections/ProjectionFamilies3.html'
        }
      />
    ),
  },
  {
    element: (
      <iframe
        className="w-full h-full"
        src="https://en.m.wikipedia.org/wiki/List_of_map_projections#Table_of_projections"
      />
    ),
    notes:
      'There are a number projection families and a large number of projection methods available based on these families. \
    Each projection methods has trade-offs in how they distort the data as it is projected. \
    All projection methods contain some distortion but they vary in how much distortion they create between: \
    Area, Form (shape or angles), Distance',
  },

  {
    element: (
      <Image
        alt="Mercator projection"
        src="/images/maps/mercator.png"
        href="https://en.wikipedia.org/wiki/Mercator_projection"
        caption={'Mercator 1569 world map - Wikipedia'}
      />
    ),
    notes:
      'The Mercator projection is a cylindrical map projection presented by Flemish geographer and cartographer Gerardus Mercator in 1569. \
      It became the standard map projection for navigation because it is unique in representing north as up and south as down everywhere while preserving local directions and shapes. \
      ',
  },
  {
    element: (
      <Image
        src="/images/maps/mercator2.png"
        alt="Mercator projection"
        caption={'Mercator projection'}
      />
    ),
    notes:
      'It was widely used as the standard two-dimensional projection \
      of the earth for world maps until the late 20th century, when more \
      accurate projections were formulated. ',
  },
  {
    element: (
      <Image
        src="/images/maps/mercator-cylinder.png"
        alt="Mercator projection"
        caption={'Mercator projection'}
        href="https://cdn.britannica.com/55/109155-050-9FE4B08C/simple-cylindrical-projection-earth-map-globe-mercator.jpg"
      />
    ),
    notes:
      "As on all map projections, shapes or sizes are distortions of the true layout of the Earth's surface. \
      As a side effect, the Mercator projection inflates the size of objects away from the equator. This inflation is very small near the equator but accelerates with increasing latitude to become infinite at the poles. As a result, landmasses such as Greenland, Antarctica, Canada and Russia appear far larger than they actually are relative to landmasses near the equator, such as Central Africa.",
  },

  {
    element: (
      <Image
        src="/images/maps/orange.jpg"
        alt="orange"
        caption={
          'The globe on the quarter-spherical or orange peel projection - Norman Leventhal 1919'
        }
        href="https://commons.wikimedia.org/wiki/File:The_official_map_of_the_world_-_showing_the_four_quarters_of_the_globe_on_the_quarter-spherical_or_orange_peel_projection_%2814533479258%29.jpg"
      />
    ),
    notes:
      'It is called Orange Peel because of its resemblance to the flattened rind of a hand-peeled orange.',
  },
  {
    element: (
      <Image
        src="/images/maps/goode.png"
        alt="Dymaxion map"
        caption={'Goode homolosine projection 1923'}
      />
    ),
    notes:
      "The projection was developed in 1923 by John Paul Goode to provide an alternative to the Mercator projection for portraying global areal relationships. Goode offered variations of the interruption scheme for emphasizing the world’s land and the world’s oceans.  \
      It is sometimes called the 'homolographic projection' (meaning, equal-area map) it is also often called an 'orange-peel map'",
  },
  {
    element: (
      <Image
        src="/images/maps/dymaxion.png"
        alt="Dymaxion map"
        caption={'Buckminster Fuller - Dymaxion map (1943)'}
        href="https://en.wikipedia.org/wiki/Dymaxion_map"
      />
    ),
    notes:
      'The Dymaxion map or Fuller map is a projection of a world map onto the surface of an icosahedron, which can be unfolded and flattened to two dimensions. The flat map is heavily interrupted in order to preserve shapes and sizes.',
  },

  {
    element: (
      <Image
        src="/images/maps/dymaxion.jpg"
        alt="Dymaxion map"
        caption={'Buckminster Fuller - Dymaxion map (1943)'}
      />
    ),
    notes:
      "The projection was invented by Buckminster Fuller. The March 1, 1943, edition of Life magazine included a photographic essay titled 'Life Presents R. Buckminster Fuller's Dymaxion World'. The article included several examples of its use together with a pull-out section that could be assembled as a 'three-dimensional approximation of a globe or laid out as a flat map, with which the world may be fitted together and rearranged to illuminate special aspects of its geography'. Fuller applied for a patent in the United States in February 1944, showing a projection onto a cuboctahedron, which he called 'dymaxion'. The patent was issued in January 1946.",
  },

  {
    element: <EmojiTitle emoji={'🌎💻🗺️'} title={'Modern Mapping'} />,
  },
  {
    element: (
      <Image
        src="/images/computer-graphics/computer.jpg"
        alt="Turin's Computer 1950s"
        caption={'One of the first computers of the modern era - By Wikimedia'}
      />
    ),
    notes:
      "Alberti's dream remained technically impossible for 500 years until the creation of the modern computers.",
  },
  {
    element: (
      <EmojiTitle
        emoji={'🌎🗺️🥔❔'}
        title={'Do you think the earth is flat or spherical?'}
      />
    ),
    notes:
      'none of the above, it is a Geoid, closer to an oblate spheroid or an ellipsoid',
  },

  {
    element: (
      <Image
        src="/images/maps/geoid.png"
        alt="geoid"
        caption={
          "The Geoid surface is irregular, unlike the reference ellipsoid (which is a mathematical idealized representation of the physical Earth as an ellipsoid), but is considerably smoother than Earth's physical surface. - By Wikipedia"
        }
      />
    ),
    notes:
      "The Pythagorean concept of a spherical Earth offers a simple surface that is easy to deal with mathematically. Many astronomical and navigational computations use a sphere to model the Earth as a close approximation. However, a more accurate figure is needed for measuring distances and areas on the scale beyond the purely local. Better approximations can be made by modeling the entire surface as an oblate spheroid, using spherical harmonics to approximate the geoid, or modeling a region with a best-fit reference ellipsoid. \
      For surveys of small areas, a planar (flat) model of Earth's surface suffices because the local topography overwhelms the curvature. Plane-table surveys are made for relatively small areas without considering the size and shape of the entire Earth. A survey of a city, for example, might be conducted this way. \
      The geoid surface is irregular, unlike the reference ellipsoid (which is a mathematical idealized representation of the physical Earth as an ellipsoid), but is considerably smoother than Earth's physical surface.",
  },

  {
    element: (
      <EmojiTitle
        emoji={'🌎💻🗺️❔'}
        title={'Does anybody knows what GIS stands for?'}
      />
    ),
    notes:
      "A geographic information system (GIS) consists of integrated computer hardware and software that store, manage, analyze, edit, output, and visualize geographic data. Usually within a spatial database, \
      Geographic information systems are utilized in multiple technologies, processes, techniques and methods. They are attached to various operations and numerous applications, that relate to: engineering, planning, management, transport/logistics, insurance, telecommunications, and business \
      GIS provides the capability to relate previously unrelated information, through the use of location as the 'key index variable'. Locations and extents that are found in the Earth's spacetime are able to be recorded through the date and time of occurrence, along with x, y, and z coordinates; representing, longitude (x), latitude (y), and elevation (z).",
  },

  {
    element: (
      <EmojiTitle
        emoji={'🌎💻🗺️'}
        title={'Geodetic reference systems - NAD83 vs WGS84'}
      />
    ),
  },

  {
    element: (
      <Image
        src="/images/maps/latlong.png"
        alt="WGS84"
        caption={'WGS84: World Geodetic System'}
      />
    ),
    notes:
      "NAD83 (North American Datum 1983) is a geodetic reference system used in North America for mapping and surveying. It is the primary reference system for all mapping and surveying activities in Canada, the United States, and Mexico and is based on a network of survey markers. \
      NAD83 is based on a survey marker network that was developed across North America between 1984 and 1991. These markers were used to create a geodetic reference frame that accounts for the flaws in the Earth's form caused by local variations in gravity and tectonic plate movement. As a result, NAD83 is more accurate in North America than the WGS84 system. \
      ==================================================================== \
      WGS 84 determines the Earth's orientation in space by describing its rotation and position relative to the celestial sphere with a set of parameters. The rotational velocity of the Earth, its orientation relative to a fixed reference frame, and the position of the Earth's centre of mass are among these factors. \
      WGS 84 contains a global network of ground control points that offer constant and accurate measurements of the earth's surface. These ground control points are used to precisely locate a GPS receiver and calculate the coordinates of features on the earth's surface. \
      WGS84 is the standard reference system for many mapping and navigation applications, such as aviation, maritime navigation, and surveying. GPS satellites use WGS-84 as the reference system for their orbital features and clock corrections, allowing GPS receivers to identify their position on the Earth's surface with pinpoint accuracy. \
      The WGS 84 ellipsoid is the mathematical model of the Earth's shape that is used as a reference surface for geographic coordinates. The semi-major axis and flattening of an ellipsoid are both measured in metres. The semi-major axis represents the ellipsoid's equatorial radius, whereas the flattening represents the difference between the polar and equatorial radii divided by the equatorial radius. \
      Overall, WGS-84 is important in enabling accurate and dependable navigation and mapping around the world. It is constantly maintained and updated to account for changes in the Earth's shape and mass distribution, ensuring that it remains a reliable reference system for many years to come.",
  },

  {
    element: (
      <>
        <table className="simple-table">
          <thead>
            <tr>
              <th>Characteristics</th>
              <th>WGS84</th>
              <th>NAD83 </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Definition</th>
              <td>WGS84 is a worldwide reference frame system.</td>
              <td>
                NAD83 (North American Datum 1983) is a geodetic reference system
                used in North America for mapping and surveying.
              </td>
            </tr>
            <tr>
              <th>Stands for</th>
              <td>World Geodetic System</td>
              <td>North American Datum </td>
            </tr>
            <tr>
              <th>Ellipsoid</th>
              <td>
                Oblate spheroid with a semi-major axis of 6,378,137m and
                flattening of 1/298.257223563
              </td>
              <td>
                It is quite similar to WGS84 but slightly has different shapes
                that take into account local variations in gravity.
              </td>
            </tr>
            <tr>
              <th>Usage</th>
              <td>It is used by the United States Department of Defense.</td>
              <td>
                It is used in the U.S., Canada, Central America, and Mexico.
              </td>
            </tr>
            <tr>
              <th>Applications</th>
              <td>
                It is suitable for global navigation and mapping, including GPS,
                GLONASS, Galileo, and other global positioning systems.
              </td>
              <td>
                It is widely used in North America for navigation, mapping,
                surveying, and other geospatial applications that include
                land-use planning, environmental monitoring, and emergency
                response.
              </td>
            </tr>
            <tr>
              <th>Compatibility</th>
              <td>
                WGS-84 is compatible with many of the global positioning systems
                and mapping software.
              </td>
              <td>
                NAD83 is not compatible with WGS84 and may cause problems when
                integrating data from different sources or using different
                mapping software.
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <em>
          https://www.tutorialspoint.com/difference-between-wgs84-and-nad83#:~:text=In%20conclusion%2C%20WGS84%20and%20NAD83,a%20network%20of%20survey%20markers.
        </em>
      </>
    ),
  },

  {
    element: <EmojiTitle emoji={'🌎'} title={'Web-based map renderers'} />,
  },
  {
    element: (
      <Image
        src="/images/maps/cesium.png"
        alt="cesium"
        href="https://cesium.com/platform/cesiumjs/"
        caption={'Cesium-gl-js'}
      />
    ),
    notes:
      'If you need 3D, then Cesium is the place to start. True, MapLibre can provide some basic 3D terrain, but Cesium can give you full control of camera angles and allow users to spin around the location in view. It does a great job rendering topography (including 3D building cityscapes) and they’ve even started work on VR support.\
      Cesium is also great for its timing features. A built in clock control allows you start and stop playback of recorded data, as well fast forward, rewind, or slide across a timeline. You can even automate this by assigning availability times to features. In fact, Cesium takes it ones step further by including the positions of the sun and other celestial objects based on your timestamps. This can all be done through the JavaScript API, or by defining everything in a CZML file. If you want realistic 3D playback of position data, then Cesium is likely your best choice. \
      On top of these features, Cesium also maintains the usual set of GIS features that you’d expect from a mapping library and can present a 2D view if preferred. \
      Look into Resium, for use in React. Source: https://javascript.plainenglish.io/5-javascript-mapping-libraries-when-to-use-them-961ff6366d0b',
  },

  {
    element: (
      <iframe
        width="100%"
        height="100%"
        src="/arcn5005/terms/f2024/students/nicolasarellanorisop/map/cesium/index.html"
        title="Cesium Js gl"
      ></iframe>
    ),
  },

  {
    element: (
      <Image
        src="/images/maps/mapbox.png"
        alt="mapbox"
        href="https://docs.mapbox.com/mapbox-gl-js/guides/"
        caption={'Mapbox-gl-js'}
      />
    ),
    notes:
      "Mapbox GL JS is a client-side JavaScript library for building web maps and web applications with Mapbox's modern mapping technology. You can use Mapbox GL JS to display Mapbox maps in a web browser or client, add user interactivity, and customize the map experience in your application.",
  },

  {
    element: (
      <iframe
        width="100%"
        height="100%"
        src="/arcn5005/terms/f2024/students/nicolasarellanorisop/map/mapbox/index.html"
        title="Mapbox JS GL"
      ></iframe>
    ),
  },

  {
    element: (
      <EmojiTitle emoji={'🌎'} title={'Open source web-based map renderers'} />
    ),
  },

  {
    element: (
      <Image
        src="/images/maps/leaflet.png"
        alt="leaflet"
        href=""
        caption={'Leaflet'}
      />
    ),
    notes:
      'Almost any web map project could start by considering Leaflet. It is easy to use and very popular. This mean it is easy to find help online and well as a large set of robust open source plugins. While the core Leaflet API handles the basic 2D map needs with ease, it may not address all the latest GIS technologies. This is where the plugins and extension from third party developers come in handy. There are plugins for vector tiles, Cloud Optimized GeoTiffs (COG), drawing ad hoc geometries, overlaying heat maps and so much more.\
      What this all means in practice is that you can start with Leaflet quickly and easily and if you find that your needs grow, there are likely to be plugins to help Leaflet grow with you. If quick and flexible development are your goals, then Leaflet is a great choice. If you know that you have specific needs for newer technologies and want a library with native support for those requirements then you may also want to consider one of the following options in the your search. \
      React developers may want to use Leaflet with the React Leaflet project.',
  },

  {
    element: (
      <iframe
        width="100%"
        height="100%"
        src="/arcn5005/terms/f2024/students/nicolasarellanorisop/map/leaflet/index.html"
        title="Leaflet"
      ></iframe>
    ),
  },

  {
    element: (
      <Image
        src="/images/maps/osm.png"
        alt="osm"
        href="https://www.openstreetmap.org/"
        caption={'OpenStreetMap'}
      />
    ),
    notes:
      'OpenStreetMap is built by a community of mappers that contribute and maintain data about roads, trails, cafés, railway stations, and much more, all over the world.',
  },

  {
    element: (
      <Image
        src="/images/maps/maplibre.png"
        alt="maplibre"
        href=""
        caption={'Maplibre-gl-js'}
      />
    ),
    notes:
      'MapLibre GL JS \
    MapLibre is the open source fork of MapBox GL. MapBox developers (including Leaflet creator Vlad Agafonkin) spent several years leading the open source charge in the web GIS world and still have many useful projects on GitHub. This is especially true when it comes to creating, styling, or serving vector tiles. However, their flagship web map library recently moved into a more commercial role, so MapLibre was born to continue serving the open source community. \
    As you might guess, it specializes in many of the technologies that MapBox has championed over the years, including vector tiles. It also provides a pseudo-3D tilted camera view. I’ve even seen video overlays on this platform. If you want to see the bleeding edge, you will often find it from the folks at MapBox and/or MapLibre. \
    React developers can use MapLibre with react-map-gl.',
  },
  {
    element: (
      <iframe
        width="100%"
        height="100%"
        src="/arcn5005/terms/f2024/students/nicolasarellanorisop/map/maplibre/index.html"
        title="Maplibre JS GL"
      ></iframe>
    ),
  },

  {
    element: (
      <Image
        src="/images/maps/npm-maplibre.gif"
        alt="npm maplibre"
        caption={'Npm example - Installing Maplibre-gl'}
      />
    ),
  },

  {
    element: (
      <div className="grow">
        <h3>
          🗺️ Homework: Watch this video and start creating a map using Maplibre
          🌎
        </h3>
        <Video
          src="https://www.youtube.com/embed/SIZWzM5N6T8?si=FjN8uEHo9vLrhSnK&amp;start=2709"
          title="Assignment 3 - Create a Map application - Recording from Fall 2023"
          caption={
            'Assignment 3 - Create a Map application - Recording from Fall 2023'
          }
        />
      </div>
    ),
  },

  {
    element: (
      <iframe
        width="100%"
        height="100%"
        src="https://library.carleton.ca/find/gis/gis-day"
        title="GIS Day"
      ></iframe>
    ),
  },

  {
    element: (
      <EmojiTitle
        emoji={'Lab 💻🌎'}
        title={
          'Exercise: use Maplibre to create your custom map - Map GeoJson features'
        }
      />
    ),
  },
  {
    element: (
      <EmojiTitle
        emoji={'JSON and GeoJSON 🧊📄❔'}
        title={'What are they? How to add them to your map?'}
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/maps/json.png"
        alt="json"
        caption={'JSON - JavaScript Object Notation'}
        href="https://www.json.org/json-en.html"
      />
    ),
    notes:
      'JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate.',
  },
  {
    element: (
      <Image
        src="/images/maps/json-example.png"
        alt="json"
        caption={'JSON - JavaScript Object Notation'}
        href="https://www.json.org/json-en.html"
      />
    ),
    notes: 'JSON (JavaScript Object Notation) - Example',
  },

  {
    element: (
      <Image
        src="/images/maps/geojson.png"
        alt="geojson"
        caption={
          'GeoJSON - GeoJSON is the Json format for encoding a variety of geographic data structures.'
        }
        href="https://geojson.org/"
      />
    ),
    notes:
      'GeoJSON is an open standard format designed for representing simple geographical features, along with their non-spatial attributes. It is based on the JSON format. \
    it supports the following geometry types: Point, LineString, Polygon, MultiPoint, MultiLineString, and MultiPolygon. Geometric objects with additional properties are Feature objects. Sets of features are contained by FeatureCollection objects.',
  },

  {
    element: (
      <Image
        src="/images/maps/geojson-types.png"
        alt="geojson"
        caption={'GeoJSON - Types'}
      />
    ),
    notes:
      'GeoJSON: A format for encoding a variety of geographic data structures. \
      It is an open standard format designed for representing simple geographical features, along with their non-spatial attributes. \
      It is based on JSON, the JavaScript Object Notation. The features include points, line strings, polygons, and multi-part collections of these types',
  },

  {
    element: (
      <Image
        src="/images/maps/geojson-example.png"
        alt="geojson"
        caption={'GeoJSON - Example'}
      />
    ),
  },

  {
    element: (
      <>
        <iframe
          width="100%"
          height="100%"
          src="/arcn5005/terms/f2024/students/nicolasarellanorisop/map/index.html"
          title="Maplibre - Airports in Canada"
        ></iframe>
        <CodeButton
          href={
            'https://github.com/nicoarellano/reposarch/tree/dev/public/arcn5005/terms/f2024/students/nicolasarellanorisop/map/index.html'
          }
        />
      </>
    ),
  },

  {
    element: (
      <>
        <iframe
          width="100%"
          height="100%"
          src="https://maplibre.org/maplibre-gl-js/docs/examples/"
          title="Maplibre - Examples"
        ></iframe>
        <br />
        <SimpleButton
          title={'Maplibre Examples'}
          href={'https://maplibre.org/maplibre-gl-js/docs/examples/'}
        />
      </>
    ),
  },
];
