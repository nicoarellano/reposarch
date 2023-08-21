"use client";

import NestedParentList from "../../../../components/Common/nestedParentList";
import { arcn5005Classes } from "../../../../lib/arcn5005/classes";

export default function TOC() {
  return (
    <div className=" flex items-center justify-center grow">
      <NestedParentList list={arcn5005Classes} />
    </div>
  );
}
