import { Toc } from "../../types/types";
import Image from "../../components/Common/Image";
import Video from "../../components/Common/Video";

import CartesianPlane from "./cartesianPlane.mdx";
import Maplibre from "./maplibre.mdx";
import Box from "../../components/Common/Box";

export const content: Toc = [
  {
    element: <h1>Territory Acknowledgment</h1>,
    notes:
      "I would like to begin by acknowledging that the land on which we gather is the traditional and unceded territory of the Algonquin nation.",
  },
  {
    element: (
      <div>
        <br />
        <h3>From the Renaissance to the Computer Era</h3>
        <br />
        <Image
          src="/images/week01/from-the-renaissance.jpg"
          alt="Medieval hacker"
          caption={"Ai generated image"}
        />
      </div>
    ),
  },
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
        src="/images/week01/analog-process.png"
        alt="Analog Process"
        caption={"Analog creative process"}
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
    element: (
      <Image
        src="/images/week01/albertis-grid.png"
        alt="Alberti's grid"
        caption={
          "Leon Battista Alberti’s De Pictura (Treatise on Painting) 1435 (Figures from the 1804 edition of Della pittura)"
        }
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week01/durers-window.jpg"
        alt="Durer's Window"
        caption={
          "Albrech Durer's window 'Instruction on Measurement with Compass and Ruller' 1525"
        }
      />
    ),
    notes:
      "In this famous woodcut known as Durer's Window in the book 'Instruction on Measurement with Compass and Ruller' 1525 \
      Durer describes a way of painting using a similar grid than to the one described by Alberti almost a century before",
  },
  {
    element: (
      <Image
        src="/images/week01/durers-window2.jpg"
        alt="Durer's Window"
        caption={
          "Albrech Durer's window 'Instruction on Measurement with Compass and Ruller' 1525"
        }
      />
    ),
    notes:
      "In the fifteenth century,  Albrecht Durer revolutionized drawing by adding precision and science to the process.",
  },
  {
    element: (
      <Video
        src="https://www.youtube.com/embed/bgfS3A_u27c?si=7oIAX8KQUBAJ3Gu_"
        title="Decartes Coordinate System"
        caption={"Rene Descartes' Coordinate System - Cartesian Plane"}
      />
    ),
    notes:
      "The Cartesian refers to the French mathematician and philosopher René Descartes, who published this idea in 1637",
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
        caption={"By Wikimedia"}
      />
    ),
    notes:
      "Alberti's dream remained technically impossible for 500 years untill the creation of the modern computers.",
  },
  {
    element: (
      <Image
        src="/images/week01/mitchell.jpg"
        alt="The Art of Computer Graphics Programming"
        caption={
          "The Art of Computer Graphics Programming - William Mitchell (1987)"
        }
      />
    ),
    notes:
      "Alberti's dream remained technically impossible for 500 years untill the creation of the modern computers.",
  },
  { element: <Maplibre /> },
  { element: <h1>Quote from WM</h1> },

  {
    element: (
      <Image
        src="/images/week01/sutherland.png"
        alt="Ivan Sutherland inventor of Sketchpad, the first GUI"
        caption={"Ivan Sutherland inventor of Sketchpad, the first GUI"}
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week01/process-with-gui.png"
        alt="Digital Creative Process"
        caption={"Digital creative process with GUI"}
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week01/digital-turns.png"
        alt="Digital Turns"
        caption={"Mario Carpo First and Second digital Turns in Architecture"}
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week01/creative-process.png"
        alt="Digital Creative Process"
        caption={"Digital Creative Process"}
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week01/workplace.png"
        alt="Change in the workplace"
        caption={
          "With the change of the tools, the way we work gets disrupted..."
        }
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week01/buildings.png"
        alt="Change of the buildings"
        caption={"...our buildings change..."}
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week01/singapore.jpg"
        alt="Change of the buildings"
        caption={"...our cities too"}
      />
    ),
  },
  {
    element: (
      <h4>
        <em>
          Computers allows users to manipulate some kinds of forms directly
          onscreen. This is when digital designers stopped being coders (with
          some notable exceptions), and computer based design started to
          effectively change the history of architecture.
        </em>
        <h5>
          <br />
          <em>Mario Carpo - Digital Turn</em>
        </h5>
      </h4>
    ),
  },
  {
    element: (
      <Image
        src="/images/week01/vendors.png"
        alt="AECO's main CAD/BIM Vendors"
        caption={"AECO's main CAD/BIM Vendors"}
      />
    ),
  },
  {
    element: (
      <>
        <h1>What is a Black Box?</h1>
        <Image src="/images/blackBox.png" alt="Black box" />
      </>
    ),
    notes:
      "The term black box to describe opaque computer processes has been used since early\
      1940s. It has its origins in electronic circuits",
  },
  {
    element: (
      <Image
        src="/images/week01/black-box-diagram.png"
        alt="Black box diagram"
      />
    ),
    notes:
      "to describe a system that can be understood only in\
    terms of its inputs and outputs, but which process is not accessible or even visible to users. To\
    'de-blackbox' is to understand the process, parts, and connection of the system.",
  },
  {
    element: (
      <h4>
        <em>
          It has become unavoidable to enter into the black box of programming
          in order to make a truly creative use of the computer
        </em>
        <h5>
          <br />
          <em>Antoine Picon</em>
        </h5>
      </h4>
    ),
  },
  {
    element: (
      <>
        <h1>Two obstacles</h1>
        <br />
        <h3>Black boxes</h3>
        <h3>Digital oblivion</h3>
      </>
    ),
    notes: "",
  },
  {
    element: (
      <>
        <h1>Action</h1>
        <br />
        <h3>Participate in the Open source communities</h3>
        <h3>Educate ourselves and our peers</h3>
      </>
    ),
    notes: "",
  },
  {
    element: <Box />,
    notes: "How can we deblackbox our tools",
  },
  {
    element: (
      <Video
        src="https://www.youtube.com/embed/UVerq5DSdKU?si=GmIUk9y3PpRTwK2w"
        title="The Second Digital Turn | Mario Carpo | Talks at Google"
        caption={"The Second Digital Turn | Mario Carpo | Talks at Google"}
      />
    ),
  },
];
