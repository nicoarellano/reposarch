import { Classes } from "@/types/types";
//   { title: "Class 01", src: "/ARCN5005/", date: "2023-09-" },
//   { title: "Class 02", src: "/ARCN5005/", date: "2023-09-" },
//   { title: "Class 03", src: "/ARCN5005/", date: "2023-09-" },
//   { title: "Class 04", src: "/ARCN5005/", date: "2023-09-" },
//   { title: "Class 05", src: "/ARCN5005/", date: "2023-09-" },
// ];

export const arch5005Classes: Classes = [
  {
    title: "Week 01 - The art of computer graphics",
    src: "/ARCN5005/",
    date: "2023-09-",
    topics: [
      "1. Overview of the course ",
      "2. How to use this Notion Page",
      "3. From Descartes and Alberti to Ivan Southerland. (Mario Carpo - The alphabet and the Algorithm)",
      "4. Introduction to digital tools (Richard Sennett - The Craftsman)",
      "5. Computer graphics (William Mitchell - The Art of Computer Graphics Programming: A Structured Introduction for Architects and Designers (1987))",
      "6. Cartesian space and digital representation of geometry",
      "7. Overview of final project. - Show examples",
    ],
  },
  {
    title: "Week 02 - Digitalization of architectural representation",
    src: "/ARCN5005/",
    date: "2023-09-",
    topics: [
      "1. Overview to digital tools for architects (Susan Piedmont Palladino - Tools of Imagination)",
      "2. Digital turns",
      "3. CAD, 3D CAD",
      "4. LAB 1: [Blender](https://www.blender.org/download/)",
    ],
  },

  {
    title: "Week 03 - Coding and scripting for architects",
    src: "/ARCN5005/",
    date: "2023-09-",
    topics: [
      "1. Coding, programming, scripting (Douglas Rushkoff - Program or Be Programmed Ten Commands for a Digital Age (2010))",
      "2. Close-sourced scripting (Mark Burry - Scripting Cultures)",
      "3. Coding for efficiency and automatization (Kostas Terzidis - Algorithmic Architecture (2006) : Computation vs computerization).",
      "4. Programming and architecture (Paul Coates - Programming.Architecture (2010))",
      "5. LAB 2: Close-source scripting - Dynamo / Sverchok",
    ],
  },
  {
    title: "Week 04 - Open source software",
    src: "/ARCN5005/",
    date: "2023-09-",
    topics: [
      "1. Open source. History of open-source",
      "- FSF: Richard Stallman - Free Software, Free Society, Selected Essays (2002)",
      "- OSI: Erik Raymond - The Cathedral and the Bazaar: Musings on Linux and Open Source by an Accidental Revolutionary (1999)",
      "2. Coding as a Language, as a tools and as an apparatus.",
      "3. OS Libraries / Packages",
      "4. LAB 3: [Visual studio code](https://code.visualstudio.com/download) (Extensions: Live server and Prettier) and [Node.js](https://nodejs.org/en/download)",
    ],
  },
  {
    title: "Week 05 - BIM",
    src: "/ARCN5005/",
    date: "2023-09-",
    topics: [
      "1. BIM, Open and Closed BIM",
      "- What is BIM (Chuck Eastman - BIM Handbook (2018) 3rd Edition)",
      "- ClosedBIM: Revit, Archicad",
      "- What is openBIM: https://youtu.be/1OXEj0Upm40",
      "2. Open and closed file formats:",
      "- .rvt vs .ifc",
      "- Your model is a digital file format (alphanumeric characters turn into machine language - binary code)",
      "3. BuildingSmart International and [IFC](https://www.buildingsmart.org/standards/bsi-standards/industry-foundation-classes/)",
      "4. [OSArch](https://osarch.org/)",
      "5. Post 2020 milestones",
      "6. [BlenderBIM](https://blenderbim.org/download.html)",
      "- [OSS for the AECO (2020) - Dion Moult](https://youtu.be/DK4zmfkp-pw)",
      "- OSS for the AECO (2023) - Dion Moult",
      "7. LAB 4: HTML and CSS",
    ],
  },

  {
    title: "Week 06 - Internet (Julie)",
    src: "/ARCN5005/",
    date: "2023-09-",
    topics: [
      "1. History of internet",
      "2. History of Hackerdom",
      "3. How does a website work? Structure, style, logic",
      "4. Backend and fronted",
      "5. LAB 5: JavaScript and GUI (DOM events)",
    ],
  },

  {
    title: "Week 07 - Web based 3D graphics",
    src: "/ARCN5005/",
    date: "2023-09-",
    topics: [
      "1. Web based 3D graphics",
      "2. [WebGL](https://get.webgl.org/)",
      "3. [GLTF](https://www.khronos.org/gltf/)",
      "4. [Tree.js](https://threejs.org/)",
      "5. LAB 6: and Three.js",
    ],
  },

  {
    title: "Week 08 - IFC.js",
    src: "/ARCN5005/",
    date: "2023-09-",
    topics: [
      "1. Introduction to web-based tools for architects",
      "2. [IFC.js](https://ifcjs.github.io/info/docs/introduction)",
      "3. LAB 7: IFC.js",
      "4. Midterm Roadmap - features - users and use cases.",
    ],
  },

  {
    title: "Week 09 - OS GIS (Ken)",
    src: "/ARCN5005/",
    date: "2023-09-",
    topics: [
      "1. Geospatial Information Systems",
      "2. Coordination Systems",
      "3. Open Source GIS → QGIS",
      "4. [Mapbox](https://www.mapbox.com/)",
      "5. [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/guides/) v2",
      "6. [Maplibre GL JS](https://maplibre.org/maplibre-gl-js-docs/api/)",
      "7. LAB 8: Maplibre",
    ],
  },

  {
    title: "Week 10 - Collaboration",
    src: "/ARCN5005/",
    date: "2023-09-",
    topics: [
      "1. [GIT](https://git-scm.com/): Distributed version control system. (Linus Torvalds)",
      "2. [GitHub](https://github.com/)",
      "3. Workshop Web based BIM GIS software",
    ],
  },

  {
    title: "Week 11 - Going online “hello world”",
    src: "/ARCN5005/",
    date: "2023-09-",
    topics: [
      "1. Deploy your software",
      "- Github pages",
      "2. Workshop Web based BIM GIS software",
    ],
  },

  {
    title: "Week 12 - Scalability and maintainability",
    src: "/ARCN5005/",
    date: "2023-09-",
    topics: [
      "1. Frontend frameworks",
      "- Vue, Svelte, Angular React.js + Typescript",
      "2. Workshop Web based BIM GIS software",
    ],
  },

  {
    title: "Week 13",
    src: "/ARCN5005/",
    date: "2023-09-",
    topics: ["1. Final presentations (Crit or Hackathon)"],
  },
];
