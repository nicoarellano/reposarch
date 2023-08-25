"use client";

import ListWithIcon from "../../../../components/Common/ListWithIcon";
import LinkIcon from "@mui/icons-material/InsertLinkRounded";
import { Slides } from "../../../../types/types";

export default function TOC() {
  const bibliography: Slides = [
    { title: "Mario Carpo", id: "" },
    { title: "Eric Raymond", id: "" },
  ];
  return (
    <div className=" flex items-center justify-center grow">
      <ListWithIcon
        list={bibliography ? bibliography : []}
        icon={<LinkIcon />}
        subheader="Books:"
      />
    </div>
  );
}
