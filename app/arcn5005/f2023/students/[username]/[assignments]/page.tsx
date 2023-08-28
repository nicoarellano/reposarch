"use client";
import { FC } from "react";

interface Props {
  params: { username: string; assignments: string };
}

const page: FC<Props> = ({ params }) => {
  return (
    <iframe
      src={`/arcn5005/f2023/students/${params.username}/${params.assignments}/index.html`}
      className="grow"
    />
  );
};

export default page;
