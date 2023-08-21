"use client";
import { useState, useEffect, ReactElement } from "react";
import { usePathname, useRouter } from "next/navigation";

import Stack from "@mui/material/Stack";

import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import BackIcon from "@mui/icons-material/ArrowBackIosRounded";
import ForwardIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Slides } from "../../types/types";

interface Props {
  slides: Slides;
}

export default function Footer({ slides }): ReactElement<Props> {
  const router = useRouter();
  const path = usePathname();

  const pathIndex = slides.findIndex((slide) => slide.url === path);
  const [index, setIndex] = useState<number>(pathIndex === 0 ? 1 : pathIndex);

  useEffect(() => {
    const index = slides.findIndex((slide) => slide.url === path);
    setIndex(index === 0 ? 1 : index);
  }, [path]);

  function handlePaginationChange(e, value) {
    const pageIndex = value;
    setPage(pageIndex);
    router.replace(slides[pageIndex].url);
  }
  const [page, setPage] = useState(index);

  return (
    <Stack spacing={3}>
      <Pagination
        className=" w-screen flex justify-center"
        count={slides.length - 1}
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
