import { ReactElement } from "react";

interface Props {
  src: string;
  width?: string;
  height?: string;
}

export default function PdfViewer({
  src,
  width = "100%",
  height = "100%",
}): ReactElement<Props> {
  return (
    <embed
      src={src}
      width={width}
      height={height}
      type="application/pdf"
    ></embed>
  );
}
