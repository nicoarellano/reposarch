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
    (student) => student.username === params.student[0]
  );

  const username = params.student[0];
  const assignment = params.student[1];
  return (
    <main className="flex flex-col w-screen h-screen ">
      <nav className="top-0 flex flex-row w-full h-24 ">
        <Header
          title={`${
            student
              ? `${student.firstName} ${student.lastName}`
              : "Unregistered Student"
          } ${params.assignments ? `- ${params.assignments} assignment` : ""}`}
        />
      </nav>
      {Boolean(student || assignment) ? (
        <section className="flex justify-center w-full h-full">
          {children}
        </section>
      ) : (
        <section className="flex justify-center items-center w-full">
          <ReturnButton />
        </section>
      )}
      <footer className="m-4 flex flex-row absolute z-20 bottom-0 right-0">
        <IconButton onClick={() => router.back()} title={"Back"}>
          <Avatar
            src={`/arcn5005/f2023/students/${username}/avatar.jpg`}
            sx={{ width: 45, height: 45 }}
          />
        </IconButton>
      </footer>
    </main>
  );
}
