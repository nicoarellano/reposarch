import { ActionMap } from "../ActionMap";
import { Slides, Slide } from "../../types/types";

interface SlidesTypes {
  totalSlides: number;
  slides: any;
  currentSlide: Slide | null;
  currentSlideNumber: number;
  toc?: { title: string }[];
}

export type SlidesState = SlidesTypes;

export type SlidesPayload = {
  ["SET_SLIDES"]: SlidesTypes;
  ["SET_SLIDE_NUMBER"]: Pick<
    SlidesTypes,
    "currentSlideNumber" | "currentSlide"
  >;
};

export type SlidesActions =
  ActionMap<SlidesPayload>[keyof ActionMap<SlidesPayload>];
export const SlidesReducer = (state: SlidesState, action: SlidesActions) => {
  switch (action.type) {
    case "SET_SLIDES":
      const { currentSlide, slides, currentSlideNumber, totalSlides, toc } =
        action.payload;
      return {
        ...state,
        currentSlide,
        slides,
        currentSlideNumber,
        totalSlides,
        toc,
      };
    case "SET_SLIDE_NUMBER":
      return {
        ...state,
        currentSlideNumber: action.payload.currentSlideNumber,
        currentSlide: action.payload.currentSlide,
      };
    default:
      return state;
  }
};
