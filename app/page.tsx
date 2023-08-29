"use client";

import Link from "next/link";
import { useContext } from "react";
import { SlidesContext } from "../middleware/Slides/context";
import { slides } from "./slides";
import Box from "../components/Common/Box";

export default function Home() {
  const slidesDispatch = useContext(SlidesContext)["dispatch"];

  const handleClick = () => [
    slidesDispatch({
      type: "SET_SLIDES",
      payload: {
        slides: slides,
        currentSlide: slides[0],
        currentSlideNumber: 0,
        totalSlides: slides.length - 1,
      },
    }),
  ];

  return (
    <main className="flex-col h-screen w-screen flex justify-center items-center">
      <Link href={"/arcn5005"} onClick={handleClick}>
        <Box />
      </Link>
    </main>
  );
}
