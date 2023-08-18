import { Slides } from "@/types/types";

import Presentation from "../../public/slides/Presentation";
import TOC from "@/public/slides/TOC";
import Map from "@/public/slides/Map";
import MapExample from "@/public/students/NicolasArellano/MapExample";
import FinalExam from "@/public/students/NicolasArellano/FinalExam";
import ThreeExample from "@/public/students/NicolasArellano/ThreeExample";

export const slides: Slides = [
  {
    id: "reposarch",
    title: "ARCN 5005 - Theory and Practice of Architectural Representation",
    slide: Presentation(),
  },
  { id: "toc", title: "Table of Content", slide: TOC() },
  { id: "map", title: "Map - Maplibre", slide: Map() },
  { id: "map-example", title: "Map Example ", slide: MapExample() },
  { id: "three-example", title: "Three Example ", slide: ThreeExample() },
  { id: "final", title: "Final Exam - Example", slide: FinalExam() },
];
