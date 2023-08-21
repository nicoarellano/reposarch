"use client";
import Link from "next/link";
import Logo from "./Logo";
import LeftSpeedDial from "../SpeedDial";
import { usePathname } from "next/navigation";
import { mainSlides } from "@/lib/arcn5005/MainSlides";

export default function Header() {
  const path = usePathname();

  const currentSlide = mainSlides.find((slide) => slide.url === path);
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
