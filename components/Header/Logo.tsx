import Image from "next/image";

export default function Logo() {
  const favicon = "/images/favicon.ico";
  const title = "reposarch";

  // const router = useRouter();
  return (
    <div
      title={title}
      className="pointer-events-auto"
      onClick={() => {
        // router.reload();
      }}
    >
      <Image priority src={favicon} height={55} width={55} alt={title} />
    </div>
  );
}
