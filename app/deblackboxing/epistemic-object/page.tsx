import Image from "next/image";

import WestIcon from "@mui/icons-material/WestRounded";
import EastIcon from "@mui/icons-material/EastRounded";

import Link from "next/link";

export default function Home() {
  const openBox = "/images/openBox.png";
  const cdt = "/images/cdt/cdt-logo-stroke.png";
  const reposarch = "/images/reposarch.png";

  return (
    <section className="flex-col flex justify-center items-center w-full h-full">
      <div className="flex items-center gap-20 ">
        <div className="flex flex-col gap-20 justify-center items-center">
          <div className="flex flex-col gap-4 justify-center items-center">
            <h1>REPOSARCH</h1>
            <h3>Teaching open-source toolmaking for architects</h3>
          </div>
          <Link href={"/arcn5005/defence-edu/1"}>
            <Image
              priority
              src={reposarch}
              height={300}
              width={300}
              alt="Epistemic Object: The medium is the message - Marshall McLuhan" //https://en.wikipedia.org/wiki/The_medium_is_the_message
            />
          </Link>
        </div>
        <div className="flex flex-col gap-12">
          <WestIcon fontSize="large" />
        </div>
        <div className="flex flex-col gap-20 justify-center items-center w-96">
          <h1>DEBLACKBOXING</h1>
          <Image
            priority
            src={openBox}
            height={300}
            width={300}
            alt="Epistemic Object: The medium is the message - Marshall McLuhan" //https://en.wikipedia.org/wiki/The_medium_is_the_message
          />
        </div>
        <div className="flex flex-col gap-12">
          <EastIcon fontSize="large" />
        </div>
        <div className="flex flex-col gap-20 justify-center items-center">
          <div className="flex flex-col gap-4 justify-center items-center">
            <h1>CDT</h1>
            <h3>Developing a BIM/GIS Open-Source Tool</h3>
          </div>
          <Link href={"/arcn5005/defence-dev/1"}>
            <Image
              priority
              src={cdt}
              height={300}
              width={300}
              alt="Epistemic Object: The medium is the message - Marshall McLuhan" //https://en.wikipedia.org/wiki/The_medium_is_the_message
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
