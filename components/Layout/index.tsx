import { useEffect, useContext, ReactElement, useState } from "react";

import Head from "next/head";

import { useRouter } from "next/router";
import Box from "../Common/Box";
import { Button } from "@mui/material";
import { SlidesContext } from "@/middleware/Slides/context";
import { AppProvider } from "@/middleware/CombineProviders";
import Header from "../Header";
import { Slides } from "@/types/types";
import Footer from "../Footer";
import Body from "../Body";
import { defSlides } from "@/lib/DefaultSlides";

interface Props {
  slides: Slides;
}

export default function Layout({ slides }): ReactElement<Props> {
  const favicon = "./bb.ico";
  const title = "Open Source Architecture Representation";
  const description = "Open Source Architecture Representation";

  const router = useRouter();
  const route = router.route;

  const slidesDispatch = useContext(SlidesContext)["dispatch"];
  const { currentSlide } = useContext(SlidesContext)["state"]["slides"];

  useEffect(() => {
    slidesDispatch({
      type: "SET_SLIDES",
      payload: { slides },
    });
  }, [slides]);

  return (
    <AppProvider>
      <Head>
        <link rel="icon" href={favicon} />
        <meta name="og:title" content={title} />
        <meta name="description" content={description} />
      </Head>
      {Boolean(route === "/") ? (
        <div className="flex-col h-screen w-screen flex justify-center items-center">
          <Box />
          <Button>Login</Button>
        </div>
      ) : (
        <div className="absolute flex flex-col min-w-full h-screen bg-slate-100 content-between justify-between right-0">
          <Header />
          <Body />
          <Footer slides={slides} />
        </div>
      )}
    </AppProvider>
  );
}
