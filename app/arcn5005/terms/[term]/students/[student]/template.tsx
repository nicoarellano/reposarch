"use client";

import { classListf2023 } from "../(classListF2023)/classList";
import { IconButton } from "@mui/material";
import { useRouter, useParams } from "next/navigation";
import Avatar from "@mui/material/Avatar";
import { Header } from "@/components/Header";
import ReturnButton from "@/components/Common/ReturnButton";

export default function NestedTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams<{
    student: string;
    assignment: string;
    term: string;
  }>();

  const router = useRouter();

  const { student, term } = params;

  return (
    <main className="flex flex-col w-screen h-screen ">
      {Boolean(student || term) ? (
        <section className="flex justify-center w-full h-full ">
          {children}
        </section>
      ) : (
        <section className="flex justify-center items-center w-full">
          <ReturnButton />
        </section>
      )}
      {
        <footer className="m-4 flex flex-row absolute z-20 bottom-0 right-0">
          <IconButton onClick={() => router.back()} title={"Back"}>
            <Avatar
              src={`/arcn5005/terms/${term}/students/${student}/avatar.jpg`}
              sx={{ width: 45, height: 45 }}
            />
          </IconButton>
        </footer>
      }
    </main>
  );
}
