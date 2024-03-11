import Image from "next/image";
import Box from "../../components/Common/Box";

export default function Deblackboxing() {
  return (
    <div className="flex flex-col gap-14 justify-center items-center w-[510px] text-center">
      <h1>DE-BLACKBOXING BIM</h1>
      <Image
        priority
        src={"/images/openBox.png"}
        height={300}
        width={300}
        alt={"De-blackboxing"}
      />
      <h3>
        TO DE-BLACKBOX IS TO SHORTEN THE GAP BETWEEN TOOL USERS AND THEIR TOOLS
        FOR REPRESENTATION. <br />
        THIS RESEARCH EXPLORES WAYS TO DE-BLACKBOXING DIGITAL TOOLS FOR
        ARCHITECTS
      </h3>
    </div>
  );
}
