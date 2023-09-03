import { Toc } from "../../types/types";

import Acknowlegement from "./aknowlegement.mdx";
import FromTheRenaissance from "./FromTheRenaissance.mdx";
import Rome1 from "./rome1.mdx";
import Rome2 from "./rome2.mdx";
import AlbertisDevice from "./albertisDevice.mdx";
import AlbertisGrid from "./AlbertisGrid.mdx";
import DescartesSystem from "./descartesSystem.mdx";
import CartesianPlane from "./cartesianPlane.mdx";
import Maplibre from "./maplibre.mdx";
import Computer from "./computer.mdx";
import Mitchell from "./Mitchell.mdx";
import Sutherland from "./sutherland.mdx";
import SecondDigitalTurn from "./secondDigitalTurn.mdx";
import Workspace from "./workspace.mdx";
import Picon from "./picon.mdx";
import Blackbox from "./blackbox.mdx";
import DigitalTurns from "./DigitalTurns.mdx";
import DigitalTurn1 from "./DigitalTurn1.mdx";
import DurersWindow from "./DurersWindow.mdx";
import DurersWindow2 from "./DurersWindow2.mdx";
import AnalogProcess from "./AnalogProcess.mdx";
import BlackBoxDiagram from "./BlackBoxDiagram.mdx";
import DigitalCreativeProcess from "./DigitalCreativeProcess.mdx";
import ProcessGui from "./ProcessGui.mdx";
import Vendors from "./Vendors.mdx";
import Box from "../../components/Common/Box";

export const content: Toc = [
  { element: <Acknowlegement /> },
  { element: <FromTheRenaissance /> },
  { element: <Rome1 /> },
  { element: <Rome2 /> },
  { element: <AnalogProcess /> },
  {
    element: <AlbertisDevice />,
    notes:
      "Alberti’s survey of Rome records the passage and lineamenta (outline) of certain features in the city of Rome including: \
      walls, rivers, streets, hills, and buildings, as well as the locations of temples, public works, gates, and monuments.\
      An early version of CAD",
  },
  { element: <AlbertisGrid /> },
  {
    element: <DurersWindow />,
    notes:
      "In this famous woodcut known as Durer's Window in the book 'Instruction on Measurement with Compass and Ruller' 1525 \
      Durer describes a way of painting using a similar grid than to the one described by Alberti almost a century before",
  },
  {
    element: <DurersWindow2 />,
    notes:
      "In the fifteenth century,  Albrecht Durer revolutionized drawing by adding precision and science to the process.",
  },
  {
    element: <DescartesSystem />,
    notes:
      "The Cartesian refers to the French mathematician and philosopher René Descartes, who published this idea in 1637",
  },
  {
    element: <CartesianPlane />,
    notes:
      "Cartesian or analytic geometry, which uses algebra to describe geometry. Descartes 'invented the convention of representing unknowns in equations by x, y, and z'",
  },
  { element: <Computer /> },
  { element: <Mitchell /> },
  { element: <Maplibre /> },

  {
    element: <Sutherland />,
    notes: "Ivan Sutherland inventor of Sketchpad, the first GUI",
  },
  { element: <ProcessGui /> },
  { element: <DigitalTurns /> },
  { element: <DigitalCreativeProcess /> },
  { element: <Workspace /> },
  { element: <DigitalTurn1 /> },
  { element: <Workspace /> },
  { element: <Vendors /> },
  {
    element: <Blackbox />,
    notes:
      "The term black box to describe opaque computer processes has been used since early\
      1940s. It has its origins in electronic circuits",
  },
  {
    element: <BlackBoxDiagram />,
    notes:
      "to describe a system that can be understood only in\
    terms of its inputs and outputs, but which process is not accessible or even visible to users. To\
    'de-blackbox' is to understand the process, parts, and connection of the system.",
  },
  {
    element: <Box />,
    notes:
      "to describe a system that can be understood only in\
    terms of its inputs and outputs, but which process is not accessible or even visible to users. To\
    'de-blackbox' is to understand the process, parts, and connection of the system.",
  },

  { element: <Picon /> },
  { element: <SecondDigitalTurn /> },
];
