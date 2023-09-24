import { Toc } from "../../../../types/types";

import Image from "../../../../components/Common/Image";
import Video from "../../../../components/Common/Video";
import Quote from "../../../../components/Common/Quote";
import EmojiTitle from "../../../../components/Common/EmojiTitle";
import PdfViewer from "../../../../components/Common/PdfViewer";
import CartesianPlane from "../../../../components/CartesianPlane";

import Cartography from "../week10/Cartography.mdx";
import SimpleButton from "../../../../components/Common/SimpleButton";

export const content: Toc = [
  {
    element: (
      <div>
        <br />
        <h3>From the Renaissance to the Computer Era</h3>
        <h4>Brief history of mapping</h4>
        <br />
        <Image
          src="/images/week01/from-the-renaissance.jpg"
          alt="Medieval hacker"
        />
      </div>
    ),
  },
  { element: <EmojiTitle emoji={"🌎🗺️❔"} title={"What is a map"} /> },
  {
    element: (
      <Image
        alt="Map"
        src="/images/week10/world-map-1570.jpg"
        href="https://en.wikipedia.org/wiki/Map"
        caption={"Early World Map (1570) - Wikipedia"}
      />
    ),
    notes:
      "A map is a symbolic depiction emphasizing relationships between elements \
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
        world.",
  },
  {
    element: <EmojiTitle emoji={"🗺️❔"} title={"What is Carthography"} />,
  },
  {
    element: (
      <Image
        alt="Cartography"
        src="/images/week10/cartography.jpg"
        href="https://en.wikipedia.org/wiki/Cartography"
        caption={
          "A medieval depiction of the Ecumene (inhabited world) (1482) - Wikipedia"
        }
      />
    ),
    notes:
      "Cartography is the study and practice of making and using maps. Combining science, \
    aesthetics and technique, cartography builds on the premise that \
    reality (or an imagined reality) can be modeled in ways that \
    communicate spatial information effectively.",
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
        src="/images/week01/rome-maps.png"
        alt="Maps of rome"
        caption={
          "Graziano Mario Valenti, Jessica Romor: Leon Battista Alberti and the Survey of the Walls of Rome"
        }
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week01/rome-maps2.png"
        alt="Maps of rome"
        caption={
          "Graziano Mario Valenti, Jessica Romor: Leon Battista Alberti and the Survey of the Walls of Rome"
        }
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week01/rome-maps2.png"
        alt="Maps of rome"
        caption={
          "Graziano Mario Valenti, Jessica Romor: Leon Battista Alberti and the Survey of the Walls of Rome"
        }
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week01/albertis-device.png"
        alt="Alberti's device"
        caption={
          "Leon Battista Alberti’s device for the topographical survey of the city of Rome (1450)"
        }
      />
    ),
    notes:
      "Alberti’s survey of Rome records the passage and lineamenta (outline) of certain features in the city of Rome including: \
      walls, rivers, streets, hills, and buildings, as well as the locations of temples, public works, gates, and monuments.\
      An early version of CAD",
  },
  {
    element: (
      <Image
        src="/images/week01/albertis-grid.png"
        alt="Alberti's grid"
        caption={
          "Leon Battista Alberti’s De Pictura (Treatise on Painting) 1435 (Figures from the 1804 edition of Della pittura)"
        }
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week01/durers-window.jpg"
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
        src="/images/week01/durers-window2.jpg"
        alt="Durer's Window"
        caption={
          "Albrech Durer's window 'Instruction on Measurement with Compass and Ruller' 1525"
        }
      />
    ),
    notes:
      "In the fifteenth century,  Albrecht Durer revolutionized drawing by adding precision and science to the process.",
  },
  {
    element: <CartesianPlane />,
    notes:
      "Cartesian or analytic geometry, which uses algebra to describe geometry. Descartes 'invented the convention of representing unknowns in equations by x, y, and z'\
      The Cartesian refers to the French mathematician and philosopher René Descartes, who published this idea in 1637",
  },

  {
    element: <EmojiTitle emoji={"🌎⛵🗺️"} title={"World mapping"} />,
  },

  // POTATO

  // Flat earth

  {
    element: (
      <Image
        alt="Map"
        src="/images/week10/world-map-1526.jpg"
        href="https://en.wikipedia.org/wiki/Map"
        caption={"Early World Map (1570) - Wikipedia"}
      />
    ),
    notes:
      "The history of cartography traces the development of cartography, or \
      mapmaking technology, in human history. Maps have been one of the most \
      important human inventions for millennia, allowing humans to explain \
      and navigate their way through the world. The earliest surviving maps \
      include cave paintings and etchings on tusk and stone, followed by \
      extensive maps produced by ancient Babylon, Greece and Rome, China, \
      and India. In their most simple form maps are two dimensional \
      constructs, however since the age of Classical Greece maps have also \
      been projected onto a three-dimensional sphere known as a globe.",
  },
  // projections:

  {
    element: (
      <Image
        src="/images/week10/ProjectionCylindrical.png"
        alt="Cylindrical Projection "
        caption={
          "Cylindrical projections are used for areas near the equator and for the entire earth but with very large distortions. - Source: https://gsp.humboldt.edu/olm/Lessons/GIS/03%20Projections/ProjectionFamilies3.html"
        }
      />
    ),
    notes: "Example: Mercator",
  },

  {
    element: (
      <Image
        src="/images/week10/ProjectionConic.png"
        alt="Conic Projection "
        caption={
          "Conical projections are good for areas near the mid-latitudes. - Source: https://gsp.humboldt.edu/olm/Lessons/GIS/03%20Projections/ProjectionFamilies3.html"
        }
      />
    ),
    notes: "Example: North and South hemispheres",
  },

  {
    element: (
      <Image
        src="/images/week10/ProjectionPlanar.png"
        alt="Planar Projection "
        caption={
          "Planar - Azimuthal (or planar) are good for areas near the pole - Source: https://gsp.humboldt.edu/olm/Lessons/GIS/03%20Projections/ProjectionFamilies3.html"
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
      "There are a number projection families and a large number of projection methods available based on these families. Each projection methods has trade-offs in how they distort the data as it is projected. All projection methods contain some distortion but they vary in how much distortion they create between: \
    Area, \
    Form (shape or angles) \
    Distance",
  },

  {
    element: (
      <Image
        alt="Mercator projection"
        src="/images/week10/mercator.png"
        href="https://en.wikipedia.org/wiki/Mercator_projection"
        caption={"Mercator 1569 world map - Wikipedia"}
      />
    ),
    notes:
      "The Mercator Projection, developed by Flemish geographer Gerardus \
      Mercator, was widely used as the standard two-dimensional projection \
      of the earth for world maps until the late 20th century, when more \
      accurate projections were formulated. Mercator was also the first to \
      use and popularise the concept of the atlas as a collection of maps.",
  },
  {
    element: (
      <Image
        src="/images/week10/mercator2.png"
        alt="Mercator projection"
        caption={"Mercator projection"}
      />
    ),
    notes:
      "The Mercator projection is a cylindrical map projection presented by Flemish geographer and cartographer Gerardus Mercator in 1569. It became the standard map projection for navigation because it is unique in representing north as up and south as down everywhere while preserving local directions and shapes. The map is thereby conformal. As a side effect, the Mercator projection inflates the size of objects away from the equator. This inflation is very small near the equator but accelerates with increasing latitude to become infinite at the poles. As a result, landmasses such as Greenland, Antarctica, Canada and Russia appear far larger than they actually are relative to landmasses near the equator, such as Central Africa.",
  },
  {
    element: (
      <Image
        src="/images/week10/mercator-cylinder.png"
        alt="Mercator projection"
        caption={"Mercator projection"}
        href="https://cdn.britannica.com/55/109155-050-9FE4B08C/simple-cylindrical-projection-earth-map-globe-mercator.jpg"
      />
    ),
    notes:
      "As on all map projections, shapes or sizes are distortions of the true layout of the Earth's surface. \
      The Mercator projection exaggerates areas far from the equator. \
      Examples of size distortion \
      Greenland appears the same size as Africa, when in reality Africa's area is 14 times as large. \
      Greenland's real area is comparable to the Democratic Republic of the Congo's alone. \
      Africa appears to be roughly the same size as South America, when in reality Africa is over one and a half times as large. \
      Alaska appears to be the same size as Australia, although Australia is actually 4.5 times as large. \
      Alaska also takes as much area on the map as Brazil, whereas Brazil's area is nearly 5 times that of Alaska. \
      Madagascar and Great Britain look about the same size, while Madagascar is actually more than twice as large as Great Britain.",
  },

  {
    element: (
      <Image
        src="/images/week10/orange.jpg"
        alt="orange"
        caption={
          "The globe on the quarter-spherical or orange peel projection - Norman Leventhal 1919"
        }
        href="https://commons.wikimedia.org/wiki/File:The_official_map_of_the_world_-_showing_the_four_quarters_of_the_globe_on_the_quarter-spherical_or_orange_peel_projection_%2814533479258%29.jpg"
      />
    ),
    notes:
      "It is called Orange Peel because of its resemblance to the flattened rind of a hand-peeled orange.",
  },
  {
    element: (
      <Image
        src="/images/week10/goode.png"
        alt="Dymaxion map"
        caption={"Goode homolosine projection 1923"}
      />
    ),
    notes:
      "The projection was developed in 1923 by John Paul Goode to provide an alternative to the Mercator projection for portraying global areal relationships. Goode offered variations of the interruption scheme for emphasizing the world’s land and the world’s oceans.  \
      It is sometimes called the 'homolographic projection' (meaning, equal-area map) it is also often called an 'orange-peel map'",
  },
  {
    element: (
      <Image
        src="/images/week10/dymaxion.png"
        alt="Dymaxion map"
        caption={"Dymaxion map"}
        href="https://en.wikipedia.org/wiki/Dymaxion_map"
      />
    ),
    notes:
      "The Dymaxion map or Fuller map is a projection of a world map onto the surface of an icosahedron, which can be unfolded and flattened to two dimensions. The flat map is heavily interrupted in order to preserve shapes and sizes.",
  },

  {
    element: (
      <Image
        src="/images/week10/dymaxion.jpg"
        alt="Dymaxion map"
        caption={"Dymaxion map"}
      />
    ),
    notes:
      "The projection was invented by Buckminster Fuller. The March 1, 1943, edition of Life magazine included a photographic essay titled 'Life Presents R. Buckminster Fuller's Dymaxion World'. The article included several examples of its use together with a pull-out section that could be assembled as a 'three-dimensional approximation of a globe or laid out as a flat map, with which the world may be fitted together and rearranged to illuminate special aspects of its geography'. Fuller applied for a patent in the United States in February 1944, showing a projection onto a cuboctahedron, which he called 'dymaxion'. The patent was issued in January 1946.",
  },

  {
    element: (
      <Image
        src="/images/week01/computer.jpg"
        alt="Turin's Computer 1950s"
        caption={"One of the first computers of the modern era - By Wikimedia"}
      />
    ),
    notes:
      "Alberti's dream remained technically impossible for 500 years until the creation of the modern computers.",
  },

  {
    element: <EmojiTitle emoji={"🌎💻🗺️"} title={"Modern Mapping"} />,
    notes:
      "A geographic information system (GIS) consists of integrated computer hardware and software that store, manage, analyze, edit, output, and visualize geographic data. Usually within a spatial database, \
      Geographic information systems are utilized in multiple technologies, processes, techniques and methods. They are attached to various operations and numerous applications, that relate to: engineering, planning, management, transport/logistics, insurance, telecommunications, and business \
      GIS provides the capability to relate previously unrelated information, through the use of location as the 'key index variable'. Locations and extents that are found in the Earth's spacetime are able to be recorded through the date and time of occurrence, along with x, y, and z coordinates; representing, longitude (x), latitude (y), and elevation (z).",
  },

  {
    element: (
      <EmojiTitle
        emoji={"🌎💻🗺️❔"}
        title={"Does anybody knows what GIS stands for?"}
      />
    ),
  },

  {
    element: (
      <EmojiTitle
        emoji={"🌎💻🗺️"}
        title={"Geodetic reference systems - NAD83 vs WGS84"}
      />
    ),
  },

  {
    element: (
      <Image
        src="/images/week10/latlong.png"
        alt="WGS84"
        caption={"WGS84: World Geodetic System"}
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
        <table id="simple-table">
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
              <td>It is used by the United States Department of Defence.</td>
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
    element: <EmojiTitle emoji={"🌎"} title={"Web-based map renderers"} />,
  },
  {
    element: (
      <Image
        src="/images/week10/cesium.png"
        alt="cesium"
        href="https://cesium.com/platform/cesiumjs/"
        caption={"Cesium-gl-js"}
      />
    ),
    notes:
      "If you need 3D, then Cesium is the place to start. True, MapLibre can provide some basic 3D terrain, but Cesium can give you full control of camera angles and allow users to spin around the location in view. It does a great job rendering topography (including 3D building cityscapes) and they’ve even started work on VR support.\
      Cesium is also great for its timing features. A built in clock control allows you start and stop playback of recorded data, as well fast forward, rewind, or slide across a timeline. You can even automate this by assigning availability times to features. In fact, Cesium takes it ones step further by including the positions of the sun and other celestial objects based on your timestamps. This can all be done through the JavaScript API, or by defining everything in a CZML file. If you want realistic 3D playback of position data, then Cesium is likely your best choice. \
      On top of these features, Cesium also maintains the usual set of GIS features that you’d expect from a mapping library and can present a 2D view if preferred. \
      Look into Resium, for use in React.",
  },

  {
    element: (
      <iframe
        width="100%"
        height="100%"
        src="/arcn5005/f2023/students/nicolasarellanorisop/map/cesium/cesium.html"
        title="Cesium Js gl"
      ></iframe>
    ),
  },

  {
    element: (
      <Image
        src="/images/week10/mapbox.png"
        alt="mapbox"
        href="https://docs.mapbox.com/mapbox-gl-js/guides/"
        caption={"Mapbox-gl-js"}
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
        src="/arcn5005/f2023/students/nicolasarellanorisop/map/mapbox/mapbox.html"
        title="Mapbox JS GL"
      ></iframe>
    ),
  },

  {
    element: (
      <EmojiTitle emoji={"🌎"} title={"Open source web-based map renderers"} />
    ),
  },

  {
    element: (
      <Image
        src="/images/week10/leaflet.png"
        alt="leaflet"
        href=""
        caption={"Leaflet"}
      />
    ),
    notes:
      "Almost any web map project could start by considering Leaflet. It is easy to use and very popular. This mean it is easy to find help online and well as a large set of robust open source plugins. While the core Leaflet API handles the basic 2D map needs with ease, it may not address all the latest GIS technologies. This is where the plugins and extension from third party developers come in handy. There are plugins for vector tiles, Cloud Optimized GeoTiffs (COG), drawing ad hoc geometries, overlaying heat maps and so much more.\
      What this all means in practice is that you can start with Leaflet quickly and easily and if you find that your needs grow, there are likely to be plugins to help Leaflet grow with you. If quick and flexible development are your goals, then Leaflet is a great choice. If you know that you have specific needs for newer technologies and want a library with native support for those requirements then you may also want to consider one of the following options in the your search. \
      React developers may want to use Leaflet with the React Leaflet project.",
  },

  {
    element: (
      <Image
        src="/images/week10/osm.png"
        alt="osm"
        href="https://www.openstreetmap.org/"
        caption={"OpenStreetMap"}
      />
    ),
    notes:
      "OpenStreetMap is built by a community of mappers that contribute and maintain data about roads, trails, cafés, railway stations, and much more, all over the world.",
  },

  {
    element: (
      <Image
        src="/images/week10/maplibre.png"
        alt="maplibre"
        href=""
        caption={"Maplibre-gl-js"}
      />
    ),
    notes:
      "MapLibre GL JS \
    MapLibre is the open source fork of MapBox GL. MapBox developers (including Leaflet creator Vlad Agafonkin) spent several years leading the open source charge in the web GIS world and still have many useful projects on GitHub. This is especially true when it comes to creating, styling, or serving vector tiles. However, their flagship web map library recently moved into a more commercial role, so MapLibre was born to continue serving the open source community. \
    As you might guess, it specializes in many of the technologies that MapBox has championed over the years, including vector tiles. It also provides a pseudo-3D tilted camera view. I’ve even seen video overlays on this platform. If you want to see the bleeding edge, you will often find it from the folks at MapBox and/or MapLibre. \
    React developers can use MapLibre with react-map-gl.",
  },
  {
    element: (
      <iframe
        width="100%"
        height="100%"
        src="/arcn5005/f2023/students/nicolasarellanorisop/map/maplibre/maplibre.html"
        title="Maplibre JS GL"
      ></iframe>
    ),
  },

  {
    element: (
      <iframe
        width="100%"
        height="100%"
        src="/images/week01/map of rome.html"
        title="Maplibre - Map of Rome"
      ></iframe>
    ),
  },

 
  {
    element: (
      <>
        <h1>❔</h1>
        <br />
        <h1>How do we interact with computers?</h1>
      </>
    ),
  },

  {
    element: (
      <>
        <h1>🖐️</h1>
        <br />
        <h1>Rise your hand if you have never coded</h1>
      </>
    ),
    notes: "False, anybody literate person has coded",
  },
  {
    element: (
      <>
        <h3>🅰️ Coding</h3>
        <br />
        <Image
          src="/images/week02/hieroglyphs.png"
          alt="Codes: Hieroglyphs"
          href="https://en.wikipedia.org/wiki/Egyptian_hieroglyphs"
          caption="By Wikipedia"
        />
      </>
    ),
    notes:
      " Code is a technology humans have created to systematize artificial language into abstract symbols.\
      Such symbols are conventions that lacked meaning until we combine them\
      Then, they allow us to create and to communicate ideas",
  },
  {
    element: <Image src="/images/coding-is.png" alt="Coding Is..." />,
    notes:
      "Computer coding is a way of translating human ideas to the electrical, mechanical world of computers.\
    They are used to communicate with computers and with people through computers.",
  },
  {
    element: (
      <>
        <h3>⌨️ Computer coding</h3>
        <br />
        <Image
          src="/images/week02/computer-coding.png"
          alt="Computer coding"
          caption="Javascript"
        />
      </>
    ),
    notes:
      "Computer coding is a way of translating human ideas to the electrical, mechanical world of computers.\
      They are used to communicate with computers and with people through computers.",
  },

  {
    element: (
      <Image
        src="/images/week02/devices-diagram.png"
        alt="Physical input and output hardware"
        caption={"Physical input and output hardware"}
      />
    ),
    notes:
      "Now our dialogue with design is in part mediated by computers.\
    This mediation occurs through multiple devices.\
    > There are different ways to interact with computers. \
    > Physical input hardware. translate our body expressions into digital language. \
        > The mouse or touchscreen. \
        > The Keyboard that allows us to type words that are then translated into machine code to get executed by the computer, that action is called programming.",
  },
  {
    element: (
      <Image
        src="/images/week02/interaction.png"
        alt="Human computer interaction"
        caption={"Interfaces"}
      />
    ),
    notes:
      "> Interfaces are devices or programs that allow users to interact with the code. \
      > Graphical user interfaces (GUIs)—they use icons and symbols, there is no code knowledge required, instead, “the user points, clicks on displays of virtual icons on the computer screen. \
      the most popular interfaces for designers. Most BIM platforms are GUIs, The main way architects have to input their creativity process into the digital medium.\
     makes the interaction with the computer more intuitive for the designers.",
  },
  {
    element: (
      <>
        <h1>GUI</h1>
        <br />
        <h1>🖱️ ➡️ 💻</h1>
        <br />
        <h1>Graphical user interface</h1>
      </>
    ),
    notes:
      "Graphical user interfaces (GUIs)—they use icons and symbols, there is no code knowledge required, instead, “the user points, clicks on displays of virtual icons on the computer screen. the most popular interfaces for designers. Most BIM platforms are GUIs, The main way architects have to input their creativity process into the digital medium. makes the interaction with the computer more intuitive for the designers.",
  },
  {
    element: (
      <Image
        src="/images/week01/sutherland.png"
        alt="Ivan Sutherland inventor of Sketchpad, the first GUI"
        caption={"Ivan Sutherland inventor of Sketchpad, the first GUI"}
      />
    ),
    notes:
      "In 1963, Ivan Sutherland at MIT developed a program called ‘Sketchpad’, which can be considered as the first computer drawing program or the first graphical user interface (GUI).\
       GUIs are human-computer interaction devices that allow users to interact with the computer through graphical icons instead of written code.\
       With a GUI the user can click or touch and manipulate the symbols displayed on the screen and thus, directly alter the program.\
       GUIs made computer more accessible for non-programmers, including architects.",
  },
  {
    element: (
      <Image
        src="/images/week02/mac.png"
        alt="First Macintosh (1984)"
        caption={"First Macintosh (1984)"}
      />
    ),
    notes:
      "On January 24, 1984, former Apple CEO Steve Jobs introduced the first Macintosh at Apple's annual shareholder's meeting in Cupertino, \
      California, debuting the new computer equipped with a 9-inch black and white display, an 8MHz Motorola 68000 processor, 128KB of RAM, a 3.5-inch floppy drive, \
      and a price tag of $2,495. \
      This computer revolutionized the market with its GUI and mouse",
  },

  {
    element: (
      <>
        <h1>TUI</h1>
        <br />
        <h1>⌨️ ➡️ 💻</h1>
        <br />
        <h1>Text-based user interface</h1>
      </>
    ),
    notes:
      "> Text-based user interfaces (TUIs) use characters, text and symbols.",
  },
  {
    element: (
      <>
        <h1>🗣️ 🔤 💻</h1>
        <br />
        <h1>High-level computer programming</h1>
      </>
    ),
    notes:
      "Any computer program is written in some particular language. \
      The language (unlike a natural language such as English) has a precisly specified vocabulary and syntax that must be followed rigorously\
      The semantic properties are also well defined; any syntactically correct statement causes the computer to perform some specific action. \
      Thus a programming language provides a very precise means of communication and requires you to express yourself exactly; \
      there is no latitude for vagueness , incompleteness, ambiguities, and errors that we tolerate in everyday speech",
  },
  {
    element: (
      <Image
        src="/images/week02/top-programming-languages.png"
        alt="Top programming languages"
        href="https://gowithcode.com/top-programming-languages"
        caption="Top programming languages: https://gowithcode.com/top-programming-languages"
      />
    ),
    notes:
      "High-level PLs: Python,  C++, JavaScript, etc, which are how programmers express computational concepts. Based on spoken or written language (normally English) and are designed to translate our operations into machine code.       All early computer languages were created in the second half of the twentieth century.\
      Usually, artificial languages are not created from scratch, but rather they evolve throughout long periods of time and are the result of multiple socio-cultural events that are hard to explain.\
      However, in the case of computer languages, not only did the language itself had to be quickly invented artificially,\
      but because this was a totally new phenomenon, \
      there weren’t even terms to define the emerging actors that constituted this new ‘computer science’.\
      The way in which programmers were naming things had to be invented as well",
  },
  {
    element: (
      <>
        <h1>❔</h1>
        <br />
        <h1>Has anyone used any high-level programming language?</h1>
      </>
    ),
    notes:
      "Higher level algorithmic languages are much closer to the way that people generally express themselves verbally (English in our case) \
    and mathematically. So it is much easier to write, read, and understand programs in these languages.",
  },

  {
    element: <EmojiTitle emoji={"📃 💬 💻"} title={"Program"} />,
    notes:
      "a computer Programs is a Set of instructions written in a programming language that use syntax to systematize the logic of computer operations",
  },

  {
    element: <EmojiTitle emoji={"📃📃📃 💬 💻"} title={"Software"} />,
    notes:
      "Software (which is also the plural of software) is a set of programs combined by a programmer to address a more specific problem.",
  },

  {
    element: (
      <EmojiTitle
        emoji={"💻🥇❔"}
        title={"What is the most popular type of software in the world?"}
      />
    ),
  },

  {
    element: (
      <Image
        src="/images/week10/internet-usage.png"
        alt="WORLD INTERNET USAGE AND POPULATION STATISTICS"
        href="https://en.wikipedia.org/wiki/Web_browser"
        caption={
          "WORLD INTERNET USAGE AND POPULATION STATISTICS - 2023 Year Estimates"
        }
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week10/web-browsers.png"
        alt="Web Browsers"
        href="https://en.wikipedia.org/wiki/Web_browser"
        caption={
          "Most popular web browsers - Google Chrome, Microsoft Edge, Mozilla Firefox, Opera, and Safari"
        }
      />
    ),
  },

  {
    element: (
      <>
        <h2>Which language to use?</h2>
        <br />
        <h4>All modern web browsers are based on 3 technologies</h4>
        <br />
        <Image
          src="/images/week10/html-css-js.png"
          alt="JavaScript"
          caption={"Technology behind web browsers: HTML - CSS - JS"}
        />
      </>
    ),
  },

  {
    element: (
      <Image
        src="/images/week10/html.png"
        alt="JavaScript"
        href="https://www.w3schools.com/html/html_intro.asp"
        caption={
          "Hyper Text Markup Language (HTML) describes the structure of a Web page"
        }
      />
    ),
    notes:
      "Do not confuse with Java,Javascript is the logic behind of all modern internet browsers. It is also one of the most popular programming languages in the world",
  },

  {
    element: (
      <Image
        src="/images/week10/css.png"
        alt="JavaScript"
        href="https://www.w3schools.com/css/css_intro.asp"
        caption={
          "Cascading Style Sheets (CSS) is the language we use to style an HTML document"
        }
      />
    ),
    notes:
      "Do not confuse with Java,Javascript is the logic behind of all modern internet browsers. It is also one of the most popular programming languages in the world",
  },

  {
    element: (
      <>
        <Image
          src="/images/week01/js.png"
          alt="JavaScript"
          href="https://www.w3schools.com/js/default.asp"
          caption={"JavaScript is the programming language of the Web"}
        />
      </>
    ),
    notes:
      "Do not confuse with Java,Javascript is the logic behind of all modern internet browsers. It is also one of the most popular programming languages in the world",
  },

  {
    element: (
      <>
        <h1>❔</h1>
        <br />
        <h1>What is an IDE?</h1>
        <br />
        <h3>Integrated Development Environment</h3>
      </>
    ),
    notes:
      " What is an IDE?\
    Code is nothing more than text, so we could do this with any text editing tool (like Word or the Notepad),\
    but writing code with notepad would not be too comfortable for a number of reasons (e.g. no syntax highlighting, no code checking, no code formatter, etc).\
    Instead, people usually use IDEs:  a text editor with some extra tools to make the programmer's life easier.",
  },
  {
    element: (
      <EmojiTitle
        emoji={"Lab 💻🌎"}
        title={
          "Installing an IDE and some extensions and creating a free map platform"
        }
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week01/vsCode.png"
        alt="Visual Studio Code"
        href="https://code.visualstudio.com/download"
        caption={"Visual Studio Code, free IDE from Microsoft."}
      />
    ),
    notes:
      "we are going to use Visual Studio Code, which is a free IDE from Microsoft. It’s one of the most widely used in the web development world.",
  },
  {
    element: (
      <Image
        src="/images/week01/extensions.png"
        alt="Visual Studio Code"
        href="https://code.visualstudio.com/download"
        caption={
          "We are going to download 5 extensions: \
        1. Live Server\
        2. Prettier\
        3. Material Icon \
        4. Console Ninja\
        5. Auto Import"
        }
      />
    ),
  },
  {
    element: (
      <>
        <h1>What is Node.js?</h1>
        <br />
        <Image
          src="/images/week01/nodejs.png"
          alt="Node.js"
          href="https://en.wikipedia.org/wiki/Nodejs#"
          caption={"Node.js - Wikipedia"}
        />
        <br />
        <SimpleButton
          title="Download Node js"
          href="https://nodejs.org/en/download"
        />
      </>
    ),
  },

  {
    element: (
      <Image
        src="/images/week10/npm-maplibre.gif"
        alt="npm maplibre"
        caption={"Npm example - Installing Maplibre-gl"}
      />
    ),
  },
  {
    element: (
      <EmojiTitle
        emoji={"Lab 💻🌎"}
        title={
          "Exercise: use Maplibre to create your custom map - Map GeoJson features"
        }
      />
    ),
  },
  {
    element: (
      <EmojiTitle
        emoji={"GeoJSON 🧊📄❔"}
        title={"What is GeoJson? How to add it to your map?"}
      />
    ),
  },
  {
    element: (
      <iframe
        width="100%"
        height="100%"
        src="/images/week01/map of rome.html"
        title="Maplibre - Map of Rome"
      ></iframe>
    ),
  },
];
