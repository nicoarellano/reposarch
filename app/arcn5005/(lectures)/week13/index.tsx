import { Toc } from "../../../../types/types";

import Image from "../../../../components/Common/Image";
import Video from "../../../../components/Common/Video";
import Quote from "../../../../components/Common/Quote";
import EmojiTitle from "../../../../components/Common/EmojiTitle";
import PdfViewer from "../../../../components/Common/PdfViewer";

import Final from "./Final.mdx";

export const content: Toc = [
  { element: <Final /> },
  {
    element: (
      <>
        <h1>Evaluation matrix</h1>
        <br />
        <table className="simple-table">
          <thead>
            <th>Section </th>
            <th>Points </th>
          </thead>
          <tr>
            <td>Creativity and originality </td>
            <td>10</td>
          </tr>
          <tr>
            <td>Composition and coherence between parts</td>
            <td>5 </td>
          </tr>
          <tr>
            <td>Code and files organization</td>
            <td>5 </td>
          </tr>
          <tr>
            <td>HTML interactivity (buttons, event listeners)</td>
            <td>5 </td>
          </tr>
          <tr>
            <td>Three.js</td>
            <td>5 </td>
          </tr>
          <tr>
            <td>Map</td>
            <td>5 </td>
          </tr>
          <tr>
            <td>
              <b>Total</b>
            </td>
            <td>
              <b>35</b>
            </td>
          </tr>
          <tr>
            <td>
              Bonus: outstanding overall work, page successfully deployed
              externally (GitHub Pages), and/or helping classmates.
            </td>
            <td>up to 5</td>
          </tr>
        </table>
      </>
    ),
  },
  {
    element: (
      <iframe
        className="w-full h-full"
        src="/arcn5005/f2023/students/nicolasarellanorisop/about.html"
      ></iframe>
    ),
  },
  {
    element: (
      <EmojiTitle emoji={"🗣️💬🙋❔"} title={"Questions? Issues? Comments?"} />
    ),
  },
];
