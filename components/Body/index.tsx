import { useContext, useEffect, useState } from "react";
import Fade from "@mui/material/Fade";

import { SlidesContext } from "@/middleware/Slides/context";

export default function Body() {
  const { currentSlide, currentSlideNumber } =
    useContext(SlidesContext)["state"]["slides"];
  const [appear, setAppear] = useState(true);

  useEffect(() => {
    setAppear(true);
  }, [currentSlide]);

  return (
    <>
      <Fade in={appear} mountOnEnter unmountOnExit>
        <section className=" flex bg-slate-100 grow justify-center overflow-hidden">
          {currentSlide.slide}
        </section>
      </Fade>
    </>
  );
}
