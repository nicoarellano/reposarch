interface Props {
  searchParams: {
    mode: string;
  };
}

export default function Abstract({ searchParams }: Props) {
  const { mode } = searchParams;

  return (
    <section className="flex-col flex justify-center items-center w-full h-full">
      <section
        className={`flex flex-col  w-2/3 max-h-[630px] m-6 p-12 bg-opacity-70 ${mode === 'dark' ? 'bg-black' : 'bg-white'
          } items-baseline text-justify`}
      >
        <h1 className="text-3xl mb-6">Deblackboxing the Architect’s Toolbox</h1>
        <h2 className="text-2xl mb-6">Open-Source Toolmaking for Architects Beyond Proprietary Software and Closed File Formats
        </h2>
        <p className="text-lg ">
          This dissertation examines <em>deblackboxing</em> as an architect-led practice of toolmaking: the expansion of the architect’s disciplinary scope from the operation of software to its authorship. While digital tools have transformed architectural education, representation, and production, the field’s increasing dependence on proprietary software and closed file formats has intensified <em>black boxing</em>—systems that can be understood in terms of their inputs and outputs, but whose processes are not accessible to users, shifting agency away from the architect and toward software vendors.

          Against this opacity, the dissertation proposes <em>deblackboxing</em>—defined as the critical act of making digital tools inspectable and modifiable—as a necessary disciplinary intervention. This research argues that this reclamation of agency is best achieved through a synthesis of open-source development and programming pedagogy, treating programming not as a technical utility but as a form of architectural literacy.

          The dissertation investigates this hypothesis through two primary epistemic objects. First, it establishes a pedagogical framework for teaching open-source toolmaking. Results from this study demonstrate that when students are equipped to modify their digital instruments, they transcend the role of passive users to become active toolmakers, thereby regaining critical control over the design process. Second, the research documents the development of <em>Canada’s Digital Twin</em>, a web-based open-source BIM/GIS platform designed to bridge the interoperability gap between building and territorial data.

          The successful deployment of this platform—which has garnered both Canadian and international recognition—serves as empirical validation that open-source architectures can surpass specific limitations of proprietary software. By bridging theory, pedagogy, and applied software research, this dissertation confirms that toolmaking is a fundamental competence for the contemporary architect, one that is essential for engaging with multidisciplinary teams and securing the profession’s agency in a digitized built environment.
        </p>
        <br />
      </section>
    </section>
  );
}
