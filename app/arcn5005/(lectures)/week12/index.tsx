import { Toc } from "../../../../types/types";

import Image from "../../../../components/Common/Image";
import Video from "../../../../components/Common/Video";
import Quote from "../../../../components/Common/Quote";
import EmojiTitle from "../../../../components/Common/EmojiTitle";
import PdfViewer from "../../../../components/Common/PdfViewer";
import BimExample from "../../../../components/Common/Bim";

export const content: Toc = [
  {
    element: (
      <EmojiTitle
        emoji={"🦾🧰🔧🗺️🏗️⁉️"}
        title={"What can we do with this new toolbox?"}
      />
    ),
  },
  {
    element: (
      <Video
        src="https://www.youtube.com/embed/kKrYBqN3en8?si=2af8sUvxXNvRK3mt"
        title="Advanced toolbox"
        caption={"Advanced toolbox"}
      />
    ),
  },

  {
    element: (
      <EmojiTitle
        emoji={"🦾🧰🔧🌐"}
        title={"Advance toolbox for web development"}
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/advanced-toolbox/frontend-frameworks.png"
        alt="fronted frameworks"
        caption={"Best Frontend Development Frameworks for Web Development"}
        href="https://www.aceinfoway.com/blog/best-frontend-frameworks"
      />
    ),
    notes:
      "Front End Frameworks make it much easier for developers to build the user interfaces of their web and mobile apps as web development evolves.",
  },
  {
    element: (
      <Image
        src="/images/advanced-toolbox/reactjs.png"
        alt="React js"
        caption={"React js"}
        href="https://react.dev/"
      />
    ),
    notes:
      "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components. \n\
    It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. \n\
    React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js. \n\
    Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality.",
  },

  {
    element: (
      <Image
        src="/images/advanced-toolbox/jsx.png"
        alt="JSX"
        caption={"JSX"}
        href="https://react.dev/learn/writing-markup-with-jsx"
      />
    ),
    notes:
      "JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file. \n\
    Although there are other ways to write components, most React developers prefer the conciseness of JSX, and most codebases use it. \n\
    But as the Web became more interactive, logic increasingly determined content. \n\
    JavaScript was in charge of the HTML! This is why in React, rendering logic and markup live together in the same place—components.",
  },

  {
    element: (
      <Image
        src="/images/advanced-toolbox/reactjs-example1.png"
        alt="React js"
        caption={"React js - Usage Example"}
        href="https://en.wikipedia.org/wiki/React_(software)"
      />
    ),
    notes:
      "Another notable feature is the use of a virtual Document Object Model, or Virtual DOM. \n\
    React creates an in-memory data-structure cache, computes the resulting differences, and then updates the browser's displayed DOM efficiently.[26] This process is called reconciliation. \n\
    This allows the programmer to write code as if the entire page is rendered on each change, while React only renders the components that actually change. \n\
    This selective rendering provides a major performance boost",
  },

  {
    element: (
      <>
        <EmojiTitle
          emoji={"📚 → ⚛️"}
          title={"JavaScript libraries turned into react libraries:"}
        />
        <br />
        <h3>1. Three.js → react-three-fiber (r3f)</h3>
        <br />
        <h3>2. Mapbox GL JS and Maplibre GL JS → react-map-gl</h3>
        <br />
        <h3>3. IFC.js → openbim-components (OBC)</h3>
        <br />
      </>
    ),
  },

  {
    element: (
      <Image
        src="/images/advanced-toolbox/three-js-logo.png"
        alt="React three fiber"
        caption={"Three.js → react-three-fiber (r3f)"}
        href="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction"
      />
    ),
    notes: "",
  },

  {
    element: (
      <iframe
        width="100%"
        height="100%"
        src="https://codesandbox.io/s/rrppl0y8l4?file=/src/App.js"
        title="Interactive Box component example with React Three Fiber"
      ></iframe>
    ),
  },

  {
    element: (
      <Image
        src="/images/advanced-toolbox/react-map-gl.png"
        alt="react map gl"
        caption={"Mapbox GL JS and Maplibre GL JS → react-map-gl"}
        href="https://visgl.github.io/react-map-gl/"
      />
    ),
    notes: "",
  },

  {
    element: (
      <iframe
        width="100%"
        height="100%"
        src="https://visgl.github.io/react-map-gl/examples/controls"
        title="React Map GL example"
      ></iframe>
    ),
  },

  {
    element: (
      <Image
        src="/images/advanced-toolbox/openbim-components.png"
        alt="obc"
        caption={"IFC.js → openbim-components (OBC)"}
        href="https://github.com/IFCjs/components"
      />
    ),
    notes: "",
  },

  {
    element: <BimExample fragment="/models/model.frag" />,
    notes: "",
  },

  {
    element: (
      <Image
        src="/images/advanced-toolbox/nextjs.png"
        alt="Next js"
        caption={"Next js"}
        href="https://nextjs.org/"
      />
    ),
    notes:
      "Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.",
  },
  {
    element: (
      <Image
        src="/images/advanced-toolbox/typescript.png"
        alt="TypeScript"
        caption={"TypeScript"}
        href="https://www.typescriptlang.org/"
      />
    ),
    notes:
      "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. \n\
      Javascript is an amazing programming language, but is a loosely typed one. \n\
      Sometimes, it can be difficult to understand what types of data we are using and moving around. \n\
      In JS, functions and variables don’t have any information and developers need to search for documentation or just make a guess based on the current implementation \n\
TS allows you to specify the type of the data in your JS code, and will report errors when there is a type mismatch",
  },
  {
    element: (
      <Image
        src="/images/advanced-toolbox/TypeScript Types.png"
        alt="TypeScript"
        caption={"TypeScript - Cheat Sheet - Types"}
        href="https://www.typescriptlang.org/"
      />
    ),
    notes:
      "TS allows you to specify the type of the data in your JS code, and will report errors when there is a type mismatch",
  },
  {
    element: (
      <Image
        src="/images/advanced-toolbox/TypeScript Interfaces.png"
        alt="TypeScript"
        caption={"TypeScript - Cheat Sheet - Interfaces"}
        href="https://www.typescriptlang.org/cheatsheets"
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/advanced-toolbox/TypeScript Control Flow Analysis.png"
        alt="TypeScript"
        caption={"TypeScript - Cheat Sheet - Control Flow Analysis"}
        href="https://www.typescriptlang.org/cheatsheets"
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/advanced-toolbox/TypeScript Classes.png"
        alt="TypeScript"
        caption={"TypeScript - Cheat Sheet - Classes"}
        href="https://www.typescriptlang.org/cheatsheets"
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/advanced-toolbox/TypeScript Types.png"
        alt="TypeScript"
        caption={"TypeScript - Cheat Sheet - Interfaces"}
        href="https://www.typescriptlang.org/cheatsheets"
      />
    ),
  },

  {
    element: (
      <Image
        src="/images/advanced-toolbox/tailwind-css.png"
        alt="Tailwind CSS"
        caption={"Tailwind CSS"}
        href="https://tailwindcss.com/"
      />
    ),
    notes:
      "Tailwind CSS is an open source CSS framework. \n\
    The main feature of this library is that, it does not provide a series of predefined classes for elements such as buttons or tables. \n\
    Instead, it creates a list of 'utility' CSS classes that can be used to style each element by mixing and matching.",
  },

  {
    element: (
      <Image
        src="/images/advanced-toolbox/tailwind-example.png"
        alt="Tailwind CSS"
        caption={"Tailwind CSS - example"}
        href="https://en.wikipedia.org/wiki/Tailwind_CSS"
      />
    ),
    notes:
      "For example, in other traditional systems, there would be a class message-warning that would apply a yellow background color and bold text. \n\
    To achieve this result in Tailwind, one would have to apply a set of classes created by the library: bg-yellow-300 and font-bold.",
  },

  {
    element: (
      <Image
        src="/images/advanced-toolbox/cdt-wireframe.png"
        alt="CIMS - CDT Wireframe"
        caption={"CIMS - CDT Wireframe"}
      />
    ),
    notes:
      "For example, in other traditional systems, there would be a class message-warning that would apply a yellow background color and bold text. \n\
    To achieve this result in Tailwind, one would have to apply a set of classes created by the library: bg-yellow-300 and font-bold.",
  },

  {
    element: (
      <Video
        src="https://www.youtube.com/embed/BwjUI9U0eQw?si=xaivCtd-Eb_niL-H"
        title="CIMS - Canada's digital Twin Platform"
        caption={
          "CIMS - Canada's digital Twin Platform - 100% web based free and open-source technologies"
        }
      />
    ),
  },
  {
    element: <EmojiTitle emoji={"🗣️📣🌎"} title={"Go Online!"} />,
  },
  {
    element: (
      <Image
        src="/images/advanced-toolbox/ghpages.png"
        alt="gh pages"
        caption={"GitHub Pages"}
      />
    ),
    notes: "",
  },
  {
    element: (
      <Video
        src="https://www.youtube.com/embed/QyFcl_Fba-k?si=v7hj7_V-xMgHCteY"
        title="Getting Started with GitHub Pages"
        caption={"Getting Started with GitHub Pages"}
      />
    ),
  },
  {
    element: (
      <EmojiTitle
        emoji={"Lab 12 💻🗣️📣🌎"}
        title={"Deploying a web based BIM software and Assignment 3"}
      />
    ),
  },
];
