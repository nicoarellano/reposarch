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
            ? "bg-gray-100 text-gray-900"
            : "bg-gray-900 text-gray-100"
        }`}
      >
        {children}
      </main>
    </ThemeProvider>
  );
}
