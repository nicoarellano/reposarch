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
        src={
          "https://github.com/nicoarellano/osarchrep/blob/classes/public/students/f2023/nicolasarellanorisop/map/index.html"
        }
        className="grow w-full h-full"
      />
    </div>
  );
};

export default page;
