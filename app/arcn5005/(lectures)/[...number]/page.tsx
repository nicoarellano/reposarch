"use client";

import { useEffect, useState, ReactElement } from "react";

import { arcn5005Lectures } from "../../../arcn5005Lectures";
import { Lecture, Toc } from "../../../../types/types";
import { Header } from "../../../../components/Header";
import { Footer } from "../../../../components/Footer";
import ListWithIcon from "../../../../components/Common/ListWithIcon";
import ArrowRightIcon from "@mui/icons-material/ArrowRightRounded";
import { useRouter } from "next/navigation";

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

  const router = useRouter();

  useEffect(() => {
    if (lecture?.content) {
      if (!params.number[1]) router.push("1");
      else {
        const paramsNumber = Number(params.number[1]);

        const fullContent = [
          {
            element: (
              <nav className="w-2/5 flex items-center">
                <ListWithIcon
                  list={lecture.toc as { title: string }[]}
                  subheader="Table of Content"
                  icon={<ArrowRightIcon />}
                />
              </nav>
            ),
          },
          ...lecture?.content,
        ];

        const index =
          paramsNumber < 1
            ? 1
            : paramsNumber > fullContent.length
            ? fullContent.length
            : paramsNumber;

        setCurrentSlideNumber(index);
        setContent(fullContent);
      }
    }
  }, [params.number[1], lecture]);

  useEffect(() => {
    if (content.length > 0) {
      const currentContent = content[currentSlideNumber - 1];
      if (currentContent?.notes) {
        // 🎶 Speaker notes as console log
        console.log(
          `%c${currentSlideNumber}- ==================================`,
          "color: red; font-size: 30px"
        );
        console.log(`%c${currentContent.notes}`, "font-size: 35px");
      }
      setCurrentSlideElement(currentContent.element);
    }
  }, [content, currentSlideNumber]);

  return (
    <main className="flex flex-col w-screen h-screen justify-between">
      <nav className="top-0 flex flex-row w-screen h-24 ">
        <Header title={lecture?.title} />
      </nav>
      <section className=" flex flex-col items-center justify-center slides w-screen h-3/4 ">
        {currentSlideElement}
      </section>
      <nav className="w-screen flex h-16 items-center">
        <Footer list={content} currentPage={currentSlideNumber} />
      </nav>
    </main>
  );
}
