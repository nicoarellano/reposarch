import { Toc } from "../../../../types/types";

import Image from "../../../../components/Common/Image";
import Video from "../../../../components/Common/Video";
import Quote from "../../../../components/Common/Quote";
import EmojiTitle from "../../../../components/Common/EmojiTitle";
import PdfViewer from "../../../../components/Common/PdfViewer";

import Scripting from "./Scripting.mdx";
import RepetitiveTasks from "./RepetitiveTasks.mdx";
import DynamoBenefits from "./DynamoBenefits.mdx";
import Ternary from "./Ternary.mdx";
import DynamoNecessary from "./DynamoNecessary.mdx";
import DynamoConsiderations from "./DynamoConsiderations.mdx";

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
          "Scripting is the capability offered by almost all design software packages that allows the user to adapt, customize or completely reconfigure software around their own predilections and modes of working"
        }
        author={"Mark Burry - Scripting Cultures"}
      />
    ),
  },
  {
    element: (
      <Quote
        quote={
          "Authoritative customization of the ‘black box’ affords the designer opportunities to escape the strictures inherent in any software by definition in ways not thought of by the makers"
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
      <EmojiTitle emoji={"🦗"} title={"CAD and 3D CAD Proprietary Scripting"} />
    ),
  },
  {
    element: (
      <Image
        src="/images/week04/grasshopper.png"
        alt="Grasshopper"
        href="https://www.grasshopper3d.com/"
        caption={
          "For designers who are exploring new shapes using generative algorithms, Grasshopper® is a graphical algorithm editor tightly integrated with Rhino’s 3-D modeling tools. Unlike RhinoScript, Grasshopper requires no knowledge of programming or scripting, but still allows designers to build form generators from the simple to the awe-inspiring. "
        }
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week04/grasshopper_v6_included.png"
        alt="Out of the box Grasshopper "
        href="https://www.grasshopper3d.com/"
        caption={"Out of the box Grasshopper that comes with Rhinoceros v6+"}
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week04/grasshopper-ghpython.png"
        alt="GhPython"
        caption={
          "For designers who want to use the same flexible language everywhere, \
            GhPython is the Python interpreter component for Grasshopper that allows to execute dynamic scripts of any type. \
            Unlike other scripting components, GhPython allows to use the 'rhinoscriptsyntax' to start scripting without needing to be a programmer. \
            Once on-board and with some practice, you can also get the most of external Python and .Net modules and libraries. \
            This component is open-source, and works in Rhino 5 +. "
        }
      />
    ),
  },
  { element: <EmojiTitle emoji={"🦗"} title={"BIM Proprietary Scripting"} /> },
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
      "Is a that AutoDesk acquired a couple of year ago, that one can access through Revit (since 2019). designers, engineers or construction professionals without any computer-related background or who do not know how to write code can access to basic but powerful scripting. (which is a type of coding used to automate processes) Dynamo provides flexibility to explore inaccessible places inside the general functionalities of Revit (such as its API (application programming interface) and to manipulate large amounts of data and complex geometry with precision. ",
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
  { element: <RepetitiveTasks /> },
  {
    element: (
      <Image
        src="/images/week04/dynamo-bim.png"
        alt="Carleton Dynamo"
        caption={
          'Dynamo BIM by Autodesk: “Dynamo is a visual programming tool that aims to be accessible to both non-programmers and programmers alike. It gives users the ability to visually script behavior, define custom pieces of logic, and script using textual programming languages (ie. Python)."'
        }
      />
    ),
    notes:
      "Dynamo is a great tool for experimentation and speculative design, but it is also great to program solutions to everyday problems.",
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
          With Python one can access the Revit API (Application program interface), which is the program that works behind the scenes allowing users to interact with the functions of the software and allows programs to communicate between each other. \
          Knowing how to access the API is useful to customize the experience by creating special functionalities within Dynamo that one wouldn’t be able to access."
        }
      />
    ),
  },
  { element: <DynamoNecessary /> },
  {
    element: <DynamoConsiderations />,
    notes:
      "It is important to understand the problem well and learn how to instruct Dynamo how to do it for us. \
    Normally our supervisor will give us a straightforward instruction that we have to understand and follow. \
    When the instruction is too robotic it is when we have to learn how to program the same instruction for the computer to do it.",
  },
  {
    element: (
      <>
        <h2>Examples of automation of repetitive tasks 🔂</h2>
        <ol className="long-list">
          <li>ROOM NUMBERING</li>
          <li>DOOR NUMBERING</li>
          <li>INTERIOR fIT-UP CALCULATIONS</li>
          <li>TITLEBLOCK AND PRINTING SETS</li>
          <li>ROOM OUTLINES TO MODEL LINES</li>
          <li>QUANTIFYING MATERIALS</li>
          <li>BIM TO VR</li>
          <li>COMPARING MODEL VERSION</li>
          <li>CATEGORIZATION OF ELEMENTS</li>
          <li>IMPORTING AND EXPORTING DATA</li>
          <li>CAD TO REVIT</li>
          <li>REAL-TIME SIMULATIONS - DIGITAL TWIN</li>
        </ol>
      </>
    ),
    notes:
      "Unfortunately I won’t have time today to talk about best practices \
  Neither this will be tutorial of how to make scripts that I am about to show, you can research them in your own time, and there are thousands of tutorials in YouTube and the Dynamo forum is really active and useful. \
   I encourage you to check it out \
  What I want to do is to show some examples that an amateur at Dynamo (such myself for the last couple of years) can start creating pretty easily.",
  },
  {
    element: (
      <Image
        src="/images/week04/room-number.png"
        alt="1. Automatic Room numbers"
        caption={"1. Automatic Room numbers (manual process)"}
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week04/room-number2.png"
        alt="1. Automatic Room numbers"
        caption={"1. Automatic Room numbers (manual process)"}
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week04/room-number3.png"
        alt="1. Automatic Room numbers"
        caption={"1. Automatic Room numbers (automation script)"}
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week04/room-number4.png"
        alt="1. Automatic Room numbers"
        caption={"1. Automatic Room numbers (automation script)"}
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week04/door-numbers.png"
        alt="2. Automatic Door numbers"
        caption={"2. Automatic Door numbers (manual process)"}
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week04/door-numbers2.png"
        alt="2. Automatic Door numbers"
        caption={"2. Automatic Door numbers (manual process)"}
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week04/door-numbers3.png"
        alt="2. Automatic Door numbers"
        caption={"2. Automatic Door numbers (automation script)"}
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week04/door-numbers4.png"
        alt="2. Automatic Door numbers"
        caption={"2. Automatic Door numbers (automation script)"}
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week04/interior-fitup1.png"
        alt="3. Interior fit-up Calculations"
        caption={"3. Interior fit-up calculations (manual process)"}
      />
    ),
    notes:
      "Elements from different Categories had to be compared, ie. Furniture, Rooms and Areas. \
    When something changed (for example the size of the room) all the other elements had to be updated manually. \
    Finally the information exported to excel to be shared with the client. \
    To do the whole process manually was very time consuming and monotonous.",
  },
  {
    element: (
      <Image
        src="/images/week04/interior-fitup2.png"
        alt="3. Interior fit-up Calculations"
        caption={"3. Interior fit-up calculations (automation script)"}
      />
    ),
    notes:
      "This spaghetti code looks very complicated because I was just learning how to use Dynamo, the more one uses it, the simpler and cleaner the script becomes",
  },
  {
    element: (
      <Image
        src="/images/week04/interior-fitup3.png"
        alt="3. Interior fit-up Calculations"
        caption={"3. Interior fit-up calculations (automation script)"}
      />
    ),
    notes: "",
  },
  {
    element: (
      <Image
        src="/images/week04/interior-fitup4.png"
        alt="3. Interior fit-up Calculations"
        caption={
          "3. Interior fit-up calculations (automation script - zoom to calculations and output)"
        }
      />
    ),
    notes: "",
  },
  {
    element: (
      <Image
        src="/images/week04/interior-fitup5.png"
        alt="3. Interior fit-up Calculations"
        caption={
          "3. Interior fit-up calculations (automation script - zoom to calculations and output)"
        }
      />
    ),
    notes: "",
  },
  {
    element: (
      <Image
        src="/images/week04/titleblock.png"
        alt="4. Titleblock and printing"
        caption={"4. Titleblock and printing (manual process)"}
      />
    ),
    notes:
      "Before every submission we had to make sure the Titleblock contained the right information and set the printing set one by one. \
    There were always too many things to check, and for something that we were updating every week the automatic process helped a lot.",
  },
  {
    element: (
      <Image
        src="/images/week04/titleblock2.png"
        alt="4. Titleblock and printing"
        caption={"4. Titleblock and printing (automation script)"}
      />
    ),
    notes:
      "This kind of tasks are the ones that one do without too much energy and distracted, so mistakes are easily made. \
      With this solution you just input the desired information (on the green boxes) and Dynamo automatically does everything else for you. \
      Hundreds of sheets got the titleblock updated in seconds and without mistakes. \
      And the printing set is also automatically updated, so one could go ahead and print felling 100% sure.",
  },
  {
    element: (
      <Image
        src="/images/week04/titleblock3.png"
        alt="4. Titleblock and printing"
        caption={"4. Titleblock and printing (automation script)"}
      />
    ),
    notes:
      "This kind of tasks are the ones that one do without too much energy and distracted, so mistakes are easily made. \
      With this solution you just input the desired information (on the green boxes) and Dynamo automatically does everything else for you. \
      Hundreds of sheets got the titleblock updated in seconds and without mistakes. \
      And the printing set is also automatically updated, so one could go ahead and print felling 100% sure.",
  },
  {
    element: (
      <Image
        src="/images/week04/room-outlines1.png"
        alt="5. Room Outlines"
        caption={"5. Room Outlines (manual process)"}
      />
    ),
    notes: "",
  },
  {
    element: (
      <Image
        src="/images/week04/room-outlines2.png"
        alt="5. Room Outlines"
        caption={"5. Room Outlines (automation script)"}
      />
    ),
    notes:
      "I created this script that automatically created the lines with the right colour",
  },
  {
    element: (
      <Image
        src="/images/week04/material-quantities1.png"
        alt="6. Automatic Material Quantities and Diagrams in real-time"
        caption={
          "6. Automatic Material Quantities and Diagrams in real-time (automation script)"
        }
      />
    ),
    notes:
      "Here the client was asking us to generate quick diagrams based on different materials.\
    We were able to test multiple design options and the diagrams were produced in real time with all the information about square meters, cost, etc.",
  },
  {
    element: (
      <Image
        src="/images/week04/material-quantities2.png"
        alt="6. Automatic Material Quantities and Diagrams in real-time"
        caption={
          "6. Automatic Material Quantities and Diagrams in real-time (automation script)"
        }
      />
    ),
    notes:
      "Here the client was asking us to generate quick diagrams based on different materials.\
    We were able to test multiple design options and the diagrams were produced in real time with all the information about square meters, cost, etc.",
  },
  {
    element: (
      <Image
        src="/images/week04/worksets1.png"
        alt="7. Automatic Categorization of elements"
        caption={"7. Automatic Categorization of elements"}
      />
    ),
    notes:
      "Set Elements by Category and Level into the right Workset. \
Automating this process saves a lot of time and keeps all the elements in the right place. \
For collaborating in big projects, such as the Carleton Digital Campus, or the Parliament Rehabilitation Project \
 with many actor it is really useful.",
  },
  {
    element: (
      <Image
        src="/images/week04/worksets2.png"
        alt="7. Automatic Categorization of elements"
        caption={"7. Automatic Categorization of elements"}
      />
    ),
    notes:
      "Set Elements by Category and Level into the right Workset. \
Automating this process saves a lot of time and keeps all the elements in the right place. \
For collaborating in big projects, such as the Carleton Digital Campus, or the Parliament Rehabilitation Project \
 with many actor it is really useful.",
  },

  {
    element: (
      <Image
        src="/images/week04/vr1.png"
        alt="8. Semi-automatic BIM to VR"
        caption={"8. Semi-automatic BIM to VR"}
      />
    ),
    notes:
      "You can use Dynamo to categorize groups of elements together \
      In this case we use a script to automate the process of turning a BIM model into VR for the Library of Parliament.  \
      That process was done manually and was very time consuming \
      It consisted in identifying Elements by Geometry Levels for the polycount (the amount of triangles or faces to generate a mesh) \
      A script was created to speed up the filtering process, reduce time, and decrease the risk of error.",
  },
  {
    element: (
      <Image
        src="/images/week04/vr2.png"
        alt="8. Semi-automatic BIM to VR"
        caption={"8. Semi-automatic BIM to VR"}
      />
    ),
    notes:
      "The script automated the process allowing for a quick filtering \
      and exporting process. \
      The script collected all the required elements from Revit.  \
      Elements were automatically grouped based on their Revit family category and assigned a geometry level. \
      The elements were easily isolated for exporting from Revit ready to be exported to a VR environment.  \
      The script decreased the pre-filtering and exporting to an average reduction of eighty percent.",
  },
  {
    element: (
      <Image
        src="/images/week04/vr3.png"
        alt="8. Semi-automatic BIM to VR"
        caption={"8. Semi-automatic BIM to VR"}
      />
    ),
    notes:
      "In the Fall last year, this example was published on the TAD journal. ",
  },
  {
    element: (
      <Image
        src="/images/week04/comparing-elements.png"
        alt="9. Version control - Comparing elements from different files"
        caption={"9. Version control - Comparing elements from different files"}
      />
    ),
    notes:
      "You can use dynamo to Import and export data from different models and compare that that using external software such as excel.",
  },
  {
    element: (
      <Image
        src="/images/week04/excel.png"
        alt="10. Importing and exporting Excel to Revit and vice versa"
        caption={"10. Importing and exporting Excel to Revit and vice versa"}
      />
    ),
    notes:
      "Automatically generation of DFH (Doors, Frames, and Hardware) packages coming from the doors schedule and being imported and exported into and from Excel to be share with the DFH provider. \
      Some disciplines do not use Revit yet and with this tool makes it easier to communicate and collaborate with them.",
  },
  {
    element: (
      <Image
        src="/images/week04/excel.png"
        alt="11. Importing and exporting Excel to Revit and vice versa"
        caption={"10. Importing and exporting Excel to Revit and vice versa"}
      />
    ),
    notes:
      "Automatically generation of DFH (Doors, Frames, and Hardware) packages coming from the doors schedule and being imported and exported into and from Excel to be share with the DFH provider. \
      Some disciplines do not use Revit yet and with this tool makes it easier to communicate and collaborate with them.",
  },

  {
    element: (
      <Image
        src="/images/week04/excel.png"
        alt="11. Importing and exporting Excel to Revit and vice versa"
        caption={"10. Importing and exporting Excel to Revit and vice versa"}
      />
    ),
    notes:
      "Automatically generation of DFH (Doors, Frames, and Hardware) packages coming from the doors schedule and being imported and exported into and from Excel to be share with the DFH provider. \
      Some disciplines do not use Revit yet and with this tool makes it easier to communicate and collaborate with them.",
  },

  {
    element: (
      <Image
        src="/images/week04/carleton-dynamo.png"
        alt="Carleton Dynamo"
        caption={
          '12. Real-time simulations or Digital Twin of Carleton University"'
        }
      />
    ),
    notes:
      "In this example we are using Dynamo to create a “Digital Twin” or a dynamic copy of Carleton University’s campus. \
      For this project at CIMS, we use Dynamo to read an URL (web domain address) and based on that, make periodic changes to the model in real-time. \
      Basically, dynamo is a great tool to program solutions to everyday problems.",
  },

  {
    element: (
      <Video
        src="https://www.youtube.com/embed/P0VdmEIJ65c?si=sjo2Qk3Y1NKr_H9C&amp;start=130"
        title="Digital Twin of Carleton University"
        caption={"Digital Twin of Carleton University"}
      />
    ),
  },

  {
    element: (
      <Image
        src="/images/week04/occupancy.gif"
        alt="Carleton Occupancy"
        caption={
          'Real-time simulations or Digital Twin of Carleton University - Occupancy"'
        }
      />
    ),
    notes: "",
  },

  {
    element: (
      <Image
        src="/images/week04/parking.gif"
        alt="Carleton Parking"
        caption={
          'Real-time simulations or Digital Twin of Carleton University - Parking"'
        }
      />
    ),
    notes: "",
  },

  {
    element: (
      <Image
        src="/images/week04/sunlight.gif"
        alt="Carleton Parking"
        caption={
          'Real-time simulations or Digital Twin of Carleton University - Sunlight analysis"'
        }
      />
    ),
    notes: "",
  },

  {
    element: (
      <EmojiTitle
        emoji={"🤬‼️"}
        title={"This course is about Open-source tools for architects!"}
      />
    ),
  },
  {
    element: (
      <EmojiTitle
        emoji={"🧑‍🏫💻💘"}
        title={
          "Proprietary scripting is a good way of getting familiarized with the logic of programming. \
        Proprietary scripting can also free you from the limitations of GUIs and they help you to interact with TUIs and APIs"
        }
      />
    ),
  },
  {
    element: (
      <>
        <h2>Open-source Alternatives? 💸</h2>
        <br />
        <Image
          src="/images/week04/blender-geometry-nodes.png"
          alt={"Blender - Geometry Nodes"}
          href="https://docs.blender.org/manual/en/latest/modeling/geometry_nodes/introduction.html"
          caption={
            "Blender's Geometry Nodes is a free and open source alternative to Grasshopper and potentially Dynamo"
          }
        />
      </>
    ),
  },

  {
    element: (
      <Video
        src="https://www.youtube.com/embed/aO0eUnu0hO0?si=YGXrufwgp8b4l1bj"
        title="Blender - Geometry Nodes"
        caption={"Blender - Geometry Nodes"}
      />
    ),
  },
];
