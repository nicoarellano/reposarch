import { Toc } from '@/app/types/types';

import Image from '@/components/Common/Image';
import CartesianPlane from '@/components/CartesianPlane';
import TOC from '@/app/arcn5005/(main)/toc/page';
import dynamic from 'next/dynamic';
import PdfViewer from '@/components/Common/PdfViewer';
import CustomizedTables from '@/components/Common/Table';
import { Arcn5005F2024Evaluations } from '@/app/arcn5005/(main)/evaluations/arcn5005F2024evaluations';
import ResourcesContent from '@/app/arcn5005/(main)/resources/ResourcesContent';
import StudentsList from '@/components/Common/StudentsList';
import { classListf2024 } from '@/app/arcn5005/terms/[term]/students/(classListF2024)/classList';
import Tags from '@/app/arcn5005/(lectures)/week05/Tags';
import Three from '@/components/Common/Three';
import EpistemicObjectIcon from '@mui/icons-material/HomeRepairServiceRounded';
import CodeEditor from '@/components/Common/CodeEditor';

const BimViewer = dynamic(() => import('@/components/Common/BimViewer'), { ssr: false });

const MainMenuContent = dynamic(() => import('@/app/arcn5005/(main)/mainMenuContent'), { ssr: false });

export const content: Toc = [
  {
    element: <MainMenuContent />,
    notes: "Because you have already read the theory, I wanted to explain why it was so important to teach the course through a custom portal.\n\
My decision to develop this presentation tool as well as the course portal, rather than using traditional software like PowerPoint, directly reflects my central methodological claim.\n\
Existing software do not adequately support the interactive demonstrations that are essential for teaching and explaining my work.\n\
This conscious choice of medium highlights a foundational principle of the research: the architect can and will benefit by designing their own tools. So, in this context, the medium is a core element of the research message.\n\
The portal is a web-based, open-source platform that serves as the course's didactic infrastructure. It contains everything from the course calendar and announcements to the list of lectures to date and relevant links (like the course GitHub repository), etc."
  },
  {
    element: <>
      <h4 className='mb-8' >Resources:</h4>
      <ResourcesContent />
    </>,
    notes: "It also includes multiple resources to access and download, such as websites, influential videos and lectures, free software, papers, and peer-reviewed articles."
  },
  {
    element: (
      <>
        <h4>📖 Eric Raymond - The Cathedral and the Bazaar (1999)</h4>
        <br />
        <PdfViewer src="/resources/Raymond, Erik - The Cathedral and the Bazaar Musings on Linux and Open Source by an Accidental Revolutionary (1999).pdf" />
      </>
    ),
    notes: "For example, students can access some ebooks and resources directly through the portal."
  },
  {
    element: <>
      <h4 >Lectures:</h4>
      <TOC />
    </>,
    notes: "All the lecture to date including all slides and class recordings are available through the portal as well."
  },
  {
    element: (
      <Image
        src="/images/computer-graphics/sketchpad.png"
        alt="Ivan Sutherland inventor of Sketchpad, the first GUI"
        caption={'a) In 1963, Ivan Sutherland at MIT developed a program called ‘Sketchpad’, the first GUI.  b) Sketchpad interface. source: Sdegno, Alberto. 2017. "For an Archeology of the Digital Iconography" Proceedings 1, no. 9: 1093.'}
      />
    ),
    notes:
      'This is an example of one of the theory slides; the portal also acts as a slideshow.\n\
      Speaker notes are also available, for example:\n\
      _____________________________________________________________________________________\n\
      In 1963, Ivan Sutherland at MIT developed a program called ‘Sketchpad’, which can be considered as the first computer drawing program or the first graphical user interface (GUI).\n\
       GUIs are human-computer interaction devices that allow users to interact with the computer through graphical icons instead of written code.\n\
       With a GUI the user can click or touch and manipulate the symbols displayed on the screen and thus, directly alter the program.\n\
       GUIs made computer more accessible for non-programmers, including architects.\n\
       Since then, GUIs are certainly the preferred vehicle for architects to interact with computers.\n\
       Robert Woodbury, architect and author of the book Elements of Parametric Design, states that GUIs have profoundly changed the way in which architects interact with computers. He says that “the graphical user interface, which makes computers so easy to use, also makes them hard to use powerfully.',
  },
  {
    element: <Tags />,
    notes:
      'There are also interactive features that the students can use to test their knowledge when studing for the quizes.',
  },
  {
    element: (
      <>
        <h2>CODE Editor</h2>
        <br />
        <CodeEditor />

      </>
    ),
    notes: 'More importantly, I have created interactive features to practice their programming skills.\n\
    This exmple is a simple real-time  sandbox for them to test the different languages taught in the course.\n\
    It is progressive because first we talk about HTML, then CSS and finally JavaScript.\n\
    At the end they can test the 3 languages together and see in real time how they interact.'
  },

  {
    element: (
      <>
        <h4 className='w-full text-left' >Drawing with Pixels (raster):</h4>
        <br />
        <iframe
          className="w-full h-full"
          src="https://acepixels.netlify.app/"
        />
      </>
    ),
    notes:
      "We then tackle the dominant paradigms of computer graphics. Students use this embedded raster tool to experiment with pixel-based drawing, making the 2D coordinate grid tangible.",
  },
  {
    element: <CartesianPlane />,
    notes:
      "We then move to the 3D space with an interactive Cartesian Plane. Built with Three.js, it allows students to manipulate XYZ coordinates and see the results in real-time.\n\
      This is a much more dynamic and graphic way of understanding the tri-dimentional digital world. Which is hard to grasp with a PowerPoint presentation",
  },
  {
    element: (
      <>
        <h4 className='w-full text-left' >Drawing with Code (vectorial):</h4>
        <br />
        <iframe
          className="w-full h-full"
          src="https://editor.p5js.org/nicoarellano/sketches/mn4vCQlhy"
        />
      </>
    ),
    notes: 'This leads to procedural drawing. Using P5.js, we generate vector graphics through scripts, showing that architectural marks can be defined as repeatable procedures rather than static traces.\n\
    Vectorial drawing is an important concept since it is at the base of CAD and parametric modelling\n\
    This tools allow students to understand the basic functions of geometry creation and dynamically interact with them.'
  },
  {
    element: (
      <>
        <h4 className='w-full text-left' >CAD viewer (dxf):</h4>
        <br />
        <div className="w-11/12 h-full border-solid border-2 border-dark rounded-lg bg-light shadow-md mx-10 overflow-hidden">
          <iframe
            className="w-full border-none"
            style={{ height: 'calc(100% + 60px)', marginTop: '-60px' }}
            src="https://vagran.github.io/dxf-viewer-example/"
          />
        </div>
      </>
    ),
    notes: 'Having explained the basic concept of computer graphics, the course pivots towards specific tools for architects. So students can experience real toolmaking for architectural representation.\n\
    After grasping the theory behind CAD, 3D CAD, and BIM, we experiment firsthand with custom tools\n\
    _____________________________________________________________________________________________\n\
    The first example is a CAD viewer that works with the open format DXF.'
  },
  {
    element: (
      <iframe className="w-full h-full" src="https://threejs.org/editor/" />
    ),
    notes: 'Moving into 3D modelling, we utilize the Three.js library to handle scenes, lights, and textures natively in the browser.\n\
    This is the engine behind many industry cloud platforms such as Autodesk Forge, and it is free and open-source.\n\
    In this feature, the students can test with the different elements and see directly.'
  },
  {
    element: (
      <>
        <h4 className='w-full text-left' >3D viewer (three.js):</h4>
        <Three />
      </>
    ),
    notes: 'Then we move to a more custom 3D viewer built with Three.js, which allows students to create their own scenes from scratch and to load and manipulate 3D models in real-time, demonstrating the core principles of 3D representation and interaction.'
  },
  {
    element: (
      <Image
        src="/images/three/f2024-render.png"
        alt="students photogrammetry models"
        caption={'Composition of some of the student’s 3D models created for the photogrammetry exercise, class Fall 2024.'}
      />
    ),
    notes:
      'This is an example of the students’ work with the 3D viewer. They created 3D models using photogrammetry and then loaded them in the viewer to manipulate them and create compositions.',
  },
  {
    element: (
      <iframe className="w-full h-full" src="/arcn5005/terms/f2024/students/basilcurrie/three/index.html" />
    ),
    notes: ''
  },
  {
    element: (
      <iframe className="w-full h-full" src="/arcn5005/terms/f2024/students/maisjoudeh/three/index.html" />
    ),
    notes: ''
  },
  {
    element: (
      <div className="flex flex-col w-full h-full overflow-hidden">
        <h4 className='p-2 shrink-0'>BIM viewer (ifc):</h4>
        <div className="flex-1 overflow-hidden">
          <BimViewer />
        </div>
      </div>
    ),
    notes: ''
  },
  {
    element: (
      <>
        <h4 className='w-full text-left' >GIS viewer (Cesium JS GL):</h4>
        <iframe
          width="100%"
          height="100%"
          src="/utils/map/cesium/index.html"
          title="Cesium JS GL"
        ></iframe>
      </>
    ),
    notes: ''
  },
  {
    element: (
      <>
        <h4 className='w-full text-left' >GIS viewer (Leaflet):</h4>
        <iframe
          width="100%"
          height="100%"
          src="/utils/map/leaflet/index.html"
          title="Leaflet"
        ></iframe>
      </>
    ),
    notes: ''
  },
  {
    element: (
      <>
        <h4 className='w-full text-left' >GIS viewer (Mapbox):</h4>
        <iframe
          width="100%"
          height="100%"
          src="/utils/map/mapbox/index.html"
          title="Mapbox"
        ></iframe>
      </>
    ),
    notes: ''
  },
  {
    element: (
      <>
        <h4 className='w-full text-left' >GIS viewer (Maplibre):</h4>
        <iframe
          width="100%"
          height="100%"
          src="/utils/map/maplibre/index.html"
          title="Maplibre"
        ></iframe>
      </>
    ),
    notes: ''
  },
  {
    element: (
      <iframe className="w-full h-full" src="/arcn5005/terms/f2024/students/faezaafrin/map/index.html" />
    ),
    notes: ''
  },
  {
    element: (
      <iframe className="w-full h-full" src="/arcn5005/terms/f2024/students/mostafabdeir/map/index.html " />
    ),
    notes: ''
  },
  {
    element: (
      <iframe className="w-full h-full" src="/arcn5005/terms/f2024/students/basilcurrie/map/index.html" />
    ),
    notes: ''
  },
  {
    element: (
      <iframe className="w-full h-full" src="/arcn5005/terms/f2024/students/saraniadabee/map/index.html" />
    ),
    notes: ''
  },
  {
    element: (
      <iframe className="w-full h-full" src="/arcn5005/terms/f2024/students/williamlozides/map/index.html" />
    ),
    notes: ''
  },
  {
    element: <>
      <h4 className='mb-8' >Evaluations:</h4>
      <CustomizedTables data={Arcn5005F2024Evaluations} />
    </>,
    notes: ''
  },
  {
    element: (
      <>
        <h1>Course GitHub</h1>
        <br />
        <h3>Reposarch = Open Source Architectural Representation</h3>
        <br />
        <Image
          src="/images/computer-graphics/course-GitHub.png"
          alt="GitHub"
          href="https://github.com/nicoarellano/reposarch"
          caption={
            'Reposarch - Course GitHub - https://github.com/nicoarellano/reposarch'
          }
        />
      </>
    ),
    notes: ''
  },
  {
    element: (
      <>
        <h3>Fork the course GitHub repository</h3>
        <br />
        <Image
          src="/images/computer-graphics/forking.gif"
          alt="Fork Reposarch"
          href="https://github.com/nicoarellano/reposarch"
          caption={
            'Fork Github Repository https://github.com/nicoarellano/reposarch/fork'
          }
        />
      </>
    ),
    notes: ''
  },
  {
    element: (
      <>
        <h3>Fork the course GitHub repository</h3>
        <br />
        <Image
          src="/images/defence/gitgraph.png"
          alt="Git Graph"
          caption={
            'Git Graph - Students committing their assignments to the course GitHub repository'
          }
        />
      </>
    ),
    notes: ''
  },
  {
    element:
      <div className="w-full flex flex-col items-center justify-center grow gap-8 mdx">
        <StudentsList students={classListf2024} />
      </div>,
    notes: ''
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
      </div>,
    notes: ''
  }

];
