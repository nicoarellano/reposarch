import Image from "next/image";

export default function Presentation() {
  const photo = "/slides/Presentation/osarchrep.png";
  const title = "osarchrep";
  return (
    <div className=" flex flex-col items-center justify-center z-50">
      <h3>
        <em>
          AKA Open source digital tools for <b>Architects</b>
        </em>
      </h3>
      <Image priority src={photo} height={200} width={500} alt={title} />
    </div>
  );
}
