import { useState, Fragment, useEffect } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ScrollableList from "./scrollableList";
import { IconButton } from "@mui/material";
import { Classes } from "@/types/types";

interface Props {
  list: Classes;
}

type OpenArray = boolean[];

export default function NestedParentList({ list }: Props) {
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
        height: "100%",
        minWidth: 800,
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
      {list.map((item, index) => (
        <Fragment key={item.title}>
          <ListItemButton
            onClick={() => handleClick(index)}
            sx={{ borderBottom: 1, borderTop: 1, borderColor: "#ddd" }}
          >
            <ListItemIcon
              onClick={() => {
                console.log(`Jump to ${item.title}!`);
              }}
            >
              <IconButton>
                <SlideshowIcon />
              </IconButton>
            </ListItemIcon>
            <ListItemText primary={`${item.title} (${item.date})`} />
            {open[index] ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open[index]} timeout="auto" unmountOnExit>
            <ScrollableList itemList={item.topics} />
          </Collapse>
        </Fragment>
      ))}
    </List>
  );
}
