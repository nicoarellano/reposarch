"use client";

import Calendar from "../../../../components/Common/Calendar";
import CalendarLegend from "./calendarLegend";

export default function CourseCalendar() {
  return (
    <section className="grow flex items-center ">
      <Calendar />
      <CalendarLegend />
    </section>
  );
}
