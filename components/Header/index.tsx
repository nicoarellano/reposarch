import { useContext, useState } from "react";
// Context
import { SlidesContext } from "@/middleware/Slides/context";
import Hamburger from "hamburger-react";

import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  const { currentSlide } = useContext(SlidesContext)["state"]["slides"];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="flex flex-row justify-between min-w-max z-50 m-5">
        <Link href="/">
          <Logo />
        </Link>
        <h1 className="flex items-center">{currentSlide.title}</h1>
        <Hamburger
          color="black"
          size={24}
          rounded={true}
          toggled={isOpen}
          toggle={setIsOpen}
          distance="lg"
        />
      </header>
    </>
  );
}
