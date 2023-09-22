import { Toc } from "../../../../types/types";

import Image from "../../../../components/Common/Image";
import Video from "../../../../components/Common/Video";
import Quote from "../../../../components/Common/Quote";
import EmojiTitle from "../../../../components/Common/EmojiTitle";
import PdfViewer from "../../../../components/Common/PdfViewer";
import CartesianPlane from "../../../../components/CartesianPlane";

export const content: Toc = [
  {
    element: (
      <div>
        <br />
        <h3>Brief history of mapping</h3>
        <br />
        <Image
          src="/images/week01/from-the-renaissance.jpg"
          alt="Medieval hacker"
        />
      </div>
    ),
  },
  { element: <EmojiTitle emoji={"🗺️❔"} title={"What is a map"} /> },
  {
    element: (
      <Image
        src="/images/week01/rome-maps.png"
        alt="Maps of rome"
        caption={
          "Graziano Mario Valenti, Jessica Romor: Leon Battista Alberti and the Survey of the Walls of Rome"
        }
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week01/rome-maps2.png"
        alt="Maps of rome"
        caption={
          "Graziano Mario Valenti, Jessica Romor: Leon Battista Alberti and the Survey of the Walls of Rome"
        }
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week01/rome-maps2.png"
        alt="Maps of rome"
        caption={
          "Graziano Mario Valenti, Jessica Romor: Leon Battista Alberti and the Survey of the Walls of Rome"
        }
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week01/albertis-device.png"
        alt="Alberti's device"
        caption={
          "Leon Battista Alberti’s device for the topographical survey of the city of Rome (1450)"
        }
      />
    ),
    notes:
      "Alberti’s survey of Rome records the passage and lineamenta (outline) of certain features in the city of Rome including: \
      walls, rivers, streets, hills, and buildings, as well as the locations of temples, public works, gates, and monuments.\
      An early version of CAD",
  },
  {
    element: <CartesianPlane />,
    notes:
      "Cartesian or analytic geometry, which uses algebra to describe geometry. Descartes 'invented the convention of representing unknowns in equations by x, y, and z'",
  },
  {
    element: (
      <Image
        src="/images/week01/computer.jpg"
        alt="Turin's Computer 1950s"
        caption={"One of the first computers of the modern era - By Wikimedia"}
      />
    ),
    notes:
      "Alberti's dream remained technically impossible for 500 years until the creation of the modern computers.",
  },
  {
    element: (
      <iframe
        width="100%"
        height="100%"
        src="/images/week01/map of rome.html"
        title="Maplibre - Map of Rome"
      ></iframe>
    ),
  },
];
