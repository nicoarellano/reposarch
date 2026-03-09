"use client";

import ListWithIcon from "@/components/Common/ListWithIcon";
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
        <section className="flex w-fit h-[550px] overflow-y-scroll items-baseline text-justify justify-center">
            <div className="flex flex-col content-center">
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
