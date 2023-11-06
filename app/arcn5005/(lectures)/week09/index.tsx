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
          a work experience in open BIM, 3D graphics, 3D Math and project
          management in New York, Norway, Germany, and Spain. He has a degree in
          Architecture from the University of Seville. He is currently working
          as a BIM software developer for Autility and is the CEO of That Open
          Company (Former IFC.js) Antonio is also a prolific open-source
          contributor. He has contributed to several projects on GitHub,
          including IFC.js, openbim-components, and three.js. He is passionate
          about using code to solve problems in the BIM world and has given
          several talks on the subject. He is a very influential actor of the OS
          BIM movement.
        </h5>
      </>
    ),
  },

  // {
  //   element: (
  //     <Video
  //       src="https://www.youtube.com/embed/Obil0QrOAN4?si=FnbZqcL3oYDaIDkj&amp;start=954"
  //       title="That Open Company - Welcome to the AECOsystem."
  //       caption={"That Open Company - Welcome to the AECOsystem."}
  //     />
  //   ),
  // },

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
];
