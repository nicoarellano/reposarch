import { Toc } from "../../../../types/types";
import Image from "../../../../components/Common/Image";
import Video from "../../../../components/Common/Video";

export const content: Toc = [
  {
    element: (
      <Image
        src="/images/week02/Miquel_Reina_Ortiz_BW.jpg"
        alt="Change of the buildings"
        caption={"Miquel Reina Ortiz - Arquitect, Ph.D Candidate"}
      />
    ),
  },
  /* Since the seventies, the creative process has been progressively incorporating a digital process. Within this new medium, the relationship with the object and process drastically changes.
  
  Language > Communication / creation
  I describe artificial languages as a tool human use to communicate to each other and to create ideas and worlds (cosmopoiesis)
  
  Codes > systematization of language > meaning to abstract symbols
  Humans have created codes to systematize artificial language into abstract symbols. 
  Such symbols are conventions that lacked meaning until we combine them
  
  Computer coding 
    > Translating human language (‘hello world’) 
    > Into machine language (binary = [0,1])
   
    Computer coding is a way of translating human ideas to the electrical, mechanical world of computers. 
    They are used to communicate with computers and with people through computers.
    Computers don’t need human readable language to function. They just need electric signals that we express as binary code
    Of course, this is unpractical for humans, that is why we use computer high-level programing languages. Is the way for humans to express computational concepts. 
    programming languages designed to translate our operations into machine code. 
    
  
    Programming > set of instructions
    Programs Set of instructions that use syntax to systematize the logic of computer operations
  
  
  Software > set of programs
  Software, (which is also the plural of software) are sets of programs that have a specific function. 
  
  
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
