import { Toc } from "../../../../types/types";
import Image from "../../../../components/Common/Image";
import Video from "../../../../components/Common/Video";

import WhatIsBim from "./WhatIsBim.mdx";
import BimOrCad from "./BimOrCad.mdx";
import BimBooks from "./BimBooks.mdx";
import Levels from "./Levels.mdx";
import Mandates from "./Mandates.mdx";
import RevitOrArchicad from "./RevitOrArchicad.mdx";
import RevitWins from "./RevitWins.mdx";
import ClosedBim from "./ClosedBim.mdx";
import Cad from "./Cad.mdx";
import WhatIsCad from "./WhatIsCad.mdx";

export const content: Toc = [
  { element: <Cad /> },
  { element: <WhatIsCad /> },
  {
    element: (
      <Image
        src="/images/week02/tools0of-the-imagination.jpg"
        alt="Tools of the Imagination"
        caption={"Tools of the imagination - Susan Piedmont-Palladino (2007)"}
      />
    ),
  },
  { element: <WhatIsBim /> },
  { element: <BimOrCad /> },
  {
    element: <BimBooks />,
    notes:
      "Weygnant’s definition is a good baseline for tool-oriented people; Saxon’s explanation is for client/business-oriented people; Eastman is the father of BIM, and has the most technically correct definition > we’ll look at all three",
  },

  { element: <Levels /> },

  { element: <RevitWins /> },
  { element: <ClosedBim /> },
  {
    element: <RevitOrArchicad />,
    notes:
      "BIM has been defined as a communication and collaboration tool or process originally created to connect people, processes, and data.\
However, that is not exactly the way the Architecture Engineering and Construction or AEC industry is using BIM.\
The status quo is to work with proprietary solutions and closed file formats.",
  },
  {
    element: <Mandates />,
    notes:
      "Government BIM mandates.\
    Countries all over the word are becoming to regulate the use of BIM. So if one wants to participate in public works and even non public projects BIM is a requirement.\
    Which means that BIM is in many cases not an option anymore but a mandate.\
    Knowing that BIM software are mainly controlled by a few vendors, this mean that these software companies will have a tremendous impact over our practice.",
  },
];
