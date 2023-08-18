// Import Next
import Image from "next/image";
import { useRouter } from "next/router";

// export default function Logo({ theme }): ReactElement<{ theme: ThemeNames }> {
export default function Logo() {
  // const { title, logo } = ThemeAttributes(theme)["themeInfo"];

  const favicon = "/bb.ico";
  const title = "reposarch";

  const router = useRouter();
  return (
    <div
      title={title}
      className="pointer-events-auto"
      onClick={() => {
        router.reload();
      }}
    >
      <Image priority src={favicon} height={55} width={55} alt={title} />
    </div>
  );
}
