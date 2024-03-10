"use client";

import { useState } from "react";
import Image from "next/image";

import EastRoundedIcon from "@mui/icons-material/EastRounded";
import WestRoundedIcon from "@mui/icons-material/WestRounded";

import Community from "@mui/icons-material/Diversity3Rounded";
import Education from "@mui/icons-material/SchoolRounded";

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
        <div className="flex flex-col gap-20 justify-center items-center w-96">
          <h1>BLACK BOX</h1>
          <Image priority src={blackBox} height={300} width={300} alt={title} />
          <h3>
            A BLACKBOX IS A SYSTEM THAT CAN BE UNDERSTOOD ONLY IN TERM OF ITS
            INPUTS AND OUTPUTS, BUT WHICH PROCESS IS NOT ACCESSIBLE OR EVEN
            VISIBLE TO USERS.
          </h3>
        </div>
      ) : (
        <div className="flex items-center gap-28 ">
          <div className="flex flex-col gap-20 justify-center items-center w-96">
            <h1>DE-BLACKBOXING</h1>
            <Image
              priority
              src={openBox}
              height={300}
              width={300}
              alt={title}
            />
            <h3>
              TO DE-BLACKBOX IS TO SHORTEN THE GAP BETWEEN TOOL USER AND THEIR
              TOOLS FOR REPRESENTATION.
            </h3>
          </div>
        </div>
      )}
    </main>
  );
}
