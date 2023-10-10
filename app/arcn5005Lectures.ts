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
import { content as maps } from "./arcn5005/(lectures)/maps";

const initialDate = dayjs("2023-09-07");

export const arcn5005Lectures: Lectures = [
  {
    title: "The art of computer graphics",
    id: `week01`,
    url: `week01`,
    date: initialDate,
    content: week01,
    toc: [
      {
        title: "Overview of the course: Understanding the course portal",
        url: "/arcn5005",
      },
      { title: "Course Outline", url: "/arcn5005/course-outline" },
      { title: "Evaluations", url: "/arcn5005/evaluations" },
      {
        title: "Overview of assignments and final project",
        url: "/arcn5005/three-example",
      },
      { title: "The Art of Computer graphics", url: "/arcn5005/week01" },
      {
        title:
          "🖥️ LAB 1: Downloading software, installing an IDE (Visual studio code), Github",
      },
    ],
  },
  {
    title: "Programming and digitalization of the physical world",
    id: `week02`,
    url: `week02`,
    date: initialDate.add(1, "week"),
    content: week02,
    toc: [
      { title: "Digitalization of the physical wold" },
      { title: "Photogrammetry - Guess lecturer: Miguel Reina Ortiz" },
      { title: "Introduction to digital tools" },
      { title: "Digital turns" },
      { title: "Coding, programming, scripting" },
      { title: "🖥️ LAB 2: MeshRoom to Blender" },
    ],
    recordings: [
      {
        url: "https://www.youtube.com/embed/KzBL9fhKgWA?si=iIBCf7Sjgilq12xG",
        title: "Photogrammetry - Miquel Reina Ortiz",
        date: dayjs("2023/09/14"),
      },
      {
        url: "https://www.youtube.com/embed/w2N2Yth4sbQ?si=K6D_B2ESbYQ1Cq0v",
        title: "Programming",
        date: dayjs("2023/09/14"),
      },
    ],
  },

  {
    title: "Representation tools and processes for architects",
    id: `week03`,
    url: `week03`,
    date: initialDate.add(2, "week"),
    content: week03,
    toc: [
      { title: "Sharing Blender experience" },
      { title: "Digital tools for architects" },
      { title: "Representation Processes: CAD, 3D CAD, BIM" },
      { title: "Proprietary software" },

      { title: "🖥️ LAB 3: P5, LibreCad, and Blender " },
    ],
    recordings: [
      {
        url: "https://www.youtube.com/embed/GHW0PLXnqhs?si=0AtxbAz1BRhrZBCz",
        title: "CAD, 3D CAD, and BIM",
        date: dayjs("2023/09/21"),
      },
    ],
  },
  {
    title: "Scripting",
    id: `week04`,
    url: `week04`,
    date: initialDate.add(3, "week"),
    content: week04,
    toc: [
      { title: "Closed source formats" },
      { title: "Close-sourced scripting" },
      {
        title:
          "Coding for efficiency and automatization ; AKA Programming solutions for repetitive tasks",
      },

      {
        title:
          "🖥️ LAB 4: Scripting - Dynamo / Grasshopper / Blender Geometry Nodes",
      },
    ],
    recordings: [
      {
        url: "https://www.youtube.com/embed/XeX3Iz3hE9g?si=jdr_iGGWa1TJB8Cu",
        title: "Scripting and Visual Programming",
        date: dayjs("2023/09/28"),
      },
    ],
  },

  {
    title: "Internet, Collaboration and the Open source movement",
    id: `week05`,
    url: `week05`,
    date: initialDate.add(4, "week"),
    content: week05,
    toc: [
      { title: "🟡 Quiz 1" },
      {
        title:
          "Guess lecturer: Julie Ivanoff: Brief history of the computers, the internet, and the domocratization of knowledge",
      },
      {
        title:
          "Open source. History of open-source and the free software society",
      },
      {
        title: "FSF: Free Software Foundation",
      },
      {
        title: "OSI: Open Software Initiative",
      },
      { title: "How does a website work? Structure, style, logic" },
      { title: "🖥️ LAB 5: GitHub and HTML" },
    ],
    recordings: [
      {
        url: "https://www.youtube.com/embed/qEGt81c3DTM?si=6K_swhkQAz6OUtUM",
        title:
          "Julie Ivanoff - Brief history of the computers, the internet, and the domocratization of knowledge ",
        date: dayjs("2023/10/05"),
      },
      {
        url: "https://www.youtube.com/embed/qqNEEniAkf8?si=qOMLrngQ-Ek70xSE",
        title: "Intro to HTML",
        date: dayjs("2023/10/05"),
      },
    ],
  },
  {
    title: "Open source software for architects",
    id: `week06`,
    url: `week06`,
    date: initialDate.add(5, "week"),
    content: week06,
    toc: [
      { title: "Open vs Closed BIM" },
      { title: "BuildingSmart International and IFC" },
      { title: "File formats - .rvt vs .ifc" },
      { title: "OSArch" },
      { title: "OS Libraries / Packages" },
      { title: "Post 2020 milestones" },
      { title: "🖥️ LAB 6: HTML and CSS" },
    ],
  },
  {
    title: "OpenBIM",
    id: `week07`,
    url: `week07`,
    date: initialDate.add(6, "week"),
    content: week07,
    toc: [
      { title: "BlenderBIM - Guess lecturer: Raphaël Vouilloz" },
      {
        title:
          "🔴 Assignment 1 presentation - Using HTML and CSS to create your assignment portal",
      },
      { title: "🖥️ LAB 7: BlenderBIM" },
    ],
  },
  {
    title: "🍂 FALL BREAK 🍂",
    id: `fall-break`,
    url: `fall-break`,
    date: initialDate.add(7, "week"),
    toc: [],
  },
  {
    title: "Web based 3D graphics",
    id: `week08`,
    url: `week08`,
    date: initialDate.add(8, "week"),
    content: week08,
    toc: [
      { title: "WebGL - Web based 3D graphics" },
      { title: "GLTF" },
      { title: "Tree.js, intro to ifc.js" },
      { title: "🖥️ LAB 8: Javascript and Three.js, uploading mesh" },
    ],
  },

  {
    title: "IFC to the browser",
    id: `week09`,
    url: `week09`,
    date: initialDate.add(9, "week"),
    content: week09,
    toc: [
      {
        title:
          "🔴 Assignment 2 presentation - 3d model using Blender, a photogrammetry software (MeshRoom or Metashape) and Three.js",
      },
      { title: "Guess lecturer: That Open Company" },
      { title: "Introduction to web-based open source tools for architects" },
      { title: "IFC.js" },
      { title: "🖥️ LAB 9: IFC.js and OpenBIM Components" },
    ],
  },

  {
    title: "Open Source GIS",
    id: `week10`,
    url: `week10`,
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
    title: "Going online “hello world”",
    id: `week11`,
    url: `week11`,
    date: initialDate.add(11, "week"),
    content: week11,
    toc: [
      {
        title:
          "🔴 Assignment 3 presentation - BIM model using Blender + Blender BIM and OpenBIM-Components (ifc.js)",
      },
      { title: "Deploy your software" },
      { title: "Github pages" },
      { title: "🖥️ LAB 11: Web based BIM GIS software" },
    ],
  },

  {
    title: "Scalability and maintainability",
    id: `week12`,
    url: `week12`,
    date: initialDate.add(12, "week"),
    content: week12,
    toc: [
      { title: "🟡 Quiz 3" },
      { title: "Frontend framework" },
      { title: "Tailwind CSS" },
      { title: " React.js" },
      { title: "Typescript" },
      { title: "Next.js" },
      { title: "🖥️ LAB 12 : Web based BIM GIS software" },
    ],
  },
  {
    title: "Final assignment workshop and Presentations",
    id: `week13`,
    url: `week13`,
    date: initialDate.add(13, "week"),
    content: week13,
    toc: [
      { title: "🔴 Assignment 4 presentation - Custom map using maplibre" },
      { title: "🖥️ LAB 13 Final assignment workshop" },
    ],
  },
  {
    title: "🏁 Final Presentation 🏁",
    id: `final`,
    url: `final`,
    date: dayjs("2023-12-18"),
    content: final,
    toc: [{ title: "🏁 Final presentations" }],
  },
  {
    title: "🗺️ Maps and GIS 🌎",
    id: `maps`,
    url: `maps`,
    date: dayjs("2023-09-25"),
    content: maps,
    toc: [
      { title: "History of Mapping" },
      { title: "Map Projections" },
      { title: "Geodetic reference systems - NAD83 vs WGS84" },
      { title: "Digital Maps" },
      { title: "Geospatial Information Systems" },
      { title: "Proprietary web GIS - Cesium and Mapbox" },
      { title: "Open Source web GIS - Leaflet and Maplibre" },
      { title: "🖥️ LAB : Maplibre" },
    ],
    recordings: [
      {
        url: "https://www.youtube.com/embed/nc-7jJRwUP8?si=MSMT1beQ56ThJkxv",
        title: "Maps, GIS and Map renderers",
        date: dayjs("2023/09/25"),
      },
      {
        url: "https://www.youtube.com/embed/VO94LWTuofM?si=0gIlwSYCNOLYTFuS",
        title: "Maplibre - Tutorial 1",
        date: dayjs("2023/09/25"),
      },
    ],
  },
];
