import { Toc } from "../../../../types/types";

import Image from "../../../../components/Common/Image";
import Video from "../../../../components/Common/Video";
import Quote from "../../../../components/Common/Quote";
import EmojiTitle from "../../../../components/Common/EmojiTitle";
import PdfViewer from "../../../../components/Common/PdfViewer";
import ClosedBim from "./ClosedBim";

export const content: Toc = [
  {
    element: (
      <Image src="/images/osarch/osarch.png" alt="OSARCH" caption={"OSArch"} />
    ),
    notes: "",
  },
  {
    element: (
      <Video
        src="https://www.youtube.com/embed/mBQb2ILySfg?si=CBeJKdvHX9_VV_h3"
        title="OSArch - Open source for architects community"
        caption={"OSArch - Open source for architects community"}
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/osarch/osarch-software.png"
        alt="Osarch software"
        caption={"OSArch - Software"}
      />
    ),
    notes:
      "In the last couple of years open-source community for the AEC industry has grown in an accelerated pace. \n\
    There are hundreds of open-source packages available for us. \n\
    This is a new reality for architects, that makes tools more accessible…  \n\
    There are several solutions available and by combining some of them the possibilities are endless.",
  },
  { element: <iframe className="w-full h-full" src="https://osarch.org/" /> },
  {
    element: (
      <iframe
        className="w-full h-full"
        src="https://wiki.osarch.org/index.php?title=Home_of_OSArch"
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/osarch/timeline.png"
        alt="OS timeline"
        caption={"OSArch - timeline"}
      />
    ),
    notes:
      "However, before the end of 2019 to imagine an alternative to proprietary software for the AEC industry was challenging.\n\
      The industry was (and still is) too dependant on the main vendor’s solutions.\n\
      But then, a chain of events started to open the door to alternatives\n\
      → In October 2019 Dion Moult releases BlenderBIM\n\
      → In February 2020, the OS Arch is created: OSArch,, is an online community that promotes that the built environment can be designed, constructed, operated, and recycled with free/libre and open-source software.\n\
      → In July 2020, several leading UK and international AEC firms wrote an open letter to Autodesk’ demanding changes related to costs, licensing & business practices\n\
      → In December 2020 the IFC.js library is released. The first FLOSS online library to work with BIM and IFC.\n\
      → In September 2022 there is a follow-up letter by the Nordic Architectural Associations endorsed by  the Architects’ council of Europe. \n\
      → We don’t know about 2023 but I believe this is the year for CIMS…\n\
      → In my opinion, instead of writing letters to the vendors we as sector need to keep taking action with our own hands. \n\
      → This is what I am trying to do with the epistemic object.",
  },
  {
    element: <PdfViewer src={"letter-to-autodesk.pdf"} />,
  },
  {
    element: (
      <PdfViewer
        src={
          "A Reply To Our Customers’ Open Letter On Autodesk Revit _ Autodesk News.pdf"
        }
      />
    ),
  },
  {
    element: <PdfViewer src={"Nordic OPEN LETTER TO AUTODESK.pdf"} />,
  },
  {
    element: (
      <iframe
        src="https://the-nordic-letter.com/"
        title="NORDIC LETTER TO AUTODESK"
      />
    ),
  },

  {
    element: (
      <Video
        src="https://www.youtube.com/embed/DK4zmfkp_pw?si=MWZZzjmOa4O9jB-B"
        title="Free / libre & Open Source software in AEC, and how it impacts OpenBIM"
        caption={
          "Free / libre & Open Source software in AEC, and how it impacts OpenBIM"
        }
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/osarch/bim.png"
        alt="bim"
        caption={"BIM - Building Information Modelling"}
      />
    ),
    notes:
      "Going back to BIM. Is nowadays the most widely use digital process for architects. \n\
    In industrialized countries, the bast majority of buildings are now designed and managed using BIM. \n\
    BuildingSmart International is an open, neutral not-for-profit organization committed to creating and developing open digital ways of working for BIM \n\
    They promote the concept of openBIM",
  },

  {
    element: (
      <Image
        src="/images/osarch/openbim.png"
        alt="openbim"
        href="https://www.buildingsmart.org/about/osarch/openbim-definition/"
        caption={"BuildingSmart International - OpenBIM (?)"}
      />
    ),
    notes:
      "BuildingSmart states that openBIM extends the benefits of BIM by improving its:  \n\
    → accessibility,  \n\
    → usability, and \n\
    → sustainability of digital data in the building industry.  \n\
    → is a vendor-neutral collaborative process that  \n\
    → facilitates interoperability to benefit projects throughout their entire lifecycle. \n\
   openBIM ensures: \n\
    → Openness of assets and processes \n\
    → Collaboration between stakeholders \n\
    → Flexibility of choice of technology  \n\
    Also, The ISO 19650 (which is the chapter about BIM for the International Organization for Standarization) defines open data as data available or visible to others and that can be freely used, re-used, re-published and redistributed by anyone.",
  },
  {
    element: (
      <Image
        src="/images/osarch/openbim-definition.png"
        alt="openbim definition"
        href="https://wiki.osarch.org/index.php?title=OpenBIM"
        caption={"BuildingSmart International - OpenBIM Definition"}
      />
    ),
    notes:
      "I agree with this definition of openBIM, \n\
      however, at the end of the day, OpenBIM sounds a lot like regular BIM. \n\
      All of these concepts are what BIM was designed for. \n\
      BIM is all about connecting people, processes, and data. \n\
      because BIM was originally intended to be a collaborative approach to lifecycle management.",
  },

  {
    element: (
      <Image
        src="/images/osarch/closed-bim.png"
        alt="closed-bim"
        caption={"Closed-BIM"}
      />
    ),
    notes:
      "The other thing that we tend to call BIM is what we should call ClosedBIM, \n\
      proprietary software and closed file formats are useful to manage BIM. \n\
, but unfortunately, they have one big limitation, \n\
it is very hard to achieve openBIM",
  },

  {
    element: (
      <Image
        src="/images/osarch/closed-bim-definition.png"
        alt="closed-bim definition"
        caption={"Closed-BIM - Trapped in the black box"}
      />
    ),
    notes:
      "When we use proprietary formats, we are without doubt trapped in a black box for the following reasons:",
  },

  { element: <ClosedBim /> },

  {
    element: (
      <Video
        src="https://www.youtube.com/embed/pNXssDb50qI?si=3JZq2lPzVYzhpLLs?si=FLDr9AqvaDFqnuj1&amp;start=53"
        title="BIM Voice - Dion Moult - What is OpenBIM?"
        caption={"BIM Voice - Dion Moult - What is OpenBIM?"}
      />
    ),
  },

  // IFC

  {
    element: (
      <Image
        src="/images/osarch/ifc.png"
        alt="IFC"
        href="https://www.buildingsmart.org/standards/bsi-standards/industry-foundation-classes/"
        caption="Industry Foundation Classes (IFC)"
      />
    ),
    notes:
      "At its core, buildingSMART enables the entire built asset industry to improve the sharing of information throughout the lifecycle of project or asset. \n\
    By breaking down the silos of information, end users can better collaborate and cooperate regardless of which software application they are using. \n\
    buildingSMART’s technical core is based around Industry Foundation Classes (IFC) which was ISO certified in 2013. \n\
    IFC is a standardized, digital description of the built asset industry. \n\
    It is an open, international standard (ISO 16739-1:2018) and promotes vendor-neutral, or agnostic, and usable capabilities across a wide range of hardware devices, \
    software platforms, and interfaces for many different use cases. More about IFC, its uses and adoption may be found here.",
  },
  {
    element: (
      <Video
        src="https://www.youtube.com/embed/9YgXXbdohOQ?si=iv5Iq_VxtjHtACTQ"
        title="What is IFC (Industry Foundation Classes)?"
        caption={
          "What is IFC (Industry Foundation Classes)? - archive file approach"
        }
      />
    ),
  },

  {
    element: (
      <Video
        src="https://www.youtube.com/embed/h2Rv9iu7yDk?si=JoqYT8H4xzmxrXZm"
        title="Introduction to OpenBIM, Native IFC, and Open Source AEC"
        caption={"Introduction to OpenBIM, Native IFC, and Open Source AEC"}
      />
    ),
  },

  {
    element: (
      <>
        <h2>Which language to use?</h2>
        <br />
        <h4>All modern web browsers are based on 3 technologies</h4>
        <br />
        <Image
          src="/images/html-css-js.png"
          alt="html-css-js"
          caption={"Technology behind web browsers: HTML - CSS - JS"}
        />
      </>
    ),
  },
  // CSS CONTENT
  {
    element: (
      <Image
        src="/images/css/css.png"
        alt="css"
        href="https://www.w3schools.com/css/css_intro.asp"
        caption={
          "Cascading Style Sheets (CSS) is the language we use to style an HTML document"
        }
      />
    ),
    notes:
      "CSS is the language we use to style an HTML document. \n\
    CSS describes how HTML elements should be displayed. \n\
    This tutorial will teach you CSS from basic to advanced.",
  },
  {
    element: (
      <Video
        src="https://www.youtube.com/embed/nJAVn_VEt58?si=fZhMLNeyMfVlDfIg"
        title="OSArch - Open source for architects community"
        caption={"Introduction to CSS"}
      />
    ),
  },
  {
    element: (
      <>
        <Image
          src="/images/css/css-diagram.png"
          alt="css"
          href="https://www.w3schools.com/js/default.asp"
          caption={"CSS syntax"}
        />
      </>
    ),
    notes:
      "Cascading Style Sheets (CSS), is a simple design language intended to transform the presentation of a Web Pages as well as many ostensibly non-web environments. \n\
    CSS handles the look and feel part of a web page. Using CSS, you can control the color of the text, the style of fonts, the spacing between paragraphs, \n\
    how columns are sized and laid out, what background images or colors are used, layout designs, \n\
    variations in display for different devices and screen sizes as well as a variety of other effects. \n\
    CSS is easy to learn and understand but it provides powerful control over the presentation of an HTML document. Most commonly, CSS is combined with the markup languages HTML or XHTML.",
  },
  {
    element: (
      <>
        <h2>How to use CSS?</h2>
        <br />
        <Image src="/images/css/css-types.png" alt="types" />
      </>
    ),
    notes:
      "The third option generally is the cleanest and the standard due to the separation of concerns it’s much better to separate the structure of the application from its style. \n\
    Generally the styles are contained in a separate file which by convention is called `styles.css` *or something similar. This is where the CSS code will be contained. \n\
    Making one or several CSS files depends on the project. \n\
    *** A single CSS file usually is more than enough for simple projects, but we’ll see some cases in which we’ll want to separate them (e.g. when creating responsive styles) \n\
    The CSS files must be linked to the HTML by inserting a `<link>` element in the `<head>` section as follows:",
  },

  {
    element: (
      <div className=" overflow-y-auto px-8">
        <h2>CSS Selectors</h2>
        <h4>
          CSS selectors are used to “find” (or select) the HTML elements you
          want to style.
        </h4>
        <br />
        <ol>
          <li>
            <h3>Universal selectors</h3>
            <h5>
              The universal selector (*) selects all HTML elements on the page.
              <br /> example:
              <b className="text-red-500">* {"{color: red;}"}</b>
            </h5>
          </li>
          <li>
            <h3>ID selectors</h3>
            <h5>
              The id selector uses the id attribute of an HTML element to select
              a specific element. <br /> The id of an element is unique within a
              page, so the id selector is used to select one unique element!
              <br />
              To select an element with a specific id, write a hash (#)
              character, followed by the id of the element. <br /> example:
              <b className="text-red-500">#page-title {"{color: red;}"}</b>
            </h5>
          </li>
          <li>
            <h3>Class selectors</h3>
            <h5>
              The class selector selects HTML elements with a specific class
              attribute. <br />
              To select elements with a specific class, write a period (.)
              character, followed by the class name. <br /> example:
              <b className="text-red-500">.pages {"{color: red;}"}</b>
            </h5>
          </li>
          <li>
            <h3>HTML Group selectors</h3>
            <h5>
              The grouping selector selects all the HTML elements with the same
              style definitions.
              <br />
              Look at the following CSS code (the h1, h2, and p elements have
              the same style definitions)
              <br /> example:
              <b className="text-red-500">h1 {"{color: red;}"}</b>
              <br /> example:
              <b className="text-blue-500">h2 {"{color: blue;}"}</b>
              <br /> example:
              <b className="text-green-500">p {"{color: green;}"}</b>
            </h5>
          </li>
        </ol>
      </div>
    ),
  },
  {
    element: (
      <>
        <Image
          src="/images/css/css-colors.png"
          alt="CSS Colors"
          href="https://color-hex.org/blog/color-wiki"
          caption={"CSS Colors: Names, HEX,  RGB+a, RGB+a"}
        />
      </>
    ),
    notes:
      "1. BY NAME: Browsers support some colors by their name. Table shows names, hexadecimal code, values in RGB, HSL formats and description. \n\n\
      2. HEX: Hexadecimal colors are based, on the number 16. The numbers are as follows: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F. \
      Numbers from 10 to 15 are replaced by Latin letters. Numbers which are greater than 15 in the hexadecimal system are formed by combining two numbers into one. \
      For example, the number 255 in the decimal system corresponds to FF value in the hexadecimal system. \
      In order to avoid confusion in the definition of the number system, the hexadecimal number is preceded by octothorp, for example # 666999 or 0x... in JavaScript. \
      Each of three colors - red, green and blue - can take the value from 00 to FF. \
      Thus, color representation is divided into three #rrggbb components, where the first two characters represent the red component of the color, two others in the middle represent green, and the last two represent blue. \
      It is acceptable to use the abbreviated form of #rgb coding type, where each character has to be doubled. Thus, the code # fe0 is to be considered as # ffee00.\n\n\
      3. RGB+a: The color can be defined by using red, green, and blue components in decimal value. Each of three color components takes value from 0 to 255. It is also possible to set the color percentagewise with 100% corresponding to the number 255. At first the rgb keyword to be indicated, \
      and then color components within the brackets and separated by a comma, for example rgb (255, 128, 128) or rgb (100%, 50%, 50%). \
      The RGBA format is similar to RGB in syntax, but includes the alpha channel that specifies the transparency of the element. The value 0 corresponds to full transparency, the value 1 to opacity, and the intermediate value like 0.5 to translucency. \n\n\
      4. HSL+a: Hue, Saturate and Lightness. Hue is the color value on the color wheel and is measured in degrees. 0° corresponds to red, 120 ° to green, and 240 ° to blue. The hue value can vary from 0 to 359. \
      Saturation is the intensity of the color, measured in percentages from 0% to 100%. The value of 0% means the absence of the color and the shade of gray, the value of 100% means the maximum value of saturation. \
      Lightness specifies how bright the color is and is measured in percentages from 0% to 100%. Small values make the color darker, and high values make the color lighter, values of 0% and 100% correspond to black and white.",
  },

  {
    element: (
      <>
        <h2>CSS Units 📏</h2>
        <br />
        <h4>
          Many CSS properties take <em>length</em> values, such as width,
          margin, padding, font-size, etc.
        </h4>
        <br />
        <Image
          src="/images/css/css-units.png"
          alt="CSS Units"
          caption={"CSS Units"}
        />
      </>
    ),
  },
  {
    element: (
      <>
        <h2>Absolute Lengths</h2>
        <h5>
          The absolute length units are fixed and a length expressed in any of
          these will appear as exactly that size. Absolute length units are not
          recommended for use on screen, because screen sizes vary so much.
          However, they can be used if the output medium is known, such as for
          print layout.
        </h5>
        <br />
        <table className="simple-table  text-left">
          <tbody>
            <tr>
              <th>Unit</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>cm</td>
              <td>centimeters</td>
            </tr>
            <tr>
              <td>mm</td>
              <td>millimeters</td>
            </tr>
            <tr>
              <td>in</td>
              <td>inches (1in = 96px = 2.54cm)</td>
            </tr>
            <tr>
              <td>px *</td>
              <td>pixels (1px = 1/96th of 1in)</td>
            </tr>
            <tr>
              <td>pt</td>
              <td>points (1pt = 1/72 of 1in)</td>
            </tr>
            <tr>
              <td>pc</td>
              <td>picas (1pc = 12 pt)</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
  {
    element: (
      <>
        <h2>Relative Lengths</h2>
        <h5>
          Relative length units specify a length relative to another length
          property. Relative length units scale better between different
          rendering mediums.
        </h5>
        <br />
        <table className="simple-table  text-left">
          <tbody>
            <tr>
              <th>Unit</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>em</td>
              <td>
                Relative to the font-size of the element (2em means 2 times the
                size of the current font)
              </td>
            </tr>
            <tr>
              <td>ex</td>
              <td>
                Relative to the x-height of the current font (rarely used)
              </td>
            </tr>
            <tr>
              <td>ch</td>
              <td>Relative to width of the 0 (zero)</td>
            </tr>
            <tr>
              <td>rem</td>
              <td>Relative to font-size of the root element</td>
            </tr>
            <tr>
              <td>vw</td>
              <td>Relative to 1% of the width of the viewport*</td>
            </tr>
            <tr>
              <td>vh</td>
              <td>Relative to 1% of the height of the viewport*</td>
            </tr>
            <tr>
              <td>vmin</td>
              <td>Relative to 1% of viewport`s* smaller dimension</td>
            </tr>
            <tr>
              <td>vmax</td>
              <td>Relative to 1% of viewport`s* larger dimension</td>
            </tr>
            <tr>
              <td>%</td>
              <td>Relative to the parent element</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },

  {
    element: (
      <>
        <h2>CSS Box Model 📏</h2>
        <br />
        <h4>
          In CSS, the term <em>box model</em> is used when talking about design
          and layout. The CSS box model is essentially a box that wraps around
          every HTML element. It consists of: margins, borders, padding, and the
          actual content. The image below illustrates the box model:
        </h4>
        <br />
        <Image
          src="/images/css/css-box-model.png"
          alt="CSS Box Model"
          caption={"CSS Box Model"}
        />
      </>
    ),
  },
  {
    element: (
      <EmojiTitle
        emoji={"Lab 6 💻😺🐙"}
        title={"Continue the creation of our website using HTML + CSS"}
      />
    ),
  },
  {
    element: (
      <>
        <h2>HTML + CSS </h2>
        <br />
        <iframe
          className="w-11/12 h-full border-solid border-2 border-dark p-5 rounded-lg bg-light shadow-md mx-10"
          src="/arcn5005/f2023/students/nicolasarellanorisop/code-editors/html-css.html"
        />
      </>
    ),
  },
];
