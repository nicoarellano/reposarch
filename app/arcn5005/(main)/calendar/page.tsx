"use client";

import Calendar from "../../../../components/Common/Calendar";

export default function CourseCalendar() {
  return (
    <section className="grow flex items-center ">
      <Calendar />
      <ul className="border-2 p-5 absolute left-8  scale-90 z-20 rounded-md shadow-md">
        <li>🔵 Lectures and Labs</li>
        <li>🔴 Assignments</li>
        <li>🏁 Final Assignment</li>
        <li>🟡 Quizzes</li>
        <li>✖️ Break</li>
      </ul>
    </section>
  );
}
