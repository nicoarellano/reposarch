import React from 'react';
import { Toc } from '@/app/types/types';

import Image from '@/components/Common/Image';
import DTDefinition from './dt-definition';
import ClickList from './click-list';
import EpistemicObjectIcon from '@mui/icons-material/HomeRepairServiceRounded';

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
  {
    element: (
      <ClickList
        title="Why CDT?"
        items={[
          <>Fragmented data silos</>,
          <>Big dependency on <strong>proprietary</strong> solutions, <strong>closed file formats</strong> and <strong>black boxed opaque processes</strong></>,
          <><strong>Interoperability failures</strong> and poor BIM/GIS integration</>,
          <><strong>Technical knowledge barriers</strong> exclude non-technical stakeholders</>,
        ]}
      />
    ),
  },
  {
    element: (
      <ClickList
        title="What is CDT?"
        items={[
          <><strong>Web-based, open-source</strong> data visualization platform</>,
          <>Federates diverse data sets including BIM, GIS, open data, and <strong>multimedia</strong>.</>,
          <>Based on <strong>open and international standards</strong></>,
          <><strong>Accessible</strong>, and <strong>community-driven</strong>, governed and maintained by a <strong>not-for-profit</strong></>,
        ]}
      />
    ),
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
