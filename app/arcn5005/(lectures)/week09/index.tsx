import { Toc } from "../../../../types/types";

import Image from "../../../../components/Common/Image";
import Video from "../../../../components/Common/Video";
import Quote from "../../../../components/Common/Quote";
import EmojiTitle from "../../../../components/Common/EmojiTitle";
import PdfViewer from "../../../../components/Common/PdfViewer";

export const content: Toc = [
  {
    element: (
      <Image
        src="/images/obc/obc-antonio.jpg"
        alt="Antonio Gonzalez Viegas"
        caption="Antonio Gonzalez Viegas - That Open Company"
        href="https://github.com/agviegas"
      />
    ),
  },

  {
    element: (
      <>
        <h3>Antonio Gonzalez Viegas</h3>
        <br />
        <h5>
          Antonio González Viegas is a BIM software developer and architect with
          work experience in open BIM, 3D graphics, 3D Math, and project
          management in New York, Norway, Germany, and Spain. He has a degree in
          Architecture from the University of Seville. He is currently working
          as a BIM software developer for Autility and is the CEO of That Open
          Company (Former IFC.js) Antonio is also a prolific open-source
          contributor. He has contributed to several projects on GitHub,
          including IFC.js, openbim-components, and three.js. He is passionate
          about using code to solve problems in the BIM world and has given
          several talks on the subject. He is a very influential actor in the OS
          AECO sector.
        </h5>
      </>
    ),
  },

  {
    element: (
      <Video
        src="https://www.youtube.com/embed/rLE9pdzEBsw?si=3ZuwNi6pz6lcC8Dq"
        title="Antonio Gonzales Viegas - That Open Company"
        caption={"Antonio Gonzales Viegas - That Open Company"}
      />
    ),
  },

  {
    element: (
      <Image
        src="/images/obc/timeline.png"
        alt="OS timeline"
        caption={"OSArch - timeline"}
      />
    ),
    notes:
      "However, before the end of 2019 to imagine an alternative to proprietary software for the AEC industry was challenging.\n\
      The industry was (and still is) too dependant on the main vendor’s solutions.\n\
      But then, a chain of events started to open the door to alternatives\n\
      → In October 2019 Dion Moult releases BlenderBIM\n\
      → In February 2020, the OS Arch is created: OSArch,, is an online community that promotes that the built environment can be designed, constructed, operated, and recycled with free/libre and open-source software.\n\
      → In July 2020, several leading UK and international AEC firms wrote an open letter to Autodesk’ demanding changes related to costs, licensing & business practices\n\
      → In December 2020 the IFC.js library is released. The first FLOSS online library to work with BIM and IFC.\n\
      → In September 2022 there is a follow-up letter by the Nordic Architectural Associations endorsed by  the Architects’ council of Europe. \n\
      → We don’t know about 2023 but I believe this is the year for CIMS…\n\
      → In my opinion, instead of writing letters to the vendors we as sector need to keep taking action with our own hands. \n\
      → This is what I am trying to do with the epistemic object.",
  },

  {
    element: (
      <Image
        src="/images/obc/thatopencompany.png"
        alt="That Open Company - Welcome to the AECOsystem."
        caption={"That Open Company - Welcome to the AECOsystem."}
        href="https://thatopen.com/"
      />
    ),
    notes:
      "Open Engine: A common free open IFCJS-based technology stack (viewer and parser) \n\
    Open Store: A marketplace where developers can sell tools, and users can buy them directly for use in their projects. \n\
    Open Editor: A free web-based geometry editor (CLAY) that allows users to run all apps directly in their web browsers. \n\
    Open Services: Processing, storage, and analytics services developed by That Open Company to help developers create and release software. \n\
    That People Community: Meet other members, forums, chats, and meetings every six weeks within That Open Company's team to find out what's happening exclusively things while sharing opinions. \n\
    Open University: A new(? rebranded) platform built by That Open Company to create a path from zero knowledge about programming to becoming a software developer in less time than possible, with teachers supporting students in their career paths.",
  },

  {
    element: (
      <EmojiTitle
        emoji={"Lab 9 💻"}
        title={"Working on Assignment 2 and exploring OpenBIM components"}
      />
    ),
  },
  {
    element: (
      <Video
        src="https://www.youtube.com/embed/bLUMHQRJJyU?si=_xGYMzcMDfPZndRU"
        title="Three js - Assignment 2 - 1/2"
        caption={"Three js - Assignment 2 - 1/2"}
      />
    ),
  },
  {
    element: (
      <Video
        src="https://www.youtube.com/embed/bLUMHQRJJyU?si=EGpp1l5QnUQcQmV3"
        title="Three js - Assignment 2 - 2/2"
        caption={"Three js - Assignment 2 - 2/2"}
      />
    ),
  },
];
