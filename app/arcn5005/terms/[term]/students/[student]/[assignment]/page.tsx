import { ReactElement } from "react";

interface Props {
  params: { student: string; assignment: string; term: string };
}

export default function Page({ params }): ReactElement<Props> {
  const { student, assignment, term } = params;

  const path = `/arcn5005/terms/${term}/students/${student}/${assignment}/index.html`;

  return (
    <section className="flex items-center justify-center w-full h-[100%] flex-col gap-8">
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <iframe src={path} className="grow h-full w-full overflow-auto" />
      </div>
    </section>
  );
}
