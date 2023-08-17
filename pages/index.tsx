import { AppProvider } from "@/middleware/CombineProviders";
import Layout from "../components/Layout";
import { defSlides } from "@/lib/DefaultSlides";

export default function Home() {
  return <Layout slides={defSlides} />;
}
