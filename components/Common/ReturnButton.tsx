"use client";

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function ReturnButton() {
  const router = useRouter();
  return (
    <Button
      size="large"
      color="inherit"
      variant="outlined"
      onClick={() => router.back()}
    >
      CLICK HERE TO RETURN
    </Button>
  );
}
