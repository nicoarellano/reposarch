import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex content-center grow items-center">{children}</main>
      <Footer />
    </div>
  );
}
