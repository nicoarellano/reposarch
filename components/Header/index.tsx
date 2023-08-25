"use client";
import { ReactElement } from "react";
import Link from "next/link";
import Logo from "./Logo";
import LeftSpeedDial from "../SpeedDial";
import { usePathname } from "next/navigation";
import { Slides, Slide } from "../../types/types";
interface Props {
  slides: Slides;
}

export default function Header({ slides }): ReactElement<Props> {
  const path = usePathname();

  const currentSlide = slides.find((slide: Slide) => path.endsWith(slide.id));
  const slideTitle = currentSlide?.title;

  return (
    <nav>
      <header className="flex flex-row justify-between w-screen z-40 p-6">
        <Link href="/">
          <Logo />
        </Link>
        <h1 className="flex items-center">{slideTitle}</h1>
        <nav className="w-90px z-50">
          <LeftSpeedDial />
        </nav>
      </header>
    </nav>
  );
}
