import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList, ListChildComponentProps } from "react-window";
import { Slides } from "../../types/types";

function RenderRow(props: ListChildComponentProps) {
  const { index, style, itemList } = props;

  return (
    <ListItem
      style={style}
      key={index}
      sx={{ pl: 4 }}
      component="div"
      disablePadding
    >
      <ListItemButton>
        {index + 1}.&emsp; <ListItemText primary={itemList[index]} />
      </ListItemButton>
    </ListItem>
  );
}

interface Props {
  itemList: Slides | undefined;
}

export default function ScrollableList({ itemList }: Props) {
  return (
    <>
      {Boolean(itemList) && (
        <FixedSizeList
          height={itemList ? itemList.length * 47 : 0}
          itemSize={46}
          itemCount={itemList ? itemList.length : 0}
          overscanCount={5}
          sx={{
            width: "100%",
            bgcolor: "background.paper",
          }}
        >
          {(props) => <RenderRow {...props} itemList={itemList} />}
        </FixedSizeList>
      )}
    </>
  );
}
