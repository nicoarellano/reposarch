"use client";

import { AppProvider } from "../middleware/CombineProviders";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col w-screen h-screen bg-slate-100 justify-between">
      <AppProvider>{children}</AppProvider>
    </main>
  );
}
