"use client";

import ListWithIcon from "../../../../components/Common/ListWithIcon";
import LinkIcon from "@mui/icons-material/InsertLinkRounded";
import InternetIcon from "@mui/icons-material/LanguageRounded";
import BookIcon from "@mui/icons-material/MenuBookRounded";
import VideoIcon from "@mui/icons-material/OndemandVideoRounded";
import ToolsIcon from "@mui/icons-material/HomeRepairServiceRounded";
import ArticleIcon from "@mui/icons-material/FeedRounded";

import { Books } from "./Books";
import { Websites } from "./Websites";
import { Videos } from "./Videos";
import { Software } from "./Software";
import { Articles } from "./Articles";

export default function Resources() {
  return (
    <section className="flex w-screen h-[580px] overflow-y-scroll overflow-x-hidden p-12 items-baseline text-justify">
      <div className="w-screen flex flex-col items-center justify-center ">
        <ListWithIcon list={Books} icon={<BookIcon />} subheader="📖 Books:" />
        <br />
        <ListWithIcon
          list={Websites}
          icon={<InternetIcon />}
          subheader="🌐 Websites:"
        />
        <br />
        <ListWithIcon
          list={Videos}
          icon={<VideoIcon />}
          subheader="📺 Videos:"
        />
        <br />
        <ListWithIcon
          list={Software}
          icon={<ToolsIcon />}
          subheader="🧰 Free Software:"
        />
        <br />
        <ListWithIcon
          list={Articles}
          icon={<ArticleIcon />}
          subheader="📄 Articles:"
        />
        <br />
        <em>* Resourses list will keep growing along the course</em>
      </div>
    </section>
  );
}
