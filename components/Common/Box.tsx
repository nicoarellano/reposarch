import Image from "next/image";

export default function Box() {
  const favicon = "/images/bb.png";
  const title = "osarchrep";
  return (
    <main className=" w-screen flex justify-center items-center">
      <Image priority src={favicon} height={300} width={300} alt={title} />
    </main>
  );
}
