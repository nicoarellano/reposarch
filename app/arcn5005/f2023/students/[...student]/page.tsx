import { ReactElement } from "react";
import ListWithIcon from "../../../../../components/Common/ListWithIcon";
import { Assignments } from "../../../assignments";
import LinkIcon from "@mui/icons-material/InsertLinkRounded";

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
          <iframe
            src={`/arcn5005/f2023/students/${username}/${assignment}/index.html`}
            className="grow h-[550px] w-screen"
          />
        </section>
      ) : (
        <ListWithIcon
          list={Assignments}
          subheader="Assignments"
          icon={<LinkIcon />}
        />
      )}
    </section>
  );
}
