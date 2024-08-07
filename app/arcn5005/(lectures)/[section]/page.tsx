"use client";
import Image from "next/image";
import Calendar from "@/components/Common/Calendar";
import ProgressPage from "@/components/Progress";
import CalendarLegend from "@/app/arcn5005/(main)/calendar/calendarLegend";

import useMediaQuery from "@mui/material/useMediaQuery";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Button } from "@mui/material";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ReactElement } from "react";

interface Props {
  params: { section: string };
}

export default function Section({ params }: Props) {
  const { section } = params;

  if (section && section.startsWith("week")) redirect(`${section}/1`);
}
