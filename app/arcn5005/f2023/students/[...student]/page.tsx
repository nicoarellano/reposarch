import { ReactElement } from "react";
import StudentIframe from "../../../../../students/StudentIframe";

interface Props {
  params: { student: string };
}

export default function Page({ params }): ReactElement<Props> {
  const username = params.student[0];
  const assignment = params.student[1];

  return (
    <section className="flex items-center justify-center w-full flex-col gap-8">
      {Boolean(assignment) ? (
        <section className="flex w-full items-center justify-center flex-col gap-8">
          <StudentIframe username={username} assignment={assignment} />
        </section>
      ) : (
        <div className="flex flex-col justify-center items-center w-full h-full ">
          <div className="h-full w-full">
            <iframe
              src={`/arcn5005/f2023/students/${username}/index.html`}
              className="grow h-full w-full overflow-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
}
