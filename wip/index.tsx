"use client";

import Box from "@/components/Common/Box";
import { mainSlides } from "@/lib/arcn5005/MainSlides";
import { SlidesContext } from "@/middleware/Slides/context";
import Link from "next/link";
import { useContext } from "react";

export default function Home() {
  const slidesDispatch = useContext(SlidesContext)["dispatch"];

  const handleClick = () => [
    slidesDispatch({
      type: "SET_SLIDES",
      payload: {
        slides: mainSlides,
        currentSlide: mainSlides[0],
        currentSlideNumber: 0,
        totalSlides: mainSlides.length - 1,
      },
    }),
    console.log(mainSlides),
  ];

  return (
    <main className="flex-col h-screen w-screen flex justify-center items-center">
      <Link href={"/arcn5005"} onClick={handleClick}>
        <Box />
      </Link>
    </main>
  );
}
