import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList, ListChildComponentProps } from "react-window";
import Link from "next/link";
import { Assignments } from "../../app/arcn5005/assignments";

function RenderRow(props: ListChildComponentProps) {
  const { index, style, username } = props;

  return (
    <ListItem
      style={style}
      key={index}
      sx={{ pl: 4 }}
      component="div"
      disablePadding
    >
      <ListItemButton>
        <Link href={`students/${username}/${Assignments[index].url}`}>
          <ListItemText primary={Assignments[index].title} />
        </Link>
      </ListItemButton>
    </ListItem>
  );
}

interface Props {
  username: string;
}

export default function ScrollableAssignmetnsList({ username }: Props) {
  return (
    <>
      <FixedSizeList
        height={190}
        itemSize={46}
        itemCount={Assignments.length}
        overscanCount={5}
        sx={{
          width: "100%",
          height: 200,
          bgcolor: "background.paper",
          overflowY: "auto",
        }}
      >
        {(props) => <RenderRow {...props} username={username} />}
      </FixedSizeList>
    </>
  );
}
