"use client";
import Image from "next/image";
import Calendar from "../../../components/Common/Calendar";
import ProgressPage from "../../../components/Progress";
import CalendarLegend from "./calendar/calendarLegend";

import useMediaQuery from "@mui/material/useMediaQuery";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Button, IconButton } from "@mui/material";

export default function Arcn5005() {
  const photo = "/images/reposarch.png";
  const title = "reposarch";
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <section className=" flex flex-col items-center justify-between w-full m-5">
      <section
        className={
          isMobile ? "" : "grid grid-cols-3 uneven-grid divide-x gap-5"
        }
      >
        <div className=" flex items-center justify-center ">
          <ProgressPage />
        </div>
        <div
          className={
            isMobile ? "hidden" : "flex items-center justify-center flex-col"
          }
        >
          <h3 className="text-center">
            <em>
              Open source digital tools for <b>Architects</b>
            </em>
          </h3>
          <Image priority src={photo} height={400} width={350} alt={title} />
          <Button
            className="px-5"
            aria-label="Go To Github"
            href={"https://github.com/nicoarellano/reposarch"}
            color="inherit"
          >
            <GitHubIcon /> &nbsp; Go To Github
          </Button>
        </div>
        <div className=" flex items-center justify-center flex-col">
          <Calendar />
          {!isMobile && <CalendarLegend />}
        </div>
      </section>
    </section>
  );
}
