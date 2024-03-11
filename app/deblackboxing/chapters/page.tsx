"use client";

import NestedParentList from "../../../components/Common/LecturesNestedList";
import { chapters } from "./chapters";

export default function Chapters() {
  return (
    <div className=" flex items-center justify-center grow">
      <NestedParentList list={chapters} title="Disertation chapters" />
    </div>
  );
}
