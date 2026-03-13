"use client";
import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

import WestIcon from "@mui/icons-material/WestRounded";
import EastIcon from "@mui/icons-material/EastRounded";

function ObstaclesContent() {
  const blackBox = "/images/blackBox.png";
  const proprietary = "/images/defence/proprietaryBoxes.png";
  const interfaces = "/images/defence/interaction.png";
  const searchParams = useSearchParams();
  const animateParam = searchParams.get("animate") ?? searchParams.get("animation");
  const animate = animateParam !== "false";
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

  // Left group slides in from the right (starts shifted toward center), right group from the left
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
      {/* Same 5-column grid as the original */}
      <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-x-12 gap-y-6 items-center justify-items-center">
        {/* Row 1 — Titles */}
        <h1 className="text-center" style={leftStyle}>OBLIVION</h1>
        <span />
        <span />
        <span />
        <h1 className="text-center" style={rightStyle}>BLACK BOXES</h1>

        {/* Row 2 — Subtitles */}
        <h3 className="text-center" style={leftStyle}>Passive acceptance of proprietary tools</h3>
        <span />
        <span />
        <span />
        <h3 className="text-center" style={rightStyle}>Proprietary software and closed file formats</h3>

        {/* Row 3 — Images */}
        <div style={leftStyle}>
          <Image
            priority
            src={interfaces}
            height={300}
            width={300}
            alt="Interfaces — the medium is the message"
          />
        </div>
        <div style={leftStyle}>
          <WestIcon fontSize="large" />
        </div>
        <Image
          priority
          src={blackBox}
          height={300}
          width={300}
          alt="Black box"
        />
        <div style={rightStyle}>
          <EastIcon fontSize="large" />
        </div>
        <div style={rightStyle}>
          <Image
            priority
            src={proprietary}
            height={300}
            width={300}
            alt="Proprietary software and closed file formats"
          />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Suspense fallback={null}>
      <ObstaclesContent />
    </Suspense>
  );
}
