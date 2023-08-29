import dayjs from "dayjs";
import { Lectures } from "../types/types";

const initialDate = dayjs("2023-09-07");

export const arcn5005Lectures: Lectures = [
  {
    title: "Week 01 - The art of computer graphics",
    id: `week01`,
    date: initialDate,
    slides: [
      "Overview of the course",
      "From Descartes and Alberti to Ivan Southerland.",
      "Introduction to digital tools",
      "The Art of Computer graphics ",
      "Cartesian space and digital representation of geometry",
      "Overview of assignments and final project",
      "🖥️ LAB 1: Dowloading free software, creating Github account, forking repo",
    ],
  },
  {
    title: "Week 02 - Digitalization of architectural representation",
    id: `week02`,
    date: initialDate.add(1, "week"),
    slides: [
      "Overview to digital tools for architects",
      "Digital turns",
      "CAD, 3D CAD",
      "🖥️ LAB 2: Blender",
    ],
  },

  {
    title: "Week 03 - Coding and scripting for architects",
    id: `week03`,
    date: initialDate.add(2, "week"),
    slides: [
      "Coding, programming, scripting",
      "Close-sourced scripting",
      "Coding for efficiency and automatization",
      "Programming and architecture",
      "🖥️ LAB 3: Close-source scripting - Dynamo / Sverchok",
    ],
  },
  {
    title: "Week 04 - Open source software",
    id: `week04`,
    date: initialDate.add(3, "week"),
    slides: [
      "Open source. History of open-source",
      "FSF: Richard Stallman - Free Software, Free Society, Selected Essays (2002)",
      "OSI: Erik Raymond - The Cathedral and the Bazaar: Musings on Linux and Open Source by an Accidental Revolutionary (1999)",
      "Coding as a Language, as a tools and as an apparatus.",
      "OS Libraries / Packages",
      "🖥️ LAB 4: Visual studio code",
    ],
  },

  {
    title: "Week 05 - Internet",
    id: `week05`,
    date: initialDate.add(4, "week"),
    slides: [
      "History of internet - Guess lecturer: Julie Ivanoff (?)",
      "History of Hackerdom",
      "How does a website work? Structure, style, logic",
      "Backend and fronted",
      "🖥️ LAB 5: HTML and CSS, JavaScript and GUI (DOM events)",
    ],
  },
  {
    title: "Week 06 - Collaboration",
    id: `week06`,
    date: initialDate.add(5, "week"),
    slides: ["Git", "Github", "🖥️ LAB 6: Web based BIM GIS software"],
  },

  {
    title: "Week 07 - BIM",
    id: `week07`,
    date: initialDate.add(6, "week"),
    slides: [
      "What is BIM? , Open and Closed BIM",
      "ClosedBIM: Revit, Archicad",
      "OpenBIM - OSArch",
      "File formats - .rvt vs .ifc",
      "BuildingSmart International and IFC",
      "Post 2020 milestones",
      "BlenderBIM - Guess lecturer: Raphaël Vouilloz",
      "🖥️ LAB 7: BlenderBIM",
    ],
  },
  {
    title: "Week 08 - Web based 3D graphics",
    id: `week08`,
    date: initialDate.add(8, "week"),
    slides: [
      "Web based 3D graphics",
      "WebGL",
      "GLTF",
      "Tree.js",
      "🖥️ LAB 8: and Three.js",
    ],
  },

  {
    title: "Week 09 - IFC.js",
    id: `week09`,
    date: initialDate.add(9, "week"),
    slides: [
      "Introduction to web-based open source tools for architects",
      "🖥️ LAB 9: IFC.js",
    ],
  },

  {
    title: "Week 10 - OS GIS",
    id: `week10`,
    date: initialDate.add(10, "week"),
    slides: [
      "Geospatial Information Systems",
      "Coordination Systems",
      "Proprietary GIS (Arc GIS)",
      "Proprietary web GIS - Cesium and Mapbox",
      "Open Source GIS - QGIS - Guess lecturer: Ken Percy (CIMS)",
      "Open Source web GIS - Leaflet and Maplibre",
      "🖥️ LAB 10: Maplibre",
    ],
  },

  {
    title: "Week 11 - Going online “hello world”",
    id: `week11`,
    date: initialDate.add(11, "week"),
    slides: [
      "Deploy your software",
      "Github pages",
      "🖥️ LAB 11: Web based BIM GIS software",
    ],
  },

  {
    title: "Week 12 - Scalability and maintainability",
    id: `week12`,
    date: initialDate.add(12, "week"),
    slides: [
      "Frontend framework",
      "Vue",
      "Svelte",
      "Angular",
      " React.js",
      "Typescrip",
      "Next.js",
      "🖥️ LAB 12 : Web based BIM GIS software",
    ],
  },

  {
    title: "Week 13",
    id: `week13`,
    date: initialDate.add(13, "week"),
    slides: ["🖥️ LAB 13 Final assignment workshop"],
  },
  {
    title: "Week 14",
    id: `week14`,
    date: dayjs("2023-12-18"),
    slides: ["🏁 Final presentations"],
  },
];
