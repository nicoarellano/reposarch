"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import CalendarIcon from "@mui/icons-material/CalendarMonthRounded";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import InfoIcon from "@mui/icons-material/HelpOutlineRounded";
import Menu from "@mui/icons-material/MenuRounded";
import CloseIcon from "@mui/icons-material/CloseRounded";
import HomeIcon from "@mui/icons-material/HomeRounded";
import TocIcon from "@mui/icons-material/ListAltRounded";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import Link from "next/link";

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
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      sx={{
        height: 320,
        transform: "translateZ(0px)",
        flexGrow: 1,
        position: "absolute",
      }}
    >
      <SpeedDial
        ariaLabel="SpeedDial"
        sx={{
          position: "absolute",
          bottom: 16,
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
            icon={<Menu color="action" />}
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
    </Box>
  );
}
