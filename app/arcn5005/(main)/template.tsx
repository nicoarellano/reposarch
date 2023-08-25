"use client";

import { Footer } from "../../../components/Footer";
import Header from "../../../components/Header";
import { slides } from "../../slides";

export default function NestedTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col w-screen h-screen justify-between">
      <nav className="top-0 flex flex-row w-screen h-24 ">
        <Header slides={slides} />
      </nav>
      <section className="flex justify-center grow">{children}</section>
      <nav className="w-screen flex h-16 items-center">
        <Footer slides={slides} />
      </nav>
    </main>
  );
}
