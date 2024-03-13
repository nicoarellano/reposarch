"use client";
import * as React from "react";
import CodeIcon from "@mui/icons-material/CodeRounded";

export default function Build() {
  const [clicked, setClicked] = React.useState(false);

  const handleClick = () => setClicked(true);
  return (
    <section className="w-full h-full flex items-center justify-center">
      {!clicked ? (
        <div onClick={handleClick} className="cursor-pointer">
          <CodeIcon fontSize="large" style={{ scale: 8 }} />
        </div>
      ) : (
        <iframe
          src="https://cdt.vercel.app/carleton/asset?assetId=ArchBuilding&province=ON&municipality=Ottawa"
          className="h-full grow"
        />
      )}
    </section>
  );
}
