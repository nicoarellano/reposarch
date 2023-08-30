"use client";

import AnnouncementsdIcon from "@mui/icons-material/CampaignRounded";
import SlideshowIcon from "@mui/icons-material/Slideshow";

import { Announcements } from "./AnnouncementsList";
import ListWithIcon from "../Common/ListWithIcon";
import { arcn5005Lectures } from "../../app/arcn5005Lectures";
import dayjs from "dayjs";

arcn5005Lectures.map((lecture) => (lecture["url"] = lecture.id));

const currentLectures = arcn5005Lectures.filter(
  (lecture) =>
    lecture.date < dayjs("2023/09/08") || lecture.date < dayjs().add(1, "weeks")
);

const announcements = Announcements.reverse();

export default function Progress() {
  return (
    <section className="grid grid-row-2 divide-y max-h-[550px]  p-6 gap-6">
      <div className="max-h-[200px] overflow-x-auto">
        <ListWithIcon
          list={announcements}
          icon={<AnnouncementsdIcon />}
          subheader="📢 Announcements:"
        />
      </div>
      <div className="max-h-[250px] overflow-x-auto">
        <ListWithIcon
          list={currentLectures}
          icon={<SlideshowIcon />}
          subheader="🔵 Lectures:"
        />
      </div>
    </section>
  );
}
