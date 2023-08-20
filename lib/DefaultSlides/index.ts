import { Slides } from "@/types/types";
import Intro from "../../app/home";
import Arcn5005 from "@/app/arcn5005/page";

export const defSlides: Slides = [
  {
    id: "reposarch",
    title: "ARCN 5005 - Theory and Practice of Architectural Representation",
    slide: Arcn5005(),
  },
];
