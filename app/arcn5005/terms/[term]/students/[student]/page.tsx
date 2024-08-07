import { ReactElement } from "react";

interface Props {
  params: { student: string; assignment: string; term: string };
}

export default function Page({ params }): ReactElement<Props> {
  const { student, term } = params;

  const path = `/arcn5005/terms/${term}/students/${student}/index.html`;

  return (
    <section className="flex items-center justify-center w-full flex-col gap-8">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="h-full w-full">
          <iframe className="grow h-full w-full overflow-auto" src={path} />
        </div>
      </div>
    </section>
  );
}
