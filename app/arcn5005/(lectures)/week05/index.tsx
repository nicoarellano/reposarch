import { Toc } from "../../../../types/types";

import Image from "../../../../components/Common/Image";
import Video from "../../../../components/Common/Video";
import Quote from "../../../../components/Common/Quote";
import EmojiTitle from "../../../../components/Common/EmojiTitle";
import PdfViewer from "../../../../components/Common/PdfViewer";
import SimpleButton from "../../../../components/Common/SimpleButton";

import Freedoms from "./Freedoms";
import OsiCriteria from "./Osi";
import Lessons from "./ProgramerLessons";

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
      <Image
        src="/images/internet/fsf.png"
        alt="FSF"
        href="https://www.fsf.org/"
        caption={"Free Software Foundation"}
      />
    ),
    notes:
      "The Free Software Foundation (FSF) is a nonprofit with a worldwide mission to promote computer user freedom. We defend the rights of all software users. \
    ",
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
      <Quote
        quote={
          "A computer programmer writes software, or computer programs. A program \
    is more or less a recipe with commands to tell the computer what to do in order \
    to carry out certain tasks. You are more than likely familiar with many different \
    programs: your Web browser, your word processor, your email client, and the like. \
    A program usually starts out as source code. This higher-level set of commands \
    is written in a programming language such as C or Java. After that, a tool known as \
    a compiler translates this to a lower-level language known as assembly language. \
    Another tool known as an assembler breaks the assembly code down to the final \
    stage of machine language—the lowest level—which the computer understands \
    natively."
        }
        author={
          "Richard Stallman - Free Software, Free Society, Selected Essays (2002)"
        }
      />
    ),
    notes: "",
  },

  {
    element: (
      <Quote
        quote={
          "Another important concept is understanding what an operating system is. An \
          operating system is the software that handles input and output, memory allocation, \
          and task scheduling. Generally one considers common or useful programs such \
          as the Graphical User Interface (GUI) to be a part of the operating system. \
          [...] The kernel handles low-level tasks that applications depend \
          upon such as input/output and task scheduling."
        }
        author={
          "Richard Stallman - Free Software, Free Society, Selected Essays (2002)"
        }
      />
    ),
    notes: "",
  },

  {
    element: (
      <Quote
        quote={
          "It is important to understand that even if you cannot change the source code for \
          a given program, or directly use all these tools, it is relatively easy to find someone \
          who can. Therefore, by having the source code to a program you are usually given \
          the power to change, fix, customize, and learn about a program—this is a power \
          that you do not have if you are not given the source code. Source code is one of the \
          requirements that makes a piece of software free."
        }
        author={
          "Richard Stallman - Free Software, Free Society, Selected Essays (2002)"
        }
      />
    ),
    notes: "",
  },

 
  {
    element: (
      <Quote
        quote={
          "“Code” is the technology that makes computers run. Whether inscribed in software \
          or burned in hardware, it is the collection of instructions, first written in \
          words, that directs the functionality of machines. These machines—computers— \
          increasingly define and control our life. They determine how phones connect, and \
          what runs on TV. They decide whether video can be streamed across a broadband \
          link to a computer. They control what a computer reports back to its manufacturer. \
          These machines run us. Code runs these machines."
        }
        author={
          "Richard Stallman - Free Software, Free Society, Selected Essays (2002)"
        }
      />
    ),
    notes: "",
  },

  {
    element: (
      <Video
        src="https://www.youtube.com/embed/d74Lg-0j3n8?si=biC0tc_1wvgbjbW7"
        title="Patent Absurdity"
        caption={"Patent Absurdity: How software patents broke the system"}
      />
    ),
    notes:
      "Patent Absurdity: How software patents broke the system is a half-hour film about software patents. It explores the case of software patents and the history of judicial activism that led to their rise, as well as the harm being done to software developers and the wider economy. The film is based on a series of interviews conducted during the US Supreme Court's review of in Re Bilski — a case that could have had profound implications for the patenting of software.",
  },
  // {
  //   element: (
  //     <Image
  //       src="/images/internet/rms.png"
  //       alt="RMS"
  //       href="https://en.wikipedia.org/wiki/Richard_Stallman"
  //       caption={
  //         "Richard M. Stallman, American free software movement activist and programmer. Founder of the Free Software Foundation"
  //       }
  //     />
  //   ),
  //   notes:
  //     "The Free Software Foundation (FSF) is a nonprofit with a worldwide mission to promote computer user freedom. We defend the rights of all software users. \
  //   ",
  // },
  {
    element: (
      <Quote
        quote={
          "These questions have been the challenge of Stallman’s life. Through his works \
          and his words, he has pushed us to see the importance of keeping code “free.” Not \
          free in the sense that code writers don’t get paid, but free in the sense that the \
          control coders build be transparent to all, and that anyone have the right to take that \
          control, and modify it as he or she sees fit. This is “free software”; “free software” \
          is one answer to a world built in code."
        }
        author={
          "Richard Stallman - Free Software, Free Society, Selected Essays (2002)"
        }
      />
    ),
    notes: "",
  },

  {
    element: (
      <Image
        src="/images/internet/gnu-linux.png"
        alt="FSF"
        href="https://www.fsf.org/"
        caption={
          "Free software means that the software's users have freedom. Free as free speech not as free beer (The issue is not about price.) We developed the GNU operating system so that users can have freedom in their computing. \
        Specifically, free software means users have the four essential freedoms:"
        }
      />
    ),
    notes:
      "The Free Software Foundation (FSF) is a nonprofit with a worldwide mission to promote computer user freedom. We defend the rights of all software users. \
    ",
  },
  {
    element: <Freedoms />,
    notes:
      "Specifically, free software means users have the four essential freedoms: \
(0) to run the program, \
(1) to study and change the program in source code form, \
(2) to redistribute exact copies, and \
(3) to distribute modified versions.",
  },
  {
    element: (
      <Image
        src="/images/internet/osi.png"
        alt="OSI"
        href="https://opensource.org/"
        caption={"Open Source Initiative"}
      />
    ),
    notes:
      "founded in 1998. Actively involved in Open Source community-building, education, and public advocacy to promote awareness and the importance of non-proprietary software. OSI participates in Open Source conferences and events, to meet with open source developers and users, and to discuss with executives from the public and private sectors about how Open Source technologies, licenses, and models of development can provide economic and strategic advantages. \
    ",
  },
  {
    element: <OsiCriteria />,
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
    element: <Lessons />,
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
  },

  {
    element: (
      <Image
        src="/images/week10/css.png"
        alt="Html"
        href="https://www.w3schools.com/css/css_intro.asp"
        caption={
          "Cascading Style Sheets (CSS) is the language we use to style an HTML document"
        }
      />
    ),
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
        emoji={"Lab 5 💻😺🐙"}
        title={"Begin the creation of our first website"}
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week10/html.png"
        alt="Html"
        href="https://www.w3schools.com/html/html_intro.asp"
        caption={
          "Hyper Text Markup Language (HTML) describes the structure of a Web page"
        }
      />
    ),
  },
  {
    element: (
      <>
        <h2>Structure</h2>
        <br />
        <Image
          src="/images/internet/html-structure.png"
          alt="Html-structure"
          caption={"HTML Structure"}
        />
      </>
    ),
  },
  {
    element: (
      <>
        <h2>Semantics</h2>
        <br />
        <Image
          src="/images/internet/semantics.png"
          alt="Html-semantics"
          caption={"HTML Semantics"}
        />
      </>
    ),
  },

  {
    element: <EmojiTitle emoji={"Elements"} title={""} />,
  },
 
  {
    element: <EmojiTitle emoji={"Attributes"} title={""} />,
  },
  
];
