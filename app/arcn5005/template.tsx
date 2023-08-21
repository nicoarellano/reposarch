"use client";

import Header from "@/components/Header";
import { AppProvider } from "@/middleware/CombineProviders";

import Footer from "@/components/Footer";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col w-screen h-screen bg-slate-100 justify-between">
      <AppProvider>
        <nav className="top-0 flex flex-row w-screen h-24 ">
          <Header />
        </nav>
        <section className="flex justify-center grow">{children}</section>
        <nav className="w-screen flex h-16 items-center">
          <Footer />
        </nav>
      </AppProvider>
    </main>
  );
}
