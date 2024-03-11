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
      className="w-full flex justify-center items-center text-center"
      onMouseOver={() => setBbVisible(false)}
      onMouseLeave={() => setBbVisible(true)}
    >
      {bbVisible ? (
        <div className="flex flex-col gap-14 justify-center items-center w-[450px]">
          <h1>BLACK BOX</h1>
          <Image priority src={blackBox} height={300} width={300} alt={title} />
          <h3>
            A BLACKBOX IS A SYSTEM THAT CAN BE UNDERSTOOD ONLY IN TERM OF ITS
            INPUTS AND OUTPUTS, BUT WHICH PROCESS IS NOT ACCESSIBLE OR EVEN
            VISIBLE TO USERS.
          </h3>
        </div>
      ) : (
        <div className="flex flex-col gap-14 justify-center items-center w-[320px]">
          <h1>DE-BLACKBOX</h1>
          <Image priority src={openBox} height={300} width={300} alt={title} />
          <h3>
            TO DE-BLACKBOX IS TO SHORTEN THE GAP BETWEEN TOOL USERS AND THEIR
            TOOLS FOR REPRESENTATION.
          </h3>
        </div>
      )}
    </main>
  );
}
