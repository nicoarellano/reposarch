import { ReactElement } from "react";
import ListWithIcon from "../../../../../components/Common/ListWithIcon";
import { Assignments } from "../../../assignments";
import LinkIcon from "@mui/icons-material/InsertLinkRounded";
import StudentIframe from "../../../../../students/StudentIframe";

interface Props {
  params: { student: string };
}

export default function Page({ params }): ReactElement<Props> {
  const username = params.student[0];
  const assignment = params.student[1];

  return (
    <section className="flex items-center justify-center w-1/2 flex-col gap-8">
      {Boolean(assignment) ? (
        <section className="flex w-screen items-center justify-center flex-col gap-8">
          <StudentIframe username={username} assignment={assignment} />
        </section>
      ) : (
        <div className="flex flex-col justify-center items-center h-fit">
          <div className="w-1/4 h-1/2">
            <ListWithIcon
              list={Assignments}
              subheader="Assignments"
              icon={<LinkIcon />}
            />
          </div>
          <div className="h-1/2">
            <iframe
              src={`/arcn5005/f2023/students/${username}/about.html`}
              className="grow h-[200px] w-screen"
            />
          </div>
        </div>
      )}
    </section>
  );
}
