"use client";

import Calendar from "../../../../components/Common/Calendar";

export default function CourseCalendar() {
  return (
    <section className="grow flex items-center">
      <Calendar />
      <ul className="border-2 p-3 absolute left-8  scale-90">
        <li>🔵 Lectures and Labs</li>
        <li>🔴 Assignments</li>
        <li>🏁 Final Assignment</li>
        <li>🟡 Quizes</li>
        <li>✖️ Break</li>
      </ul>
    </section>
  );
}
