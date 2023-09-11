"use client";

import { useState } from "react";
import Image from "next/image";

export default function Box() {
  const openBox = "/images/openBox.png";
  const blackBox = "/images/blackBox.png";
  const title = "osarchrep";
  const [bbVisible, setBbVisible] = useState(true);
  return (
    <main
      className="w-full flex justify-center items-center"
      onMouseOver={() => setBbVisible(false)}
      onMouseLeave={() => setBbVisible(true)}
    >
      <Image
        className={`${
          bbVisible ? "invisible" : "visible scale-[1.05]"
        } absolute `}
        priority
        src={openBox}
        height={300}
        width={300}
        alt={title}
      />
      <Image
        className={`${bbVisible ? "visible" : "invisible"} absolute`}
        priority
        src={blackBox}
        height={300}
        width={300}
        alt={title}
      />
    </main>
  );
}
