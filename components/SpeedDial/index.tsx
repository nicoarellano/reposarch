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
        <Link href={"/arcn5005/toc"}>
          <TocIcon sx={actionStyle} />
        </Link>
      ),
      name: "Table of Content",
    },

    {
      icon: (
        <Link href={"/arcn5005/calendar"}>
          <CalendarIcon sx={actionStyle} />
        </Link>
      ),
      name: "Calendar",
    },
    {
      icon: (
        <Link href={"/arcn5005/bibliography"}>
          <BookIcon sx={actionStyle} />
        </Link>
      ),
      name: "Bibliography",
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
