"use client";
import { FC } from "react";

interface Props {
  params: { username: string; assignments: string };
}

const page: FC<Props> = ({ params }) => {
  const path = `/index.html`;

  return (
    <div className="w-screen">
      {/* <h1>
        FINAL ASSIGNMENT OF: {params.username} {params.assignments}
      </h1> */}
      <iframe
        src={`/arcn5005/f2023/students/${params.username}/${params.assignments}/index.html`}
        className="grow w-full h-full"
      />
    </div>
  );
};

export default page;
