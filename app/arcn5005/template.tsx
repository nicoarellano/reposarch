import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { slides } from "@/lib/arcn5005/MainSlides";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <main className="absolute flex flex-col h-screen w-screen bg-slate-100 content-between justify-between left-0">
      <nav>
        <Header />
      </nav>
      <section className="flex content-center items-center justify-center left-0">
        {children}
      </section>
      <nav>
        <Footer slides={slides} />
      </nav>
    </main>
  );
}
