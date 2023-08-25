"use client";

import { usePathname } from "next/navigation";
import { MiddlewareFooter } from "../../../components/Footer";
import Header from "../../../components/Header";
import { weeks } from "./arcn5005Weeks";
import { Slide } from "../../../types/types";
import { arcn5005Lectures } from "../../arcn5005Lectures";

export default function NestedTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  const endPath: string = path.split("/").reverse()[0];

  const week = weeks[endPath];

  return (
    <main className="flex flex-col w-screen h-screen justify-between">
      <nav className="top-0 flex flex-row w-screen h-24 ">
        <Header slides={arcn5005Lectures} />
      </nav>
      <section className="flex justify-center grow">{children}</section>
      <nav className="w-screen flex h-16 items-center">
        <MiddlewareFooter />
      </nav>
    </main>
  );
}
