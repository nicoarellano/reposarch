"use client";

import { Fragment, useMemo, useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Toc } from "../../app/types/types";

interface Props {
  toc: Toc;
}

type OpenMap = Record<string, boolean>;

function TocItems({ toc, depth }: { toc: Toc; depth: number }) {
  const [open, setOpen] = useState<OpenMap>({});

  const paddingLeft = useMemo(() => 4 + depth * 2, [depth]);

  const handleToggle = (key: string) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <List component="div" disablePadding>
      {toc.map((item, index) => {
        const key = `${depth}-${index}-${item.title ?? ""}`;
        const hasChildren = Boolean(item.children && item.children.length > 0);
        const isOpen = Boolean(open[key]);

        return (
          <Fragment key={key}>
            <ListItemButton
              sx={{ pl: paddingLeft }}
              onClick={() => {
                if (hasChildren) handleToggle(key);
              }}
            >
              <ListItemText primary={item.title} />
              {hasChildren && (
                <ListItemIcon sx={{ minWidth: 0, ml: 1 }}>
                  {isOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemIcon>
              )}
            </ListItemButton>
            {hasChildren && (
              <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <TocItems toc={item.children!} depth={depth + 1} />
              </Collapse>
            )}
          </Fragment>
        );
      })}
    </List>
  );
}

export default function ScrollableList({ toc }: Props) {
  if (!toc || toc.length === 0) return null;

  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
      }}
      component="nav"
      aria-label="toc"
    >
      <TocItems toc={toc} depth={0} />
    </List>
  );
}
