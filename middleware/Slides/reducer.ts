import { ActionMap } from "../ActionMap";
import { Slides, Slide } from "../../types/types";

interface SlidesTypes {
  totalSlides: number;
  slides: Slides;
  currentSlide: Slide;
  currentSlideNumber: number;
}

export type SlidesState = SlidesTypes;

export type SlidesPayload = {
  ["SET_SLIDES"]: SlidesTypes;
  ["NEXT_SLIDE"]: Pick<SlidesTypes, "currentSlideNumber" | "currentSlide">;
  ["PREVIOUS_SLIDE"]: Pick<SlidesTypes, "currentSlideNumber" | "currentSlide">;
};

export type SlidesActions =
  ActionMap<SlidesPayload>[keyof ActionMap<SlidesPayload>];
export const SlidesReducer = (state: SlidesState, action: SlidesActions) => {
  switch (action.type) {
    case "SET_SLIDES":
      const { currentSlide, slides, currentSlideNumber, totalSlides } =
        action.payload;
      return {
        ...state,
        currentSlide,
        slides,
        currentSlideNumber,
        totalSlides,
      };
    case "NEXT_SLIDE":
      return {
        ...state,
        currentSlideNumber: action.payload.currentSlideNumber,
        currentSlide: action.payload.currentSlide,
      };
    case "PREVIOUS_SLIDE":
      return {
        ...state,
        currentSlideNumber: action.payload.currentSlideNumber,
        currentSlide: action.payload.currentSlide,
      };
    default:
      return state;
  }
};
