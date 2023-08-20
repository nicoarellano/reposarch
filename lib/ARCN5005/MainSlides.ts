import { Slides } from "@/types/types";

import Arcn5005 from "../../app/arcn5005/page";
import TOC from "@/app/arcn5005/toc/page";
import CourseCalendar from "@/app/arcn5005/calendar/page";
import MapExample from "@/public/slides/examples/MapExample";
import FinalExam from "@/public/slides/examples/FinalExam";
import ThreeExample from "@/public/slides/examples/ThreeExample";
import IfcExample from "@/public/slides/examples/IfcJsExample";

export const slides: Slides = [
  {
    id: "reposarch",
    title: "ARCN 5005 - Theory and Practice of Architectural Representation",
    slide: TOC(),
  },
  { id: "toc", title: "Table of Content", slide: TOC() },
  { id: "calendar", title: "Course Calendar", slide: CourseCalendar() },
  { id: "map-example", title: "Map Example ", slide: MapExample() },
  { id: "three-example", title: "Three Example ", slide: ThreeExample() },
  { id: "ifcjs-example", title: "IFC.js Example ", slide: IfcExample() },
  { id: "final", title: "Final Exam - Example", slide: FinalExam() },
];
