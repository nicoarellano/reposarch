import Layout from "@/components/Layout";
import { slides } from "../../lib/DefaultSlides/arcn5005Slides";
// import { slides } from "@/lib/DefaultSlides";

// export default function Header({ theme }): ReactElement<{ theme: ThemeNames }> {
export default function ARCHN5005() {
  return <Layout slides={slides} />;
}
