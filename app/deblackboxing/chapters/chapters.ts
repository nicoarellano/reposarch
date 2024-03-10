import dayjs from "dayjs";
import { Lectures } from "../../types/types";
// import { content as week01 } from "./arcn5005/(lectures)/week01";
// import { content as week02 } from "./arcn5005/(lectures)/week02";
// import { content as week03 } from "./arcn5005/(lectures)/week03";
// import { content as week04 } from "./arcn5005/(lectures)/week04";
// import { content as week05 } from "./arcn5005/(lectures)/week05";
// import { content as week06 } from "./arcn5005/(lectures)/week06";
// import { content as week07 } from "./arcn5005/(lectures)/week07";
// import { content as week08 } from "./arcn5005/(lectures)/week08";
// import { content as week09 } from "./arcn5005/(lectures)/week09";
// import { content as week10 } from "./arcn5005/(lectures)/week10";
// import { content as week11 } from "./arcn5005/(lectures)/week11";
// import { content as week12 } from "./arcn5005/(lectures)/week12";
// import { content as week13 } from "./arcn5005/(lectures)/week13";
// import { content as final } from "./arcn5005/(lectures)/final";
// import { content as maps } from "./arcn5005/(lectures)/maps";

export const chapters: Lectures = [
  {
    title: "Chapter 1: Introduction",
    id: `chapter01`,
    url: `chapter01`,
    toc: [],
  },
  {
    title:
      "Chapter 2: BIM properly using computers for architectural representation",
    id: `chapter02`,
    url: `chapter02`,
    // content: week02,
    toc: [
      { title: "Digitalization of the physical wold" },
      { title: "Photogrammetry - Guess lecturer: Miguel Reina Ortiz" },
      { title: "Introduction to digital tools" },
      { title: "Digital turns" },
      { title: "Coding, programming, scripting" },
      { title: "🖥️ LAB 2: MeshRoom to Blender" },
    ],
  },

  {
    title: "Chapter 3: BIM Adoption",
    id: `chapter03`,
    url: `chapter03`,
    // date: initialDate.add(2, "week"),
    // content: week03,
    toc: [
      { title: "Sharing Blender experience" },
      { title: "Digital tools for AEC" },
      { title: "Representation Processes: CAD, 3D CAD, BIM" },
      { title: "Proprietary software" },

      { title: "🖥️ LAB 3: P5, LibreCad, and Blender " },
    ],
  },
  {
    title: "Chapter 4: Black boxes",
    id: `chapter04`,
    url: `chapter04`,
    // date: initialDate.add(3, "week"),
    // content: week04,
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
  },

  {
    title: "Chapter 5: Coding",
    id: `chapter05`,
    url: `chapter05`,
    // date: initialDate.add(4, "week"),
    // content: week05,
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
  },
  {
    title: "Chapter 6: Open source software for architects",
    id: `chapter06`,
    url: `chapter06`,
    // date: initialDate.add(5, "week"),
    // content: week06,
    toc: [
      { title: "Open vs Closed BIM" },
      { title: "BuildingSmart International and IFC" },
      { title: "File formats - .rvt vs .ifc" },
      { title: "OSArch" },
      { title: "Post 2020 milestones" },
      { title: "CSS - Cascading Style Sheets" },
      { title: "🖥️ LAB 6: HTML and CSS" },
    ],
  },
  {
    title: "Chapter 7: De-blackboxing BIM",
    id: `chapter07`,
    url: `chapter07`,
    // date: initialDate.add(6, "week"),
    // content: week07,
    toc: [
      { title: "BlenderBIM - Guess lecturer: Raphaël Vouilloz" },
      {
        title:
          "🔴 Assignment 1 presentation - Using HTML and CSS to create your assignment portal",
      },
      { title: "Native IFC" },
      { title: "🖥️ LAB 7: BlenderBIM: Native IFC" },
    ],
  },
  {
    title: "Conclusions",
    id: `conclusions`,
    url: `conclusions`,
    // date: initialDate.add(7, "week"),
    toc: [],
  },
];
