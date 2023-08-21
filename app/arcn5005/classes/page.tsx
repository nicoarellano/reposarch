"use client";

import NestedParentList from "../../../components/Common/nestedParentList";
import { arcn5005Classes } from "../../../public/arcn5005/allClasses";

export default function TOC() {
  return (
    <div className=" flex items-center justify-center grow">
      <NestedParentList list={arcn5005Classes} />
    </div>
  );
}
