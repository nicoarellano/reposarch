import dayjs from "dayjs";
import { Lectures } from "@/app/types/types";
import { content as week01 } from "./week01";
import { content as week02 } from "./week02";
import { content as week03 } from "./week03";
import { content as week04 } from "./week04";
import { content as week05 } from "./week05";
import { content as week06 } from "./week06";
import { content as week07 } from "./week07";
import { content as week08 } from "./week08";
import { content as week09 } from "./week09";
import { content as week10 } from "./week10";
import { content as week11 } from "./week11";
import { content as week12 } from "./week12";
import { content as week13 } from "./week13";
import { content as final } from "./final";
import { content as maps } from "./maps";
import { startingDate } from "../terms/currentTerm";

const initialDate = dayjs(startingDate); // for Fall 2024

export const arcn5005Lectures: Lectures = [
  {
    title: "The art of computer graphics",
    id: `week01`,
    url: `lectures/week01`,
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
    url: `lectures/week02`,
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
    title: "Representation tools and processes for the AEC",
    id: `week03`,
    url: `lectures/week03`,
    date: initialDate.add(2, "week"),
    content: week03,
    toc: [
      { title: "Sharing Blender experience" },
      { title: "Digital tools for AEC" },
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
    url: `lectures/week04`,
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
    url: `lectures/week05`,
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
    url: `lectures/week06`,
    date: initialDate.add(5, "week"),
    content: week06,
    toc: [
      { title: "Open vs Closed BIM" },
      { title: "BuildingSmart International and IFC" },
      { title: "File formats - .rvt vs .ifc" },
      { title: "OSArch" },
      { title: "Post 2020 milestones" },
      { title: "CSS - Cascading Style Sheets" },
      { title: "🖥️ LAB 6: HTML and CSS" },
    ],
    recordings: [
      {
        url: "https://www.youtube.com/embed/mBQb2ILySfg?si=CBeJKdvHX9_VV_h3",
        title: "OSArch - Open source for architects community",
        date: dayjs("2023/10/12"),
      },
      {
        url: "https://www.youtube.com/embed/nJAVn_VEt58?si=fZhMLNeyMfVlDfIg",
        title: "Introduction to CSS",
        date: dayjs("2023/10/12"),
      },
    ],
  },
  {
    title: "OS BIM Software: BlenderBIM",
    id: `week07`,
    url: `lectures/week07`,
    date: initialDate.add(6, "week"),
    content: week07,
    toc: [
      { title: "BlenderBIM - Guess lecturer: Raphaël Vouilloz" },
      {
        title:
          "🔴 Assignment 1 presentation - Using HTML and CSS to create your assignment portal",
      },
      { title: "Native IFC" },
      { title: "🖥️ LAB 7: BlenderBIM: Native IFC" },
    ],
    recordings: [
      {
        url: "https://www.youtube.com/embed/GCYKolrSog0?si=TjahHdVCEB41w9B7",
        title: "Raphael Vouilloz - BlenderBIM",
        date: dayjs("2023/10/19"),
      },
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
    url: `lectures/week08`,
    date: initialDate.add(8, "week"),
    content: week08,
    toc: [
      { title: "JavaScript (js)" },
      { title: "WebGL - Web based 3D graphics" },
      { title: "GLTF" },
      { title: "Tree.js, intro to ifc.js" },
      { title: "Intro to ifc.js" },
      { title: "🖥️ LAB 8: Javascript and Three.js, uploading mesh" },
    ],
    recordings: [
      {
        url: "https://www.youtube.com/embed/fi_36W2oZfA?si=02doFd78VBxNBQba",
        title: "Assignment 2",
        date: dayjs("2023/11/02"),
      },
      {
        url: "https://www.youtube.com/embed/W4OTcU1AB-A?si=oSW7CwZueWjG0rUf",
        title: "Introduction to JavaScript",
        date: dayjs("2023/11/02"),
      },
      {
        url: "https://www.youtube.com/embed/3wsFKrYhAHc?si=3KKtMe2XpZpR6eix",
        title:
          "Introduction to 3D graphics on the web browser:  WebGL, GLTF and Three.js",
        date: dayjs("2023/11/02"),
      },
    ],
  },

  {
    title: "IFC to the browser",
    id: `week09`,
    url: `lectures/week09`,
    date: initialDate.add(9, "week"),
    content: week09,
    toc: [
      { title: "Guess lecturer: Antonio Gonzalez Viegas (That Open Company)" },
      { title: "Introduction to web-based open source tools for architects" },
      { title: "OpenBIM Components (formerly IFC.js)" },
      { title: "🖥️ LAB 9: IFC.js and OpenBIM Components" },
    ],
    recordings: [
      {
        url: "https://www.youtube.com/embed/rLE9pdzEBsw?si=3ZuwNi6pz6lcC8Dq",
        title: "Antonio Gonzales Viegas - That Open Company",
        date: dayjs("2023/11/09"),
      },
      {
        url: "https://www.youtube.com/embed/BlMH1L8-joI?si=Vd-saGr0Wtnf6sj4",
        title: "Three js - Assignment 2 - 1/2",
        date: dayjs("2023/11/09"),
      },
      {
        url: "https://www.youtube.com/embed/bLUMHQRJJyU?si=EGpp1l5QnUQcQmV3",
        title: "Three js - Assignment 2 - 2/2",
        date: dayjs("2023/11/09"),
      },
    ],
  },

  {
    title: "Open Source GIS",
    id: `week10`,
    url: `lectures/week10`,
    date: initialDate.add(10, "week"),
    content: week10,
    toc: [
      {
        title:
          "🔴 Assignment 2 presentation - 3d model using Blender, a photogrammetry software and Three.js",
      },
      { title: "Open Source GIS - QGIS - Guess lecturer: Ken Percy (CIMS)" },
      { title: "Q GIS" },
      { title: "🖥️ LAB 10: Three js continuation" },
    ],
    recordings: [
      {
        url: "https://www.youtube.com/embed/LBPLWOyyLUs?si=smhmUoCtn1Ptq6Kd",
        title: "Ken Percy - Open-source GIS",
        date: dayjs("2023/11/16"),
      },
    ],
  },

  {
    title: "Web based OS mapping and GIS",
    id: `week11`,
    url: `lectures/week11`,
    date: initialDate.add(11, "week"),
    content: week11,
    toc: [
      { title: "Geospatial Information Systems" },
      { title: "Coordination Systems" },
      { title: "Proprietary web GIS - Cesium and Mapbox" },
      { title: "Open Source web GIS - Leaflet and Maplibre" },
      { title: "🖥️ LAB 11: Web based GIS software" },
    ],
    recordings: [
      {
        url: "https://www.youtube.com/embed/vSejvs1PBNc?si=qAIK45kWVdSQtW-g",
        title: "New calendar and Assignment 2 feedback",
        date: dayjs("2023/11/23"),
      },
      {
        url: "https://www.youtube.com/embed/SIZWzM5N6T8?si=kqgrpZZYSGWcNe-m",
        title: "Web based mapping and Assignment 3",
        date: dayjs("2023/11/23"),
      },
    ],
  },

  {
    title: "Advanced Toolbox - Going online, scalability and maintainability",
    id: `week12`,
    url: `lectures/week12`,
    date: initialDate.add(12, "week"),
    content: week12,
    toc: [
      { title: "🟡 Quiz 2" },
      { title: "Frontend frameworks" },
      { title: "React.js" },
      { title: "Next.js" },
      { title: "Typescript" },
      { title: "Tailwind CSS" },
      { title: "Deploy your software - Github pages" },
      {
        title:
          "🖥️ LAB 12 : Deploying a web based BIM software and Assignment 3",
      },
    ],
    recordings: [
      {
        url: "https://www.youtube.com/embed/kKrYBqN3en8?si=2af8sUvxXNvRK3mt",
        title: "Advanced toolbox",
        date: dayjs("2023/11/30"),
      },
    ],
  },
  {
    title: "Final assignment workshop and assignment 3 presentations",
    id: `week13`,
    url: `lectures/week13`,
    date: initialDate.add(13, "week"),
    content: week13,
    toc: [
      { title: "🔴 Assignment 3 presentation - Custom map using maplibre" },
      { title: "🖥️ LAB 13 Final assignment workshop" },
    ],
    recordings: [
      {
        url: "https://www.youtube.com/embed/0f1OROLez_I?si=ckR0BprKHy8rHTfT",
        title: "Final Assignment explained",
        date: dayjs("2023/12/07"),
      },
    ],
  },
  {
    title: "🏁 Final Presentation 🏁",
    id: `final`,
    url: `final`,
    date: initialDate.add(14, "week"),
    content: final,
    toc: [{ title: "🏁 Final presentations" }],
  },
  {
    title: "🗺️ Maps and GIS 🌎",
    id: `maps`,
    url: `maps`,
    date: dayjs("2024-09-25"),
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
