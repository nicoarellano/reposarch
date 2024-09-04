'use client';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { IconButton, ListSubheader } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  list: { title: string }[];
  icon?: JSX.Element;
  subheader?: string;
}

export default function ListWithIcon({
  list = [],
  icon,
  subheader = 'Topics',
}: Props) {
  const path = usePathname();
  return (
    <List
      sx={{
        bgcolor: 'background.paper',
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={<ListSubheader component="div">{subheader}</ListSubheader>}
    >
      {list.map((item: { title: string; url?: string }, index) => {
        return (
          <ListItem key={index}>
            <ListItemIcon>
              {Boolean(item.url) ? (
                <Link
                  href={
                    item.url?.startsWith('http') || item.url?.startsWith('/')
                      ? item.url
                      : `${path}/${item.url}`
                  }
                >
                  <IconButton>{icon}</IconButton>
                </Link>
              ) : (
                <IconButton>{icon}</IconButton>
              )}
            </ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
        );
      })}
    </List>
  );
}
