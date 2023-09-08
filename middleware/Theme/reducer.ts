import { Mode } from "../../types/types";
import { ActionMap } from "../ActionMap";

interface ThemeTypes {
  mode: Mode;
}

export type ThemeState = ThemeTypes;

export type ThemePayload = {
  ["TOGGLE-DARK-MODE"]: Pick<ThemeTypes, "mode">;
};

export type ThemeActions =
  ActionMap<ThemePayload>[keyof ActionMap<ThemePayload>];

export const ThemeReducer = (state: ThemeState, action: ThemeActions) => {
  switch (action.type) {
    case "TOGGLE-DARK-MODE":
      const { mode } = action.payload;
      return { ...state, mode };
    default:
      return state;
  }
};
