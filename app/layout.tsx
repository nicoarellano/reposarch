import "./styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppProvider } from "../middleware/CombineProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Open Source Architectural Representation",
  description: "Open Source Architectural Representation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </head>
      <AppProvider>
        <body
          className={inter.className + "overflow-hidden w-screen h-screen grow"}
          suppressHydrationWarning={true}
        >
          {children}
        </body>
      </AppProvider>
    </html>
  );
}
