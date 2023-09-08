"use client";

import { useContext } from "react";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";

import { ThemeContext } from "../middleware/Theme/context";

export default function Template({ children }: { children: React.ReactNode }) {
  const theme = useTheme();

  const { mode } = useContext(ThemeContext)["state"]["theme"];
  const darkTheme = createTheme({ palette: { mode } });

  return (
    <ThemeProvider theme={darkTheme}>
      <main
        className={`flex flex-col w-screen h-screen justify-between ${
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
