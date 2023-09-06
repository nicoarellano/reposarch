import { Toc } from "../../../../types/types";
import Image from "../../../../components/Common/Image";
import Video from "../../../../components/Common/Video";

import WhatIsBim from "./WhatIsBim.mdx";
import BimOrCad from "./BimOrCad.mdx";
import BimBooks from "./BimBooks.mdx";
import Levels from "./Levels.mdx";
import Mandates from "./Mandates.mdx";
import RevitOrArchicad from "./RevitOrArchicad.mdx";
import RevitWins from "./RevitWins.mdx";
import ClosedBim from "./ClosedBim.mdx";
import Cad from "./Cad.mdx";
import WhatIsCad from "./WhatIsCad.mdx";

export const content: Toc = [
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
       Since then, GUIs are certainly the preferred vehicle for architects to interact with computers.",
  },
  {
    element: (
      <h4>
        <em>
          Sketchpad pioneered the graphical user interface (GUI), which allows
          interaction with the virtual world without typing in long strings of
          coded commands. Instead, the user points, clicks, and double-clicks on
          displays of icons, the virtual tools on the screen.
        </em>
        <h5>
          <br />
          <em>Susan Piedmont Palladino - Tools of the imagination .</em>
        </h5>
      </h4>
    ),
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
  },
  {
    element: (
      <h4>
        <em>
          GUIs have profoundly changed the way in which architects interact with
          computers. “the graphical user interface, which makes computers so
          easy to use, also makes them hard to use powerfully.
        </em>
        <h5>
          <br />
          <em>Robert Woodbury - Elements of Parametric Design</em>
        </h5>
      </h4>
    ),
  },

  {
    element: (
      <Image
        src="/images/week03/tools-of-the-imagination.jpg"
        alt="Tools of Imagination"
        caption="Tools of Imagination - Susan Piedmont-Palladino"
        href="https://books.google.com.na/books?id=1WUIIh99xDkC&printsec=frontcover&source=gbs_book_other_versions_r&cad=4#v=onepage&q&f=false"
      />
    ),
  },
  {
    element: (
      <h4>
        <em>
          The architect needs the right tools for the job. [...] The newest
          tool, the computer, is really an entirely new toolbox full of software
          to solve old and new problems.
        </em>
        <h5>
          <br />
          <em>Susan Piedmont Palladino - Tools of the imagination .</em>
        </h5>
      </h4>
    ),
  },
  {
    element: (
      <h4>
        <em>
          It is through the mastery of the full range of tools that the images
          in the architect’s mind are translated into drawings and models, and
          from the drawings and the models into buildings. Whether a simple
          pencil or computer software, these tools give form to the wishes and
          the instructions of the architect, but they are also active shapers of
          what is possible.
        </em>
        <h5>
          <br />
          <em>Susan Piedmont Palladino - Tools of the imagination .</em>
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
      <Image
        src="/images/week01/process-with-gui.png"
        alt="Digital Creative Process"
        caption={"Digital creative process with GUI"}
      />
    ),
    notes:
      "Carpo says that GUIs quickly became “the only computer use that most people had ever known”.\
      This was the moment when, for most architects, programming ceased to be an open language to interact with the machine, and thus became a tool.\
      In some cases, an accessible tool, but in most cases, an utterly opaque one.",
  },
  { element: <Cad /> },
  {
    element: (
      <embed
        src="/resources/may_everythingisalreadyanimage.pdf"
        width="90%"
        height="100%"
        type="application/pdf"
      ></embed>
    ),
  },
  { element: <WhatIsCad /> },
  {
    element: (
      <Image
        src="/images/week02/tools0of-the-imagination.jpg"
        alt="Tools of the Imagination"
        caption={"Tools of the imagination - Susan Piedmont-Palladino (2007)"}
      />
    ),
  },
  { element: <WhatIsBim /> },
  { element: <BimOrCad /> },
  {
    element: <BimBooks />,
    notes:
      "Weygnant’s definition is a good baseline for tool-oriented people; Saxon’s explanation is for client/business-oriented people; Eastman is the father of BIM, and has the most technically correct definition > we’ll look at all three",
  },

  { element: <Levels /> },

  { element: <RevitWins /> },
  { element: <ClosedBim /> },
  {
    element: <RevitOrArchicad />,
    notes:
      "BIM has been defined as a communication and collaboration tool or process originally created to connect people, processes, and data.\
However, that is not exactly the way the Architecture Engineering and Construction or AEC industry is using BIM.\
The status quo is to work with proprietary solutions and closed file formats.",
  },
  {
    element: <Mandates />,
    notes:
      "Government BIM mandates.\
    Countries all over the word are becoming to regulate the use of BIM. So if one wants to participate in public works and even non public projects BIM is a requirement.\
    Which means that BIM is in many cases not an option anymore but a mandate.\
    Knowing that BIM software are mainly controlled by a few vendors, this mean that these software companies will have a tremendous impact over our practice.",
  },
];
