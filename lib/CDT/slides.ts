import { Slides } from "@/types/types";
import Intro from "../../app/home";
import Map from "@/public/slides/Maplibre";
import Carleton from "@/public/cims/Carleton";
import Downsview from "@/public/cims/Downsview";
import ICDT from "@/public/cims/ICDT";

export const slides: Slides = [
  { id: "cdt", title: "CIMS Digital Twin", slide: Intro() },
  { id: "carleton", title: "Carleton's Digital Twin", slide: Carleton() },
  { id: "downsview", title: "Downsview's Digital Twin", slide: Downsview() },
  { id: "icdt", title: "ICDT's Digital Twin", slide: ICDT() },
  { id: "map", title: "Map - Maplibre", slide: Map() },
];
