interface Props {
  searchParams: {
    mode: string;
  };
}

export default function EpistemicObject({ searchParams }: Props) {
  const { mode } = searchParams;
  return (
    <section className="flex-col flex justify-center items-center w-full h-full">
      <section
        className={`flex  w-2/3 max-h-[500px] overflow-y-scroll m-6 p-12 bg-opacity-70 ${
          mode === "dark" ? "bg-black" : "bg-white"
        } items-baseline text-justify`}
      >
        <ol className="text-lg ">
          <li>
            <b>Beatriz Colomina:</b> An Epistemic Object is theory of the
            extended mind → through tools and making. We don’t just think with
            our head and body, we think with our world. We don’t get trapped by
            the limitations of the tools. (Marco Frascari). Enacting mind → the
            making affect your thinking. Design makes us humans, we make tools,
            tools make us.
          </li>
          <span className="br-md" />
          <li>
            <b>Martin Betchold:</b> An Epistemic Object is defined in relation
            to the research questions process in a plurality of media. A design
            experiment might be helpful to either understand the problems more
            deeply or to provide proof of concept for the claim of the thesis.
          </li>
          <span className="br-md" />
          <li>
            <b>Rebecca Williamson</b>: Theory can be found in the evidence of
            practice, buildings, drawings, or other manifestations primary
            sources, graphic qualities of these texts, drawing conventions,
            direct examination of buildings and urban conditions. Dialogue
            between the design and research processes and reinforces our
            connections to practice.
          </li>
          <span className="br-md" />
          <li>
            <b>Ute Poersche:</b> As architects, we must believe that our
            thinking is embedded in the objects and spaces we make. Our
            professional work would be useless otherwise. Objects are much more
            resistant to be nailed down to one interpretation than a
            dissertation should ever be. An object, its non-verbal
            representation in a drawing, model, movie, etc., and its verbal
            representation can never be the same.
          </li>
          <span className="br-md" />
          <li>
            <b>Claire Zimmerman:</b> Theory emerges from the cross-pollination
            of architectural fields and other fields that underpin or shine
            light on the built environment. Theory is a porous activity that
            connects fields. Theoretical thinking helps connect architecture to
            philosophy, to cultural studies, to other kinds of cultural
            production. Ideas bubble up from architectural work, whether from a
            building in the world, from drawing and designing, or from writing.
            Theory production must be politically engaged to be a useful tool in
            the expansion of intellectual work.
          </li>
          <span className="br-md" />
          <li>
            <b>Marco Frascari:</b> Construction (the action, making) and
            construing (the thinking that goes through that making) → Tale the
            tail detail. The theory has to be Embodied it has to be part of that
            person. The theory and the practice meet inside the person it is
            inseparable. Afterthought is the reflecting of what you made and
            forethought is planning. Afterthought is confused as a survey, but
            it is also a way of thinking.
          </li>
        </ol>
        <br />
      </section>
    </section>
  );
}
