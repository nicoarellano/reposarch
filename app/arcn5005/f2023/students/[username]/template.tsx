"use client";
import { Header } from "../../../../../components/Header";
import { useParams } from "next/navigation";

export default function NestedTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams();

  console.log(params);
  return (
    <main className="flex flex-col w-screen h-screen justify-between">
      <nav className="top-0 flex flex-row w-screen h-24 ">
        <Header title={`${params.username} - ${params.assignments}`} />
      </nav>
      <section className="flex justify-center grow">{children}</section>
    </main>
  );
}
