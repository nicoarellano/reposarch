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
    title: "Introduction",
    id: `introduction`,
    url: `introduction`,
    toc: [
      { title: "Digital tools for architects" },
      {
        title: "Building Information Modeling (BIM): The new tool in hand (?)",
      },
      { title: "Open-source: One way out" },
      { title: "Digital education for architects" },
    ],
  },
  {
    title: "Literature Review",
    id: `literature-review`,
    url: `literature-review`,
    toc: [
      { title: "Coding as a language" },
      { title: "Coding as a tool" },

      { title: "Coding as an apparatus" },
      { title: "Conclusions" },
    ],
  },

  {
    title:
      "Chapter 1: BIM properly using computers for architectural representation",
    id: `chapter01`,
    url: `chapter01`,
    // content: week01,
    toc: [{ title: "History of BIM and IFC" }],
  },
  {
    title: "Chapter 2: BIM Adoption",
    id: `chapter02`,
    url: `chapter02`,
    // date: initialDate.add(2, "week"),
    // content: week02,
    toc: [{ title: "Sharing Blender experience" }],
  },
  {
    title: "Chapter 3: Black boxes",
    id: `chapter03`,
    url: `chapter03`,
    // date: initialDate.add(3, "week"),
    // content: week03,
    toc: [{ title: "Closed source formats" }],
  },

  {
    title: "Chapter 4: Coding",
    id: `chapter04`,
    url: `chapter04`,
    // date: initialDate.add(4, "week"),
    // content: week04,
    toc: [
      {
        title:
          "Open source. History of open-source and the free software society",
      },
    ],
  },
  {
    title: "Chapter 5: Open source software for architects",
    id: `chapter05`,
    url: `chapter05`,
    // date: initialDate.add(5, "week"),
    // content: week05,
    toc: [{ title: "Open vs Closed BIM" }],
  },
  {
    title: "Chapter 6: De-blackboxing BIM",
    id: `chapter06`,
    url: `chapter06`,
    // date: initialDate.add(6, "week"),
    // content: week06,
    toc: [{ title: "Native IFC" }],
  },
  {
    title: "Conclusions",
    id: `conclusions`,
    url: `conclusions`,
    // date: initialDate.add(7, "week"),
    toc: [],
  },
];
