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
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className} suppressHydrationWarning={true}>
        <main className="bg-slate-100">{children}</main>
      </body>
    </html>
  );
}
