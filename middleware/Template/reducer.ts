import { ActionMap } from "../ActionMap";

interface TemplateTypes {
  id: string;
}

export type TemplateState = TemplateTypes;

export type TemplatePayload = {
  ["TEMPLATE"]: Pick<TemplateTypes, "id">;
};

export type TemplateActions =
  ActionMap<TemplatePayload>[keyof ActionMap<TemplatePayload>];

export const TemplateReducer = (
  state: TemplateState,
  action: TemplateActions
) => {
  switch (action.type) {
    case "TEMPLATE":
      return { ...state };
    default:
      return state;
  }
};
