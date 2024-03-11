"use client";
import * as React from "react";
import Image from "../../../components/Common/Image";
import LearnIcon from "@mui/icons-material/SchoolRounded";

export default function Learn() {
  const [clicked, setClicked] = React.useState(false);

  const handleClick = () => setClicked(true);
  return (
    <>
      {!clicked ? (
        <section className="flex flex-col justify-center items-center w-full h-3/4">
          <div onClick={handleClick} className="cursor-pointer">
            <LearnIcon fontSize="large" style={{ scale: 8 }} />
          </div>
        </section>
      ) : (
        <section className="flex flex-col justify-start items-center w-full h-3/4 absolute">
          <Image src="/images/deblackboxing/toolbox.png" alt="New toolbox" />
        </section>
      )}
    </>
  );
}
