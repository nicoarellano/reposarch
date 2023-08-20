"use client";
import { useContext, ReactElement, useState, useEffect } from "react";

import IconButton from "@mui/material/IconButton";

import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

import { SlidesContext } from "@/middleware/Slides/context";
import { Slides } from "@/types/types";

interface Props {
  slides: Slides;
}
export default function Footer(): ReactElement<Props> {
  // const slidesDispatch = useContext(SlidesContext)["dispatch"];
  const { slides } = useContext(SlidesContext)["state"]["slides"];
  const totalSlides: number = slides.length - 1;

  const [currentSlideNumber, setCurrenSliderNuber] = useState(0);

  const handleBack = () => {
    const previousNumber =
      currentSlideNumber === 0 ? 0 : currentSlideNumber - 1;
    setCurrenSliderNuber(previousNumber);
    // slidesDispatch({
    //   type: "PREVIOUS_SLIDE",
    //   payload: {
    //     currentSlideNumber: previousNumber,
    //     currentSlide: slides[previousNumber],
    //   },
    // });
  };

  const handleForward = () => {
    const nextNumber =
      currentSlideNumber === totalSlides ? totalSlides : currentSlideNumber + 1;
    setCurrenSliderNuber(nextNumber);
    // slidesDispatch({
    //   type: "NEXT_SLIDE",
    //   payload: {
    //     currentSlideNumber: nextNumber,
    //     currentSlide: slides[nextNumber],
    //   },
    // });
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        handleBack();
      } else if (event.key === "ArrowRight" || event.key === " ") {
        handleForward();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSlideNumber, totalSlides]);

  const firstSlide = currentSlideNumber === 0;
  const lastSlide = currentSlideNumber === totalSlides;

  return (
    <footer className="z-20 flex flex-row min-w-full content-between justify-between p-5 bottom-0 ">
      <IconButton onClick={handleBack} disabled={Boolean(firstSlide)}>
        <ArrowBackIosRoundedIcon />
      </IconButton>
      <strong className="flex items-center">
        {currentSlideNumber} / {totalSlides}
      </strong>
      <IconButton onClick={handleForward} disabled={Boolean(lastSlide)}>
        <ArrowForwardIosRoundedIcon />
      </IconButton>
    </footer>
  );
}
