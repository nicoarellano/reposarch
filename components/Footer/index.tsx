'use client';
import { useState, useEffect, ReactElement, useContext } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import Stack from '@mui/material/Stack';

import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import BackIcon from '@mui/icons-material/ArrowBackIosRounded';
import ForwardIcon from '@mui/icons-material/ArrowForwardIosRounded';

import { Slide, Slides } from '../../app/types/types';
import { ThemeContext } from '../../middleware/Theme/context';
import useMediaQuery from '@mui/material/useMediaQuery';

import { useSwipeable } from 'react-swipeable';

interface Props {
  list: Slide[];
  currentPage: number;
}

export const speakerNotes = (page: number, currentSlide: Slide) => {
  console.clear();

  if (currentSlide?.notes) {
    console.log(
      `%c${page}) ${currentSlide.title ?? ''}${'\u2003'.repeat(80)}`,
      'color: red; font-size: 30px; display:block; width:100vw; box-sizing:border-box; border-bottom: 3px solid red; padding:6px 8px; white-space: pre;'
    );
    console.log(
      `%c${currentSlide.notes}`,
      'color: #0b3d91; font-size: 30px; font-family: "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; font-weight: 600;'
    );
  }
}

export function Footer({ list, currentPage }): ReactElement<Props> {
  const router = useRouter();
  const path = usePathname();
  const [page, setPage] = useState(1);
  const isMobile = useMediaQuery('(max-width: 600px)');

  const routerEnd = path.split('/').reverse()[0];
  const [newPath, setNewPath] = useState<string>(path);

  const { mode } = useContext(ThemeContext)['state']['theme'];

  useEffect(() => {
    let newPath: string = path;
    if (Boolean(!Number(routerEnd) && routerEnd !== '0')) {
      newPath = path;
      router.replace(`${newPath}/${page}`);
    } else setNewPath(path.substring(0, path.lastIndexOf('/')));
  }, []);

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  const hanldeTouch = useSwipeable({
    onSwipedLeft: () => setPage(Math.min(page + 1, list.length)),
    onSwipedRight: () => setPage(Math.max(page - 1, 1)),
  });

  useEffect(() => {
    // Mirror slide footer behavior: log speaker notes for the current page.
    const currentSlide = list[page - 1];
    if (currentSlide) {
      speakerNotes(page, currentSlide);
    }

    function handleKeyDown(event: KeyboardEvent) {
      event.key === 'ArrowRight' ||
        event.key === ' ' ||
        event.key === 'ArrowLeft' ||
        event.key === 'Backspace';

      if (event.key === 'ArrowRight' || event.key === ' ') {
        const nextPage = Math.min(page + 1, list.length);
        setPage(nextPage);
      } else if (event.key === 'ArrowLeft' || event.key === 'Backspace') {
        const prevPage = Math.max(page - 1, 1);
        setPage(prevPage);
      }
    }
    router.replace(`${newPath}/${page}`);

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [page, list, newPath, router]);

  function handlePaginationChange(e, value) {
    setPage(value);
  }

  return (
    <>
      {Boolean(list && list.length > 1) && (
        <footer
          className={`bottom-0 static w-screen justify-center flex h-16 items-center z-50 ${mode === 'light' ? 'bg-light' : 'bg-dark '
            }`}
        >
          <Stack
            spacing={2}
            visibility={list.length > 1 ? 'visible' : 'hidden'}
          >
            <Pagination
              className="  flex justify-center p-3 small"
              count={list.length}
              size={isMobile ? 'small' : 'large'}
              page={page}
              onChange={handlePaginationChange}
              onTouchStart={() => hanldeTouch}
              renderItem={(item) => (
                <PaginationItem
                  slots={{ previous: BackIcon, next: ForwardIcon }}
                  {...item}
                />
              )}
            />
          </Stack>
        </footer>
      )}
    </>
  );
}

interface SlideProps {
  slides: Slides;
}

export function SlidesFooter({ slides }): ReactElement<SlideProps> {
  const router = useRouter();
  const path = usePathname();
  const pathIndex = slides.findIndex((slide) => slide.url === path);
  const [index, setIndex] = useState<number>(pathIndex === -1 ? 0 : pathIndex);
  const [page, setPage] = useState(index + 1);
  const isMobile = useMediaQuery('(max-width: 600px)');

  const { mode } = useContext(ThemeContext)['state']['theme'];

  useEffect(() => {
    const index = slides.findIndex((slide) => slide.url === path);
    setIndex(index === 0 ? 1 : index);
  }, [path]);

  const handlers = useSwipeable({
    onSwipedLeft: () => setPage(Math.min(page + 1, slides.length)),
    onSwipedRight: () => setPage(Math.max(page - 1, 1)),
  });

  useEffect(() => {
    // 🎶 Speaker notes as console log
    const currentSlide = slides[page - 1];
    speakerNotes(page, currentSlide)


    function handleKeyDown(event: KeyboardEvent) {
      event.stopPropagation();

      event.key === 'ArrowRight' ||
        event.key === ' ' ||
        event.key === 'ArrowLeft' ||
        event.key === 'Backspace';

      window.focus();
      if (event.key === 'ArrowRight' || event.key === ' ') {
        const nextPage = Math.min(page + 1, slides.length);
        router.replace(slides[nextPage - 1].url);
      } else if (event.key === 'ArrowLeft' || event.key === 'Backspace') {
        const prevPage = Math.max(page - 1, 1);
        router.replace(slides[prevPage - 1].url);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [page, slides, router]);

  function handlePaginationChange(e, value) {
    const pageIndex = value;
    setPage(pageIndex);
    router.replace(slides[pageIndex - 1].url);
  }

  return (
    <footer
      className={`bottom-0 static w-screen flex justify-center h-16 items-center z-50 ${mode === 'light' ? 'bg-light' : 'bg-dark '
        }`}
    >
      <Stack spacing={2} visibility={slides.length > 1 ? 'visible' : 'hidden'}>
        <Pagination
          className="  flex justify-center small"
          count={slides.length}
          size={isMobile ? 'medium' : 'large'}
          page={page}
          onChange={handlePaginationChange}
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: BackIcon, next: ForwardIcon }}
              {...item}
            />
          )}
        />
      </Stack>
    </footer>
  );
}
