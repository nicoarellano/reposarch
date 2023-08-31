"use client";

import { useEffect, useState, ReactElement } from "react";

import { arcn5005Lectures } from "../../../arcn5005Lectures";
import { Lecture, Toc } from "../../../../types/types";
import { Header } from "../../../../components/Header";
import { Footer } from "../../../../components/Footer";

interface Props {
  params: { number: string };
}

export default function Page({ params }): ReactElement<Props> {
  let lecture: Lecture | undefined = arcn5005Lectures.find(
    (lecture) => lecture.id === params.number[0]
  );

  const [content, setContent] = useState<Toc>([]);
  const [currentSlideElement, setCurrentSlideElement] = useState<JSX.Element>();
  const [currentSlideNumber, setCurrentSlideNumber] = useState(0);

  useEffect(() => {
    if (lecture?.content) {
      const paramsNumber = Number(params.number[1]);
      const index =
        paramsNumber < 1
          ? 1
          : paramsNumber > lecture?.content?.length
          ? lecture?.content?.length
          : paramsNumber;

      console.log("INDEX: ", index);
      setCurrentSlideNumber(index);
      setContent(lecture.content);
    }
  }, [params.number[1], lecture]);

  useEffect(() => {
    if (content.length > 0) {
      const currentContent = content[currentSlideNumber - 1];
      if (currentContent?.notes)
        console.log(`%c${currentContent.notes}`, "font-size: 50px");
      setCurrentSlideElement(currentContent.element);
    }
  }, [content, currentSlideNumber]);

  // 🎶 Speaker notes as console log

  return (
    <main className="flex flex-col w-screen h-screen justify-between">
      <nav className="top-0 flex flex-row w-screen h-24 ">
        <Header title={lecture?.title} />
      </nav>
      <section className="flex justify-center grow">
        <section className=" flex flex-col items-center justify-center grow gap-8 mdx max-w-[80%] max-h-[580px]">
          {currentSlideElement}
        </section>
      </section>
      <nav className="w-screen flex h-16 items-center">
        <Footer list={content} currentPage={currentSlideNumber} />
      </nav>
    </main>
  );
}
