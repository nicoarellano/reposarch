import { Toc } from "../../../../types/types";

import Image from "../../../../components/Common/Image";
import Video from "../../../../components/Common/Video";
import Quote from "../../../../components/Common/Quote";
import EmojiTitle from "../../../../components/Common/EmojiTitle";
import PdfViewer from "../../../../components/Common/PdfViewer";

export const content: Toc = [
  {
    element: <EmojiTitle emoji={"🏗️💻"} title={"Open Source BIM"} />,
  },

  {
    element: (
      <Image
        src="/images/blenderbim/raphael.jpg"
        alt="Raphaël Vouilloz"
        caption="Guess lecturer: Raphaël Vouilloz"
      />
    ),
    notes: "",
  },
  {
    element: (
      <>
        <h3>Raphaël Vouilloz</h3>
        <br />
        <h5></h5>
      </>
    ),
  },
  {
    element: (
      <Video
        src="https://www.youtube.com/embed/tpQjRjB1wnU?si=q1XMa_so-2EJ34kJ"
        title="BlenderBim - major UI update"
        caption={"BlenderBim - major UI update"}
      />
    ),
  },
  {
    element: (
      <Video
        src="https://www.youtube.com/embed/zoecibNDokE?si=V59fmJi9g_bNFgKD"
        title="BlenderBim Addon Update - 23.09.02 - Overview & Demonstration"
        caption={
          "BlenderBim Addon Update - 23.09.02 - Overview & Demonstration"
        }
      />
    ),
  },
  {
    element: (
      <Video
        src="https://www.youtube.com/embed/kmPPR0fWOrI?si=Z4gWdJ1Y0aa51h2G"
        title="Import DXF Files in Blender"
        caption={"Import DXF Files in Blender"}
      />
    ),
  },
  {
    element: <EmojiTitle emoji={"Lab 7 🏗️"} title={"BlenderBIM"} />,
  },
];
