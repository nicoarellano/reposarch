"use client";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import Link from "next/link";

import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import CalendarIcon from "@mui/icons-material/CalendarMonthRounded";
import InfoIcon from "@mui/icons-material/HelpOutlineRounded";
import MenuIcon from "@mui/icons-material/MenuRounded";
import CloseIcon from "@mui/icons-material/CloseRounded";
import HomeIcon from "@mui/icons-material/HomeRounded";
import TocIcon from "@mui/icons-material/ListAltRounded";
import BookIcon from "@mui/icons-material/MenuBookRounded";
import StudentPageIcon from "@mui/icons-material/ContactPageRounded";
import PaperIcon from "@mui/icons-material/FeedRounded";
import EvaluationsIcon from "@mui/icons-material/EmojiEventsRounded";

export default function BasicSpeedDial() {
  const actionStyle = {
    backgroundColor: "#f1f1f195",
    borderRadius: "50px",
    width: "42px",
    height: "42px",
    padding: "10px",
  };
  const actions = [
    {
      icon: (
        <Link href={"/arcn5005"}>
          <HomeIcon sx={actionStyle} />
        </Link>
      ),
      name: "Home",
    },
    {
      icon: (
        <Link href={"/arcn5005/course-description"}>
          <InfoIcon sx={actionStyle} />
        </Link>
      ),
      name: "Course Description",
    },
    {
      icon: (
        <Link href={"/arcn5005/course-outline"}>
          <PaperIcon sx={actionStyle} />
        </Link>
      ),
      name: "Course Outline",
    },
    {
      icon: (
        <Link href={"/arcn5005/toc"}>
          <TocIcon sx={actionStyle} />
        </Link>
      ),
      name: "Table of Content",
    },
    // {
    //   icon: (
    //     <Link href={"/arcn5005/calendar"}>
    //       <CalendarIcon sx={actionStyle} />
    //     </Link>
    //   ),
    //   name: "Calendar",
    // },
    {
      icon: (
        <Link href={"/arcn5005/resources"}>
          <BookIcon sx={actionStyle} />
        </Link>
      ),
      name: "Resources",
    },
    {
      icon: (
        <Link href={"/arcn5005/f2023/students"}>
          <StudentPageIcon sx={actionStyle} />
        </Link>
      ),
      name: "Class List",
    },
    {
      icon: (
        <Link href={"/arcn5005/evaluations"}>
          <EvaluationsIcon sx={actionStyle} />
        </Link>
      ),
      name: "Evaluations",
    },
  ];

  return (
    <SpeedDial
      ariaLabel="SpeedDial"
      sx={{
        position: "absolute",
        top: 16,
        right: 16,
        "& .MuiFab-primary": {
          backgroundColor: "#eee",
          color: "white",
          boxShadow: "none",
          "&:hover": { backgroundColor: "#ddd" },
        },
      }}
      icon={
        <SpeedDialIcon
          icon={<MenuIcon color="action" />}
          openIcon={<CloseIcon color="action" />}
        />
      }
      direction="down"
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
        />
      ))}
    </SpeedDial>
  );
}
