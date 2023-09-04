import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
      <body className={inter.className} suppressHydrationWarning={true}>
        <main className="bg-slate-100 w-screen m-0 max-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
