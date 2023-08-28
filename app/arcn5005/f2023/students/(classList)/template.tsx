"use client";
import { Header } from "../../../../../components/Header";

export default function NestedTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col w-screen h-screen justify-between">
      <nav className="top-0 flex flex-row w-screen h-24 ">
        <Header title={"Arcn 5005 - Fall 2023 - Students"} />
      </nav>
      <section className="flex justify-center grow">{children}</section>
    </main>
  );
}
