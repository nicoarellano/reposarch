import Toc from "./_toc";
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
import Workspace from "./workspace.mdx";
import Levels from "./levels.mdx";
import Mandates from "./mandates.mdx";
import S15 from "./s15.mdx";

export const slides = [
  { content: <Toc /> },
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
