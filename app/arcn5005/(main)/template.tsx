"use client";

import { useContext } from "react";
import { SlidesFooter } from "@/components/Footer";
import { HeaderOfSlide } from "@/components/Header";
import { ThemeContext } from "@/middleware/Theme/context";
import { slides } from "./MainMenu";

export default function NestedTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const { mode } = useContext(ThemeContext)["state"]["theme"];
  return (
    <main className={`flex flex-col h-screen justify-between `}>
      <header
        className={`top-0 sticky h-24 w-full z-50 ${
          mode === "light" ? "bg-light" : "bg-dark "
        }`}
      >
        <HeaderOfSlide slides={slides} section="arcn" />
      </header>
      <section className="top-24 flex justify-center items-center grow ">
        {children}
      </section>
      <footer
        className={`bottom-0 static w-full flex h-16 items-center z-50 ${
          mode === "light" ? "bg-light" : "bg-dark "
        }`}
      >
        <SlidesFooter slides={slides} />
      </footer>
    </main>
  );
}
