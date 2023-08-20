"use client";
import { useContext, useState } from "react";
// Context
import { SlidesContext } from "@/middleware/Slides/context";

import Link from "next/link";
import Logo from "./Logo";
import LeftSpeedDial from "../SpeedDial";

export default function Header() {
  const { currentSlide } = useContext(SlidesContext)["state"]["slides"];

  return (
    <>
      <header className="flex flex-row justify-between min-w-max z-10 m-5">
        <Link href="/">
          <Logo />
        </Link>
        <h1 className="flex items-center">{currentSlide.title}</h1>
        <div className="w-90px">
          <LeftSpeedDial />
        </div>
      </header>
    </>
  );
}
