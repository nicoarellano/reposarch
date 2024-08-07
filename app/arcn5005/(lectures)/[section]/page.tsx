"use client";
import { redirect } from "next/navigation";

interface Props {
  params: { section: string };
}

export default function Section({ params }: Props) {
  const { section } = params;

  if (section && section.startsWith("week")) redirect(`${section}/1`);
}
