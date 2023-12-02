import { Toc } from "../../../../types/types";

import Image from "../../../../components/Common/Image";
import Video from "../../../../components/Common/Video";
import Quote from "../../../../components/Common/Quote";
import EmojiTitle from "../../../../components/Common/EmojiTitle";
import PdfViewer from "../../../../components/Common/PdfViewer";

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
        src="https://www.youtube.com/embed/BwjUI9U0eQw?si=xaivCtd-Eb_niL-H"
        title="CIMS - Canada's digital Twin Platform"
        caption={
          "CIMS - Canada's digital Twin Platform - 100% web based free and open-source technologies"
        }
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
    notes: "",
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
    notes: "",
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
    notes: "",
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
