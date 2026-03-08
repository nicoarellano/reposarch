import Image from "next/image";
import Box from "../../components/Common/Box";

export default function Deblackboxing() {
  return (
    <div className="flex flex-col gap-20 justify-center items-center text-center">
      <h1>Deblackboxing the Architect’s Toolbox</h1>
      <Image
        priority
        src={"/images/openBox.png"}
        height={300}
        width={300}
        alt={"De-blackboxing"}
      />
      <h3>
        Open-Source Toolmaking for Architects Beyond Proprietary Software and Closed File Formats
      </h3>
    </div>
  );
}
