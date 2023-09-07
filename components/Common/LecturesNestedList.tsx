"use client";
import { useState, Fragment } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ScrollableList from "./ScrollableSlidesList";
import { IconButton } from "@mui/material";
import { Lectures, Lecture } from "../../types/types";
import Link from "next/link";
import dayjs from "dayjs";

interface Props {
  list: Lectures;
}

type OpenArray = boolean[];

export default function LencutesNestedList({ list }: Props) {
  const [open, setOpen] = useState<OpenArray>([]);

  const handleClick = (index: number) => {
    const newOpen = [...open];
    newOpen[index] = !newOpen[index];
    setOpen(newOpen);
  };

  return (
    <List
      sx={{
        width: "60%",
        minWidth: 800,
        minHeight: 220,
        bgcolor: "background.paper",
        maxHeight: 500,
        overflowY: "auto",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Course Schedule (date)
        </ListSubheader>
      }
    >
      {list.map((item: Lecture, index) => (
        <Fragment key={item.title}>
          <ListItemButton
            onClick={() => handleClick(index)}
            sx={{ borderBottom: 1, borderTop: 1, borderColor: "#ddd" }}
          >
            <ListItemText
              primary={`${item.title}${
                item.date ? ` (${item.date.format("YYYY/MM/DD")})` : ""
              }`}
            />
            <Link
              hidden={item.date > dayjs().add(6, "days")}
              href={item.url ? item.url : item.id}
              title={item.title}
            >
              <ListItemIcon>
                <IconButton>
                  <SlideshowIcon />
                </IconButton>
              </ListItemIcon>
            </Link>
            {open[index] ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          {Boolean(item.toc) && (
            <Collapse in={open[index]} timeout="auto" unmountOnExit>
              <ScrollableList toc={item.toc} />
            </Collapse>
          )}
        </Fragment>
      ))}
    </List>
  );
}
