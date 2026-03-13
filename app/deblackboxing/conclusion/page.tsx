import Image from 'next/image';

export default function Home() {
  const openBox = "/images/openBox.png";
  return (
    <div className="flex flex-col gap-[67px] justify-center items-center text-center">
      <h2>
        An open future...
      </h2>
      <Image
        priority
        src={"/images/openBox.png"}
        height={300}
        width={300}
        alt={"De-blackboxing"}
      />
    </div>
  );
}
