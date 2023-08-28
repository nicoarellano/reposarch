"use client";
import { classListf2023 } from "../(classList)/classList";
import { Header } from "../../../../../components/Header";
import { useParams } from "next/navigation";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import ReturnButton from "../../../../../components/Common/ReturnButton";

export default function NestedTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams();
  const router = useRouter();

  const student = classListf2023.find(
    (student) => student.username === params.username
  );
  console.log(student);
  return (
    <main className="flex flex-col w-screen h-screen justify-between">
      <nav className="top-0 flex flex-row w-screen h-24 ">
        <Header
          title={`${
            student
              ? `${student.firstName} ${student.lastName}`
              : "Unregistered Student"
          } ${params.assignments ? `- ${params.assignments} assignment` : ""}`}
        />
      </nav>
      {Boolean(student) ? (
        <section className="flex justify-center grow">{children}</section>
      ) : (
        <section className="flex justify-center grow items-center">
          <ReturnButton />
        </section>
      )}
    </main>
  );
}
