interface Props {
  searchParams: {
    mode: string;
  };
}

export default function CourseDescription({ searchParams }: Props) {
  const { mode } = searchParams;
  return (
    <section
      className={`flex  w-2/3 max-h-[500px] overflow-y-scroll m-6 p-12 bg-opacity-70 ${
        mode === "dark" ? "bg-black" : "bg-white"
      } items-baseline text-justify`}
    >
      <p className="text-lg ">
        This dissertation talks about
        <strong>
          {" "}
          the use of computer coding in the field of architectural
          representation
        </strong>
        , and it analyses the different ways in which coding can impact
        architecture. <span className="br-md" />
        Since the 1970s, when computers became available to architects, this new
        human-computer relationship became a revolution for architecture in
        multiple fundamental aspects, such as representation, education, and
        practice. Half a century later, in the 2020s computers are not only
        available, but in most cases, they are indispensable.
        <span className="br-md" />
        The research recognizes actors, processes and milestones that have led
        architects into the scenario that we are in today where a handful of
        software vendors control the majority of the tools that architects use
        to design, build and manage buildings. Monopolistic practices such as
        vendor-lock-in have building professionals dependant on opaque
        proprietary software. <span className="br-md" />
        Software are sets of programs that have a specific function. Originally,
        back in the 50s, software were open systems written in human readable
        programming language that could be studied and modified by their users,
        however, software vendors created methods to prevent the free
        distribution of their products. The term open-software was pioneered
        first by the Free Software Foundation back in 1985 and popularized by
        the Open Source Initiative (1998) to regain the freedom for the user and
        software respectively. <span className="br-md" />
        Many industries, such a s GIS, IT, web and game developers, visual and
        media artist, media, entertainment, among others, have embraced free and
        open-source software in their workflows. With them, professionals can be
        as competitive as the ones utilizing proprietary software. However,
        architects are behind. The bast majority of the practice is done through
        proprietary software, which hinders collaboration, innovation, and
        interoperability. Because of these practices, the digital architectural
        practice has become a <strong>Black box</strong>.
        <span className="br-md" />
        The term <q>black box</q> to describe opaque computer processes has been
        used since early 1940s. It has its origins in electronic circuits to
        describe a system that can be understood only in terms of its inputs and
        outputs, but which process is not accessible or even visible to users.
        To <q>de-blackbox</q> is to understand the process, parts, and
        connection of the system. The historian Antoine Picon states that
        <q>
          “it has become unavoidable to enter into the black box of programming
          in order to make a truly creative use of the computer.”
        </q>
        <sup>1</sup> <span className="br-md" />
        There are several digital processes of architectural representation, one
        of the most popular today is Building Information Modeling (BIM). In the
        last two decades, BIM have become not only a possibility but sometimes
        mandatory by governments in many countries. For this reason, I argue
        that it is imperative to understand both its potential and limitations.
        <span className="br-md" />
        Chuck Eastman, one of the fathers of BIM explains in his BIM Handbook
        that
        <q>
          “BIM is not a thing or a type of software but a human activity that
          ultimately involves broad process changes in construction”
        </q>
        <sup>2</sup> Digital objects are coded to describe and represent
        real-life building components. This facilitates a dialog with the model
        that was previously not possible. BIM could be defined as a
        communication and collaboration tool originally created to connect
        people, processes, and data. However, that is not exactly the way the
        Architecture, Engineering, and Construction (AEC) industry is using BIM.
        The status quo is to work with proprietary solutions and closed file
        formats. There are a few vendors that control the industry usually,
        promoting their own proprietary file formats. The issue is that when
        working with closed formats, the whole process becomes a black box.
        <span className="br-md" />
        <strong>Two conditions</strong> must be met before architects can
        attempt to de-blackbox the digital toolbox. Firstly, architects must
        have a working knowledge of computer programming. Secondly, the source
        code—the list of human-readable instructions that define a computer
        program—of the software that they use must be accessible for
        modification by the user.
        <span className="br-md" />
        This research explores both obstacles—<strong>
          digital oblivion
        </strong>{" "}
        and <strong>black-boxes</strong>—that architects must overcome in order
        to benefit from a fruitful relationship between programming and
        architecture. <span className="br-md" />
        Coding has the potential to further expand the current limits of our
        imagination. Computers are a tremendous contribution to our
        architectural exploration if we continue to explore innovative research
        that includes human input with computer logic and processing power to
        arrive at collaborative solutions. <span className="br-lg" />
        <small>
          <sup>1</sup> Terzidis, Algorithmic Architecture Kostas Terzidis,
          Algorithmic Architecture (Netherlands: Taylor & Francis, 2006), vii.
          Foreword by Antoine Picon: Algorithmic Architecture or the Computer as
          a Double?
        </small>
        <br />
        <small>
          <sup>2</sup> Chuck Eastman et al., BIM Handbook: A Guide to Building
          Information Modeling for Owners, Designers, Engineers, Contractors,
          and Facility Managers. (Germany: Wiley, 2018), 364
        </small>
      </p>
      <br />
    </section>
  );
}
