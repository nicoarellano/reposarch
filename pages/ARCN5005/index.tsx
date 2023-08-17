import Layout from "@/components/Layout";
import { slides } from "../../lib/ARCN5005/slides";
// import { slides } from "@/lib/DefaultSlides";

// export default function Header({ theme }): ReactElement<{ theme: ThemeNames }> {
export default function ARCHN5005() {
  return <Layout slides={slides} />;
}
