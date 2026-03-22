"use client";

import { useEffect, useState } from "react";

function revealClass(step: number, minStep: number) {
  return step >= minStep
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-3 pointer-events-none";
}

export default function Conclusion() {
  const finalStep = 6;
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
      <div className="flex h-full w-full max-w-6xl flex-col justify-evenly">
        <h2 className="text-left text-4xl leading-tight">This dissertation demonstrates:</h2>

        <ol className="list-decimal space-y-7 pl-10 text-left text-3xl leading-tight">
          <li className={`transition duration-500 ${revealClass(step, 1)}`}>
            Software can be a space for <strong>creative intervention</strong>, not a boundary.
          </li>
          <li className={`transition duration-500 ${revealClass(step, 2)}`}>
            Software development can be taught as <strong>architectural literacy</strong>, turning architects into toolmakers.
          </li>
          <li className={`transition duration-500 ${revealClass(step, 3)}`}>
            <strong>Open-source toolmaking</strong> can solve problems proprietary systems cannot.
          </li>
        </ol>

        <div className={`transition duration-500 ${revealClass(step, 4)}`}>
          <h2 className="mb-5 text-left text-4xl leading-tight">Call to action:</h2>
          <ol className="list-decimal space-y-7 pl-10 text-left text-3xl leading-tight">
            <li className={`transition duration-500 ${revealClass(step, 5)}`}>
              Education should train <strong>authors</strong>, not just operators.
            </li>
            <li className={`transition duration-500 ${revealClass(step, 6)}`}>
              Open-source development keeps tools aligned with <strong>professional values</strong>, not only commercial interests.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
