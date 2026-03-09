'use client';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {
  Avatar,
  IconButton,
  ListSubheader,
  List,
  useMediaQuery,
} from '@mui/material';
import { Students, Student } from '../../app/types/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import AboutIcon from '@mui/icons-material/AccountCircle';
import ThreeIcon from '@mui/icons-material/ThreeDRotationRounded';
import MapIcon from '@mui/icons-material/PublicRounded';
import BIMIcon from '@mui/icons-material/MapsHomeWorkRounded';
import FinalIcon from '@mui/icons-material/SportsScore';

interface Props {
  students: Students;
  isPresentationMode?: boolean;
}

export default function StudentsList({ students, isPresentationMode = true }: Props) {
  const path = usePathname();
  const isF2023 = path?.includes('f2023');

  const manualPath = `/arcn5005/terms/${isF2023 ? 'f2023' : 'f2024'}/students/`


  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <List
      sx={{
        width: '50%',
        minWidth: 350,
        bgcolor: 'background.paper',
        maxHeight: isMobile ? 550 : 700,
        overflowY: 'auto',
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={<ListSubheader component="div">Students List</ListSubheader>}
    >
      {students.map((student: Student, index) => {

        const studentsPath = isPresentationMode ? `${manualPath}${student.username}` : `${path}${student.username}`;

        const finalPath = isF2023 ? studentsPath : `${studentsPath}/final`

        return (
          <div key={index} title={student.username}>
            <ListItemButton
              sx={{ borderBottom: 1, borderTop: 1, borderColor: '#ddd' }}
            >
              <ListItemIcon>
                <Link href={finalPath}>
                  <IconButton>
                    <Avatar
                      src={`${studentsPath}/avatar.jpg`}
                      sx={{ width: 30, height: 30 }}
                    />
                  </IconButton>
                </Link>
              </ListItemIcon>
              <ListItemText
                primary={`${student.firstName} ${student.lastName}`}
              />
              {student.assignments.includes('about') && (
                <Link href={`${studentsPath}/about`}>
                  <IconButton title="About">
                    <AboutIcon />
                  </IconButton>
                </Link>
              )}
              {student.assignments.includes('three') && (
                <Link href={`${studentsPath}/three`}>
                  <IconButton title="Three">
                    <ThreeIcon />
                  </IconButton>
                </Link>
              )}
              {student.assignments.includes('map') && (
                <Link href={`${studentsPath}/map`}>
                  <IconButton title="Map">
                    <MapIcon />
                  </IconButton>
                </Link>
              )}
              {student.assignments.includes('bim') && (
                <Link href={`${studentsPath}/bim`}>
                  <IconButton title="BIM">
                    <BIMIcon />
                  </IconButton>
                </Link>
              )}
              {student.assignments.includes('final') && (
                <Link href={finalPath}>
                  <IconButton title="Final Assignment">
                    <FinalIcon />
                  </IconButton>
                </Link>
              )}
            </ListItemButton>
          </div>
        );
      })}
    </List>
  );
}
