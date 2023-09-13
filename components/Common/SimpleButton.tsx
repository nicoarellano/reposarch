"use client";

import { Button } from "@mui/material";
import { ReactElement } from "react";

interface Props {
  title: string;
  href: string;
}

export default function SimpleButton({ title, href }): ReactElement<Props> {
  return (
    <Button size="large" color="inherit" variant="outlined" href={href}>
      {title}
    </Button>
  );
}
