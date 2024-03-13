"use client";
import * as React from "react";
import Image from "../../../components/Common/Image";
import CommunityIcon from "@mui/icons-material/Diversity3Rounded";

export default function Engage() {
  const [clicked, setClicked] = React.useState(false);

  const handleClick = () => setClicked(true);
  return (
    <>
      {!clicked ? (
        <section className="flex flex-col justify-center items-center w-full h-3/4">
          <div onClick={handleClick} className="cursor-pointer">
            <CommunityIcon fontSize="large" style={{ scale: 8 }} />
          </div>
        </section>
      ) : (
        <section className="flex flex-col justify-start items-center w-full h-3/4 absolute">
          <Image
            src="/images/osarch/osarch-software.png"
            alt="Osarch software"
            href="/arcn5005/week06/5"
          />
        </section>
      )}
    </>
  );
}
