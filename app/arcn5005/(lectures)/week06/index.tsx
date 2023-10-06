import { Toc } from "../../../../types/types";

import Image from "../../../../components/Common/Image";
import Video from "../../../../components/Common/Video";
import Quote from "../../../../components/Common/Quote";
import EmojiTitle from "../../../../components/Common/EmojiTitle";
import PdfViewer from "../../../../components/Common/PdfViewer";
import ClosedBim from "./ClosedBim";

export const content: Toc = [
  {
    element: (
      <Image src="/images/osarch/osarch.png" alt="OSARCH" caption={"OSArch"} />
    ),
    notes: "",
  },
  {
    element: (
      <Image
        src="/images/osarch/osarch-software.png"
        alt="Osarch software"
        caption={"OSArch - Software"}
      />
    ),
    notes:
      "In the last couple of years open-source community for the AEC industry has grown in an accelerated pace. \n\
    There are hundreds of open-source packages available for us. \n\
    This is a new reality for architects, that makes tools more accessible…  \n\
    There are several solutions available and by combining some of them the possibilities are endless.",
  },
  { element: <iframe className="w-full h-full" src="https://osarch.org/" /> },
  {
    element: (
      <iframe
        className="w-full h-full"
        src="https://wiki.osarch.org/index.php?title=Home_of_OSArch"
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/osarch/timeline.png"
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
      <Video
        src="https://www.youtube.com/embed/DK4zmfkp_pw?si=MWZZzjmOa4O9jB-B"
        title="Free / libre & Open Source software in AEC, and how it impacts OpenBIM"
        caption={
          "Free / libre & Open Source software in AEC, and how it impacts OpenBIM"
        }
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/osarch/bim.png"
        alt="bim"
        caption={"BIM - Building Information Modelling"}
      />
    ),
    notes:
      "Going back to BIM. Is nowadays the most widely use digital process for architects. \n\
    In industrialized countries, the bast majority of buildings are now designed and managed using BIM. \n\
    BuildingSmart International is an open, neutral not-for-profit organization committed to creating and developing open digital ways of working for BIM \n\
    They promote the concept of openBIM",
  },

  {
    element: (
      <Image
        src="/images/osarch/openbim.png"
        alt="openbim"
        href="https://www.buildingsmart.org/about/openbim/openbim-definition/"
        caption={"BuildingSmart International - OpenBIM (?)"}
      />
    ),
    notes:
      "BuildingSmart states that openBIM extends the benefits of BIM by improving its:  \n\
    → accessibility,  \n\
    → usability, and \n\
    → sustainability of digital data in the building industry.  \n\
    → is a vendor-neutral collaborative process that  \n\
    → facilitates interoperability to benefit projects throughout their entire lifecycle. \n\
   openBIM ensures: \n\
    → Openness of assets and processes \n\
    → Collaboration between stakeholders \n\
    → Flexibility of choice of technology  \n\
    Also, The ISO 19650 (which is the chapter about BIM for the International Organization for Standarization) defines open data as data available or visible to others and that can be freely used, re-used, re-published and redistributed by anyone.",
  },
  {
    element: (
      <Image
        src="/images/osarch/openbim-definition.png"
        alt="openbim definition"
        href="https://wiki.osarch.org/index.php?title=OpenBIM"
        caption={"BuildingSmart International - OpenBIM Definition"}
      />
    ),
    notes:
      "I agree with this definition of openBIM, \n\
      however, at the end of the day, OpenBIM sounds a lot like regular BIM. \n\
      All of these concepts are what BIM was designed for. \n\
      BIM is all about connecting people, processes, and data. \n\
      because BIM was originally intended to be a collaborative approach to lifecycle management.",
  },

  {
    element: (
      <Image
        src="/images/osarch/closed-bim.png"
        alt="closed-bim"
        caption={"Closed-BIM"}
      />
    ),
    notes:
      "The other thing that we tend to call BIM is what we should call ClosedBIM, \n\
      proprietary software and closed file formats are useful to manage BIM. \n\
, but unfortunately, they have one big limitation, \n\
it is very hard to achieve openBIM",
  },

  {
    element: (
      <Image
        src="/images/osarch/closed-bim-definition.png"
        alt="closed-bim definition"
        caption={"Closed-BIM - Trapped in the black box"}
      />
    ),
    notes:
      "When we use proprietary formats, we are without doubt trapped in a black box for the following reasons:",
  },

  { element: <ClosedBim /> },

  {
    element: (
      <Video
        src="https://www.youtube.com/embed/pNXssDb50qI?si=3JZq2lPzVYzhpLLs?si=FLDr9AqvaDFqnuj1&amp;start=53"
        title="BIM Voice - Dion Moult - What is OpenBIM?"
        caption={"BIM Voice - Dion Moult - What is OpenBIM?"}
      />
    ),
  },

  // IFC

  {
    element: (
      <Video
        src="https://www.youtube.com/embed/h2Rv9iu7yDk?si=JoqYT8H4xzmxrXZm"
        title="Introduction to OpenBIM, Native IFC, and Open Source AEC"
        caption={"Introduction to OpenBIM, Native IFC, and Open Source AEC"}
      />
    ),
  },

  {
    element: (
      <>
        <h2>Which language to use?</h2>
        <br />
        <h4>All modern web browsers are based on 3 technologies</h4>
        <br />
        <Image
          src="/images/week10/html-css-js.png"
          alt="JavaScript"
          caption={"Technology behind web browsers: HTML - CSS - JS"}
        />
      </>
    ),
  },
  {
    element: (
      <Image
        src="/images/week10/css.png"
        alt="css"
        href="https://www.w3schools.com/css/css_intro.asp"
        caption={
          "Cascading Style Sheets (CSS) is the language we use to style an HTML document"
        }
      />
    ),
  },

  // CSS CONTENT

  {
    element: (
      <>
        <Image
          src="/images/week01/js.png"
          alt="JavaScript"
          href="https://www.w3schools.com/js/default.asp"
          caption={"JavaScript is the programming language of the Web"}
        />
      </>
    ),
    notes:
      "Do not confuse with Java,Javascript is the logic behind of all modern internet browsers. It is also one of the most popular programming languages in the world",
  },

  // JAVASCRIPT CONTENT

  {
    element: (
      <EmojiTitle
        emoji={"Lab 6 💻😺🐙"}
        title={
          "Continue the creation of our website using HTML + CSS + JavaScript"
        }
      />
    ),
  },
  {
    element: (
      <>
        <h2>HTML + CSS + JavaScript Editor</h2>
        <br />
        <iframe
          className="w-11/12 h-full border-solid border-2 border-dark p-5 rounded-lg bg-light shadow-md mx-10"
          src="/arcn5005/f2023/students/nicolasarellanorisop/code-editors/html-css-js.html"
        />
      </>
    ),
  },
];
