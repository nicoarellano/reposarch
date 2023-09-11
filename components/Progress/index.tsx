"use client";

import AnnouncementsdIcon from "@mui/icons-material/CampaignRounded";
import SlideshowIcon from "@mui/icons-material/Slideshow";

import { Announcements } from "../../app/arcn5005F2023Anouncements";
import ListWithIcon from "../Common/ListWithIcon";
import { arcn5005Lectures } from "../../app/arcn5005Lectures";
import dayjs from "dayjs";

arcn5005Lectures.map((lecture) => (lecture["url"] = lecture.id));

const currentLectures = arcn5005Lectures.filter(
  (lecture) =>
    lecture.date < dayjs("2023/09/08") || lecture.date < dayjs().add(6, "days")
);

const announcements = Announcements.reverse();

export default function Progress() {
  return (
    <section className="grid grid-row-2 divide-y h-[450px] gap-4 overflow-hidden">
      <div className=" overflow-y-auto overflow-x-hidden flex align-middle">
        <ListWithIcon
          list={announcements}
          icon={<AnnouncementsdIcon />}
          subheader="📢 Announcements:"
        />
      </div>
      <div className="  overflow-y-auto overflow-x-hidden">
        <ListWithIcon
          list={currentLectures}
          icon={<SlideshowIcon />}
          subheader="🔵 Lectures:"
        />
      </div>
    </section>
  );
}
