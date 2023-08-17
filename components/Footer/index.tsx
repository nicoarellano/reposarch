import { useContext, ReactElement, useState, useEffect } from "react";

import IconButton from "@mui/material/IconButton";

import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

import { SlidesContext } from "@/middleware/Slides/context";
import { Slides } from "@/types/types";

interface Props {
  slides: Slides;
}
export default function Footer({ slides }): ReactElement<Props> {
  const slidesDispatch = useContext(SlidesContext)["dispatch"];
  const totalSlides: number = slides.length - 1;

  const [currentSlideNumber, setCurrenSliderNuber] = useState(0);
  const [firstSlide, setFirstSlide] = useState(!Boolean(currentSlideNumber));
  const [lastSlide, setLastSlide] = useState(
    currentSlideNumber === totalSlides
  );

  useEffect(() => {
    setFirstSlide(!Boolean(currentSlideNumber));
    setLastSlide(currentSlideNumber === totalSlides);
  }, [currentSlideNumber, totalSlides]);

  const handleBack = () => {
    const previousNumber = firstSlide ? 0 : currentSlideNumber - 1;
    setCurrenSliderNuber(previousNumber);
    slidesDispatch({
      type: "PREVIOUS_SLIDE",
      payload: {
        currentSlideNumber: previousNumber,
        currentSlide: slides[previousNumber],
      },
    });
  };

  const handleForward = () => {
    const nextNumber = lastSlide ? totalSlides : currentSlideNumber + 1;
    setCurrenSliderNuber(nextNumber);
    slidesDispatch({
      type: "NEXT_SLIDE",
      payload: {
        currentSlideNumber: nextNumber,
        currentSlide: slides[nextNumber],
      },
    });
  };

  return (
    <>
      <footer className="z-50 flex flex-row min-w-full content-between justify-between p-5">
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
    </>
  );
}
