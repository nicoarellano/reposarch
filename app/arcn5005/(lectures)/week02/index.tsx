import { Toc } from "../../../../types/types";
import Image from "../../../../components/Common/Image";
import Video from "../../../../components/Common/Video";
import PdfViewer from "../../../../components/Common/PdfViewer";
import Photogrammetry from "./photogrammetry.mdx";
import EmojiTitle from "../../../../components/Common/EmojiTitle";

export const content: Toc = [
  {
    element: (
      <EmojiTitle
        emoji={"🌎→💻❔"}
        title={"How to bring physical objects to the digital world?"}
      />
    ),
  },
  {
    element: (
      <>
        <h2>There are multiple tools to do this:</h2>
        <ul>
          <li>
            <h3>
              <a href="https://en.wikipedia.org/wiki/Surveying">Surveying</a>
            </h3>
          </li>
          <li>
            <h3>
              <a href="https://en.wikipedia.org/wiki/Digital_photography">
                Digital Photography
              </a>
            </h3>
          </li>
          <li>
            <h3>
              <a href="https://en.wikipedia.org/wiki/3d_scanning">
                3D Scanning
              </a>
            </h3>
          </li>
          <li>
            <h3>
              <a href="https://en.wikipedia.org/wiki/Motion_capture">
                Motion capture
              </a>
            </h3>
          </li>
        </ul>
        <br />
        <h3>
          Today we will talk about one of them called{" "}
          <b>
            <a href="https://en.wikipedia.org/wiki/Photogrammetry">
              Photogrammetry
            </a>
          </b>
        </h3>
      </>
    ),
  },
  {
    element: (
      <Image
        src="/images/week02/Miquel_Reina_Ortiz_BW.jpg"
        alt="Miquel Reina Ortiz"
        caption="Miquel Reina Ortiz - Architect, Ph.D Candidate"
      />
    ),
    notes:
      "Miquel Reina Ortiz is an Assistant Professor (2021-present) and a Ph.D. Candidate in Architecture (2015-present) at the Azrieli School of Architecture and Urbanism (ASAU) at Carleton University. His research concerns the relationship between different scales of intervention within the context of the Historic City. He has been teaching courses in heritage conservation, site and building documentation, urbanism and design studio at the ASAU. He collaborates with the Carleton Immersive Media Studio (CIMS) in the development of new digital workflows applied to heritage conservation. He has participated in international field works and co-authored articles on topics related to digital heritage documentation. He is the Canadian representative of the ICOMOS Emerging Professional Working Group (EPWG) since 2020. He studied architecture at ETSABarcelona (UPC), where he graduated with honours in 2011, and holds a MsC in Restoration and Rehabilitation at ETSABarcelona (UPC). His professional experience in the architecture studio Ravetllat-Ribas Barcelona (2008-2015) focused on adaptive reuse projects, and as a licensed architect, he has designed public space, housing, interiors and competitions.",
  },
  {
    element: (
      <>
        <h3>Miquel Reina Ortiz</h3>
        <br />
        <h5>
          Miquel Reina Ortiz was an Assistant Professor (2021) and isa Ph.D.
          Candidate in Architecture (2015-present) at the Azrieli School of
          Architecture and Urbanism (ASAU) at Carleton University. His research
          concerns the relationship between different scales of intervention
          within the context of the Historic City. He has been teaching courses
          in heritage conservation, site and building documentation, urbanism
          and design studio at the ASAU. He collaborates with the Carleton
          Immersive Media Studio (CIMS) in the development of new digital
          workflows applied to heritage conservation. He has participated in
          international field works and co-authored articles on topics related
          to digital heritage documentation. He is the Canadian representative
          of the ICOMOS Emerging Professional Working Group (EPWG) since 2020.
          He studied architecture at ETSABarcelona (UPC), where he graduated
          with honours in 2011, and holds a MsC in Restoration and
          Rehabilitation at ETSABarcelona (UPC). His professional experience in
          the architecture studio Ravetllat-Ribas Barcelona (2008-2015) focused
          on adaptive reuse projects, and as a licensed architect, he has
          designed public space, housing, interiors and competitions
        </h5>
      </>
    ),
  },
  {
    element: (
      <PdfViewer src="/resources/Architectural-Photogrammetry-Intro.pdf" />
    ),
  },
  {
    element: (
      <Video
        src="https://www.youtube.com/embed/KzBL9fhKgWA?si=iIBCf7Sjgilq12xG"
        title="Miquel Reina Ortiz - Photogrammetry"
        caption={"Miquel Reina Ortiz - Photogrammetry"}
      />
    ),
  },

  {
    element: (
      <>
        <h1>❔</h1>
        <br />
        <h2>Thoughts about photogrametry?</h2>
      </>
    ),
  },
  {
    element: (
      <Video
        src="https://www.youtube.com/embed/w2N2Yth4sbQ?si=K6D_B2ESbYQ1Cq0v"
        title="Class 2 - Programming"
        caption={"Class 2 - Programming"}
      />
    ),
  },
  {
    element: (
      <>
        <h1>❔</h1>
        <br />
        <h2>
          Can you think of any other technology to capture the physical world
          digitally?
        </h2>
      </>
    ),
  },
  {
    element: <h1>🗣️ Language! </h1>,
    notes:
      "Humans use language to define and understand the world around them, but also to communicate ideas. Language is also a process of creation.\
    Artificial languages s a tool human use to communicate to each other and to create ideas and worlds (cosmopoiesis)",
  },
  {
    element: (
      <>
        <h1>🖐️</h1>
        <br />
        <h1>Rise your hand if you have never coded</h1>
      </>
    ),
    notes: "False, anybody literate person has coded",
  },
  {
    element: (
      <>
        <h3>🅰️ Coding</h3>
        <br />
        <Image
          src="/images/week02/hieroglyphs.png"
          alt="Codes: Hieroglyphs"
          href="https://en.wikipedia.org/wiki/Egyptian_hieroglyphs"
          caption="By Wikipedia"
        />
      </>
    ),
    notes:
      " Code is a tecnology humans have created to systematize artificial language into abstract symbols.\
      Such symbols are conventions that lacked meaning until we combine them\
      Then, they allow us to create and to communicate ideas",
  },
  {
    element: <Image src="/images/coding-is.png" alt="Coding Is..." />,
    notes:
      "Computer coding is a way of translating human ideas to the electrical, mechanical world of computers.\
    They are used to communicate with computers and with people through computers.",
  },
  {
    element: (
      <>
        <h3>⌨️ Computer coding</h3>
        <br />
        <Image
          src="/images/week02/computer-coding.png"
          alt="Computer coding"
          caption="Javascript"
        />
      </>
    ),
    notes:
      "Computer coding is a way of translating human ideas to the electrical, mechanical world of computers.\
      They are used to communicate with computers and with people through computers.",
  },
  {
    element: <h1>Hello world!</h1>,
    notes: "> Translating human language (‘hello world’)",
  },
  {
    element: (
      <>
        <h1>⌨️💬</h1>
        <br />
        <h1>Programming Languages</h1>
      </>
    ),
    notes:
      "Programming languages (notational systems written by humans or computers and executed by computers)",
  },
  {
    element: (
      <>
        <h1>🤖💬</h1>
        <br />
        <h1>Lower-level computer programming or Machine Language</h1>
      </>
    ),
    notes:
      "Low-level PLs: machine code = binary electromagnetic operations to interact with (CPU). Translated by decoders into binary code (sequences of 1s and 0s) yes, no / on, off / true, false.\
    ",
  },
  {
    element: (
      <h4>
        <em>
          Every program can be expressed directly in terms of binary integers
          that designate memory locations containing data to be operated upon,
          together with binary integers that specify the operations (from the
          machine&apos;s instructions set) to be performed. You can think of
          each instruction as the settings for a long string of switches,
          expressed as a string of binary digits like:
        </em>
      </h4>
    ),
  },
  {
    element: (
      <>
        <h1>
          01101000 01100101 01101100 01101100 01101111 00100000 01110111
          01101111 01110010 01101100 01100100 00100001
        </h1>
        <h5>
          <br />
          <em>Hello world! written in binary code</em>
        </h5>
      </>
    ),
    notes: "binary integers = [0,1]",
  },
  {
    element: (
      <h4>
        <em>
          This is called machine language programing. It is not very convinient,
          however, to think in terms of binary numbers and elementary operantion
          and to express programs in the cryptic binary notation. Machine
          language programming is like trying to describe how to construct a
          complex building by specifying the coordinates of each brick; it is
          better, if possible, to structure your thoughts and expressions in
          terms of higher-level, more immediately understandable constructs.
        </em>
        <h5>
          <br />
          <em>William Mitchell - The Art of Computer Graphics Programming</em>
        </h5>
      </h4>
    ),
  },
  {
    element: (
      <>
        <h1>0️⃣1️⃣❔</h1>
        <br />
        <h1>Does anybody know how does binary code work?</h1>
      </>
    ),
    notes: "Counting on binary code is like counting with 2 fingers",
  },
  {
    element: (
      <Video
        src="https://www.youtube.com/embed/b7pOcU1xMks?si=24wZoeuNfpph5V90&amp;start=12"
        title="Introduction to Binary Numbers"
        caption={"Introduction to Binary Numbers"}
      />
    ),
  },
  {
    element: (
      <Video
        src="https://www.youtube.com/embed/Xpk67YzOn5w?si=ZBSbiG4QwRIuoZqj&amp;start=219"
        title="Introduction to Binary Numbers"
        caption={"Introduction to Binary Numbers"}
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week02/binary.png"
        alt="Binary code"
        href="https://knowthecode.io/labs/basics-of-digitizing-data/episode-13"
        caption="Binary code by https://knowthecode.io/labs/basics-of-digitizing-data/episode-13"
      />
    ),
    notes:
      "Computers don’t need human readable language to function. They just need electric signals that we express as binary code\
      Of course, this is unpractical for humans, that is why we use computer high-level programing languages.\
      Is the way for humans to express computational concepts.\
      The ‘data’ that computers read doesn't need to be readable to us.\
      Humans use programming ‘languages’ so they know what they are instructing, but a computer just needs ‘binary code’—which is a combination between zeros (when the electronic device is in the charged stage) and ones (when uncharged).\
      programming languages designed to translate our operations into machine code.",
  },
  {
    element: <h1>Programming</h1>,
    notes:
      "Programs Set of instructions that use syntax to systematize the logic of computer operations\
    A ‘computer program’ is a set of instructions that tells the computer what to do in order to achieve a desirable goal.\
    I will be using the word ‘tool’ as many architects use it when talking about the computer as a device to assist the design process.",
  },

  {
    element: (
      <>
        <h2>➡️ 🧠 ➡️ Programming logic</h2>
        <br />
        <Image
          src="/images/week02/input-process-output.png"
          alt="Input ► Process ► Output"
          caption="Input ► Process ► Output"
        />
      </>
    ),
    notes:
      "The functions of many machines can be described by specifying their input, process, and output. \
    The process transforms something that we have into something that we may want\
    The basic functions of a computer can be described in this fashion as well.\
    (for example, numbers typed in at a keybord)\
    the process consist of arithmetic and logical operations applied to that (adding numbers)\
      and the output consist of the new information that results from the operations performed upon the input",
  },
  {
    element: (
      <Image
        src="/images/week02/interface.png"
        alt="Human computer interaction"
        caption={"Our relation with the digital is mediated by interfaces"}
      />
    ),
    notes:
      "Our relation with the digital is mediated by interfaces. \
    An interface is the bridge, the gap, and the medium throug which we interact with the computer.",
  },
  {
    element: (
      <Image
        src="/images/week02/devices-diagram.png"
        alt="Physical input and output hardware"
        caption={"Physical input and output hardware"}
      />
    ),
    notes:
      "Now our dialogue with design is in part mediated by computers.\
    This mediation occurs through multiple devices.\
    > There are different ways to interact with computers. \
    > Physical input hardware. translate our body expressions into digital language. \
        > The mouse or touchscreen. \
        > The Keyboard that allows us to type words that are then translated into machine code to get executed by the computer, that action is called programming.",
  },
  {
    element: (
      <Image
        src="/images/week02/interaction.png"
        alt="Human computer interaction"
        caption={"Interfaces"}
      />
    ),
    notes:
      "> Interfaces are devices or programs that allow users to interact with the code. \
      > Graphical user interfaces (GUIs)—they use icons and symbols, there is no code knowledge required, instead, “the user points, clicks on displays of virtual icons on the computer screen. \
      the most popular interfaces for designers. Most BIM platforms are GUIs, The main way architects have to input their creativity process into the digital medium.\
     makes the interaction with the computer more intuitive for the designers.",
  },
  {
    element: (
      <>
        <h1>GUI</h1>
        <br />
        <h1>🖱️ ➡️ 💻</h1>
        <br />
        <h1>Graphical user interface</h1>
      </>
    ),
    notes:
      "Graphical user interfaces (GUIs)—they use icons and symbols, there is no code knowledge required, instead, “the user points, clicks on displays of virtual icons on the computer screen. the most popular interfaces for designers. Most BIM platforms are GUIs, The main way architects have to input their creativity process into the digital medium. makes the interaction with the computer more intuitive for the designers.",
  },
  {
    element: (
      <Image
        src="/images/week01/sutherland.png"
        alt="Ivan Sutherland inventor of Sketchpad, the first GUI"
        caption={"Ivan Sutherland inventor of Sketchpad, the first GUI"}
      />
    ),
    notes:
      "In 1963, Ivan Sutherland at MIT developed a program called ‘Sketchpad’, which can be considered as the first computer drawing program or the first graphical user interface (GUI).\
       GUIs are human-computer interaction devices that allow users to interact with the computer through graphical icons instead of written code.\
       With a GUI the user can click or touch and manipulate the symbols displayed on the screen and thus, directly alter the program.\
       GUIs made computer more accessible for non-programmers, including architects.",
  },
  {
    element: (
      <Image
        src="/images/week02/mac.png"
        alt="First Macintosh (1984)"
        caption={"First Macintosh (1984)"}
      />
    ),
    notes:
      "On January 24, 1984, former Apple CEO Steve Jobs introduced the first Macintosh at Apple's annual shareholder's meeting in Cupertino, \
      California, debuting the new computer equipped with a 9-inch black and white display, an 8MHz Motorola 68000 processor, 128KB of RAM, a 3.5-inch floppy drive, \
      and a price tag of $2,495. \
      This computer revolutionized the market with its GUI and mouse",
  },
  {
    element: (
      <>
        <h1>TUI</h1>
        <br />
        <h1>⌨️ ➡️ 💻</h1>
        <br />
        <h1>Text-based user interface</h1>
      </>
    ),
    notes:
      "> Text-based user interfaces (TUIs) use characters, text and symbols.",
  },
  {
    element: (
      <>
        <h1>🗣️ 🔤 💻</h1>
        <br />
        <h1>High-level computer programming</h1>
      </>
    ),
    notes:
      "Any computer program is written in some particular language. \
      The language (unlike a natural language such as English) has a precisly specified vocabulary and syntax that must be followed rigorously\
      The semantic properties are also well defined; any syntactically correct statement causes the computer to perform some specific action. \
      Thus a programming language provides a very precise means of communication and requires you to express yourself exactly; \
      there is no latitude for vagueness , incompleteness, ambiguities, and errors that we tolerate in everyday speech",
  },
  {
    element: (
      <Image
        src="/images/week02/top-programming-languages.png"
        alt="Top programming languages"
        href="https://gowithcode.com/top-programming-languages"
        caption="Top programming languages: https://gowithcode.com/top-programming-languages"
      />
    ),
    notes:
      "High-level PLs: Python,  C++, JavaScript, etc, which are how programmers express computational concepts. Based on spoken or written language (normally English) and are designed to translate our operations into machine code.       All early computer languages were created in the second half of the twentieth century.\
      Usually, artificial languages are not created from scratch, but rather they evolve throughout long periods of time and are the result of multiple socio-cultural events that are hard to explain.\
      However, in the case of computer languages, not only did the language itself had to be quickly invented artificially,\
      but because this was a totally new phenomenon, \
      there weren’t even terms to define the emerging actors that constituted this new ‘computer science’.\
      The way in which programmers were naming things had to be invented as well",
  },
  {
    element: (
      <>
        <h1>🔤 ➡️ 0️⃣1️⃣</h1>
        <br />
        <h1>What is a compiler?</h1>
      </>
    ),
    notes:
      "Ultimately, of course, a computer can only excecute instructions expressed in its own machine language (which have unambiguous meaning in terms of its own instruction set). \
    So a program written  in high-level algorithmic language must always be translated into the machine language of the particular computer on which it is to run",
  },
  {
    element: (
      <h4>
        <em>
          A compiler is a special type of program that accepts as input a source
          program written in high-level language and produces as output an
          object program expressed in the appropiate machine language 🤖💬 or
          binary code 0️⃣1️⃣
        </em>
        <h5>
          <br />
          <em>William Mitchell - The Art of Computer Graphics Programming</em>
        </h5>
      </h4>
    ),
    notes: "",
  },
  {
    element: (
      <>
        <h1>❔</h1>
        <br />
        <h1>Has anyone used any high-level programming language?</h1>
      </>
    ),
    notes:
      "Higher level algorithmic languages are much closer to the way that people generally express themselves verbally (English in our case) \
    and mathematically. So it is much easier to write, read, and understand programs in these languages.",
  },

  {
    element: <EmojiTitle emoji={"📃 💬 💻"} title={"Program"} />,
    notes:
      "a computer Programs is a Set of instructions written in a programming language that use syntax to systematize the logic of computer operations",
  },

  {
    element: <EmojiTitle emoji={"📃📃📃 💬 💻"} title={"Software"} />,
    notes:
      "Software (which is also the plural of software) is a set of programs combined by a programmer to address a more specific problem.",
  },

  {
    element: (
      <>
        <h1>💻 Lab 2</h1>
        <br />
        <h1>Photogrametry Excercise</h1>
      </>
    ),
  },
  {
    element: (
      <>
        <h2>Download Meshroom</h2>
        <br />
        <Image
          src="/images/week02/logo-meshroom.png"
          alt="Meshroom"
          caption={"Meshroom - Open-Source photogrametry software"}
          href="https://alicevision.org/#meshroom"
        />
      </>
    ),
  },
  {
    element: (
      <>
        <h2>Download Bleder</h2>
        <br />
        <Image
          src="/images/week02/blender.png"
          alt="Blender"
          caption={
            "Blender - Open-Source 3d creative suite - 3D CAD, BIM and much more..."
          }
          href="https://www.blender.org/download/"
        />
      </>
    ),
  },
  {
    element: (
      <>
        <h1>👥</h1>
        <br />
        <h1>Form groups of 2</h1>
      </>
    ),
  },
  {
    element: (
      <>
        <h1>📸</h1>
        <br />
        <h1>Do you have a Camera?</h1>
        <br />
        <h2>If you don&apos;t, we can rent one for free at the photo lab</h2>
      </>
    ),
  },
  {
    element: (
      <div className="long-list">
        <Photogrammetry />
      </div>
    ),
  },
  {
    element: (
      <Video
        src="https://www.youtube.com/embed/L_SdlR57NtU?si=jS7DahueRTtPfJb0"
        title="Protogrammetry in Blender and Meshroom"
        caption="Protogrammetry in Blender and Meshroom"
      />
    ),
  },
];
