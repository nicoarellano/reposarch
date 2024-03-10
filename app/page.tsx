import Link from "next/link";
import Box from "../components/Common/Box";

export default function Home() {
  return (
    <main className="flex-col flex justify-center items-center w-full h-full">
      <Link href={"/deblackboxing"}>
        <Box />
      </Link>
    </main>
  );
}
