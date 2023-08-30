"use client";
import Image from "next/image";
import Calendar from "../../../components/Common/Calendar";
import ProgressPage from "../../../components/Progress";
import CalendarLegend from "./calendar/calendarLegend";

export default function Arcn5005() {
  const photo = "/images/osarchrep.png";
  const title = "osarchrep";
  return (
    <section className=" flex flex-col items-center justify-between w-screen gap-5">
      <h4>
        <em>
          Open source digital tools for <b>Architects</b>
        </em>
      </h4>
      <section className="w-screen grid grid-cols-3 divide-x grow max-h-full overflow-x-auto">
        <div className="flex items-center justify-center">
          <ProgressPage />
        </div>
        <div className="flex items-center justify-center">
          <Image priority src={photo} height={400} width={400} alt={title} />
        </div>
        <div className="flex items-center justify-center flex-col">
          <Calendar />
          <CalendarLegend />
        </div>
      </section>
    </section>
  );
}
