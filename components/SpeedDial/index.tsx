"use client";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import Link from "next/link";

import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import InfoIcon from "@mui/icons-material/HelpOutlineRounded";
import MenuIcon from "@mui/icons-material/MenuRounded";
import CloseIcon from "@mui/icons-material/CloseRounded";
import HomeIcon from "@mui/icons-material/HomeRounded";
import TocIcon from "@mui/icons-material/ListAltRounded";
import BookIcon from "@mui/icons-material/MenuBookRounded";
import StudentPageIcon from "@mui/icons-material/ContactPageRounded";
import PaperIcon from "@mui/icons-material/FeedRounded";
import EvaluationsIcon from "@mui/icons-material/EmojiEventsRounded";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

// Context
import { useContext } from "react";
import { ThemeContext } from "../../middleware/Theme/context";

export default function BasicSpeedDial() {
  const themeDispatch = useContext(ThemeContext)["dispatch"];
  const { mode } = useContext(ThemeContext)["state"]["theme"];

  const actionStyle = {
    backgroundColor: mode === "light" ? "#f1f1f195" : "#090c1495",
    borderRadius: "50px",
    width: "42px",
    height: "42px",
    padding: "10px",
    "&:hover": {
      backgroundColor: mode === "light" ? "#f3f3f395" : "#33333395",
    },
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
    {
      icon: (
        <div
          onClick={() => {
            themeDispatch({
              type: "TOGGLE-DARK-MODE",
              payload: { mode: mode === "light" ? "dark" : "light" },
            });
          }}
        >
          {mode === "dark" ? (
            <Brightness7Icon sx={actionStyle} />
          ) : (
            <Brightness4Icon sx={actionStyle} />
          )}
        </div>
      ),
      name: mode === "light" ? "Toggle Dark mode" : "Toggle Light mode",
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
          backgroundColor: mode === "light" ? "white" : "#090c14",

          color: mode === "light" ? "white" : "black",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: mode === "light" ? "white" : "#33333395",
          },
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
