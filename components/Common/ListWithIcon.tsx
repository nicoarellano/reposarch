import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { IconButton, ListSubheader } from "@mui/material";
import { Slide, Slides } from "../../types/types";

interface Props {
  list: Slides;
  icon?: JSX.Element;
  subheader?: string;
}

export default function ListWithIcon({
  list = [],
  icon,
  subheader = "Topics",
}: Props) {
  return (
    <List
      sx={{
        width: "50%",
        bgcolor: "background.paper",
        overflowY: "auto",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={<ListSubheader component="div">{subheader}</ListSubheader>}
    >
      {list.map((item: Slide, index) => (
        <ListItem key={index}>
          <ListItemIcon>
            <IconButton>{icon}</IconButton>
          </ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItem>
      ))}
    </List>
  );
}
