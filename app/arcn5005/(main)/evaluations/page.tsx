"use client";

import CustomizedTables from "../../../../components/Common/Table";
import { Arcn5005F2023Evaluations } from "./arcn5005F2023evaluations";

export default function Evaluations() {
  return (
    <section className=" flex items-center ">
      <CustomizedTables data={Arcn5005F2023Evaluations} />
    </section>
  );
}
