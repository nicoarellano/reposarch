"use client";

import { useEffect, useState } from "react";
import { arcn5005Lectures } from "../../../arcn5005Lectures";
import { Lecture, Toc } from "../../../../types/types";
import { Header } from "../../../../components/Header";
import { Footer } from "../../../../components/Footer";

export default function NestedLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    number: string;
  };
}) {
  // let lecture: Lecture | undefined = arcn5005Lectures.find(
  //   (lecture) => lecture.id === params.week[0]
  // );

  // const [content, setContent] = useState<Toc>([]);
  // const [currentSlideNumber, setCurrentSlideNumber] = useState(0);

  // useEffect(() => {
  //   setCurrentSlideNumber(Number(params.week[1]));
  // }, [params.week[1]]);

  // useEffect(() => {
  //   if (lecture?.content) setContent(lecture.content);
  // }, [lecture]);

  return (
    <main className="flex flex-col w-screen h-screen justify-between">
      {/* <nav className="top-0 flex flex-row w-screen h-24 ">
        <Header title={lecture?.title} />
      </nav> */}
      <section className="flex justify-center grow">{children}</section>
      {/* <nav className="w-screen flex h-16 items-center">
        <Footer list={content} currentPage={currentSlideNumber} />
      </nav> */}
    </main>
  );
}
