import { Toc } from "../../../../types/types";

import Image from "../../../../components/Common/Image";
import Video from "../../../../components/Common/Video";
import Quote from "../../../../components/Common/Quote";
import EmojiTitle from "../../../../components/Common/EmojiTitle";
import PdfViewer from "../../../../components/Common/PdfViewer";
import SimpleButton from "../../../../components/Common/SimpleButton";

export const content: Toc = [
  {
    element: (
      <EmojiTitle
        emoji={"🌎→💻❔"}
        title={"History of internet and Hackerdom"}
      />
    ),
  },

  {
    element: (
      <Image
        src="/images/internet/julie.jpg"
        alt="Julie Ivanoff"
        caption="Julie Ivanoff - Architect, MAS"
      />
    ),
    notes: "",
  },
  {
    element: (
      <>
        <h3>Julie Ivanoff</h3>
        <br />
        <h5>
          Julie Ivanoff is a Master’s of Architectural Studies at Carleton
          University. She is an expert in Digital Twins, focusing on the
          positive impacts of digital twin in urban development. In her research
          she dives into the history of digital twins, and how they are
          currently used today . Her exploration of digital twins around the
          world urges viewers to imagine a digital twin as a tangible reality of
          the future. Julie holds an expertise in Architecture. In her thesis in
          the Master of Architectural Studies program at Carleton University,
          she studied the UK’s national digital twin initiative. She is also
          been a long-time researcher and Team Lead at the Carleton Immersive
          Media Studio (CIMS) on the project Imagining Canada’s Digital Twin.
        </h5>
      </>
    ),
  },

  {
    element: (
      <Video
        src="https://www.youtube.com/embed/8S1xgigeiz8?si=ZAKCacK-YaRxKiMn"
        title="Imagine Canada's Digital Twin by Julie Ivanoff (CIMS)"
        caption={
          "If you want to know more about Julie's research take a look at this video about Imagine Canada's Digital (CIMS)"
        }
      />
    ),
  },

  {
    element: (
      <>
        <h2>
          Richard Stallman - Free Software, Free Society, Selected Essays (2002)
        </h2>
        <br />
        <PdfViewer src="/resources/Stallman, Richard  - Free Software, Free Society, Selected Essays (2002).pdf" />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>Eric Raymond - The Cathedral and the Bazaar (1999)</h2>
        <br />
        <PdfViewer src="/resources/Raymond, Erik - The Cathedral and the Bazaar Musings on Linux and Open Source by an Accidental Revolutionary (1999).pdf" />
      </>
    ),
  },

  {
    element: (
      <Image
        src="/images/week02/top-programming-languages.png"
        alt="Top programming languages"
        href="https://gowithcode.com/top-programming-languages"
        caption="Top programming languages: https://gowithcode.com/top-programming-languages"
      />
    ),
    notes:
      "High-level PLs: Python,  C++, JavaScript, etc, which are how programmers express computational concepts. Based on spoken or written language (normally English) and are designed to translate our operations into machine code.       All early computer languages were created in the second half of the twentieth century.\
      Usually, artificial languages are not created from scratch, but rather they evolve throughout long periods of time and are the result of multiple socio-cultural events that are hard to explain.\
      However, in the case of computer languages, not only did the language itself had to be quickly invented artificially,\
      but because this was a totally new phenomenon, \
      there weren’t even terms to define the emerging actors that constituted this new ‘computer science’.\
      The way in which programmers were naming things had to be invented as well",
  },

  {
    element: <EmojiTitle emoji={"📃 💬 💻"} title={"Program"} />,
    notes:
      "a computer Programs is a Set of instructions written in a programming language that use syntax to systematize the logic of computer operations",
  },

  {
    element: <EmojiTitle emoji={"📃📃📃 💬 💻"} title={"Software"} />,
    notes:
      "Software (which is also the plural of software) is a set of programs combined by a programmer to address a more specific problem.",
  },

  {
    element: (
      <EmojiTitle
        emoji={"💻🥇❔"}
        title={"What is the most popular type of software in the world?"}
      />
    ),
  },

  {
    element: (
      <Image
        src="/images/week10/internet-usage.png"
        alt="WORLD INTERNET USAGE AND POPULATION STATISTICS"
        href="https://en.wikipedia.org/wiki/Web_browser"
        caption={
          "WORLD INTERNET USAGE AND POPULATION STATISTICS - 2023 Year Estimates"
        }
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week10/web-browsers.png"
        alt="Web Browsers"
        href="https://en.wikipedia.org/wiki/Web_browser"
        caption={
          "Most popular web browsers - Google Chrome, Microsoft Edge, Mozilla Firefox, Opera, and Safari"
        }
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
        src="/images/week10/html.png"
        alt="JavaScript"
        href="https://www.w3schools.com/html/html_intro.asp"
        caption={
          "Hyper Text Markup Language (HTML) describes the structure of a Web page"
        }
      />
    ),
    notes:
      "Do not confuse with Java,Javascript is the logic behind of all modern internet browsers. It is also one of the most popular programming languages in the world",
  },

  {
    element: (
      <Image
        src="/images/week10/css.png"
        alt="JavaScript"
        href="https://www.w3schools.com/css/css_intro.asp"
        caption={
          "Cascading Style Sheets (CSS) is the language we use to style an HTML document"
        }
      />
    ),
    notes:
      "Do not confuse with Java,Javascript is the logic behind of all modern internet browsers. It is also one of the most popular programming languages in the world",
  },

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
        <h1>What is Node.js?</h1>
        <br />
        <Image
          src="/images/week01/nodejs.png"
          alt="Node.js"
          href="https://en.wikipedia.org/wiki/Nodejs#"
          caption={"Node.js - Wikipedia"}
        />
        <br />
        <SimpleButton
          title="Download Node js"
          href="https://nodejs.org/en/download"
        />
      </>
    ),
  },

  {
    element: (
      <EmojiTitle
        emoji={"Lab 💻🌎"}
        title={
          "Installing an IDE and some extensions and creating a free map platform"
        }
      />
    ),
  },
];
