"use client";

import { ReactElement } from "react";

import { weeks } from "./arcn5005Weeks";
import { useContext, useEffect, useState } from "react";
import { SlidesContext } from "../../../../middleware/Slides/context";
import { arcn5005Lectures } from "../../../arcn5005Lectures";

interface Props {
  week: string;
}

export default function PageContent({ week }): ReactElement<Props> {
  const currentWeek = weeks[week];

  const slidesDispatch = useContext(SlidesContext)["dispatch"];
  const { currentSlide, currentSlideNumber } =
    useContext(SlidesContext)["state"]["slides"];

  const [content, setContent] = useState<JSX.Element>(currentWeek[0].content);
  const [toc, setToc] = useState<{ title: string }[]>([]);

  useEffect(() => {
    if (currentSlide?.content) setContent(currentSlide.content);
    if (currentSlide?.notes)
      console.log(`%c${currentSlide.notes}`, "font-size: 50px");

    const lectures = arcn5005Lectures.find((lecture) => lecture.id === week);

    let slides;
    if (lectures) slides = lectures.slides;
    const newToc = slides.map((slide) => ({ title: slide }));

    setToc(newToc);
  }, [currentSlideNumber]);

  useEffect(() => {
    slidesDispatch({
      type: "SET_SLIDES",
      payload: {
        currentSlide: currentWeek[0].content,
        currentSlideNumber: 0,
        slides: currentWeek,
        totalSlides: currentWeek.length,
        toc,
      },
    });
  }, [currentWeek, toc]);

  return <div>{content}</div>;
}
