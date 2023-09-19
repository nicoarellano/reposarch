import { Toc } from "../../../../types/types";

import Image from "../../../../components/Common/Image";
import Video from "../../../../components/Common/Video";
import Quote from "../../../../components/Common/Quote";
import EmojiTitle from "../../../../components/Common/EmojiTitle";
import PdfViewer from "../../../../components/Common/PdfViewer";

import Scripting from "./Scripting.mdx";
import RepetetiveTasks from "./RepetetiveTasks.mdx";
import DynamoBenefits from "./DynamoBenefits.mdx";
import Ternary from "./Ternary.mdx";

export const content: Toc = [
  {
    element: (
      <Quote
        quote={
          "GUIs have profoundly changed the way in which architects interact with computers. \
          the graphical user interface, which makes computers so easy to use, \
          also makes them hard to use powerfully."
        }
        author={"Robert Woodbury - Elements of Parametric Design"}
      />
    ),
  },
  {
    element: <EmojiTitle emoji={"❔"} title={"What does scripting mean?"} />,
  },
  {
    element: (
      <Image
        src="/images/week03/scripting-cultures.jpg"
        alt="Mark Burry - Scripting Cultures"
        caption={"Mark Burry - Scripting Cultures"}
      />
    ),
    notes: "Mark Burry - Scripting Cultures",
  },
  {
    element: (
      <Quote
        quote={
          "Scripting is the capability offered by almost all design software packages that allows the user to adapt, customise or completely reconfigure software around their own predilections and modes of working"
        }
        author={"Mark Burry - Scripting Cultures"}
      />
    ),
  },
  {
    element: (
      <Quote
        quote={
          "Authoritative customisation of the ‘black box’ affords the designer opportunities to escape the strictures inherent in any software by definition in ways not thought of by the makers"
        }
        author={"Mark Burry - Scripting Cultures"}
      />
    ),
    notes: "testing notes and quote console.log",
  },
  {
    element: (
      <Quote
        quote={
          "Most of the designers who use computers as a core part of their digital practice do not automatically turn to programming to form part of their repertoire. By not doing so users at once place their entire trust in the software engineers in the expectation that those anonymous collaborators have thought through all that might be wanted by the designers "
        }
        author={"Mark Burry - Scripting Cultures"}
      />
    ),
  },
  {
    element: (
      <Quote
        quote={
          "Software modified by the designer through scripting, however, provides a range of possibilities for creative speculation that is simply not possible using the software only as the manufacturers intended it to be used."
        }
        author={"Mark Burry - Scripting Cultures"}
      />
    ),
  },
  {
    element: (
      <Quote
        quote={
          "Although the first courses in computer programming were introduced in \
          some architecture schools like Harvard or MIT in the late 1980s and \
          early 1990s, scripting has developed only in the past years, fostered \
          by the growing computer literacy of young architectural students and \
          architects who are now able to write code instead of relying only on \
          the predefined software functions. Scripting does open new \
          perspectives on the evolution of design: it even raises some questions \
          that are not fully answered yet."
        }
        author={"Antoine Picon - Digital Turns in Architecture"}
      />
    ),
  },
  { element: <Scripting /> },
  {
    element: (
      <Image
        src="/images/week04/dynamo.png"
        alt="Dynamo"
        caption={
          'Dynamo BIM by Autodesk: “Dynamo is a visual programming tool that aims to be accessible to both non-programmers and programmers alike. It gives users the ability to visually script behavior, define custom pieces of logic, and script using textual programming languages (ie. Python)."'
        }
      />
    ),
    notes:
      "Is a that AutoDesk acquired a couple of year ago, that one can access throught Revit (since 2019). designers, engineers or construction professionals without any computer-related background or who do not know how to write code can access to basic but powerful scripting. (which is a type of coding used to automate processes) Dyanmo provides flexibility to explore inaccessible places inside the general functionalities of Revit (such as its API (application programming interface) and to manipulate large amounts of data and complex geometry with precision. ",
  },
  {
    element: (
      <iframe
        className="w-full h-full"
        src="https://primer.dynamobim.org/index.html"
        title="Dynamo Primer"
      />
    ),
  },
  { element: <RepetetiveTasks /> },
  {
    element: (
      <Image
        src="/images/week04/carleton-dynamo.png"
        alt="Carleton Dyamo"
        caption={
          'Dynamo BIM by Autodesk: “Dynamo is a visual programming tool that aims to be accessible to both non-programmers and programmers alike. It gives users the ability to visually script behavior, define custom pieces of logic, and script using textual programming languages (ie. Python)."'
        }
      />
    ),
    notes:
      "In this example we are using Dynamo to create a “Digital Twin” or a dynamic copy of Carleton University’s campus. \
      For this project at CIMS, we use Dynamo to read an URL (web domain address) and based on that, make periodic changes to the model in real-time. \
      Basically, dynamo is a great tool to program solutions to everyday problems.",
  },
  {
    element: <DynamoBenefits />,
    notes:
      "Interoperability: Chuck Eastman explains on his BIM Handbook that: \
  Sharing model data: \
  for early project feasibility studies, \
  for collaboration with engineers, clients, and consultants, and later for construction.",
  },
  {
    element: (
      <Image
        src="/images/week04/node.png"
        alt="Dynamo node"
        caption={
          "The most elemental objects in Dynamo are the Nodes.\
          The Nodes are the objects you connect in order to create a Visual Program. \
          Each Node performs an operation – that could be as simple as storing a number or it may be a more complex action such as creating geometry.\
          This is based on the very basis a computational process: \
          Which is that there will only be behaviour (something happening) \
          if there is at least one input (which is any event external to the object that modifies this object in any manner). \
          This behaviour may produce one or many outputs (any change produced by the input)"
        }
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week04/process-diagram.png"
        alt="Process diagram"
        caption={
          "The designer is being part of this digital process: \
        You think of what you want Dynamo to do and you tell your hands to input that information through physical input hardware, such as the mouse or the keyboard. \
        These devices transform your ideas into a language that the computer can understand. \
        The computer process your instructions and graphically outputs the result through output hardware, such as the computer monitor.  And we finally input the new information through our senses completing the cycle. \
        This way we can interact with the computer."
        }
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week04/nodes.png"
        alt="Nodes"
        caption={
          "There are nodes for many different things:\
      To create and manipulate Lists of elements, \
      to compare elements, \
      to manipulate text (strings),  \
      to do Math, etc"
        }
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week04/geometry-nodes.png"
        alt="Geometry nodes"
        caption={
          "And also we can use nodes to create geometry. \
          Dynamo displays a tridimensional preview of the geometry in real time in the background. \
          This example shows how to create a circle."
        }
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week04/code-block.png"
        alt="Code Blocks"
        caption={
          "The code block is a unique feature in Dynamo that dynamically links a visual programming environment with a text-based one. \
          It has access to all of the Dynamo nodes and can define an entire graph in one node."
        }
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week04/code-block2.png"
        alt="Code Blocks"
        caption={"Code block is almost like programming"}
      />
    ),
  },

  {
    element: <EmojiTitle emoji={"✔️ || ❌ ?"} title="Booleans" />,
    notes:
      "Boolean variables can only store two values referred to as True or False, Yes or No, 1 or 0. We rarely use booleans to perform calculations because of their limited range.",
  },
  {
    element: (
      <Image
        src="/images/week04/dynamo-logic.png"
        alt="Dynamo Logic"
        caption={
          'In this image, the boolean is set to true, which means that the result is a string reading: "this is the result if true". The three Nodes creating the If statement are working identically here. - Source: Dynamo Primer'
        }
        href="https://primer.dynamobim.org/04_The-Building-Blocks-of-Programs/4-3_logic.html"
      />
    ),
    notes:
      "Logic, or more specifically, Conditional Logic, allows us to specify an action or set of actions based on a test. After evaluating the test, we will have a Boolean value representing True or False that we can use to control the Program Flow.",
  },
  {
    element: (
      <Image
        src="/images/week04/dynamo-logic-false.png"
        alt="Dynamo Logic"
        caption={
          "Again, the Nodes are working identically. If the boolean is changed to false, our result is the number Pi, as defined in the original If statement. - Source: Dynamo Primer"
        }
        href="https://primer.dynamobim.org/04_The-Building-Blocks-of-Programs/4-3_logic.html"
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week04/conditional.png"
        alt="Conditional statements"
        caption={
          "The conditional statement nodes are based on boolean operations: \
        If something is true, then do this… \
        else, If something is false, then do that"
        }
      />
    ),
  },
  {
    element: <Ternary />,
    notes:
      'Condition: An expression whose value is used as a condition. \
  If True: An expression which is executed if the condition evaluates to a truthy value (one which equals or can be converted to true). \
  If False: An expression which is executed if the condition is falsy (that is, has a value which can be converted to false). \
  Description: Besides false, possible falsy expressions are: null, NaN, 0, the empty string (""), and undefined. If condition is any of these, the result of the conditional expression will be the result of executing the expression exprIfFalse.',
  },
  {
    element: (
      <Image
        src="/images/week04/python.png"
        alt="Dynamo and python"
        caption={
          "Dynamo and python: \
          people with some coding expertise can go even further due to Dynamo’s compatibility with Python (which is a high-level programming language, and one of the most popular among programmers). \
          With Python one can access the Revit API (Aplication program interface), which is the program that works behind the scenes allowing users to interact with the functions of the software and allows programs to communicate between each other. \
          Knowing how to access the API is useful to customize the experience by creating special functionalities within Dynamo that one wouldn’t be able to access."
        }
      />
    ),
  },
];
