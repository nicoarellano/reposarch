import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Open Source Architecture Representation",
  description: "Open Source Architecture Representation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="inter.className absolute flex flex-col min-w-full h-screen bg-slate-100 content-between justify-between right-0">
        {children}
      </body>
    </html>
  );
}
