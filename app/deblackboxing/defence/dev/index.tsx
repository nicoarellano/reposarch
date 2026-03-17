import React from 'react';
import { Toc } from '@/app/types/types';

import Image from '@/components/Common/Image';
import DTDefinition from './dt-definition';
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
    notes: 'Canada’s Digital Twin project is the empirical validation of my dissertation. Is a project that I have been leading at CIMS since 2020. It describes all the elements of toolmaking that I have been testing in this dissertation.'
  },
  {
    element: <DTDefinition />,
    notes: 'Before we jump into CDT, let me start by briefly defining what a digital twin is for us.  There are many definitions of digital twins.\n\
Ours is based on the one by the Digital Twin Institute.  Michael Grieves, its director, states that a Digital Twin requires a feedback loop between the physical and digital components.\n\
This system has three parts:\n\
_____________________________________________________________________________________________\n\
1) A physical thing in real space: such as a building as it exists now, which is made out of atoms\n\
_____________________________________________________________________________________________\n\
2) The digital version of that product in virtual space, such as a BIM of that building, made out of bits\n\
_____________________________________________________________________________________________\n\
And synchronized data connections between the two\n\
\n\
This is straightforward when you think about something like a digital twin of a jet engine, but once you start to think about a digital twin of Canada’s built environment it becomes a lot more complicated.'
  },
  {
    element: <>
      <h4 className='w-2/3 text-left mb-8'>A National Digital Twin of Canada:</h4>
      <Image
        src={"/images/defence/dt diagram.png"}
        alt="CDT diagram"
      />
    </>,
    notes: 'In the CDT project, we’re trying to capture the physical environment containing both\n\
    the Physical, such as people, buildings, infrastructure, lakes, rivers, etc\n\
    and non-physical aspects of Canada such as culture, legislation, history, weather, economy, etc.\n\
    A digital transformation occurs turning the physical into data whether that is open or proprietary that we then bring into our open-source platform for insight, analysis, simulation, and prediction.',
  },
  {
    element: <CdtWhy />,
    notes: '1) Organizations, such as municipalities, struggle with fragmented data silos where BIM models, GIS datasets, operational information, and maintenance records exist in isolation, making comprehensive decision-making nearly impossible.\n\
    _____________________________________________________________________________________________\n\
2) Proprietary lock-in traps organizations in expensive software ecosystems that limit flexibility and force dependency on specific vendors.\n\
while poor BIM/GIS integration means that detailed building information cannot seamlessly connect with broader spatial and infrastructure context.\n\
_____________________________________________________________________________________________\n\
3) These challenges are compounded by interoperability failures that prevent data exchange between different platforms and departments, creating workflow bottlenecks that slow project delivery and inflate costs.\n\
_____________________________________________________________________________________________\n\
4) Perhaps most critically, the technical knowledge barriers inherent in current systems exclude non-technical stakeholders like facility managers, executives, and maintenance staff—from accessing the very information they need to make informed decisions about the built environment.\n\
_____________________________________________________________________________________________\n\
By democratizing access to digital twin technologies we’re creating an inclusive, collaborative ecosystem where every stakeholder can work optimally without limitations imposed by proprietary constraints or technical complexity.',
  },
  {
    element: <CdtWhat />,
    notes: 'What is our response to this?\n\
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
      <Image
        src={"/images/defence/dt arch.png"}
        alt="CDT platform architecture"
      />
    </>,
    notes: 'The two most importan aspect of the CDT platform’s architecture, are\n\
    1) That it is 100% built with free and open-source technologies.\n\
    2) That it is based on a Canadian cloud infrastructure, with datacentres on Canadian soil (Vancouver and Toronto), and data sovereignty agreements in place.\n\
This architecture enables flexible deployment options that respect organizational security requirements.\n\
Large organizations like the Department of National Defence with existing IT infrastructure can download and deploy the entire platform on their own servers and networks, maintaining complete control over sensitive data.\n\
Smaller organizations without extensive infrastructure can securely access dedicated instances through browser-based authentication, with data isolation ensuring organizational privacy and confidentiality.',
  },
  {
    element: (
      <video
        src="https://cimsminio.ca-east.onfullhost.cloud/cdt-homepage/cdt-demo-home.mp4"
        title="Canada’s Digital Twin Demo"
        controls
      />
    ),
    notes: ' Now let me demonstrate the capabilities of the platform.\n\
Starting with our secure login, the authentication system assigns role-based credentials with differentiated permissions based on organizational requirements.\n\
One of our most significant technical achievement is our seamless BIM-GIS integration. This addresses one of the central challenges we faced: bridging fundamentally different data paradigms in a web environment.\n\
Watch as I add BIM models to the campus. Here we have all 45 buildings on the campus, totalling 4 GB of BIM models. Each model loads with sub-2-second performance—even for files exceeding 500 megabytes.\n\
Next, I’ll add GIS infrastructure data showing campus tunnels, demonstrating how building- scale and infrastructure - scale information coexist within our integrated environment.\n\
This cross - scale integration required solving complex coordinate transformation challenges by extracting information from the ifc geolocation properties for accurate coordinate conversions.\n\
Users can also add comments, photos, videos, and models directly to the map to share with other users, enhancing collaboration.\n\
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
    notes: 'Currently, our largest project is in partnership with the National Research Council and the Department of National Defence to solve a crisis of asset information management. In response to this, we’ve developed a prototype for asset management, for the federal government.\n\
The Department of National Defence, manages 21,000 built assets located across approximately 100 million hectares—spanning every province and territory. These assets are both geographically and typologically diverse— from military bases in the Arctic to heritage buildings in downtown Ottawa.  This massive portfolio is managed through fragmented information systems, siloed data practices, and incompatible proprietary technologies.\n\
This isn’t just a Canadian or DND problem—it’s a global challenge that we believe digital twins are uniquely positioned to solve.\n\
There are two main components to this research.\n\
_____________________________________________________________________________________________\n\
1) First, we conducted a comprehensive review of Open and International Standards for BIM and GIS. Next we defined specific use cases spanning the full asset lifecycle—from design and construction through operations and digital twin applications. This foundational work culminated in the creation of EIR templates specifically designed for federal assets\n\
_____________________________________________________________________________________________\n\
2) Second, we defined the functional and technical requirements of the platform itself. Through iterative prototyping, we used real-world DND assets to test integration of varied datasets into a federated architecture.\n\
Our work with NRC and DND has been pivotal in testing the security, deployment, and scalability of the platform.'
  },
  {
    element:
      <div className='flex flex-col items-center justify-center h-full gap-2'>
        <h4 className='w-full text-center'>Return to Epistemic Objects:</h4>
        <a
          href={'/deblackboxing/epistemic-object/?animation=false'}
          className="cursor-pointer"
          aria-label="Open Epistemic Object page"
        >
          <EpistemicObjectIcon style={{ fontSize: '20rem' }} />
        </a>
      </div>
  }

];
