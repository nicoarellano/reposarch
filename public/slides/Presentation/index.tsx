import Image from "next/image";

export default function Presentation() {
  const photo = "/slides/Presentation/osarchrep.png";
  const title = "osarchrep";
  return (
    <div className=" flex items-center justify-center z-50">
      <Image priority src={photo} height={200} width={500} alt={title} />
    </div>
  );
}
