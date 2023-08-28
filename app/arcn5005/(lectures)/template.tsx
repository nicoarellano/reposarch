"use client";

import { usePathname } from "next/navigation";
import { MiddlewareFooter } from "../../../components/Footer";
import { HeaderOfSlide } from "../../../components/Header";
import { arcn5005Lectures } from "../../arcn5005Lectures";

export default function NestedTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col w-screen h-screen justify-between">
      <nav className="top-0 flex flex-row w-screen h-24 ">
        <HeaderOfSlide slides={arcn5005Lectures} />
      </nav>
      <section className="flex justify-center grow">{children}</section>
      <nav className="w-screen flex h-16 items-center">
        <MiddlewareFooter />
      </nav>
    </main>
  );
}
