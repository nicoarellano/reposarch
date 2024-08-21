'use client';

import { useEffect, useState, ReactElement } from 'react';

import { Lecture, Toc } from '@/app/types/types';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useRouter } from 'next/navigation';

import ListWithIcon from '@/components/Common/ListWithIcon';
import ArrowRightIcon from '@mui/icons-material/ArrowRightRounded';
import VideoIcon from '@mui/icons-material/OndemandVideoRounded';
import useMediaQuery from '@mui/material/useMediaQuery';
import { arcn5005Lectures } from '../../arcn5005Lectures';

interface Props {
  params: { section: string; number: string };
}

export default function Page({ params }): ReactElement<Props> {
  const { section, number } = params;
  let lecture: Lecture | undefined = arcn5005Lectures.find(
    (lecture) => lecture.id === section
  );

  const [content, setContent] = useState<Toc>([]);
  const [currentSlideElement, setCurrentSlideElement] = useState<JSX.Element>();
  const [currentSlideNumber, setCurrentSlideNumber] = useState(0);

  const router = useRouter();

  const isMobile = useMediaQuery('(max-width: 600px)');

  const recordings: { title: string; url?: string }[] = [];
  if (lecture?.recordings)
    lecture?.recordings.map((recording) => {
      if (recording) {
        recordings.push({
          title: `${recording.title} (${recording.date.format('YY/MM/DD')})`,
          url: recording.url,
        });
      }
    });

  useEffect(() => {
    if (lecture?.content) {
      if (!number) router.push('1');
      else {
        const paramsNumber = Number(number);

        const fullContent = [
          {
            element: (
              <div className="flex gap-4 items-start">
                <div>
                  <ListWithIcon
                    list={lecture.toc as { title: string }[]}
                    subheader="Table of Content"
                    icon={<ArrowRightIcon />}
                  />
                </div>
                {!isMobile && lecture.recordings && (
                  <div>
                    <ListWithIcon
                      list={recordings}
                      subheader="Class Recordings"
                      icon={<VideoIcon />}
                    />
                  </div>
                )}
              </div>
            ),
          },
          ...lecture?.content,
        ];

        const index =
          paramsNumber < 1
            ? 1
            : paramsNumber > fullContent.length
            ? fullContent.length
            : paramsNumber;

        setCurrentSlideNumber(index);
        setContent(fullContent);
      }
    }
  }, [number, lecture]);

  useEffect(() => {
    if (content.length > 0) {
      const currentContent = content[currentSlideNumber - 1];
      console.clear();
      if (currentContent?.notes) {
        // 🎶 Speaker notes as console log
        console.log(
          `%c${currentSlideNumber}- ==================================`,
          'color: red; font-size: 30px'
        );
        console.log(`%c${currentContent.notes}`, 'font-size: 35px');
      }
      setCurrentSlideElement(currentContent.element);
    }
  }, [content, currentSlideNumber]);

  return (
    <main className="lecture-grid">
      <header className="h-24 ">
        <Header title={isMobile ? lecture?.id.toUpperCase() : lecture?.title} />
      </header>
      <section className="slides">{currentSlideElement}</section>
      <nav className=" h-16">
        <Footer list={content} currentPage={currentSlideNumber} />
      </nav>
    </main>
  );
}
