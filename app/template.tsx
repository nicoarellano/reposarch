"use client";

import { useContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { ThemeContext } from "../middleware/Theme/context";

export default function Template({ children }: { children: React.ReactNode }) {
  const { mode } = useContext(ThemeContext)["state"]["theme"];
  const theme = createTheme({ palette: { mode } });

  return (
    <ThemeProvider theme={theme}>
      <main
        className={`absolute flex flex-col min-h-full justify-between overflow-x-hidden ${
          mode === "light" ? "bg-light text-dark" : "bg-dark text-light"
        }`}
      >
        {children}
      </main>
    </ThemeProvider>
  );
}
