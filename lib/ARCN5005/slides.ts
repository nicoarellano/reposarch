import { Slides } from "@/types/types";

import Intro from "../../public/slides/Intro";

import Presentation from "../../public/slides/Presentation";
import TOC from "@/public/slides/TOC";
import Map from "@/public/slides/Map";
import NaMte from "@/public/students/NicolasArellano/MidTermExam";

export const slides: Slides = [
  { id: "presentation", title: "Presentation", slide: Presentation() },
  { id: "toc", title: "Table of Content", slide: TOC() },
  { id: "map", title: "Map - Maplibre", slide: Map() },
  { id: "na-mte", title: "Nico Arellano - Midterm Exam", slide: NaMte() },
];
