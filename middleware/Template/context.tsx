"use client";

import {
  FC,
  PropsWithChildren,
  useReducer,
  useContext,
  createContext,
  Dispatch,
} from "react";
import { TemplateReducer, TemplateActions, TemplateState } from "./reducer";

type InitialStateType = {
  template: TemplateState;
};

const initialState = {
  template: {
    id: "",
  },
};

const reducer = ({ template }: InitialStateType, action: TemplateActions) => ({
  template: TemplateReducer(template, action),
});

export const TemplateContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<TemplateActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const TemplateProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TemplateContext.Provider value={{ state, dispatch }}>
      {children}
    </TemplateContext.Provider>
  );
};

export const useTemplateContext = () => {
  return useContext(TemplateContext);
};
