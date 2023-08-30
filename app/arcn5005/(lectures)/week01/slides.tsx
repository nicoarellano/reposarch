import Overview from "./slides/overview.mdx";
import Acknowlegement from "./slides/aknowlegement.mdx";
import FromDescartes from "./slides/fromDescartes.mdx";
import Rome1 from "./slides/rome1.mdx";
import Rome2 from "./slides/rome2.mdx";
import AlbertisDevice from "./slides/albertisDevice.mdx";
import DescartesSystem from "./slides/descartesSystem.mdx";
import CartesianPlane from "./slides/cartesianPlane.mdx";
import Maplibre from "./slides/maplibre.mdx";
import Computer from "./slides/computer.mdx";
import Sutherland from "./slides/sutherland.mdx";
import Workspace from "./slides/workspace.mdx";
import Levels from "./slides/levels.mdx";
import Mandates from "./slides/mandates.mdx";
import S15 from "./slides/s15.mdx";

export const slides = [
  { content: <Overview /> },
  { content: <Acknowlegement /> },
  { content: <FromDescartes /> },
  { content: <Rome1 /> },
  { content: <Rome2 /> },
  { content: <AlbertisDevice /> },
  { content: <DescartesSystem /> },
  { content: <CartesianPlane /> },
  { content: <Maplibre /> },
  { content: <Computer /> },
  {
    content: <Sutherland />,
    notes: "Ivan Sutherland inventor of Sketchpad, the first GUI",
  },
  { content: <Workspace /> },
  { content: <Levels /> },
  {
    content: <Mandates />,
    notes:
      "Government BIM mandates.\
  Countries all over the word are becoming to regulate the use of BIM. So if one wants to participate in public works and even non public projects BIM is a requirement.\
  Which means that BIM is in many cases not an option anymore but a mandate.\
  Knowing that BIM software are mainly controlled by a few vendors, this mean that these software companies will have a tremendous impact over our practice.",
  },
  // { content: <S15 /> },
];
