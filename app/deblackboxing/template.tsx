// "use client";

import { useContext } from "react";
import { ThemeContext } from "../../middleware/Theme/context";
import { HeaderOfSlide } from "../../components/Header";
import { SlidesFooter } from "../../components/Footer";
import { dbbSlides } from "./DbbSlides";

interface Props {
  children: React.ReactNode;
  params: { section: string };
  searchParams: { mode: string };
}

export default function NestedTemplate({
  children,
  params,
  searchParams,
}: Props) {
  console.log(params, searchParams);
  // const { mode } = useContext(ThemeContext)["state"]["theme"];
  const mode = "light";
  return (
    <main className={`flex flex-col h-screen justify-between `}>
      <header
        className={`top-0 sticky h-24 w-full z-50 ${
          mode === "light" ? "bg-light" : "bg-dark "
        }`}
      >
        <HeaderOfSlide slides={dbbSlides} section="deblackboxing" />
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
