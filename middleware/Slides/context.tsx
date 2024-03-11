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
import { slides } from "../../app/arcn5005/(main)/MainMenu";

type InitialStateType = {
  slides: SlidesState;
};

const initialState = {
  slides: {
    totalSlides: slides.length - 1,
    slides: slides,
    currentSlideNumber: 0 as number,
    title: "ARCN 5005 - Theory and Practice of Architectural Representation",
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
