'use client';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Avatar, IconButton, ListSubheader } from '@mui/material';
import { Students, Student } from '../../app/types/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { usePathname } from 'next/navigation';

import AboutIcon from '@mui/icons-material/AccountCircle';
import ThreeIcon from '@mui/icons-material/ThreeDRotationRounded';
import MapIcon from '@mui/icons-material/PublicRounded';
import BIMIcon from '@mui/icons-material/MapsHomeWorkRounded';

interface Props {
  students: Students;
}

export default function StudentsList({ students }: Props) {
  const path = usePathname();
  const isF2023 = path?.includes('f2023');
  const isF2023 = path?.includes('f2023');

  return (
    <List
      sx={{
        width: '60%',
        minWidth: 400,
        bgcolor: 'background.paper',
        maxHeight: 500,
        overflowY: 'auto',
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={<ListSubheader component="div">Students List</ListSubheader>}
    >
      {students.map((student: Student, index) => (
        <div key={index} title={student.username}>
          <ListItemButton
            sx={{ borderBottom: 1, borderTop: 1, borderColor: '#ddd' }}
          >
            <ListItemIcon>
              <Link
                href={`${path}/${student.username}${isF2023 ? '' : '/final'}`}
              >
              <Link
                href={`${path}/${student.username}${isF2023 ? '' : '/final'}`}
              >
                <IconButton>
                  <Avatar
                    src={`${path}/${student.username}/avatar.jpg`}
                    sx={{ width: 30, height: 30 }}
                  />
                </IconButton>
              </Link>
            </ListItemIcon>
            <ListItemText
              primary={`${student.firstName} ${student.lastName}`}
            />
            {student.assignments.includes('about') && (
              <Link href={`${path}/${student.username}/about`}>
                <IconButton title="About">
                  <AboutIcon />
                </IconButton>
              </Link>
            )}
            {student.assignments.includes('three') && (
              <Link href={`${path}/${student.username}/three`}>
                <IconButton title="Three">
                  <ThreeIcon />
                </IconButton>
              </Link>
            )}
            {student.assignments.includes('map') && (
              <Link href={`${path}/${student.username}/map`}>
                <IconButton title="Map">
                  <MapIcon />
                </IconButton>
              </Link>
            )}
            {student.assignments.includes('bim') && (
              <Link href={`${path}/${student.username}/bim`}>
                <IconButton title="BIM">
                  <BIMIcon />
                </IconButton>
              </Link>
            )}
            {student.assignments.includes('about') && (
              <Link href={`${path}/${student.username}/about`}>
                <IconButton title="About">
                  <AboutIcon />
                </IconButton>
              </Link>
            )}
            {student.assignments.includes('three') && (
              <Link href={`${path}/${student.username}/three`}>
                <IconButton title="Three">
                  <ThreeIcon />
                </IconButton>
              </Link>
            )}
            {student.assignments.includes('map') && (
              <Link href={`${path}/${student.username}/map`}>
                <IconButton title="Map">
                  <MapIcon />
                </IconButton>
              </Link>
            )}
            {student.assignments.includes('bim') && (
              <Link href={`${path}/${student.username}/bim`}>
                <IconButton title="BIM">
                  <BIMIcon />
                </IconButton>
              </Link>
            )}
          </ListItemButton>
        </div>
      ))}
    </List>
  );
}
