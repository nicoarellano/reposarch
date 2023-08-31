import { ActionMap } from "../ActionMap";
import { Slides, Slide, Content } from "../../types/types";

interface SlidesTypes {
  totalSlides: number;
  slides: any;
  currentSlideNumber: number;
}

export type SlidesState = SlidesTypes;

export type SlidesPayload = {
  ["SET_SLIDES"]: SlidesTypes;
  ["SET_SLIDE_NUMBER"]: Pick<SlidesTypes, "currentSlideNumber">;
};

export type SlidesActions =
  ActionMap<SlidesPayload>[keyof ActionMap<SlidesPayload>];
export const SlidesReducer = (state: SlidesState, action: SlidesActions) => {
  switch (action.type) {
    case "SET_SLIDES":
      const { slides, currentSlideNumber, totalSlides } = action.payload;
      return {
        ...state,
        slides,
        currentSlideNumber,
        totalSlides,
      };
    case "SET_SLIDE_NUMBER":
      return {
        ...state,
        currentSlideNumber: action.payload.currentSlideNumber,
      };
    default:
      return state;
  }
};
