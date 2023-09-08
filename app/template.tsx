"use client";

import { useContext } from "react";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";

import { ThemeContext } from "../middleware/Theme/context";

export default function Template({ children }: { children: React.ReactNode }) {
  const { mode } = useContext(ThemeContext)["state"]["theme"];
  const theme = createTheme({ palette: { mode } });

  return (
    <ThemeProvider theme={theme}>
      <main
        className={`absolute flex flex-col min-h-full justify-between overflow-hidden ${
          mode === "light"
            ? "bg-slate-100 text-black"
            : "bg-slate-900 text-white"
        }`}
      >
        {children}
      </main>
    </ThemeProvider>
  );
}
