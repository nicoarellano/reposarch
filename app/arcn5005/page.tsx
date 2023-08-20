"use client";
import { useEffect, useContext } from "react";
import Image from "next/image";
import { slides } from "../../lib/arcn5005/MainSlides";
import { SlidesContext } from "@/middleware/Slides/context";

export default function Arcn5005() {
  const photo = "/images/osarchrep.png";
  const title = "osarchrep";
  // const slidesDispatch = useContext(SlidesContext)["dispatch"];

  // useEffect(() => {
  //   slidesDispatch({
  //     type: "SET_SLIDES",
  //     payload: { slides },
  //   });
  // }, [slides]);

  return (
    <section className=" flex flex-col items-center justify-center ">
      <h3>
        <em>
          AKA Open source digital tools for <b>Architects</b>
        </em>
      </h3>
      <Image priority src={photo} height={500} width={500} alt={title} />
    </section>
  );
}
