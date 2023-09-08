"use client";
import Image from "next/image";
import Calendar from "../../../components/Common/Calendar";
import ProgressPage from "../../../components/Progress";
import CalendarLegend from "./calendar/calendarLegend";

export default function Arcn5005() {
  const photo = "/images/reposarch.png";
  const title = "reposarch";
  return (
    <section className=" flex flex-col items-center justify-between w-11/12 gap-5">
      <section className=" grid grid-cols-3 divide-x grow">
        <div className="flex items-center justify-center ">
          <ProgressPage />
        </div>
        <div className="flex items-center justify-center flex-col">
          <h3 className="text-center">
            <em>
              Open source digital tools for <b>Architects</b>
            </em>
          </h3>
          <Image priority src={photo} height={400} width={350} alt={title} />
        </div>
        <div className="flex items-center justify-center flex-col">
          <Calendar />
          <CalendarLegend />
        </div>
      </section>
    </section>
  );
}
