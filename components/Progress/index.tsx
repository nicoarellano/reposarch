"use client";

import AnnouncementsdIcon from "@mui/icons-material/CampaignRounded";
import SlideshowIcon from "@mui/icons-material/Slideshow";

import { AnnouncementsF2023 } from "../../app/arcn5005/terms/[term]/announcements/arcn5005F2023Anouncements";
import { AnnouncementsF2024 } from "../../app/arcn5005/terms/[term]/announcements/arcn5005F2024Anouncements";
import ListWithIcon from "../Common/ListWithIcon";
import dayjs from "dayjs";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useParams } from "next/navigation";
import { startingDate } from "@/app/arcn5005/terms/currentTerm";
import { arcn5005Lectures } from "@/app/arcn5005/(lectures)/arcn5005Lectures";

arcn5005Lectures.map((lecture) => (lecture["url"] = lecture.id));

const currentLectures = arcn5005Lectures.filter(
  (lecture) =>
    lecture.date &&
    (lecture.date < dayjs(startingDate).add(1, "days") ||
      lecture.date < dayjs().add(1, "days"))
);

export default function Progress() {
  const params = useParams();

  const announcements = AnnouncementsF2024.reverse();

  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <section
      className={`grid grid-row-2 divide-y gap-8 overflow-hidden p-2 ${
        isMobile ? "h-[380px]" : "h-[500px]"
      }`}
    >
      <div className=" overflow-y-auto overflow-x-hidden flex align-middle">
        <ListWithIcon
          list={announcements}
          icon={<AnnouncementsdIcon />}
          subheader="📢 Announcements:"
        />
      </div>
      <div className="overflow-y-auto overflow-x-hidden">
        <ListWithIcon
          list={currentLectures}
          icon={<SlideshowIcon />}
          subheader="🔵 Lectures:"
        />
      </div>
    </section>
  );
}
