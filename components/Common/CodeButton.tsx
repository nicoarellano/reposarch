"use client";

import { IconButton } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";

import { ReactElement } from "react";

interface Props {
  href: string;
}

export default function CodeButton({ href }): ReactElement<Props> {
  return (
    <div className="absolute bottom-20 w-11/12 h-11/12 flex justify-end pointer-events-none">
      <IconButton
        className="bg-white pointer-events-auto mx-5"
        aria-label="See code"
        href={href}
      >
        <CodeIcon />
      </IconButton>
    </div>
  );
}
