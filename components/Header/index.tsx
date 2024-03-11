"use client";
import { ReactElement } from "react";
import Logo from "./Logo";

import { usePathname } from "next/navigation";
import { Slides, Slide } from "../../app/types/types";
import { useRouter } from "next/navigation";
import useMediaQuery from "@mui/material/useMediaQuery";

import CourseSpeedDial from "../CourseSpeedDial";
import DeblackboxingSpeedDial from "../DeblackboxingSpeedDial";

interface Props {
  title: string;
}

export function Header({ title }): ReactElement<Props> {
  const router = useRouter();

  return (
    <nav>
      <header className="flex flex-row justify-center w-screen z-40 h-24">
        <nav className="absolute left-5">
          <Logo />
        </nav>
        <h1
          className="flex items-center hover:cursor-pointer"
          onClick={() => router.back()}
        >
          {title}
        </h1>
        <nav className="w-90px z-50">
          <CourseSpeedDial />
        </nav>
      </header>
    </nav>
  );
}
interface SlidesProps {
  slides: Slides | null;
  section: "arcn" | "deblackboxing";
}

export function HeaderOfSlide({
  slides,
  section = "deblackboxing",
}): ReactElement<SlidesProps> {
  const path = usePathname();

  const currentSlide = slides.find((slide: Slide) => path.endsWith(slide.id));

  const isMobile = useMediaQuery("(max-width: 600px)");

  const slideTitle: string = isMobile ? "ARCN5005" : currentSlide?.title;

  return (
    <nav>
      <header className="flex flex-row justify-center w-screen z-40 h-24">
        <nav className="absolute left-5">
          <Logo />
        </nav>
        <h2 className="flex items-center">{slideTitle}</h2>
        <nav className="w-90px z-50">
          {section === "arcn" ? (
            <CourseSpeedDial />
          ) : (
            <DeblackboxingSpeedDial />
          )}
        </nav>
      </header>
    </nav>
  );
}
