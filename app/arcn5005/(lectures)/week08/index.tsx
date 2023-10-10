import { Toc } from "../../../../types/types";

import Image from "../../../../components/Common/Image";
import Video from "../../../../components/Common/Video";
import Quote from "../../../../components/Common/Quote";
import EmojiTitle from "../../../../components/Common/EmojiTitle";
import PdfViewer from "../../../../components/Common/PdfViewer";

export const content: Toc = [
  // JAVASCRIPT CONTENT
  {
    element: (
      <>
        <Image
          src="/images/javascript/js.png"
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
