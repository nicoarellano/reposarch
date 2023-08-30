"use client";

import Calendar from "../../../../components/Common/Calendar";
import CalendarLegend from "./calendarLegend";

export default function CourseCalendar() {
  return (
    <section className="grow flex items-center ">
      <Calendar />
      <div className="absolute m-8">
        <CalendarLegend />
      </div>
    </section>
  );
}
