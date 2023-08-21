"use client";

import Footer from "../../../components/Footer";

import Header from "../../../components/Header";
import { weekSlides } from "../../../public/arcn5005/weekSlides";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col w-screen h-screen bg-red-500 justify-between">
      <nav className="top-0 flex flex-row w-screen h-24 ">
        <Header />
      </nav>
      <section className="flex justify-center grow">{children}</section>
      <nav className="w-screen flex h-16 items-center">
        <Footer slides={weekSlides} />
      </nav>
    </main>
  );
}
