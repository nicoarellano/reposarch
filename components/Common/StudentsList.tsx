'use client';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import { Avatar, IconButton, ListSubheader } from '@mui/material';
import { Students, Student } from '../../app/types/types';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import ScrollableAssignmetnsList from './ScrollableAssignmentsList';

import AboutIcon from '@mui/icons-material/AccountCircle';
import ThreeIcon from '@mui/icons-material/ThreeDRotationRounded';
import MapIcon from '@mui/icons-material/PublicRounded';
import FinalIcon from '@mui/icons-material/SportsScoreRounded';

interface Props {
  students: Students;
}

export default function StudentsList({ students }: Props) {
  const path = usePathname();

  const handleClick = (index: number) => {};

  return (
    <List
      sx={{
        width: '60%',
        minWidth: 800,
        bgcolor: 'background.paper',
        maxHeight: 500,
        overflowY: 'auto',
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={<ListSubheader component="div">Students List</ListSubheader>}
    >
      {students.map((student: Student, index) => (
        <div
          key={index}
          // href={`${path}/${student.username}`}
          title={student.username}
        >
          <ListItemButton
            onClick={() => handleClick(index)}
            sx={{ borderBottom: 1, borderTop: 1, borderColor: '#ddd' }}
          >
            <ListItemIcon>
              <IconButton href={`${path}/${student.username}`}>
                <Avatar
                  src={`${path}/${student.username}/avatar.jpg`}
                  sx={{ width: 30, height: 30 }}
                />
              </IconButton>
            </ListItemIcon>
            <ListItemText
              primary={`${student.firstName} ${student.lastName}`}
            />
            <IconButton
              title="About"
              href={`${path}/${student.username}/about`}
            >
              <AboutIcon />
            </IconButton>
            <IconButton
              title="Three"
              href={`${path}/${student.username}/three`}
            >
              <ThreeIcon />
            </IconButton>
            <IconButton title="Map" href={`${path}/${student.username}/map`}>
              <MapIcon />
            </IconButton>
            <IconButton
              title="Final"
              href={`${path}/${student.username}/final`}
            >
              <FinalIcon />
            </IconButton>
          </ListItemButton>
        </div>
      ))}
    </List>
  );
}
