"use client";
import { FC } from "react";

interface Props {
  params: { username: string };
}

const page: FC<Props> = ({ params }) => {
  return (
    <iframe
      src={`/arcn5005/f2023/students/${params.username}/map/index.html`}
      className="grow z-0"
    />
  );
};

export default page;
