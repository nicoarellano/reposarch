"use client";
import Image from "next/image";

export default function Arcn5005() {
  const photo = "/images/osarchrep.png";
  const title = "osarchrep";
  return (
    <section className=" flex flex-col items-center justify-center ">
      <h3>
        <em>
          Open source digital tools for <b>Architects</b>
        </em>
      </h3>
      <Image priority src={photo} height={500} width={500} alt={title} />
    </section>
  );
}
