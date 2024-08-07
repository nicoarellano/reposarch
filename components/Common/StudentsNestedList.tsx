"use client";
import { useState, Fragment } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StudentPageIcon from "@mui/icons-material/ContactPageRounded";
import { Avatar, IconButton, ListSubheader } from "@mui/material";
import { Students, Student } from "../../app/types/types";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import ScrollableAssignmetnsList from "./ScrollableAssignmentsList";

interface Props {
  students: Students;
}

type OpenArray = boolean[];

export default function StudentsNestedList({ students }: Props) {
  const path = usePathname();
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
        bgcolor: "background.paper",
        maxHeight: 500,
        overflowY: "auto",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={<ListSubheader component="div">Students List</ListSubheader>}
    >
      {students.map((student: Student, index) => (
        <Fragment key={index}>
          <ListItemButton
            onClick={() => handleClick(index)}
            sx={{ borderBottom: 1, borderTop: 1, borderColor: "#ddd" }}
          >
            <Link href={`${path}/${student.username}`} title={student.username}>
              <ListItemIcon>
                <IconButton>
                  <Avatar
                    src={`${path}/${student.username}/avatar.jpg`}
                    sx={{ width: 30, height: 30 }}
                  />
                </IconButton>
              </ListItemIcon>
            </Link>
            <ListItemText
              primary={`${student.firstName} ${student.lastName}`}
            />
            {open[index] ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open[index]} timeout="auto" unmountOnExit>
            <ScrollableAssignmetnsList username={student.username} />
          </Collapse>
        </Fragment>
      ))}
    </List>
  );
}
