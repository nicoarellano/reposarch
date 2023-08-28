"use client";
import { classListf2023 } from "../(classList)/classList";
import { Header } from "../../../../../components/Header";
import { useParams } from "next/navigation";
import { IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import ReturnButton from "../../../../../components/Common/ReturnButton";
import Avatar from "@mui/material/Avatar";

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
      <footer className="m-4 flex flex-row-reverse absolute z-20 bottom-0 right-0">
        <IconButton onClick={() => router.back()} title={"Back"}>
          <Avatar
            src={`/arcn5005/f2023/students/${params.username}/avatar.jpg`}
            sx={{ width: 45, height: 45 }}
          />
        </IconButton>
      </footer>
    </main>
  );
}
