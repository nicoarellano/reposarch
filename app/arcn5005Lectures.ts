import dayjs from "dayjs";
import { Lectures } from "../types/types";
import { content as week01 } from "./arcn5005/(lectures)/week01";
import { content as week02 } from "./arcn5005/(lectures)/week02";
import { content as week03 } from "./arcn5005/(lectures)/week03";
import { content as week04 } from "./arcn5005/(lectures)/week04/";
import { content as week05 } from "./arcn5005/(lectures)/week05/";
import { content as week06 } from "./arcn5005/(lectures)/week06/";
import { content as week07 } from "./arcn5005/(lectures)/week07/";
import { content as week08 } from "./arcn5005/(lectures)/week08/";
import { content as week09 } from "./arcn5005/(lectures)/week09/";
import { content as week10 } from "./arcn5005/(lectures)/week10/";
import { content as week11 } from "./arcn5005/(lectures)/week11/";
import { content as week12 } from "./arcn5005/(lectures)/week12/";
import { content as week13 } from "./arcn5005/(lectures)/week13/";
import { content as final } from "./arcn5005/(lectures)/final";

const initialDate = dayjs("2023-09-07");

export const arcn5005Lectures: Lectures = [
  {
    title: "Week 01 - The art of computer graphics",
    id: `week01`,
    url: `week01/1`,
    date: initialDate,
    content: week01,
    toc: [
      { title: "Overview of the course" },
      { title: "Understanding the course portal" },
      { title: "Course Outline" },
      { title: "Evaluations" },
      { title: "Overview of assignments and final project" },
      { title: "From the Renaissance to the computer era." },
      { title: "The Art of Computer graphics " },
      { title: "Cartesian space and digital representation of geometry" },
      {
        title:
          "🖥️ LAB 1: Dowloading free software, creating Github account, forking repo : Visual studio code",
      },
    ],
  },
  {
    title: "Week 02 - Digitalization of architectural representation",
    id: `week02`,
    url: `week02/1`,
    date: initialDate.add(1, "week"),
    content: week02,
    toc: [
      { title: "Photogrametry - Guess lecturer: Miguel Reina Ortiz" },
      { title: "Introduction to digital tools" },
      { title: "Digital tools for architects" },
      { title: "Digital turns" },
      { title: "Coding, programming, scripting" },
      { title: "🖥️ LAB 2: MeshRoom to Blender" },
    ],
  },

  {
    title: "Week 03 - Representation tools and processes for architects",
    id: `week03`,
    url: `week03/1`,
    date: initialDate.add(2, "week"),
    content: week03,
    toc: [
      { title: "Sharing Blender experience" },
      { title: "Representation Processes: CAD, 3D CAD, BIM" },
      { title: "What is BIM" },
      { title: "Proprietary software" },
      { title: "Closed source formats" },
      { title: "Close-sourced scripting" },
      {
        title:
          "Coding for efficiency and automatization or the good old ; Programming solutions for repetetive tasks",
      },
      { title: "🖥️ LAB 3: Close-source scripting - BIM and Dynamo / Sverchok" },
    ],
  },
  {
    title: "Week 04 - Internet and Collaboration",
    id: `week04`,
    url: `week04/1`,
    date: initialDate.add(3, "week"),
    content: week04,
    toc: [
      { title: "History of internet - Guess lecturer: (?)" },
      { title: "History of Hackerdom" },
      { title: "How does a website work? Structure, style, logic" },
      { title: "Backend and fronted" },
      { title: "🖥️ LAB 4: HTML" },
    ],
  },

  {
    title: "Week 05 - Open source ",
    id: `week05`,
    url: `week05/1`,
    date: initialDate.add(4, "week"),
    content: week05,
    toc: [
      { title: "🟡 Quiz 1" },
      { title: "Git and Github" },
      { title: "Open source. History of open-source" },
      {
        title:
          "FSF: Richard Stallman - Free Software, Free Society, Selected Essays (2002)",
      },
      {
        title:
          "OSI: Erik Raymond - The Cathedral and the Bazaar: Musings on Linux and Open Source by an Accidental Revolutionary (1999)",
      },
      { title: "🖥️ LAB 5: CSS" },
    ],
  },
  {
    title: "Week 06 - Open source software for architects",
    id: `week06`,
    url: `week06/1`,
    date: initialDate.add(5, "week"),
    content: week06,
    toc: [
      { title: "Programming and architecture" },
      { title: "Coding as a Language, as a tools and as an apparatus." },
      { title: "OS Libraries / Packages" },
      { title: "OSArch" },
      { title: "🖥️ LAB 6:  JavaScript" },
    ],
  },
  {
    title: "Week 07 - OpenBIM",
    id: `week07`,
    url: `week07/1`,
    date: initialDate.add(6, "week"),
    content: week07,
    toc: [
      { title: "BlenderBIM - Guess lecturer: Raphaël Vouilloz" },
      { title: "🔴 Assignment 1 - presentation" },
      { title: "Open vs Closed BIM" },
      { title: "File formats - .rvt vs .ifc" },
      { title: "BuildingSmart International and IFC" },
      { title: "Post 2020 milestones" },
      { title: "🖥️ LAB 7: BlenderBIM" },
    ],
  },
  {
    title: "Week 08 - Web based 3D graphics",
    id: `week08`,
    url: `week08/1`,
    date: initialDate.add(8, "week"),
    content: week08,
    toc: [
      { title: "Web based 3D graphics" },
      { title: "WebGL" },
      { title: "GLTF" },
      { title: "Tree.js" },
      { title: "🖥️ LAB 8: Three.js" },
    ],
  },

  {
    title: "Week 09 - IFC to the browser",
    id: `week09`,
    url: `week09/1`,
    date: initialDate.add(9, "week"),
    content: week09,
    toc: [
      { title: "🟡 Quiz 2" },
      { title: "Introduction to web-based open source tools for architects" },
      { title: "IFC.js" },
      { title: "🖥️ LAB 9: IFC.js " },
    ],
  },

  {
    title: "Week 10 - OS GIS",
    id: `week10`,
    url: `week10/1`,
    date: initialDate.add(10, "week"),
    content: week10,
    toc: [
      { title: "Geospatial Information Systems" },
      { title: "Coordination Systems" },
      { title: "Proprietary GIS (Arc GIS)" },
      { title: "Proprietary web GIS - Cesium and Mapbox" },
      { title: "Open Source GIS - QGIS - Guess lecturer: Ken Percy (CIMS)" },
      { title: "Open Source web GIS - Leaflet and Maplibre" },
      { title: "🖥️ LAB 10: Maplibre" },
    ],
  },

  {
    title: "Week 11 - Going online “hello world”",
    id: `week11`,
    url: `week11/1`,
    date: initialDate.add(11, "week"),
    content: week11,
    toc: [
      { title: "🔴 Assignment 2 - presentation" },
      { title: "Deploy your software" },
      { title: "Github pages" },
      { title: "🖥️ LAB 11: Web based BIM GIS software" },
    ],
  },

  {
    title: "Week 12 - Scalability and maintainability",
    id: `week12`,
    url: `week12/1`,
    date: initialDate.add(12, "week"),
    content: week12,
    toc: [
      { title: "🟡 Quiz 3" },
      { title: "Frontend framework" },
      { title: "Vue" },
      { title: "Svelte" },
      { title: "Angular" },
      { title: " React.js" },
      { title: "Typescrip" },
      { title: "Next.js" },
      { title: "🖥️ LAB 12 : Web based BIM GIS software" },
    ],
  },

  {
    title: "Week 13",
    id: `week13`,
    url: `week13/1`,
    date: initialDate.add(13, "week"),
    content: week13,
    toc: [
      { title: "🔴 Assignment 3 - presentation" },
      { title: "🖥️ LAB 13 Final assignment workshop" },
    ],
  },
  {
    title: "Final Presentation",
    id: `final`,
    url: `final/1`,
    date: dayjs("2023-12-18"),
    content: final,
    toc: [{ title: "🏁 Final presentations" }],
  },
];
