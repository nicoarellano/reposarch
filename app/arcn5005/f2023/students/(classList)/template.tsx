"use client";
import { Header } from "../../../../../components/Header";

export default function NestedTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col w-fit h-fit justify-between">
      <nav className="top-0 flex flex-row w-full h-24 ">
        <Header title={"Arcn 5005 - Fall 2023 - Students"} />
      </nav>
      <section className="flex justify-center grow">{children}</section>
    </main>
  );
}
