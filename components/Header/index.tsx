"use client";
import { ReactElement } from "react";
import Logo from "./Logo";
import LeftSpeedDial from "../SpeedDial";
import { usePathname } from "next/navigation";
import { Slides, Slide } from "../../types/types";
import { useRouter } from "next/navigation";

interface Props {
  title: string;
}

export function Header({ title }): ReactElement<Props> {
  const router = useRouter();

  return (
    <nav>
      <header className="flex flex-row justify-between w-screen z-40 p-6">
        <Logo />
        <h1
          className="flex items-center hover:cursor-pointer"
          onClick={() => router.back()}
        >
          {title}
        </h1>
        <nav className="w-90px z-50">
          <LeftSpeedDial />
        </nav>
      </header>
    </nav>
  );
}
interface SlidesProps {
  slides: Slides | null;
}

export function HeaderOfSlide({ slides }): ReactElement<SlidesProps> {
  const path = usePathname();

  const currentSlide = slides.find((slide: Slide) => path.endsWith(slide.id));
  const slideTitle: string = currentSlide?.title;

  return (
    <nav>
      <header className="flex flex-row justify-between w-screen z-40 p-6">
        <Logo />
        <h1 className="flex items-center">{slideTitle}</h1>
        <nav className="w-90px z-50">
          <LeftSpeedDial />
        </nav>
      </header>
    </nav>
  );
}
