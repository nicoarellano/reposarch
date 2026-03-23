"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

function revealClass(step: number, minStep: number) {
  return step >= minStep
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-3 pointer-events-none";
}

export default function Conclusion() {
  const finalStep = 7;
  const [step, setStep] = useState(0);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.key === " " || e.key === "ArrowRight") && step < finalStep) {
        e.preventDefault();
        e.stopPropagation();
        setStep((prev) => Math.min(prev + 1, finalStep));
      }
    };

    window.addEventListener("keydown", handler, true);
    return () => window.removeEventListener("keydown", handler, true);
  }, [step]);

  return (
    <section
      className="flex h-full w-full items-center justify-center px-8 py-8"
      onClick={() => setStep((prev) => Math.min(prev + 1, finalStep))}
    >
      <div
        className={`flex w-full max-w-6xl transition-all duration-700 ease-in-out items-center justify-center h-full ${step >= 1 ? "gap-12" : "gap-0"
          }`}
      >
        {/* Image Container */}
        <div
          className={`flex items-center justify-center transition-all duration-700 ease-in-out flex-shrink-0 ${step >= 1 ? "w-1/3" : "w-full"
            }`}
        >
          {/* Instead of using scale-50, we make the image fluid up to 500px. 
            When the parent shrinks to w-1/3, the image smoothly shrinks with it.
          */}
          <Image
            priority
            src={"/images/reposarch.png"}
            height={400}
            width={400}
            alt={"De-blackboxing"}
            className="h-auto w-full max-w-[500px] transition-all duration-700 ease-in-out"
          />
        </div>

        {/* Text Container */}
        <div
          className={`transition-all duration-700 ease-in-out overflow-hidden flex flex-col justify-center ${step >= 1 ? "w-2/3 opacity-100" : "w-0 opacity-0 pointer-events-none"
            }`}
        >
          {/* This inner div prevents the text from awkwardly "squishing" and 
             wrapping into a narrow column while the outer container width expands. 
          */}
          <div className="w-[700px]">
            <h2
              className={`text-left text-4xl leading-tight transition duration-500 mb-8 ${revealClass(
                step,
                1
              )}`}
            >
              This dissertation demonstrates:
            </h2>

            <ol className="list-decimal space-y-7 pl-10 text-left text-3xl leading-tight">
              <li className={`transition duration-500 ${revealClass(step, 2)}`}>
                Software can be a space for <strong>creative intervention</strong>,
                not a boundary.
              </li>
              <li className={`transition duration-500 ${revealClass(step, 3)}`}>
                Software development can be taught as{" "}
                <strong>architectural literacy</strong>, turning architects into
                toolmakers.
              </li>
              <li className={`transition duration-500 ${revealClass(step, 4)}`}>
                <strong>Open-source toolmaking</strong> can solve problems
                proprietary systems cannot.
              </li>
            </ol>

            <div
              className={`transition duration-500 mt-8 ${revealClass(step, 5)}`}
            >
              <h2 className="mb-5 text-left text-4xl leading-tight">
                Call to action:
              </h2>
              <ol className="list-decimal space-y-7 pl-10 text-left text-3xl leading-tight">
                <li
                  className={`transition duration-500 ${revealClass(step, 6)}`}
                >
                  Education should train <strong>authors</strong>, not just
                  operators.
                </li>
                <li
                  className={`transition duration-500 ${revealClass(step, 7)}`}
                >
                  Open-source development keeps tools aligned with{" "}
                  <strong>professional values</strong>, not only commercial
                  interests.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}