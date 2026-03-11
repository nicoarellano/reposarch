import React from 'react';
import { Toc } from '@/app/types/types';

import Image from '@/components/Common/Image';
import DTDefinition from './dt-definition';
import ClickList from './click-list';
import CdtWhat from './cdt-what';
import CdtWhy from './cdt-why';
import EpistemicObjectIcon from '@mui/icons-material/HomeRepairServiceRounded';

export const content: Toc = [
  {
    element: (
      <>
        <br />
        <br />
        <br />
        <Image
          src={"/images/cdt/canada-logo.png"}
          alt="Canada’s Digital Twin"
        />
        <br />
        <br />
        <br />
      </>
    ),
  },
  { element: <DTDefinition /> },
  {
    element: <CdtWhy />,
  },
  {
    element: <CdtWhat />,
  },
  {
    element: <>
      <h4 className='w-2/3 text-left mb-8'>A National Digital Twin of Canada:</h4>
      <Image
        src={"/images/defence/dt diagram.png"}
        alt="CDT diagram"
      />
    </>
  },
  {
    element: <>
      <h4 className='w-2/3 text-left mb-8'>CDT Platform Architecture:</h4>
      <Image
        src={"/images/defence/dt arch.png"}
        alt="CDT platform architecture"
      />
    </>
  },
  {
    element: (
      <video
        src="https://cimsminio.ca-east.onfullhost.cloud/cdt-homepage/cdt-demo-home.mp4"
        title="Canada’s Digital Twin Demo"
        controls
        autoPlay
      />
    ),
  },
  {
    element: (
      <video
        src="https://cimsminio.ca-east.onfullhost.cloud/cdt-homepage/safeandaffordable.mp4"
        title="CDT - Safe and Affordable demo"
        controls
        autoPlay
      />
    ),
  },
  {
    element: (
      <video
        src="https://cimsminio.ca-east.onfullhost.cloud/cdt-homepage/wildfires.mp4"
        title="CDT - Wildfires demo"
        controls
        autoPlay
      />
    ),
  },
  {
    element: (
      <video
        src="https://cimsminio.ca-east.onfullhost.cloud/cdt-homepage/dnd.mp4"
        title="CDT - Digital Twin for Federal Assets"
        controls
        autoPlay
        muted
      />
    ),
  },
  {
    element:
      <div className='flex flex-col items-center justify-center h-full gap-2'>
        <h4 className='w-full text-center'>Return to Epistemic Objects:</h4>
        <a
          href={'/deblackboxing/epistemic-object'}
          className="cursor-pointer"
          aria-label="Open Epistemic Object page"
        >
          <EpistemicObjectIcon style={{ fontSize: '20rem' }} />
        </a>
      </div>
  }

];
