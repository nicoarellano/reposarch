import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  const favicon = "/images/favicon.ico";
  const title = "reposarch";

  // const router = useRouter();
  return (
    <Link href="/arcn5005" className="z-50 m-5">
      <div
        title={title}
        className="pointer-events-auto"
        onClick={() => {
          // router.reload();
        }}
      >
        <Image priority src={favicon} height={55} width={55} alt={title} />
      </div>
    </Link>
  );
}
