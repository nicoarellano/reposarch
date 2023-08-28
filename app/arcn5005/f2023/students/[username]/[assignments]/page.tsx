"use client";
import { FC } from "react";

interface Props {
  params: { username: string; assignments: string };
}

const page: FC<Props> = ({ params }) => {
  const path = `/index.html`;

  return (
    <iframe
      src={`/arcn5005/f2023/students/${params.username}/${params.assignments}/index.html`}
      className="grow"
    />
  );
};

export default page;
