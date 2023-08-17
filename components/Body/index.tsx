import { useContext, ReactElement, useEffect, useState } from "react";

import { SlidesContext } from "@/middleware/Slides/context";

export default function Body() {
  const { currentSlide } = useContext(SlidesContext)["state"]["slides"];

  return (
    <>
      <section className=" flex bg-slate-100 grow justify-center">
        {currentSlide.slide}
      </section>
    </>
  );
}
