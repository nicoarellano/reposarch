"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

import { mainSlides } from "@/lib/arcn5005/MainSlides";
import Stack from "@mui/material/Stack";

import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import BackIcon from "@mui/icons-material/ArrowBackIosRounded";
import ForwardIcon from "@mui/icons-material/ArrowForwardIosRounded";

export default function Footer() {
  const router = useRouter();
  const path = usePathname();

  const pathIndex = mainSlides.findIndex((slide) => slide.url === path);
  const [index, setIndex] = useState<number>(pathIndex === 0 ? 1 : pathIndex);

  useEffect(() => {
    const index = mainSlides.findIndex((slide) => slide.url === path);
    setIndex(index === 0 ? 1 : index);
  }, [path]);

  function handlePaginationChange(e, value) {
    const pageIndex = value;
    setPage(pageIndex);
    router.replace(mainSlides[pageIndex].url);
  }
  const [page, setPage] = useState(index);

  return (
    <Stack spacing={3}>
      <Pagination
        className=" w-screen flex justify-center"
        count={mainSlides.length - 1}
        size="large"
        page={page as number}
        onChange={handlePaginationChange}
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: BackIcon, next: ForwardIcon }}
            {...item}
          />
        )}
      />
    </Stack>
  );
}
