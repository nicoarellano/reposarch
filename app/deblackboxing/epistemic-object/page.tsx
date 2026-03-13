"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from 'next/navigation';

import WestIcon from "@mui/icons-material/WestRounded";
import EastIcon from "@mui/icons-material/EastRounded";

import Link from "next/link";

export default function Home() {
  const openBox = "/images/openBox.png";
  const cdt = "/images/cdt/canada-logo.png";
  const reposarch = "/images/reposarch.png";
  const searchParams = useSearchParams();
  const animationParam = searchParams.get("animation");
  const animate = animationParam !== "false";
  const finalStep = 2;

  const [step, setStep] = useState(animate ? 0 : finalStep); // 0 = center only, 1 = +left, 2 = +right

  useEffect(() => {
    if (!animate) {
      setStep(finalStep);
    }
  }, [animate]);

  useEffect(() => {
    if (!animate) {
      return;
    }

    const handler = (e: KeyboardEvent) => {
      if ((e.key === " " || e.key === "ArrowRight") && step < 2) {
        e.stopImmediatePropagation();
        e.preventDefault();
        setStep((s) => Math.min(s + 1, 2));
      } else if (e.key === "ArrowLeft" && step > 0) {
        e.stopImmediatePropagation();
        e.preventDefault();
        setStep((s) => Math.max(s - 1, 0));
      }
    };
    window.addEventListener("keydown", handler, { capture: true });
    return () => window.removeEventListener("keydown", handler, { capture: true });
  }, [step, animate]);

  const leftIn = !animate || step >= 1;
  const rightIn = !animate || step >= 2;

  const leftStyle = {
    opacity: leftIn ? 1 : 0,
    transform: animate ? (leftIn ? "translateX(0)" : "translateX(200px)") : "translateX(0)",
    transition: animate ? "opacity 0.7s ease, transform 0.7s ease" : "none",
  };
  const rightStyle = {
    opacity: rightIn ? 1 : 0,
    transform: animate ? (rightIn ? "translateX(0)" : "translateX(-200px)") : "translateX(0)",
    transition: animate ? "opacity 0.7s ease, transform 0.7s ease" : "none",
  };

  return (
    <section
      className="flex justify-center items-center w-full h-full overflow-hidden"
      onClick={() => animate && setStep((s) => Math.min(s + 1, finalStep))}
    >
      <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-x-12 gap-y-6 items-center justify-items-center">
        {/* Row 1  Titles */}
        <h1 className="text-center" style={leftStyle}>REPOSARCH</h1>
        <span />
        <span />
        <span />
        <h1 className="text-center" style={rightStyle}>CDT</h1>

        {/* Row 2  Subtitles */}
        <h3 className="text-center" style={leftStyle}>Teaching open-source toolmaking for architects</h3>
        <span />
        <span />
        <span />
        <h3 className="text-center" style={rightStyle}>Developing a BIM/GIS open-source tool</h3>

        {/* Row 3  Images */}
        <div style={leftStyle}>
          <Link href={"/arcn5005/defence-edu/2"} className="inline-block transition-transform duration-200 hover:scale-110" onClick={(e) => e.stopPropagation()}>
            <Image priority src={reposarch} height={300} width={300} alt="Education" />
          </Link>
        </div>
        <div style={leftStyle}>
          <WestIcon fontSize="large" />
        </div>
        <Image
          priority
          src={openBox}
          height={300}
          width={300}
          alt="Epistemic Object"
        />
        <div style={rightStyle}>
          <EastIcon fontSize="large" />
        </div>
        <div style={rightStyle}>
          <Link href={"/arcn5005/defence-dev/2"} className="inline-block transition-transform duration-200 hover:scale-110" onClick={(e) => e.stopPropagation()}>
            <Image priority src={cdt} height={250} width={250} alt="Canada's Digital Twin" />
          </Link>
        </div>
      </div>
    </section>
  );
}
