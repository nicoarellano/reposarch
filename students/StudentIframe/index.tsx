import { ReactElement } from "react";

interface Props {
  username: string;
  assignment: string;
}

export default function StudentIframe({
  username,
  assignment,
}): ReactElement<Props> {
  return (
    <iframe
      src={`/arcn5005/terms/f2023/students/${username}/${assignment}/index.html`}
      className="grow h-[550px] w-full"
    />
  );
}
