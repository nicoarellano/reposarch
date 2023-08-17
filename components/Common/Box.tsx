import Image from "next/image";

export default function Box() {
  const favicon = "/bb.ico";
  const title = "osarchrep";
  return (
    <div className=" w-screen flex justify-center items-center">
      <Image priority src={favicon} height={300} width={300} alt={title} />
    </div>
  );
}
