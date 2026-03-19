import React from 'react';
import { Toc } from '@/app/types/types';

import SlideImage from '@/components/Common/SlideImage';
import Image from 'next/image';
import DTDefinition from './dt-definition';
import CdtWhat from './cdt-what';
import CdtWhy from './cdt-why';
import AutoRedirect from './AutoRedirect';

export const content: Toc = [
  {
    element: (
      <>
        <br />
        <br />
        <br />
        <SlideImage
          src={"/images/cdt/canada-logo.png"}
          alt="Canada’s Digital Twin"
        />
        <br />
        <br />
        <br />
      </>
    ),
    notes: 'Canada’s Digital Twin project is the empirical validation of my dissertation.\n\
    Is a project that I have been leading at CIMS since 2020.\n\
    It describes all the elements of toolmaking that I have been testing in this dissertation.'
  },
  {
    element: <DTDefinition />,
    title: "What is a Digital Twin?",
    notes: 'Before we jump into the project, let me start by defining what a digital twin is for me.\n\
This definition is based on the one by the Digital Twin Institute.\n\
Michael Grieves, its director, states that a Digital Twin requires three parts:\n\
_____________________________________________________________________________________________\n\
1) A physical thing in real the real world: such as a building or a landscape, which are made out of atoms\n\
_____________________________________________________________________________________________\n\
2) The digital version of that object in virtual space, such as a BIM of that building, made out of bits\n\
_____________________________________________________________________________________________\n\
And synchronized data connections between the two including real-time data feeds and feedback mechanisms including sensors, IoT, cameras, etc\n\
\n\
_____________________________________________________________________________________________\n\
This is straightforward when you think about something like a digital twin of a jet engine, but once you start to think about a system more complex like Canada it becomes a lot more complicated.'
  },
  {
    element: <>
      <h4 className='w-2/3 text-left mb-8'>A National Digital Twin of Canada:</h4>
      <SlideImage
        src={"/images/defence/dt diagram.png"}
        alt="CDT diagram"
      />
    </>,
    title: "A National Digital Twin of Canada",
    notes: 'The CDT project, tries to capture the real Canada containing both\n\
    _____________________________________________________________________________________________\n\
    1) The Physical, such as people, buildings, infrastructure, lakes, rivers, etc\n\
    _____________________________________________________________________________________________\n\
    2) And the non-physical aspects of Canada such as culture, legislation, history, weather, economy, etc.\n\
    _____________________________________________________________________________________________\n\
  The physical assets are converted into digital data. This information, gathered from both open and private sources, is brought into the platform to facilitate deeper insight, multi-scale simulation, and accurate predictions.',
  },
  {
    element: <CdtWhy />,
    title: "Why do we need a National Digital Twin?",
    notes: '1) Fragmented data silos — BIM, GIS, operational and maintenance data are often fragmented, so it is hard to get a complete picture.\n\
    _____________________________________________________________________________________________\n\
    2) Heavy dependency on proprietary solutions — closed file formats and black‑boxed processes lock organizations into vendors and reduce flexibility.\n\
    _____________________________________________________________________________________________\n\
    3) Interoperability failures and poor BIM/GIS integration — systems cannot exchange data reliably, so spatial and asset information remain disconnected.\n\
    _____________________________________________________________________________________________\n\
    4) Technical knowledge barriers exclude non-technical stakeholders — facility managers and decision makers are often unable to access or use the information they need.\n\
    _____________________________________________________________________________________________\n\
    We wanted to provide a solution to these challenges.',
  },
  {
    element: <CdtWhat />,
    title: "What is CDT?",
    notes: 'Our response to this?\n\
    _____________________________________________________________________________________________\n\
1) A web-based data visualization platforms with BIM/GIS capabilities\n\
_____________________________________________________________________________________________\n\
2) federated and national scale\n\
_____________________________________________________________________________________________\n\
3) based on open standards and built with open technology\n\
_____________________________________________________________________________________________\n\
4) open-source, accessible, and community-driven, governed and maintained by a non-for-profit',
  },
  {
    element: <>
      <h4 className='w-2/3 text-left mb-8'>CDT Platform Architecture:</h4>
      <SlideImage
        src={"/images/defence/dt arch.png"}
        alt="CDT platform architecture"
      />
    </>,
    title: "CDT Platform Architecture",
    notes: 'The two most important aspect of the CDT platform’s architecture, are\n\
    _____________________________________________________________________________________________\n\
    1) That it is 100% built with free and open-source technologies.\n\
    _____________________________________________________________________________________________\n\
    2) That it is based on a Canadian cloud infrastructure, with datacentres on Canadian soil (Vancouver and Toronto), and data sovereignty agreements in place.\n\
    _____________________________________________________________________________________________\n\
This architecture enables flexible deployment options that respect organizational security requirements.',
  },
  {
    element: (
      <video
        src="https://cimsminio.ca-east.onfullhost.cloud/cdt-homepage/cdt-demo-home.mp4"
        title="Canada’s Digital Twin Demo"
        controls
      />
    ),
    title: "CDT Demo",
    notes: ' Now let me demonstrate the capabilities of the platform.\n\
Starting with our secure login, the authentication system assigns role-based credentials with differentiated permissions based on organizational requirements.\n\
One of our most significant technical achievement is our BIM-GIS integration to bridge different data paradigms in single web-based system.\n\
Watch as I add BIM models to the campus. Here we have all 45 buildings on the campus, totalling 4 GB of BIM models. Each model loads with sub-2-second —even for files exceeding 500 megabytes.\n\
Next, I’ll add GIS infrastructure data showing campus tunnels, demonstrating how building-scale and infrastructure coexist.\n\
This cross-scale integration required solving complex coordinate transformation challenges for accurate coordinate conversions.\n\
Users can also add comments, photos, videos, and models directly to the map to share with other users, to enhance collaboration.\n\
_____________________________________________________________________________________________\n\
Zooming out to Ottawa reveals our open data federation capabilities.\n\
The platform automatically retrieves open government data from municipal, provincial, and federal sources.Here we’re adding Ottawa neighbourhoods and transit stops, as well as national airport locations.This integration happens through standardized APIs—no additional data manipulation required.\n\
We currently federate data from over 60 sources, including Natural Resources Canada, Statistics Canada, and dozens of municipal open data portals.This makes previously inaccessible datasets easy to layer and visualize alongside your building information.\n\
The dynamic visualization controls allow users to adjust colour scales and graphic quality for enhanced analysis.This transforms fragmented government data into actionable intelligence for asset managers, supporting data - driven decision - making for all users.\n\
Returning to the Carleton Campus, let me now demonstrate our BIM viewer, an example of openBIM standards in action. Opening this IFC model in our viewer showcases native browser-based IFC processing.\n\
_____________________________________________________________________________________________\n\
The complete IFC tree structure is preserved exactly as authored, maintaining the entire IFC hierarchy.\n\
One of our major challenges was preserving complete semantic richness and all the metadata while maintaining performance.\n\
This isn’t simplified geometry—this is the full IFC schema accessible in any standard internet browser.\n\
_____________________________________________________________________________________________\n\
Watch what happens when I click on any building element. The properties panel instantly displays all IFC attributes: entity properties, measurements, material assignments, constraints, phasing information, and custom property sets defined during authoring.\n\
_____________________________________________________________________________________________\n\
Our platform supports multiple file formats.\n\
Here I’m adding a DXF CAD file to provide additional reference information. We have created three-dimensional editing tools for the user to scale, rotate, and place the files in relation to the IFC.\n\
The user can also upload 3D models from various file formats such as GLTF, FBX, OBJ, among others. This multi-format capability ensures compatibility with diverse project workflows—such as point clouds—while maintaining openBIM as the central data foundation.\n\
_____________________________________________________________________________________________\n\
The integrated analysis tools work directly on IFC geometry. Our sectioning tool allows dynamic model exploration, while our measurement tools provide precise dimensional analysis. The user can add comments to enhance the collaboration within our BIM viewer.\n\
_____________________________________________________________________________________________\n\
But the platform also provides a robust implementation of the BIM Collaboration Format (or BCF)—a cornerstone of openBIM workflows.\n\
BCF is the open and standardized way of communicating issues and topics within a BIM model. By creating or importing BCF files, the platform enables structured, model-based collaboration.\n\
Each BCF Topic is connected to a precise Viewpoint within the IFC model, moving beyond free-text comments to deliver context-rich communication.\n\
These topics reveal: identification, responsible party assignments, proposed resolutions, and clearly defined status progression. This vendor-neutral standard ensures that collaboration data remains interoperable and accessible across all authoring tools and platforms.\n\
_____________________________________________________________________________________________\n\
The platform also supports Information Delivery Specification (or IDS) integration—another fundamental openBIM standard. By importing IDS files, users can check IFC models against explicit, machine-readable Exchange Requirements that define what information must be delivered, and in what form.\n\
The viewer graphically highlights which model elements conform or do not conform to the specified requirements, making compliance checking both transparent and actionable during coordination.'
  },
  {
    element: (
      <video
        src="https://cimsminio.ca-east.onfullhost.cloud/cdt-homepage/safeandaffordable.mp4"
        title="CDT - Safe and Affordable demo"
        controls
        autoPlay
      />),
    title: "Safe and Affordable Housing Map",
    notes: 'The second project that uses the platform is the Safe and Affordable Housing map.\n\
Which is a tool for visualizing affordable housing across Canada.\n\
The map uses a variety of open datasets (such as affordable housing from multiple municipalities and household income database from the 2021 Canadian census).\n\
The project is a collaboration with multiple partners across Canada to help guide and inform a critical assessment of Canada’s National Housing Strategy (NHS)\n\
Housing affordability is a critical issue in Canada, and we are proud that the platform can contribute to mitigate the crisis.'
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
    title: "Visualizing Wildfires Map",
    notes: 'Another big crisis is the environmental one.\n\
For that one, we have collaborated with a research group that was looking at the impact of wildfires.\n\
The Visualizing Wildfires map is an interactive tool to monitor the fire conditions across Canada.\n\
As mentioned before, we are combining a top-down approach of fetching datasets from data portals and a bottom-up approach where data can be crowdsourced by users in near-real time.\n\
The map relies on open datasets such as the data from the Canadian Interagency Forest Fire Centre (CIFFC) to show the severity of active wildfires for each province and territory and their size, stage of control, and threat level.\n\
As shown before, users can incorporate personal photos and videos directly onto the map to show the state of wildfires at their location.\n\
In this case, user data can generate a layer of data that can be use to help mitigating fires or preventing some damage.'
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
    title: "Digital Twin for Federal Assets",
    notes: 'Currently, our largest project is in partnership with the National Research Council and the Department of National Defence to solve a crisis of asset information management.\n\
DND, manages more than 21,000 built assets located across approximately 100 million hectares—spanning every province and territory.\n\
from military bases in the Arctic to heritage buildings in downtown Ottawa.\n\
This massive portfolio is managed through fragmented information systems and incompatible proprietary technologies.\n\
This isn’t just a Canadian or DND problem—it’s a global challenge that Digital twins can help to address.\n\
There are two main components to this research.\n\
_____________________________________________________________________________________________\n\
Through iterative prototyping, we used real-world DND assets to test integration of diverse datasets.\n\
Our work with NRC and DND has been pivotal in testing the security, deployment, and scalability of the platform.'
  },
  {
    element:
      <div className="flex flex-col gap-[55px] justify-center items-center text-center">
        <h2 className="!text-[34px] ">
          An open future...
        </h2>
        <Image
          priority
          src={"/images/openBox.png"}
          height={300}
          width={300}
          alt={"De-blackboxing"}
        />
        <AutoRedirect href={'/deblackboxing/conclusion'} delay={0} />
      </div>
  }

];
