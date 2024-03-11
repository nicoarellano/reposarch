"use client";
import * as React from "react";
import Image from "../../../components/Common/Image";
import EducateIcon from "@mui/icons-material/RecordVoiceOverRounded";
import { useRouter } from "next/navigation";
import Arcn5005 from "../../arcn5005/(main)/page";

export default function Educate() {
  const [clicked, setClicked] = React.useState(false);

  const router = useRouter();

  const handleClick = () => setClicked(true);
  return (
    <>
      {!clicked ? (
        <section className="flex flex-col justify-center items-center w-full h-3/4">
          <div onClick={handleClick} className="cursor-pointer">
            <EducateIcon fontSize="large" style={{ scale: 8 }} />
          </div>
        </section>
      ) : (
        <Arcn5005 />
      )}
    </>
  );
}
