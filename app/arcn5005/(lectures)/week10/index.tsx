import { Toc } from '@/app/types/types';

import Image from '@/components/Common/Image';
import Video from '@/components/Common/Video';
import Quote from '@/components/Common/Quote';
import EmojiTitle from '@/components/Common/EmojiTitle';
import PdfViewer from '@/components/Common/PdfViewer';

export const content: Toc = [
  {
    element: (
      <>
        <h3>Ken Percy</h3>
        <br />
        <Image
          src="/images/maps/Ken.jpg"
          alt="Ken Percy"
          caption="Ken Percy studied architecture at Carleton University in the Azrieli School of Architecture & Urbanism, and is currently completing a PhD in architecture. 
          He spent many years researching the translation from laser scan to building information model, while his current work at CIMS is focused on exploring two themes: 
          the creative potential of machine code for architecture via digital fabrication, and the development of an open-source digital twin."
        />
      </>
    ),
    notes:
      'Ken Percy studied architecture at Carleton University in the Azrieli School of Architecture & Urbanism, and is currently completing a PhD in architecture. \n\
      He spent many years researching the translation from laser scan to building information model, while his current work at CIMS is focused on exploring two themes: \n\
      the creative potential of machine code for architecture via digital fabrication, and the development of an open-source digital twin.',
  },

  {
    element: (
      <Video
        src="https://www.youtube.com/embed/LBPLWOyyLUs?si=smhmUoCtn1Ptq6Kd"
        title="Ken Percy - Open-source GIS"
        caption={'Ken Percy - Open-source GIS'}
      />
    ),
  },

  {
    element: (
      <>
        <Image
          src="/images/maps/pc1.png"
          alt="class point cloud"
          caption="Class point cloud 1"
        />
      </>
    ),
  },

  {
    element: (
      <>
        <Image
          src="/images/maps/pc2.png"
          alt="class point cloud"
          caption="Class point cloud 2"
        />
      </>
    ),
  },

  {
    element: (
      <>
        <Image
          src="/images/maps/pc3.png"
          alt="class point cloud"
          caption="Class point cloud 3"
        />
      </>
    ),
  },

  {
    element: (
      <>
        <Image
          src="/images/maps/pc4.png"
          alt="class point cloud"
          caption="Class point cloud 4"
        />
      </>
    ),
  },

  {
    element: (
      <>
        <Image
          src="/images/maps/qgis-logo.svg"
          alt="QGIS"
          caption="Download QGIS"
          href="https://www.qgis.org/en/site/forusers/download.html"
        />
      </>
    ),
  },
  {
    element: (
      <>
        <Image
          src="/images/maps/cloud-compare-logo.png"
          alt="Cloud Compare"
          caption="Download Cloud Compare"
          href="https://www.danielgm.net/cc/"
        />
      </>
    ),
  },
];
