import Image from "next/image";

import EastRoundedIcon from "@mui/icons-material/EastRounded";
import WestRoundedIcon from "@mui/icons-material/WestRounded";

import Community from "@mui/icons-material/Diversity3Rounded";
import Learn from "@mui/icons-material/SchoolRounded";
import Educate from "@mui/icons-material/RecordVoiceOverRounded";
import Code from "@mui/icons-material/CodeRounded";

import Link from "next/link";

export default function Home() {
  const openBox = "/images/openBox.png";
  return (
    <main className="flex-col flex justify-center items-center w-full h-full">
      <div className="flex items-center gap-28 ">
        {/* <Image priority src={education} height={300} width={300} } /> */}
        <Link href={"/arcn5005"}>
          <div className="flex flex-col gap-20 justify-center items-center">
            <h1>LEARN</h1>
            <Learn fontSize="large" style={{ scale: 5 }} />
            <h1>EDUCATE</h1>
            <Educate fontSize="large" style={{ scale: 5 }} />
          </div>
        </Link>
        <WestRoundedIcon fontSize="large" />
        <div className="flex flex-col gap-20 justify-center items-center w-96">
          <h1>DE-BLACKBOXING</h1>
          <Image priority src={openBox} height={300} width={300} />
        </div>
        <EastRoundedIcon fontSize="large" />
        <Link href={"https://cdt.vercel.app/carleton"}>
          <div className="flex flex-col gap-20 justify-center items-center">
            <h1>BUILD</h1>
            <Code fontSize="large" style={{ scale: 5 }} />
            <h1>ENGAGE</h1>
            <Community fontSize="large" style={{ scale: 5 }} />
          </div>
        </Link>
        {/* <Image priority src={comunity} height={300} width={300}  /> */}
      </div>
    </main>
  );
}
