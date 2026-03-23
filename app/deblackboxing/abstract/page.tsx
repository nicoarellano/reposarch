"use client";

import { useState, useEffect } from "react";

interface Props {
  searchParams: {
    mode: string;
  };
}

export default function Abstract({ searchParams }: Props) {
  const { mode } = searchParams;
  const [animationStep, setAnimationStep] = useState(0);
  const maxAnimationStep = 6;
  const isSequenceActive = animationStep < maxAnimationStep;

  const goToNextStep = () => {
    setAnimationStep((prev) => (prev < maxAnimationStep ? prev + 1 : prev));
  };

  const goToPreviousStep = () => {
    setAnimationStep((prev) => (prev > 0 ? prev - 1 : prev));
  };

  useEffect(() => {
    // Auto-advance from the initial highlighted state to the first focused highlight.
    if (animationStep !== 1) return;
    const timeoutId = window.setTimeout(() => {
      setAnimationStep(2);
    }, 1000);

    return () => window.clearTimeout(timeoutId);
  }, [animationStep]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && animationStep > 0) {
        e.preventDefault();
        e.stopPropagation();
        goToPreviousStep();
        return;
      }

      if (!isSequenceActive) return;

      if (e.key === "ArrowRight" || e.key === " " || e.key === "Space" || e.key === "Spacebar") {
        e.preventDefault();
        e.stopPropagation();
        goToNextStep();
      }
    };
    window.addEventListener("keydown", handleKey, true);
    return () => window.removeEventListener("keydown", handleKey, true);
  }, [animationStep, isSequenceActive]);

  const abstract =
    <p className="text-lg ">
      This dissertation examines <em>deblackboxing</em> as an architect-led practice of toolmaking: the expansion of the architect’s disciplinary scope from operating software to its authorship. While digital tools have transformed architectural education, representation, and production, the field’s increasing dependence on proprietary software and closed file formats has intensified <em>black boxing</em>—systems that can be understood in terms of their inputs and outputs, but whose processes are not accessible to users, shifting agency away from the architect and toward software vendors.

      Against this opacity, the dissertation proposes <em>deblackboxing</em>—defined as the critical act of making digital tools inspectable and modifiable—as a necessary disciplinary intervention. This research argues that this reclamation of agency is best achieved through a synthesis of open-source development and programming pedagogy, treating programming not as a technical utility but as a form of architectural literacy.

      The dissertation investigates this hypothesis through two primary epistemic objects. First, it establishes a pedagogical framework for teaching open-source toolmaking. Results from this study demonstrate that when students are equipped to modify their digital instruments, they transcend the role of passive users to become active toolmakers, thereby regaining critical control over the design process. Second, the research documents the development of <em>Canada’s Digital Twin</em>, a web-based open-source BIM/GIS platform designed to bridge the interoperability gap between building and territorial data.

      The successful deployment of this platform—which has garnered both Canadian and international recognition—serves as empirical validation that open-source architectures can surpass specific limitations of proprietary software. By bridging theory, pedagogy, and applied software research, this dissertation confirms that toolmaking is a fundamental competence for the contemporary architect, one that is essential for engaging with multidisciplinary teams and securing the profession’s agency in a digitized built environment.
    </p>

  const highlightedAbstract =
    <p className="text-lg ">
      This dissertation examines <span className={animationStep >= 2 ? "bg-yellow-200 py-[0.5px] px-1 rounded-md" : ""}><strong><em>deblackboxing</em></strong> as an architect-led practice of <strong>toolmaking</strong></span>: <span className={animationStep >= 3 ? "bg-yellow-200 py-[0.5px] px-1 rounded-md" : "bg-gray-200 py-[0.5px] px-1 rounded-md"}>the expansion of the architect’s disciplinary scope from operating software to its authorship</span>. While digital tools have transformed architectural education, representation, and production, the field’s <span className='bg-red-100 py-[0.5px] px-1 rounded-md'>increasing dependence on proprietary software and closed file formats</span> has intensified <strong><em>black boxing</em></strong>—<span className='bg-gray-200 py-[0.5px] px-1 rounded-md'>systems that can be understood in terms of their inputs and outputs, but whose processes are not accessible to users</span>, shifting agency away from the architect and toward software vendors.

      Against this opacity, the dissertation proposes <span className={animationStep >= 5 ? "bg-yellow-200 py-[0.5px] px-1 rounded-md" : ""}><strong><em>deblackboxing</em></strong>—defined as the critical act of <span className={animationStep >= 5 ? "bg-yellow-200 py-[0.5px] px-1 rounded-md" : "bg-gray-200 py-[0.5px] px-1 rounded-md"}>making digital tools inspectable and modifiable</span></span>—as a necessary disciplinary intervention. This research argues that this reclamation of <span className={animationStep >= 4 ? "bg-yellow-200 py-[0.5px] px-1 rounded-md" : ""}><strong>agency</strong></span> is best achieved through a synthesis of <strong className='text-red-800'>open-source development</strong> and <strong className='text-blue-800'>programming pedagogy</strong>, treating programming not as a technical utility but as a form of architectural literacy.

      The dissertation investigates this hypothesis through <span className='bg-gray-200 py-[0.5px] px-1 rounded-md'>two primary epistemic objects</span>. First, it establishes a pedagogical framework for <span className='bg-blue-100 py-[0.5px] px-1 rounded-md'>teaching open-source toolmaking</span>. Results from this study demonstrate that when students are equipped to modify their digital instruments, they transcend the role of passive users to become active toolmakers, thereby regaining critical control over the design process. Second, the research documents <span className='bg-red-100 py-[0.5px] px-1 rounded-md'>the development of <em>Canada’s Digital Twin</em></span>, a web-based open-source BIM/GIS platform designed to bridge the interoperability gap between building and territorial data.

      The successful deployment of this platform—which has garnered both Canadian and international recognition—serves as empirical validation that <span className='bg-gray-200 py-[0.5px] px-1 rounded-md'>open-source architectures can surpass specific limitations of proprietary software</span>. By bridging theory, <strong className='text-blue-800'>pedagogy</strong>, and <strong className='text-red-800'>applied software research</strong>, this dissertation confirms that <span className={animationStep >= 6 ? "bg-yellow-200 py-[0.5px] px-1 rounded-md" : ""}><strong>toolmaking is a fundamental competence for the contemporary architect</strong></span>, one that is essential for engaging with multidisciplinary teams and securing the <span className={animationStep >= 4 ? "bg-yellow-200 py-[0.5px] px-1 rounded-md" : ""}><strong>profession’s agency</strong></span> in a digitized built environment.
    </p>

  return (
    <section
      className="flex-col flex justify-center items-center w-full h-full cursor-text"
      onClick={(e) => {
        if (!isSequenceActive) return;
        e.stopPropagation();
        goToNextStep();
      }}
    >
      <h1 className="text-3xl mb-6">Deblackboxing the Architect’s Toolbox</h1>
      <h2 className="text-2xl mb-6">Open-Source Toolmaking for Architects Beyond Proprietary Software and Closed File Formats
      </h2>
      <section
        className={`flex flex-col  w-2/3 max-h-[600px] m-6 p-12 bg-opacity-70 ${mode === 'dark' ? 'bg-black' : 'bg-white'
          }  text-justify`}
      >
        {animationStep >= 1 ? highlightedAbstract : abstract}
        <br />
      </section>
    </section>
  );
}
