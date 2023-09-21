import { ReactElement } from "react";

interface Props {
  emoji: string;
  title: string | JSX.Element;
}

export default function EmojiTitle({ emoji, title }): ReactElement<Props> {
  console.log(
    `%c Title: ==================================`,
    "color: red; font-size: 30px"
  );
  console.log(`%c "${JSON.stringify(title)}"`, "font-size: 35px; color: #00f");
  return (
    <>
      <h1>{emoji}</h1>
      <br />
      {typeof title === typeof "" ? <h2>{title}</h2> : title}
    </>
  );
}
