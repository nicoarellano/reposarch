"use client";

import NestedParentList from "@/components/Common/LecturesNestedList";
import { arcn5005Lectures } from "../../(lectures)/arcn5005Lectures";

export default function TOC() {
  return (
    <div className=" flex items-center justify-center grow">
      <NestedParentList
        list={arcn5005Lectures}
        title="Course Schedule (date)"
      />
    </div>
  );
}
