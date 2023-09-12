import { ReactElement } from "react";

interface Props {
  emoji: string;
  title: string;
}

export default function Quote({ quote, author }): ReactElement<Props> {
  return (
    <h4>
      <em>{quote}</em>
      <h5>
        <br />
        <em>{author}</em>
      </h5>
    </h4>
  );
}
