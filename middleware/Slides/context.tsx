"use client";
import {
  FC,
  PropsWithChildren,
  useReducer,
  useContext,
  createContext,
  Dispatch,
} from "react";
import { SlidesReducer, SlidesActions, SlidesState } from "./reducer";
import { Slides, Slide } from "../../types/types";
import { coreSlides } from "../../public/arcn5005/coreSlides";

type InitialStateType = {
  slides: SlidesState;
};

const initialState = {
  slides: {
    totalSlides: coreSlides.length - 1,
    slides: coreSlides as Slides,
    currentSlide: coreSlides[0] as Slide,
    currentSlideNumber: 0 as number,
  },
};

const reducer = ({ slides }: InitialStateType, action: SlidesActions) => ({
  slides: SlidesReducer(slides, action),
});

export const SlidesContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<SlidesActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const SlidesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <SlidesContext.Provider value={{ state, dispatch }}>
      {children}
    </SlidesContext.Provider>
  );
};

export const useSlidesContext = () => {
  return useContext(SlidesContext);
};
