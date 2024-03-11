import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList, ListChildComponentProps } from "react-window";
import { Toc } from "../../app/types/types";

function RenderRow(props: ListChildComponentProps) {
  const { index, style, toc } = props;

  return (
    <ListItem
      style={style}
      key={index}
      sx={{ pl: 4 }}
      component="div"
      disablePadding
    >
      <ListItemButton>
        {index + 1}.&emsp; <ListItemText primary={toc[index].title} />
      </ListItemButton>
    </ListItem>
  );
}

interface Props {
  toc: Toc;
}

export default function ScrollableList({ toc }: Props) {
  return (
    <>
      <FixedSizeList
        height={toc ? toc.length * 47 : 0}
        itemSize={46}
        itemCount={toc ? toc.length : 0}
        overscanCount={5}
        sx={{
          width: "100%",
          bgcolor: "background.paper",
        }}
      >
        {(props) => <RenderRow {...props} toc={toc} />}
      </FixedSizeList>
    </>
  );
}
