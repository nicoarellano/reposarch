import { Toc } from '@/app/types/types';

import Image from '@/components/Common/Image';
import Video from '@/components/Common/Video';

import CartesianPlane from '@/components/CartesianPlane';
import TOC from '@/app/arcn5005/(main)/toc/page';
import SimpleButton from '@/components/Common/SimpleButton';

export const content: Toc = [
  {
    element: (
      <>
        <h1>Developing a BIM/GIS Open-Source Tool</h1>
        <br />
        <h2>Canada’s Digital Twin</h2>
      </>
    ),
  },
  {
    element: (
      <video
        src="https://cdtminiodevcluster.ca-east.onfullhost.cloud/cdt-homepage/cdt-demo-home.mp4"
        title="Canada’s Digital Twin Demo"
        controls
      />

    ),
  },
];
