"use client";

import { classListf2023 } from "./classList";
import StudentsNestedList from "../../../../../components/Common/StudentsNestedList";

export default function WeekToc() {
  return (
    <div className=" flex flex-col items-center justify-center grow gap-8 mdx max-w-[80%]">
      <StudentsNestedList students={classListf2023} />
    </div>
  );
}
