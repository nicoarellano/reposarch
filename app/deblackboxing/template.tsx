"use client";

import { useContext } from "react";
import { ThemeContext } from "../../middleware/Theme/context";
import { HeaderOfSlide } from "../../components/Header";
import { SlidesFooter } from "../../components/Footer";
import { dbbSlides } from "./DbbSlides";

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
        <HeaderOfSlide slides={dbbSlides} />
      </header>
      <section className="top-24 flex justify-center items-center grow ">
        {children}
      </section>
      <footer
        className={`bottom-0 static w-full flex h-16 items-center z-50 ${
          mode === "light" ? "bg-light" : "bg-dark "
        }`}
      >
        <SlidesFooter slides={dbbSlides} />
      </footer>
    </main>
  );
}
