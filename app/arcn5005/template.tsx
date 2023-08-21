"use client";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";

import Header from "@/components/Header";
import { mainSlides } from "@/lib/arcn5005/MainSlides";
import { AppProvider } from "@/middleware/CombineProviders";
import Stack from "@mui/material/Stack";

import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import BackIcon from "@mui/icons-material/ArrowBackIosRounded";
import ForwardIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { SlidesContext } from "@/middleware/Slides/context";
import Footer from "@/components/Footer";

export default function Template({ children }: { children: React.ReactNode }) {
  const { currentSlideNumber } = useContext(SlidesContext)["state"]["slides"];
  const [page, setPage] = useState(currentSlideNumber + 1);

  const router = useRouter();
  function handlePaginationChange(e, value) {
    console.log(e, value);
    const index = value - 1;
    setPage(index);
    router.replace(mainSlides[index].url);
  }

  return (
    <main className="flex flex-col w-screen h-screen bg-slate-100 justify-between">
      <AppProvider>
        <nav className="top-0 flex flex-row w-screen h-24 ">
          <Header />
        </nav>
        <section className="flex justify-center grow">{children}</section>
        <nav className="w-screen flex h-16 items-center">
          <Footer />
        </nav>
      </AppProvider>
    </main>
  );
}
