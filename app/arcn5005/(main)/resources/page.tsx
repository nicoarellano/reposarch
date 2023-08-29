"use client";

import ListWithIcon from "../../../../components/Common/ListWithIcon";
import LinkIcon from "@mui/icons-material/InsertLinkRounded";
import BookIcon from "@mui/icons-material/MenuBookRounded";
import VideoIcon from "@mui/icons-material/OndemandVideoRounded";
import { Resources } from "../../../../types/types";

export default function TOC() {
  const Books: Resources = [
    {
      title: "Mario Carpo - The Alphabeth and the Algorithm",
      url: "https://courseworks2.columbia.edu/files/594343/download?download_frd=1",
    },
    {
      title: "Eric Raymond - The Cathedral and the Bazaar",
      url: "https://monoskop.org/images/e/e0/Raymond_Eric_S_The_Cathedral_and_the_Bazaar_rev_ed.pdf",
    },
    {
      title: "Douglas  - Program or be programmed",
      url: "https://addc401fall2016.files.wordpress.com/2016/08/rushkoff-program-or-be-programmed.pdf",
    },
  ];

  const WebSites: Resources = [
    {
      title: "OSArch",
      url: "",
    },
    {
      title: "IFC.js",
      url: "",
    },
    {
      title: "Blender",
      url: "",
    },
  ];

  const Videos: Resources = [
    {
      title: "Dion Moult - FLOSS",
      url: "https://youtu.be/DK4zmfkp_pw?si=OuFkdOM3_jD6cU_1",
    },
    {
      title: "Antonio Gonzalez Viegas - IFC.js",
      url: "https://youtu.be/YQnyVjSufsA?si=F8Wtmc6wXE29hdBZ",
    },
    {
      title: "Photomesh on Meshroom and Blender",
      url: "https://youtu.be/L_SdlR57NtU?si=lYat9Mx9a6k5rL5F",
    },
    {
      title: "Nicolas Arellano - DeBlackboxing BIM",
      url: "https://youtu.be/t0U9tqBy4oc?si=ChAf74agIf9ij4fi",
    },
  ];

  const FreeSoftware: Resources = [
    {
      title: "Blender",
      url: "",
    },
  ];

  return (
    <section className="flex w-screen max-h-[580px] overflow-y-scroll p-12 items-baseline text-justify">
      <div className="w-screen flex flex-col items-center justify-center overflow-y-auto overflow-x-hidden">
        <ListWithIcon
          list={Books ? Books : []}
          icon={<BookIcon />}
          subheader="📖 Books:"
        />
        <br />
        <ListWithIcon
          list={WebSites ? WebSites : []}
          icon={<LinkIcon />}
          subheader="📖 Books:"
        />
        <br />
        <ListWithIcon
          list={Videos ? Videos : []}
          icon={<VideoIcon />}
          subheader="📺 Videos:"
        />
        <br />
        <ListWithIcon
          list={FreeSoftware ? FreeSoftware : []}
          icon={<VideoIcon />}
          subheader="📺 Videos:"
        />
        <br />
        <em>* Resourses list will keep growing along the course</em>
      </div>
    </section>
  );
}
