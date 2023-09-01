import { Toc } from "../../types/types";

import Acknowlegement from "./aknowlegement.mdx";
import FromDescartes from "./fromDescartes.mdx";
import Rome1 from "./rome1.mdx";
import Rome2 from "./rome2.mdx";
import AlbertisDevice from "./albertisDevice.mdx";
import DescartesSystem from "./descartesSystem.mdx";
import CartesianPlane from "./cartesianPlane.mdx";
import Maplibre from "./maplibre.mdx";
import Computer from "./computer.mdx";
import Sutherland from "./sutherland.mdx";
import SecondDigitalTurn from "./secondDigitalTurn.mdx";
import Workspace from "./workspace.mdx";
import Levels from "./levels.mdx";
import Mandates from "./mandates.mdx";
import Picon from "./picon.mdx";
import Blackbox from "./blackbox.mdx";

export const content: Toc = [
  { element: <Acknowlegement /> },
  { element: <FromDescartes /> },
  { element: <Rome1 /> },
  { element: <Rome2 /> },
  { element: <AlbertisDevice /> },
  { element: <DescartesSystem /> },
  { element: <CartesianPlane /> },
  { element: <Computer /> },
  { element: <Maplibre /> },
  {
    element: <Sutherland />,
    notes: "Ivan Sutherland inventor of Sketchpad, the first GUI",
  },
  { element: <Workspace /> },
  { element: <Picon /> },
  { element: <Blackbox /> },
  { element: <Levels /> },
  {
    element: <Mandates />,
    notes:
      "Government BIM mandates.\
    Countries all over the word are becoming to regulate the use of BIM. So if one wants to participate in public works and even non public projects BIM is a requirement.\
    Which means that BIM is in many cases not an option anymore but a mandate.\
    Knowing that BIM software are mainly controlled by a few vendors, this mean that these software companies will have a tremendous impact over our practice.",
  },
  { element: <SecondDigitalTurn /> },
  // { element: <S15 /> },
];
