'use client';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Link from 'next/link';

import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import AbstractIcon from '@mui/icons-material/ShortTextRounded';
import MenuIcon from '@mui/icons-material/MenuRounded';
import CloseIcon from '@mui/icons-material/CloseRounded';
import HomeIcon from '@mui/icons-material/HomeRounded';
import TocIcon from '@mui/icons-material/ListAltRounded';
import ToolboxIcon from '@mui/icons-material/HomeRepairService';
import Educate from '@mui/icons-material/RecordVoiceOverRounded';
import Code from '@mui/icons-material/CodeRounded';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

// Context
import { useContext } from 'react';
import { ThemeContext } from '../../middleware/Theme/context';

export default function DeblackboxingSpeedDial() {

  const { mode } = useContext(ThemeContext)['state']['theme'];

  const actionStyle = {
    backgroundColor: mode === 'light' ? '#f1f1f195' : '#090c1495',
    borderRadius: '50px',
    width: '42px',
    height: '42px',
    padding: '10px',
    '&:hover': {
      backgroundColor: mode === 'light' ? '#f3f3f395' : '#33333395',
    },
  };
  const actions = [
    {
      icon: (
        <Link href={'/deblackboxing'}>
          <HomeIcon sx={actionStyle} />
        </Link>
      ),
      name: 'Home',
    },
    {
      icon: (
        <Link href={'/deblackboxing/abstract'}>
          <AbstractIcon sx={actionStyle} />
        </Link>
      ),
      name: 'Abstract',
    },
    {
      icon: (
        <Link href={'/deblackboxing/chapters'}>
          <TocIcon sx={actionStyle} />
        </Link>
      ),
      name: 'Chapters',
    },
    {
      icon: (
        <Link href={'/deblackboxing/epistemic-object'}>
          <ToolboxIcon sx={actionStyle} />
        </Link>
      ),
      name: 'Epistemic Object',
    },
    {
      icon: (
        <Link href={'/arcn5005/defence-edu/2'}>
          <Educate sx={actionStyle} />
        </Link>
      ),
      name: 'Education: Reposarch',
    },
    {
      icon: (
        <Link href={'/arcn5005/defence-dev/2'}>
          <Code sx={actionStyle} />
        </Link>
      ),
      name: 'Development: CDT',
    },

    // {
    //   icon: (
    //     <div
    //       onClick={() => {
    //         router.push(`?mode=${mode === 'light' ? 'dark' : 'light'}`);
    //         themeDispatch({
    //           type: 'TOGGLE-DARK-MODE',
    //           payload: { mode: mode === 'light' ? 'dark' : 'light' },
    //         });
    //       }}
    //     >
    //       {mode === 'dark' ? (
    //         <Brightness7Icon sx={actionStyle} />
    //       ) : (
    //         <Brightness4Icon sx={actionStyle} />
    //       )}
    //     </div>
    //   ),
    //   name: mode === 'light' ? 'Toggle Dark mode' : 'Toggle Light mode',
    // },
  ];

  return (
    <SpeedDial
      ariaLabel="SpeedDial"
      sx={{
        position: 'absolute',
        margin: '1.5rem',
        top: 0,
        right: 0,
        '& .MuiFab-primary': {
          backgroundColor: mode === 'light' ? 'white' : '#090c14',

          color: mode === 'light' ? 'white' : 'black',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: mode === 'light' ? 'white' : '#33333395',
          },
        },
      }}
      icon={
        <SpeedDialIcon
          icon={<MenuIcon color="action" />}
          openIcon={<CloseIcon color="action" />}
        />
      }
      direction="down"
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
        />
      ))}
    </SpeedDial>
  );
}
