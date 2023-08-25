import dayjs from "dayjs";
import { Lectures } from "../types/types";

const initialDate = dayjs("2023-09-07");

export const arcn5005Lectures: Lectures = [
  {
    title: "Week 01 - The art of computer graphics",
    id: `week01`,
    date: initialDate,
    slides: [
      {
        id: "",
        url: "/arcn5005",
        title: "Overview of the course",
      },
      {
        id: "",
        title: "From Descartes and Alberti to Ivan Southerland.",
      },
      {
        id: "",
        title: "Introduction to digital tools",
      },
      {
        id: "",
        title: "The Art of Computer graphics ",
      },
      {
        id: "",
        title: "Cartesian space and digital representation of geometry",
      },
      {
        id: "",
        title: "Overview of assignments and final project",
      },
    ],
  },
  {
    title: "Week 02 - Digitalization of architectural representation",
    id: `week02`,
    date: initialDate.add(1, "week"),
    slides: [
      {
        id: "",
        title: "Overview to digital tools for architects",
      },
      { id: "", title: "Digital turns" },
      { id: "", title: "CAD, 3D CAD" },
      { id: "", title: "🖥️ LAB 1: Blender" },
    ],
  },

  {
    title: "Week 03 - Coding and scripting for architects",
    id: `week03`,
    date: initialDate.add(2, "week"),
    slides: [
      {
        id: "",
        title: "Coding, programming, scripting",
      },
      { id: "", title: "Close-sourced scripting" },
      {
        id: "",
        title: "Coding for efficiency and automatization",
      },
      {
        id: "",
        title: "Programming and architecture",
      },
      {
        id: "",
        title: "🖥️ LAB 2: Close-source scripting - Dynamo / Sverchok",
      },
    ],
  },
  {
    title: "Week 04 - Open source software",
    id: `week04`,
    date: initialDate.add(3, "week"),
    slides: [
      {
        id: "",
        title: "Open source. History of open-source",
      },
      {
        id: "",
        title:
          "FSF: Richard Stallman - Free Software, Free Society, Selected Essays (2002)",
      },
      {
        id: "",
        title:
          "OSI: Erik Raymond - The Cathedral and the Bazaar: Musings on Linux and Open Source by an Accidental Revolutionary (1999)",
      },
      {
        id: "",
        title: "Coding as a Language, as a tools and as an apparatus.",
      },
      { id: "", title: "OS Libraries / Packages" },
      {
        id: "",
        title: "🖥️ LAB 3: Visual studio code",
      },
    ],
  },

  {
    title: "Week 05 - Internet",
    id: `week05`,
    date: initialDate.add(4, "week"),
    slides: [
      {
        id: "",
        title: "History of internet - Guess lecturer: Julie Ivanoff (?)",
      },
      { id: "", title: "History of Hackerdom" },
      {
        id: "",
        title: "How does a website work? Structure, style, logic",
      },
      { id: "", title: "Backend and fronted" },
      {
        id: "",
        title: "🖥️ LAB 4: HTML and CSS, JavaScript and GUI (DOM events)",
      },
    ],
  },
  {
    title: "Week 06 - Collaboration",
    id: `week06`,
    date: initialDate.add(5, "week"),
    slides: [
      { id: "", title: "Git" },
      { id: "", title: "Github" },
      {
        id: "",
        title: "🖥️ LAB 5: Web based BIM GIS software",
      },
    ],
  },

  {
    title: "Week 07 - BIM",
    id: `week07`,
    date: initialDate.add(6, "week"),
    slides: [
      {
        id: "",
        title: "What is BIM? , Open and Closed BIM",
      },
      { id: "", title: "ClosedBIM: Revit, Archicad" },
      { id: "", title: "OpenBIM - OSArch" },
      { id: "", title: "File formats - .rvt vs .ifc" },
      {
        id: "",
        title: "BuildingSmart International and IFC",
      },
      { id: "", title: "Post 2020 milestones" },
      {
        id: "",
        title: "BlenderBIM - Guess lecturer: Raphaël Vouilloz",
      },
      { id: "", title: "🖥️ LAB 6: BlenderBIM" },
    ],
  },
  {
    title: "Week 08 - Web based 3D graphics",
    id: `week08`,
    date: initialDate.add(8, "week"),
    slides: [
      { id: "", title: "Web based 3D graphics" },
      { id: "", title: "WebGL" },
      { id: "", title: "GLTF" },
      { id: "", title: "Tree.js" },
      { id: "", title: "🖥️ LAB 7: and Three.js" },
    ],
  },

  {
    title: "Week 09 - IFC.js",
    id: `week09`,
    date: initialDate.add(9, "week"),
    slides: [
      {
        id: "",
        title: "Introduction to web-based open source tools for architects",
      },
      { id: "", title: "🖥️ LAB 8: IFC.js" },
    ],
  },

  {
    title: "Week 10 - OS GIS",
    id: `week10`,
    date: initialDate.add(10, "week"),
    slides: [
      { id: "", title: "Geospatial Information Systems" },
      { id: "", title: "Coordination Systems" },
      { id: "", title: "Proprietary GIS (Arc GIS)" },
      { id: "", title: "Proprietary web GIS - Cesium and Mapbox" },
      {
        id: "",
        title: "Open Source GIS - QGIS - Guess lecturer: Ken Percy (CIMS)",
      },
      { id: "", title: "Open Source web GIS - Leaflet and Maplibre" },
      { id: "", title: "🖥️ LAB 9: Maplibre" },
    ],
  },

  {
    title: "Week 11 - Going online “hello world”",
    id: `week11`,
    date: initialDate.add(11, "week"),
    slides: [
      { id: "", title: "Deploy your software" },
      { id: "", title: "Github pages" },
      { id: "", title: "🖥️ LAB 10: Web based BIM GIS software" },
    ],
  },

  {
    title: "Week 12 - Scalability and maintainability",
    id: `week12`,
    date: initialDate.add(12, "week"),
    slides: [
      { id: "", title: "Frontend framework" },
      { id: "", title: "Vue" },
      { id: "", title: "Svelte" },
      { id: "", title: "Angular" },
      { id: "", title: " React.js" },
      { id: "", title: "Typescrip" },
      { id: "", title: "Next.js" },
      { id: "", title: "🖥️ LAB11 : Web based BIM GIS software" },
    ],
  },

  {
    title: "Week 13",
    id: `week13`,
    date: initialDate.add(13, "week"),
    slides: [{ id: "", title: "🏁 Final presentations (Hackathon)" }],
  },
];
