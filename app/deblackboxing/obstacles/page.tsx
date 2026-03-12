import Image from "next/image";

import WestIcon from "@mui/icons-material/WestRounded";
import EastIcon from "@mui/icons-material/EastRounded";
import Obstacles from "@mui/icons-material/BlockRounded";

import Link from "next/link";

export default function Home() {
  const blackBox = "/images/blackBox.png";
  const proprietary = "/images/defence/proprietaryBoxes.png";
  const interfaces = "/images/defence/interaction.png";

  return (
    <section className="flex justify-center items-center w-full h-full">
      {/* 5 columns: content | arrow | content | arrow | content — 3 rows: title | subtitle | image */}
      <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-x-12 gap-y-6 items-center justify-items-center">
        {/* Row 1 — Titles */}
        <h1 className="text-center">OBLIVION</h1>
        <span />
        <span />
        <span />
        <h1 className="text-center">BLACK BOXES</h1>

        {/* Row 2 — Subtitles */}
        <h3 className="text-center">Passive acceptance of proprietary tools</h3>
        <span />
        <span />
        <span />
        <h3 className="text-center">Proprietary software and closed file formats</h3>

        {/* Row 3 — Images */}
        <Image
          priority
          src={interfaces}
          height={300}
          width={300}
          alt="Epistemic Object: The medium is the message - Marshall McLuhan"
        />
        <WestIcon fontSize="large" />
        <Image
          priority
          src={blackBox}
          height={300}
          width={300}
          alt="Epistemic Object: The medium is the message - Marshall McLuhan"
        />
        <EastIcon fontSize="large" />
        <Image
          priority
          src={proprietary}
          height={300}
          width={300}
          alt="Epistemic Object: The medium is the message - Marshall McLuhan"
        />
      </div>
    </section>
  );
}
