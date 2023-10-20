import { ReactElement } from "react";

interface Props {
  src: string;
}

export default function AudioPlayer({ src }): ReactElement<Props> {
  return (
    <div className="mt-5 flex items-center font-medium text-white">
      <audio
        className="ml-5 text-white border-none rounded-md p-2 shadow-md"
        controls
        loop
        autoPlay
      >
        <source src={src} type="audio/mpeg" />
      </audio>
    </div>
  );
}
