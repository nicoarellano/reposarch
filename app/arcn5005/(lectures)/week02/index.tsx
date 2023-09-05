import { Toc } from "../../../../types/types";
import Image from "../../../../components/Common/Image";
import Video from "../../../../components/Common/Video";

export const content: Toc = [
  {
    element: (
      <Image
        src="/images/week02/Miquel_Reina_Ortiz_BW.jpg"
        alt="Miquel Reina Ortiz"
        caption="Miquel Reina Ortiz - Arquitect, Ph.D Candidate"
      />
    ),
  },
  {
    element: <h1>🗣️ Language! </h1>,
    notes:
      "Humans use language to define and understand the world around them, but also to communicate ideas. Language is also a process of creation.\
    Artificial languages is a tool human use to communicate to each other and to create ideas and worlds (cosmopoiesis)",
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
      "  Codes > systematization of language > meaning to abstract symbols\
      Humans have created codes to systematize artificial language into abstract symbols.\
      Such symbols are conventions that lacked meaning until we combine them",
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
      <h1>
        01101000 01100101 01101100 01101100 01101111 00100000 01110111 01101111
        01110010 01101100 01100100 00100001
      </h1>
    ),
    notes: "Into machine language (binary = [0,1])",
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
    element: (
      <Image
        src="/images/week02/top-programming-languages.png"
        alt="Top programming languages"
        href="https://gowithcode.com/top-programming-languages"
        caption="Top programming languages: https://gowithcode.com/top-programming-languages"
      />
    ),
    notes:
      "There are thousands of programming languages\
      All early computer languages were created in the second half of the twentieth century.\
      Usually, artificial languages are not created from scratch, but rather they evolve throughout long periods of time and are the result of multiple socio-cultural events that are hard to explain.\
      However, in the case of computer languages, not only did the language itself had to be quickly invented artificially,\
      but because this was a totally new phenomenon, \
      there weren’t even terms to define the emerging actors that constituted this new ‘computer science’.\
      The way in which programmers were naming things had to be invented as well",
  },

  {
    element: <h1>Programming</h1>,
    notes:
      "Programs Set of instructions that use syntax to systematize the logic of computer operations\
    A ‘computer program’ is a set of instructions that tells the computer what to do in order to achieve a desirable goal.\
    I will be using the word ‘tool’ as many architects use it when talking about the computer as a device to assist the design process.",
  },
  {
    element: <h1>Software</h1>,
    notes:
      "While a ‘software’ is a set of programs combined by a programmer to address74 a more specific problem.\
      Software, (which is also the plural of software) are sets of programs that have a specific function. ",
  },

  /*     
    Translation > to move from one medium to a different one, with minimum alteration
    Parallel between translation from drawings to buildings and to move ideas from one medium to a utterly different one with minimum alteration (Alberti and the digital map of Rome (the alphabet and the algorithm - Carpo))
    
    GUI > human-computer interaction devices (icons)
    Invention from early 1970s, graphical user interface. Ivan Southerland (MIT) Sketchpad. The 1st GUI allows human-computer interaction without having to write words in a programming language. 
    limited the boundaries that architects could explore
    This is the moment when computer ceased to be an open language to interact with the machine, and thus became a tool (accessible but opaque)
      
    */
  {
    element: (
      <Image
        src="/images/week02/change-of-medium.png"
        alt="Change of medium"
        caption="Change of medium"
      />
    ),
    notes:
      "We have been using analogue tools for centuries to express our creativity. This allows a particular relationship with the object.\
      Since the seventies, the creative process has been progressively incorporating a digital process.\
      Within this new medium, the relationship with the object and process drastically changes.",
  },

  {
    element: (
      <>
        <h4>The Second Digital Turn by Mario Carpo ... Thoughts?</h4>
        <Video
          src="https://www.youtube.com/embed/UVerq5DSdKU?si=GmIUk9y3PpRTwK2w"
          title="The Second Digital Turn | Mario Carpo | Talks at Google"
          caption="The Second Digital Turn | Mario Carpo | Talks at Google"
        />
      </>
    ),
  },
  {
    element: (
      <Image
        src="/images/week01/process-with-gui.png"
        alt="Digital Creative Process"
        caption={"Digital creative process with GUI"}
      />
    ),
  },

  /*
Now our dialogue with design is in part mediated by computers.
This mediation occurs through multiple devices.
> There are different ways to interact with computers. 
> Physical input hardware. translate our body expressions into digital language.   
    > The mouse or touchscreen.
    > The Keyboard that allows us to type words that are then translated into machine code to get executed by the computer, that action is called programming. 
> Programming languages (notational systems written by humans or computers and executed by computers):
    > Low-level PLs: machine code = binary electromagnetic operations to interact with (CPU). Translated by decoders into binary code (sequences of 1s and 0s) yes, no / on, off / true, false. 
    > High-level PLs: Python,  C++, JavaScript, etc, which are how programmers express computational concepts. Based on spoken or written language (normally English) and are designed to translate our operations into machine code. 
> The mediators are called Interfaces.
  > Interfaces device or program that allow users to interact with the code. 
    > Text-based user interfaces (TUIs) use characters, text and symbols.
    > Graphical user interfaces (GUIs)—they use icons and symbols, there is no code knowledge required, instead, “the user points, clicks on displays of virtual icons on the computer screen. the most popular interfaces for designers. Most BIM platforms are GUIs, The main way architects have to input their creativity process into the digital medium. makes the interaction with the computer more intuitive for the designers.

  */
];
