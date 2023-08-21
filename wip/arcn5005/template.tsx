import Footer from "@/components/Footer/old";
import Header from "@/components/Header";
import { AppProvider } from "@/middleware/CombineProviders";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <main className="absolute flex flex-col h-screen w-screen bg-slate-100 content-between justify-between left-0">
      <AppProvider>
        <nav>
          <Header />
        </nav>
        <section className="flex content-center items-center justify-center left-0">
          {children}
        </section>
        <nav>
          <Footer />
        </nav>
      </AppProvider>
    </main>
  );
}
