"use client";

import { usePathname } from "next/navigation";
import { weeks } from "../arcn5005Weeks";
import { useContext, useEffect, useState } from "react";
import { SlidesContext } from "../../../../middleware/Slides/context";

export default function WeekToc() {
  const path = usePathname();
  const endPath: string = path.split("/").reverse()[0];

  const week = weeks[endPath];

  const slidesDispatch = useContext(SlidesContext)["dispatch"];
  const { currentSlide, currentSlideNumber } =
    useContext(SlidesContext)["state"]["slides"];

  const [content, setContent] = useState<JSX.Element>(week[0].content);

  useEffect(() => {
    if (currentSlide?.content) setContent(currentSlide.content);
    if (currentSlide?.notes)
      console.log(`%c${currentSlide.notes}`, "font-size: 50px");
  }, [currentSlideNumber]);

  useEffect(() => {
    slidesDispatch({
      type: "SET_SLIDES",
      payload: {
        currentSlide: week[0].content,
        currentSlideNumber: 0,
        slides: week,
        totalSlides: week.length,
      },
    });
  }, [week]);

  return (
    <div className=" flex flex-col items-center justify-center grow gap-8 mdx max-w-[80%]">
      {content}
    </div>
  );
}
