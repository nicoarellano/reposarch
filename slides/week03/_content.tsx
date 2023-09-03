import { Toc } from "../../types/types";

import WhatIsBim from "./WhatIsBim.mdx";
import BimOrCad from "./BimOrCad.mdx";
import BimBooks from "./BimBooks.mdx";
import S4 from "./s4.mdx";
import S5 from "./s5.mdx";
import Levels from "./Levels.mdx";
import Mandates from "./Mandates.mdx";
import S6 from "./s6.mdx";
import S7 from "./s7.mdx";
import S8 from "./s8.mdx";
import S9 from "./s9.mdx";
import S10 from "./s10.mdx";
import S11 from "./s11.mdx";
import S12 from "./s12.mdx";
import S13 from "./s13.mdx";
import S14 from "./s14.mdx";
import S15 from "./s15.mdx";

export const content: Toc = [
  { element: <WhatIsBim /> },
  { element: <BimOrCad /> },
  {
    element: <BimBooks />,
    notes:
      "Weygnant’s definition is a good baseline for tool-oriented people; Saxon’s explanation is for client/business-oriented people; Eastman is the father of BIM, and has the most technically correct definition > we’ll look at all three",
  },
  // { element: <S3 /> },
  // { element: <S4 /> },
  // { element: <S5 /> },
  // { element: <S6 /> },
  { element: <Levels /> },
  {
    element: <Mandates />,
    notes:
      "Government BIM mandates.\
    Countries all over the word are becoming to regulate the use of BIM. So if one wants to participate in public works and even non public projects BIM is a requirement.\
    Which means that BIM is in many cases not an option anymore but a mandate.\
    Knowing that BIM software are mainly controlled by a few vendors, this mean that these software companies will have a tremendous impact over our practice.",
  },
  // { element: <S7 /> },
  // { element: <S8 /> },
  // { element: <S9 /> },
  // { element: <S10 /> },
  // { element: <S11 /> },
  // { element: <S12 /> },
  // { element: <S13 /> },
  // { element: <S14 /> },
  // { element: <S15 /> },
];
