"use client";
import CodeIcon from "@mui/icons-material/CodeRounded";

export default function Build() {
  const url =
    "https://collabdt.org/canada?viewer=map&lat=45.3850223&lng=-75.6953042&zoom=15.373&bearing=0.0&pitch=42.0&municipality=Ottawa&province=ON";
  return (
    <section className="w-full h-full flex items-center justify-center">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer"
        aria-label="Open CollabDT map in a new tab"
      >
        <CodeIcon fontSize="large" style={{ scale: 8 }} />
      </a>
    </section>
  );
}
