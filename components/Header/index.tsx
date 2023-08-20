"use client";
import { useContext } from "react";
// Context
import { SlidesContext } from "@/middleware/Slides/context";

import Link from "next/link";
import Logo from "./Logo";
import LeftSpeedDial from "../SpeedDial";

export default function Header() {
  const { currentSlide } = useContext(SlidesContext)["state"]["slides"];

  return (
    <nav>
      <header className="flex flex-row justify-between min-w-max z-40 m-5">
        <Link href="/">
          <Logo />
        </Link>
        <h1 className="flex items-center">{currentSlide.title}</h1>
        <nav className="w-90px z-50">
          <LeftSpeedDial />
        </nav>
      </header>
    </nav>
  );
}
