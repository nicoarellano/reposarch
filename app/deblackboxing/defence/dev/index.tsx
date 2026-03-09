import { Toc } from '@/app/types/types';

import Image from '@/components/Common/Image';
import DTDefinition from './dt-definition';

export const content: Toc = [
  {
    element: (
      <>
        <h3 className='my-16'>Canada’s Digital Twin</h3>
        <br />
        <Image
          src={"/images/cdt/canada-logo.png"}
          alt="Canada’s Digital Twin"
        />
      </>
    ),
  },
  { element: <DTDefinition /> },
  { element: <> </> },
  { element: <> </> },
  { element: <> </> },
  { element: <> </> },
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
