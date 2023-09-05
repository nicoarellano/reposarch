import { Toc } from "../../../../types/types";
import Link from "next/link";

import Image from "../../../../components/Common/Image";
import Video from "../../../../components/Common/Video";

import CartesianPlane from "../../../../components/CartesianPlane";
import TOC from "../../(main)/toc/page";

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
    notes:
      "We have been using analogue tools for centuries to express our creativity.\
    This allows a particular relationship with the object.",
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
          "The Art of Computer Graphics Programming - William J. Mitchell (1987)"
        }
      />
    ),
    notes:
      "Alberti's dream remained technically impossible for 500 years untill the creation of the modern computers.",
  },
  {
    element: (
      <Image
        src="/images/week01/primitives.png"
        alt="Primitives"
        caption={
          "Kandinsky's graphic primitives—the point, the line, and the plane—become the pixel, the vector, and the filled polygon. - WJM"
        }
      />
    ),
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
  {
    element: (
      <Image
        src="/images/week01/sutherland.png"
        alt="Ivan Sutherland inventor of Sketchpad, the first GUI"
        caption={"Ivan Sutherland inventor of Sketchpad, the first GUI"}
      />
    ),
    notes:
      "In 1973, Ivan Sutherland at MIT developed a program called ‘Sketchpad’, which can be considered as the first computer drawing program or the first graphical user interface (GUI).\
       GUIs are human-computer interaction devices that allow users to interact with the computer through graphical icons instead of written code.\
       With a GUI the user can click or touch and manipulate the symbols displayed on the screen and thus, directly alter the program.\
       GUIs made computer more accessible for non-programmers, including architects.\
       Since then, GUIs are certainly the preferred vehicle for architects to interact with computers.\
       Robert Woodbury, architect and author of the book Elements of Parametric Design, states that GUIs have profoundly changed the way in which architects interact with computers. He says that “the graphical user interface, which makes computers so easy to use, also makes them hard to use powerfully.",
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
    notes:
      "the programs for architects that were produced using GUIs had been designed with specific functionalities.\
      On the one hand, they allowed architects to explore infinite graphic possibilities.\
      On the other hand, they drastically limited the boundaries that architects could explore outside what had been programmed.",
  },
  {
    element: (
      <h4>
        <em>
          GUIs quickly became “the only computer use that most people had ever
          known”
        </em>
        <h5>
          <br />
          <em>Mario Carpo - Digital Turn</em>
        </h5>
      </h4>
    ),
    notes:
      "Carpo says that GUIs quickly became “the only computer use that most people had ever known”.\
      This was the moment when, for most architects, programming ceased to be an open language to interact with the machine, and thus became a tool.\
      In some cases, an accessible tool, but in most cases, an utterly opaque one.",
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
        <h1>Two obstacles 🛑</h1>
        <br />
        <h3>1. Digital oblivion</h3>
        <h3>2. Black boxes</h3>
      </>
    ),
    notes:
      "Two conditions must be met before architects can fully de-blackbox the digital toolbox.\
    Firstly, architects must have a working knowledge of computer programming. Secondly, the\
    source code—the list of human-readable instructions that define a computer program—of the\
    software that they use must be accessible for modification by the user.",
  },
  {
    element: (
      <>
        <h1>Action 🎬</h1>
        <br />
        <h3>1. Educate ourselves and our peers</h3>
        <h3>2. Participate in the Open source communities</h3>
      </>
    ),
    notes: "",
  },
  {
    element: (
      <h4>
        <em>
          You need not know all the technical details governing the operation of
          a computer in order to produce graphics successfully any more that you
          need to be an expert in automobile technology in order to drive a car.
          <br />
          You must, however, know the basic terminology, understand the roles of
          the various fundamental components and know where limitations on
          capacity and performance are likely to appear.
        </em>
        <h5>
          <br />
          <em>
            William J. Mitchell - The Art of Computer Graphics Programming{" "}
          </em>
        </h5>
      </h4>
    ),
  },
  {
    element: <TOC />,
    notes: "",
  },
  {
    element: (
      <>
        <h1> Next class:</h1>
        <br />
        <h3>Programming and digitalization of the physical world</h3>
      </>
    ),
  },
  {
    element: <Image src="/images/coding-is.png" alt="Coding Is..." />,
    notes:
      "Computer coding is a way of translating human ideas to the electrical, mechanical world of computers.\
    They are used to communicate with computers and with people through computers.",
  },
  {
    element: (
      <>
        <h2>We program by writing text</h2>
        <br />
        <h3>Next class we will learn about programming languages</h3>
        <br />
        <h3>To write text on a computer we need a text editor or an IDE</h3>
      </>
    ),
  },
  {
    element: (
      <>
        <h1>❔</h1>
        <br />
        <h1>What is an IDE?</h1>
        <br />
        <h3>Integrated Development Environment</h3>
      </>
    ),
    notes:
      " What is an IDE?\
    Code is nothing more than text, so we could do this with any text editing tool (like Word or the Notepad),\
    but writing code with notepad would not be too comfortable for a number of reasons (e.g. no syntax highlighting, no code checking, no code formatter, etc).\
    Instead, people usually use IDEs:  a text editor with some extra tools to make the programmer's life easier.",
  },
  {
    element: (
      <>
        <h2>Which language to use?</h2>
        <br />
        <h4>There are thousands of programming languages</h4>
        <h4>
          For this course we will mainly focus on <strong>Javascript</strong>
        </h4>
        <h4>Which is the language of all modern internet browsers</h4>
        <br />
        <Image
          src="/images/week01/js.png"
          alt="JavaScript"
          href="https://en.wikipedia.org/wiki/JavaScript"
        />
      </>
    ),
  },
  {
    element: (
      <Image
        src="/images/week01/vsCode.png"
        alt="Visual Studio Code"
        href="https://code.visualstudio.com/download"
        caption={"Visual Studio Code, free IDE from Microsoft."}
      />
    ),
    notes:
      "we are going to use Visual Studio Code, which is a free IDE from Microsoft. It’s one of the most widely used in the web development world.",
  },
  {
    element: (
      <Image
        src="/images/week01/extensions.png"
        alt="Visual Studio Code"
        href="https://code.visualstudio.com/download"
        caption={
          "We are going to download 5 extensions: \
        1. Live Server\
        2. Prettier\
        3. Material Icon \
        4. Console Ninja\
        5. Auto Import"
        }
      />
    ),
  },
  {
    element: (
      <>
        <h4>
          Homework, watch &#34;The Second Digital Turn&#34; by the professor
          Mario Carpo
        </h4>
        <Video
          src="https://www.youtube.com/embed/UVerq5DSdKU?si=GmIUk9y3PpRTwK2w"
          title="The Second Digital Turn | Mario Carpo | Talks at Google"
          caption={"The Second Digital Turn | Mario Carpo | Talks at Google"}
        />
      </>
    ),
  },
];
