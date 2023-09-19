import { Toc } from "../../../../types/types";

import Image from "../../../../components/Common/Image";
import Video from "../../../../components/Common/Video";
import Quote from "../../../../components/Common/Quote";
import EmojiTitle from "../../../../components/Common/EmojiTitle";
import PdfViewer from "../../../../components/Common/PdfViewer";

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
  },
  {
    element: (
      <Quote
        quote={
          "Most of the designers who use computers as a core part of their digital practice do not automatically turn to programming to form part of their repertoire. By not doing so users at once **place their entire trust in the software engineers** in the expectation that those anonymous collaborators have thought through all that might be wanted by the designers "
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
          "          Although the first courses in computer programming were introduced in \
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
];
