import Link from "next/link";
import Box from "../components/Common/Box";

export default function Home() {
  return (
    <main className="flex-col h-screen w-screen flex justify-center items-center">
      <Link href={"/arcn5005"}>
        <Box />
      </Link>
    </main>
  );
}
