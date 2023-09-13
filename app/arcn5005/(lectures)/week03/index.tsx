import { Toc } from "../../../../types/types";
import Image from "../../../../components/Common/Image";
import Video from "../../../../components/Common/Video";
import Quote from "../../../../components/Common/Quote";
import EmojiTitle from "../../../../components/Common/EmojiTitle";
import PdfViewer from "../../../../components/Common/PdfViewer";

export const content: Toc = [
  {
    element: (
      <>
        <Image
          src="/images/week03/tools-of-the-imagination.jpg"
          alt="Tools of the Imagination"
          href="https://books.google.com.na/books?id=1WUIIh99xDkC&printsec=frontcover&source=gbs_book_other_versions_r&cad=4#v=onepage&q&f=false"
        />
        <h4>
          <em>
            The architect needs the right tools for the job. [...] The newest
            tool, the computer, is really an entirely new toolbox full of
            software to solve old and new problems.
          </em>
          <h5>
            <br />
            <em>Susan Piedmont Palladino - Tools of the imagination .</em>
          </h5>
        </h4>
      </>
    ),
  },
  {
    element: (
      <h4>
        <em>
          It is through the mastery of the full range of tools that the images
          in the architect’s mind are translated into drawings and models, and
          from the drawings and the models into buildings. Whether a simple
          pencil or computer software, these tools give form to the wishes and
          the instructions of the architect, but they are also active shapers of
          what is possible.
        </em>
        <h5>
          <br />
          <em>Susan Piedmont Palladino - Tools of the imagination .</em>
        </h5>
      </h4>
    ),
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
      "In 1973, Ivan Sutherland at MIT developed a program called ‘Sketchpad’, which can be considered as the first computer drawing program or the first graphical user interface (GUI).\
       GUIs are human-computer interaction devices that allow users to interact with the computer through graphical icons instead of written code.\
       With a GUI the user can click or touch and manipulate the symbols displayed on the screen and thus, directly alter the program.\
       GUIs made computer more accessible for non-programmers, including architects.\
       Since then, GUIs are certainly the preferred vehicle for architects to interact with computers.",
  },
  {
    element: (
      <h4>
        <em>
          Sketchpad pioneered the graphical user interface (GUI), which allows
          interaction with the virtual world without typing in long strings of
          coded commands. Instead, the user points, clicks, and double-clicks on
          displays of icons, the virtual tools on the screen.
        </em>
        <h5>
          <br />
          <em>Susan Piedmont Palladino - Tools of the imagination .</em>
        </h5>
      </h4>
    ),
  },
  {
    element: (
      <h4>
        <em>
          GUIs quickly became “the only computer use that most people had ever
          known”
        </em>
        <h5>
          <br />
          <em>Mario Carpo - Digital Turn</em>
        </h5>
      </h4>
    ),
  },
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
    element: (
      <Image
        src="/images/week01/vendors.png"
        alt="AECO's main CAD/BIM Vendors"
        caption={"AECO's main CAD/BIM Vendors"}
      />
    ),
    notes:
      "the programs for architects that were produced using GUIs had been designed with specific functionalities.\
      On the one hand, they allowed architects to explore infinite graphic possibilities.\
      On the other hand, they drastically limited the boundaries that architects could explore outside what had been programmed.",
  },
  {
    element: (
      <Image
        src="/images/week01/process-with-gui.png"
        alt="Digital Creative Process"
        caption={"Digital creative process with GUI"}
      />
    ),
    notes:
      "Carpo says that GUIs quickly became “the only computer use that most people had ever known”.\
      This was the moment when, for most architects, programming ceased to be an open language to interact with the machine, and thus became a tool.\
      In some cases, an accessible tool, but in most cases, an utterly opaque one.",
  },
  {
    element: (
      <>
        <h1>❔</h1>
        <br />
        <h2>Do you know what CAD stands for?</h2>
      </>
    ),
  },
  {
    element: (
      <>
        <h1>❔</h1>
        <br />
        <h2>
          Computer Aided <b>Design</b> or Computer Aided <b>Drafting</b>?
        </h2>
      </>
    ),
  },
  {
    element: (
      <>
        <h1>❔</h1>
        <br />
        <h2>
          <b>CADD</b> : Computer Aided Design and Drafting
        </h2>
        <br />
        <h2>
          <b>CAAD</b> : Computer Aided Architectural Desing
        </h2>
      </>
    ),
  },
  {
    element: <EmojiTitle emoji={"❔"} title={"Basis of CAD"} />,
  },
  {
    element: (
      <>
        <h2>Drawing with Pixels ✏️</h2>
        <br />
        <iframe
          className="w-full h-full"
          src="https://acepixels.netlify.app/"
        />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>Drawing with Vectors ✏️</h2>
        <br />
        <iframe
          className="w-full h-full"
          src="https://editor.p5js.org/alptugan/sketches/Ob3l1fsrO"
        />
      </>
    ),
  },
  {
    element: (
      <>
        <h2>Drawing with P5 ✏️</h2>
        <br />
        <iframe
          className="w-full h-full"
          src="/arcn5005/f2023/students/nicolasarellanorisop/p5/index.html"
        />
      </>
    ),
  },

  {
    element: <PdfViewer src="/resources/may_everythingisalreadyanimage.pdf" />,
  },
  {
    element: (
      <Image
        src="/images/week03/autocad.png"
        alt={"Autodesk's AutoCad"}
        href="https://en.wikipedia.org/wiki/AutoCAD"
        caption={"Autodesk's AutoCad is the world's most popular CAD software"}
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week03/autocad-pricing.png"
        alt={"Autodesk's AutoCad"}
        href="https://www.autodesk.ca/en/products/autocad/overview?mktvar002=5656878%7CSEM%7C16183926843%7C137132251670%7Cpla-933128653804_autocad&plc=ACDIST&term=1-YEAR&support=ADVANCED&quantity=1&utm_source=GGL&utm_medium=SEM&utm_term=pla-933128653804&utm_id=5656878&utm_campaign=GGL_DEC_All-Products_AMER_CA_eComm_PLA_BR_New_NA_0000_4424459_&mkwid=s|pcrid|581813781112|pkw||pmt||pdv|c|slid||pgrid|137132251670|ptaid|pla-933128653804|pid|Autodesk%20AutoCAD%20(1%20year%20subscription)&utm_medium=cpc&utm_source=google&utm_campaign&utm_term&utm_content=s|pcrid|581813781112|pkw||pmt||pdv|c|slid||pgrid|137132251670|ptaid|pla-933128653804|&gclid=EAIaIQobChMIoovk042ogQMVP_uUCR2dig90EAYYAiABEgJY2PD_BwE&ef_id=ZQHwuAAABOyV0B@V:20230913172616:s&tab=subscription"
        caption={
          "Autodesk's AutoCad pricing in 2023 - CA$2575 per year per 1 user"
        }
      />
    ),
  },
  {
    element: (
      <>
        <h2>Alternatives? 💸</h2>
        <br />
        <Image
          src="/images/week03/librecad.png"
          alt={"LibreCad"}
          href="https://wiki.librecad.org/index.php"
          caption={"LibreCad is a free and open source alternative to AutoCad"}
        />
      </>
    ),
  },
  {
    element: (
      <>
        <h1>❔</h1>
        <br />
        <h2>Do you know what BIM stands for?</h2>
      </>
    ),
  },
  {
    element: (
      <>
        <h1>Building Information Model or Building Information Modelling</h1>
        <br />
        <h5>... definitelly not a great acronym</h5>
      </>
    ),
  },
  {
    element: (
      <>
        <h1>❔</h1>
        <br />
        <h2>How is BIM different from CAD?</h2>
      </>
    ),
  },
  {
    element: (
      <Image
        src="/images/week03/bim-books.png"
        alt="BIM Books"
        caption={"Three fundamental BIM books: Weygnant’s, Saxon’s, Eastman’s"}
      />
    ),
    notes:
      "Weygnant’s definition is a good baseline for tool-oriented people; Saxon’s explanation is for client/business-oriented people; Eastman is considered the father of BIM, and has the most technically correct definition",
  },
  {
    element: (
      <Image
        src="/images/week03/levels.png"
        alt="BIM Maturity Levels"
        caption={"BIM Maturity Levels"}
      />
    ),
    notes: "",
  },
  {
    element: (
      <Image
        src="/images/week03/revitorarchicad.png"
        alt="Revit or Archicad?"
        caption={
          "BIM authoring tools have been fighting to become the starndard tool in the industry. Who is winning?"
        }
      />
    ),
    notes: "",
  },
  {
    element: (
      <Video
        src="https://www.youtube.com/embed/iuiichHnV9g?si=qgNvNyF7h8Pwk5S1"
        title="Revit wins"
        caption={"Revit has become the most popular BIM software in the world"}
      />
    ),
    notes: "",
  },
  {
    element: (
      <Image
        src="/images/week03/revit.png"
        alt={"Autodesk's Revit"}
        href="https://en.wikipedia.org/wiki/Autodesk_Revit"
        caption={"Autodesk's Revit is the world's most popular BIM software"}
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week03/closed-bim.png"
        alt="Closed BIM"
        caption={
          "Proprietary BIM authoring tools and formats turn BIM into a closed process\
          BIM has been defined as a communication and collaboration tool or process originally created to connect people, processes, and data.\
However, that is not exactly the way the Architecture Engineering and Construction or AEC industry is using BIM.\
The status quo is to work with proprietary solutions and closed file formats."
        }
      />
    ),
    notes: "",
  },
  {
    element: (
      <>
        <h1>❔</h1>
        <br />
        <h2>Why should we care?</h2>
      </>
    ),
  },
  {
    element: (
      <Image
        src="/images/week03/mandates.png"
        alt="BIM Mandates"
        caption={"By BICP Global BIM Study - Lessons For Ireland's Programme"}
      />
    ),
    notes:
      "Government BIM mandates.\
    Countries all over the word are becoming to regulate the use of BIM. So if one wants to participate in public works and even non public projects BIM is a requirement.\
    Which means that BIM is in many cases not an option anymore but a mandate.\
    Knowing that BIM software are mainly controlled by a few vendors, this mean that these software companies will have a tremendous impact over our practice.",
  },
  {
    element: (
      <Image
        src="/images/week03/revit-pricing.png"
        alt={"Autodesk's Revit 2023 price"}
        href="https://www.autodesk.ca/en/products/revit/overview?us_oa=dotcom-us&us_si=8abb21ea-6ba6-46ac-929b-39cecb847ed0&us_st=revit&us_pt=RVT&term=1-YEAR&tab=subscription&plc=RVT"
        caption={
          "Autodesk's Revit pricing in 2023 - CA$3695 per year per 1 user"
        }
      />
    ),
  },
  {
    element: (
      <>
        <h2>Alternatives? 💸</h2>
        <br />
        <Image
          src="/images/week03/blenderbim.png"
          alt={"BlenderBIM"}
          href="https://blenderbim.org/"
          caption={"BlenderBIM is a free and open source alternative to Revit"}
        />
      </>
    ),
  },
  {
    element: (
      <>
        <h1>💻 Lab 3</h1>
        <br />
        <h2>LibreCad</h2>
        <br />
        <h2>Blender</h2>
      </>
    ),
  },
];
