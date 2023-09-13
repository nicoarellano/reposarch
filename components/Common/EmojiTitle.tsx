import { ReactElement } from "react";

interface Props {
  emoji: string;
  title: string;
}

export default function EmojiTitle({ emoji, title }): ReactElement<Props> {
  return (
    <>
      <h1>{emoji}</h1>
      <br />
      <h2>{title}</h2>
    </>
  );
}
