import Image from "next/image";

import WestIcon from "@mui/icons-material/WestRounded";
import EastIcon from "@mui/icons-material/EastRounded";

import Link from "next/link";

export default function Home() {
  const openBox = "/images/openBox.png";
  const cdt = "/images/cdt/canada-logo.png";
  const reposarch = "/images/reposarch.png";

  return (
    <section className="flex justify-center items-center w-full h-full">
      {/* 5 columns: content | arrow | content | arrow | content — 3 rows: title | subtitle | image */}
      <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-x-12 gap-y-6 items-center justify-items-center">
        {/* Row 1 — Titles */}
        <h1 className="text-center">REPOSARCH</h1>
        <span />
        <h1 className="text-center">DEBLACKBOXING</h1>
        <span />
        <h1 className="text-center">CDT</h1>

        {/* Row 2 — Subtitles */}
        <h3 className="text-center">Teaching open-source toolmaking for architects</h3>
        <span />
        <span />
        <span />
        <h3 className="text-center">Developing a BIM/GIS Open-Source Tool</h3>

        {/* Row 3 — Images */}
        <Link href={"/arcn5005/defence-edu/2"} className="transition-transform duration-200 hover:scale-110">
          <Image
            priority
            src={reposarch}
            height={300}
            width={300}
            alt="Education"
          />
        </Link>
        <WestIcon fontSize="large" />
        <Image
          priority
          src={openBox}
          height={300}
          width={300}
          alt="Epistemic Object"
        />
        <EastIcon fontSize="large" />
        <Link href={"/arcn5005/defence-dev/2"} className="transition-transform duration-200 hover:scale-110">
          <Image
            priority
            src={cdt}
            height={300}
            width={300}
            alt="Canada’s Digital Twin"
          />
        </Link>
      </div>
    </section>
  );
}
