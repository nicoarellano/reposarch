"use client";
import { ReactElement } from "react";

interface Props {
  params: { username: string; assignments: string };
}

export default function Page({ params }): ReactElement<Props> {
  return (
    <section className="flex w-screen items-center justify-center flex-col gap-8">
      <iframe
        src={`/arcn5005/f2023/students/${params.username}/${params.assignments}/index.html`}
        className="grow z-0 w-screen"
      />
    </section>
  );
}
