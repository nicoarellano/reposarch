import { ReactElement } from "react";

interface Props {
  quote: string;
  author: string;
}

export default function Quote({ quote, author }): ReactElement<Props> {
  console.log(`%c QUOTE: "${quote}"`, "font-size: 35px; color: #00f");
  return (
    <div>
      <h4>
        <em>{quote}</em>
      </h4>
      <h5>
        <br />
        <em>{author}</em>
      </h5>
    </div>
  );
}
