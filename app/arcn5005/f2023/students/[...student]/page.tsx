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
    <section className="flex items-center justify-center w-full flex-col gap-8">
      {Boolean(assignment) ? (
        <section className="flex w-full items-center justify-center flex-col gap-8">
          <StudentIframe username={username} assignment={assignment} />
        </section>
      ) : (
        <div className="flex flex-col justify-center items-center w-full h-full">
          {/* <div className="w-1/4 h-[360px] ">
            <ListWithIcon
              list={Assignments}
              subheader="Assignments"
              icon={<LinkIcon />}
            />
          </div> */}
          <div className="h-full w-full">
            <iframe
              src={`/arcn5005/f2023/students/${username}/about.html`}
              className="grow h-full w-full"
            />
          </div>
        </div>
      )}
    </section>
  );
}
