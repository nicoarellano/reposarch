"use client";
import { useRouter } from "next/navigation";
import CodeIcon from "@mui/icons-material/CodeRounded";
import IconButton from "@mui/material/IconButton";

export default function Template({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <main className="flex w-screen grow">
      {children}
      {/* <IconButton size="large" aria-label="See code">
        <CodeIcon />
      </IconButton> */}
    </main>
  );
}
