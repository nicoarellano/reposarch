import { Classes } from "@/types/types";
import dayjs from "dayjs";

const initialDate = dayjs("2023-09-07");

export const arch5005Classes: Classes = [
  {
    title: "Week 01 - The art of computer graphics",
    src: "/ARCN5005/",
    date: initialDate,
    topics: [
      "1. Overview of the course",
      "2. How to use this Notion Page",
      "3. From Descartes and Alberti to Ivan Southerland.",
      "4. Introduction to digital tools",
      "5. The Art of Computer graphics ",
      "6. Cartesian space and digital representation of geometry",
      "7. Overview of assignments and final project",
    ],
  },
  {
    title: "Week 02 - Digitalization of architectural representation",
    src: "/ARCN5005/",
    date: initialDate.add(1, "week"),
    topics: [
      "1. Overview to digital tools for architects",
      "2. Digital turns",
      "3. CAD, 3D CAD",
      "🖥️ LAB 1: [Blender](https://www.blender.org/download/)",
    ],
  },

  {
    title: "Week 03 - Coding and scripting for architects",
    src: "/ARCN5005/",
    date: initialDate.add(2, "week"),
    topics: [
      "1. Coding, programming, scripting",
      "2. Close-sourced scripting",
      "3. Coding for efficiency and automatization",
      "4. Programming and architecture",
      "🖥️ LAB 2: Close-source scripting - Dynamo / Sverchok",
    ],
  },
  {
    title: "Week 04 - Open source software",
    src: "/ARCN5005/",
    date: initialDate.add(3, "week"),
    topics: [
      "1. Open source. History of open-source",
      "- FSF: Richard Stallman - Free Software, Free Society, Selected Essays (2002)",
      "- OSI: Erik Raymond - The Cathedral and the Bazaar: Musings on Linux and Open Source by an Accidental Revolutionary (1999)",
      "2. Coding as a Language, as a tools and as an apparatus.",
      "3. OS Libraries / Packages",
      "🖥️ LAB 3: [Visual studio code](https://code.visualstudio.com/download) (Extensions: Live server and Prettier) and [Node.js](https://nodejs.org/en/download)",
    ],
  },

  {
    title: "Week 05 - Internet",
    src: "/ARCN5005/",
    date: initialDate.add(4, "week"),
    topics: [
      "1. History of internet - Guess lecturer: Julie Ivanoff (?)",
      "2. History of Hackerdom",
      "3. How does a website work? Structure, style, logic",
      "4. Backend and fronted",
      "🖥️ LAB 4: HTML and CSS, JavaScript and GUI (DOM events)",
    ],
  },
  {
    title: "Week 06 - Collaboration",
    src: "/ARCN5005/",
    date: initialDate.add(5, "week"),
    topics: ["1. Git", "2. Github", "🖥️ LAB 5: Web based BIM GIS software"],
  },

  {
    title: "Week 07 - BIM",
    src: "/ARCN5005/",
    date: initialDate.add(6, "week"),
    topics: [
      "1. What is BIM? , Open and Closed BIM",
      "2. ClosedBIM: Revit, Archicad",
      "3. OpenBIM - OSArch",
      "4. File formats - .rvt vs .ifc",
      "5. BuildingSmart International and [IFC](https://www.buildingsmart.org/standards/bsi-standards/industry-foundation-classes/)",
      "5. Post 2020 milestones",
      "6. BlenderBIM - Guess lecturer: Raphaël Vouilloz",
      "🖥️ LAB 6: BlenderBIM",
    ],
  },
  {
    title: "Week 08 - Web based 3D graphics",
    src: "/ARCN5005/",
    date: initialDate.add(7, "week"),
    topics: [
      "1. Web based 3D graphics",
      "2. WebGL",
      "3. GLTF",
      "4. [Tree.js](https://threejs.org/)",
      "🖥️ LAB 7: and Three.js",
    ],
  },

  {
    title: "Week 09 - IFC.js",
    src: "/ARCN5005/",
    date: initialDate.add(8, "week"),
    topics: [
      "1. Introduction to web-based open source tools for architects",
      "🖥️ LAB 8: IFC.js",
    ],
  },

  {
    title: "Week 10 - OS GIS",
    src: "/ARCN5005/",
    date: initialDate.add(9, "week"),
    topics: [
      "1. Geospatial Information Systems",
      "2. Coordination Systems",
      "3. Proprietary GIS (Arc GIS)",
      "4. Proprietary web GIS - Cesium and Mapbox",
      "5. Open Source GIS - QGIS - Guess lecturer: Ken Percy (CIMS)",
      "6. Open Source web GIS - Leaflet and Maplibre",
      "🖥️ LAB 9: Maplibre",
    ],
  },

  {
    title: "Week 11 - Going online “hello world”",
    src: "/ARCN5005/",
    date: initialDate.add(10, "week"),
    topics: [
      "1. Deploy your software",
      "- Github pages",
      "🖥️ LAB 10: Web based BIM GIS software",
    ],
  },

  {
    title: "Week 12 - Scalability and maintainability",
    src: "/ARCN5005/",
    date: initialDate.add(11, "week"),
    topics: [
      "1. Frontend frameworks: Vue, Svelte, Angular React.js + Typescript",
      "🖥️ LAB11 : Web based BIM GIS software",
    ],
  },

  {
    title: "Week 13",
    src: "/ARCN5005/",
    date: initialDate.add(12, "week"),
    topics: ["🏁 Final presentations (Hackathon)"],
  },
];
