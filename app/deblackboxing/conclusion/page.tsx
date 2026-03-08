import Image from 'next/image';

export default function Home() {
  const openBox = "/images/openBox.png";
  return (
    <div className="flex flex-col gap-20 justify-center items-center text-center">
      <Image
        priority
        src={"/images/openBox.png"}
        height={300}
        width={300}
        alt={"De-blackboxing"}
      />
      <h1>
        An open future...
      </h1>
    </div>
  );
}
