import { Toc } from "@/app/types/types";

import Image from "@/components/Common/Image";
import Video from "@/components/Common/Video";
import Quote from "@/components/Common/Quote";
import EmojiTitle from "@/components/Common/EmojiTitle";
import PdfViewer from "@/components/Common/PdfViewer";

export const content: Toc = [
  {
    element: (
      <>
        <h3>Ken Percy</h3>
        <br />
        <Image
          src="/images/maps/Ken.jpg"
          alt="Ken Percy"
          caption="KEN PERCY is a graduate of the Azrieli School of Architecture and Urbanism where he completed the BAS and MArch.
During his masters he started working at the Carleton Immersive Media Studio (CIMS) where he has had the opportunity to lead, or contribute to a number of important projects including laser scanning Parliament Hill, digital fabrication for the Canadian Senate, and GIS software development for the Digital Twin.
Ken is currently finishing up the PhD and is preparing to defend this winter."
        />
      </>
    ),
  },

  {
    element: (
      <Video
        src="https://www.youtube.com/embed/LBPLWOyyLUs?si=smhmUoCtn1Ptq6Kd"
        title="Ken Percy - Open-source GIS"
        caption={"Ken Percy - Open-source GIS"}
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
          src="/images/maps/qgis.png"
          alt="QGIS"
          caption="Download QGIS"
          href="https://www.qgis.org/en/site/forusers/download.html"
        />
      </>
    ),
  },
];
