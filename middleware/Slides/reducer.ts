import { Slide, Slides } from "@/types/types";
import { ActionMap } from "../ActionMap";

interface SlidesTypes {
  slides: Slides;
  currentSlide: Slide;
  currentSlideNumber: number;
}

export type SlidesState = SlidesTypes;

export type SlidesPayload = {
  ["SET_SLIDES"]: Pick<SlidesTypes, "slides">;
  ["NEXT_SLIDE"]: Pick<SlidesTypes, "currentSlideNumber" | "currentSlide">;
  ["PREVIOUS_SLIDE"]: Pick<SlidesTypes, "currentSlideNumber" | "currentSlide">;
};

export type SlidesActions =
  ActionMap<SlidesPayload>[keyof ActionMap<SlidesPayload>];
export const SlidesReducer = (state: SlidesState, action: SlidesActions) => {
  switch (action.type) {
    case "SET_SLIDES":
      return { ...state, slides: action.payload.slides };
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
