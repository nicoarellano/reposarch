import { Toc } from '@/app/types/types';

import Image from '@/components/Common/SlideImage';
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
    title: "Course Portal, Main menu",
    notes: "Because you have already read the theory, I didn't want to repeat it. Instead, I want to focus on why it was so important to teach this course through a custom portal.\n\
\n\
My decision to develop this presentation tool, along with the course portal, directly reflects my central argument.\n\
To effectively teach and explain my work, I need interactive tools that allow me to demonstrate concepts in real-time. Because traditional software like PowerPoint cannot support these features, I had to build my own.\n\
\n\
This choice of medium highlights a foundational principle of the research: architects will benefit by customizing and designing their own tools. In this context, the medium is a core element of the research message.\n\
\n\
The portal itself is a web-based, open-source platform that serves as the course's didactic infrastructure.\n\
It contains the calendar, announcements, all lectures, and important links.\n\
It functions as a 'living lab' co-developed with the students—a space to experiment and test the exact same tools and concepts we are learning in the course."
  },
  {
    element: <>
      <h4 className='mb-8' >Resources:</h4>
      <ResourcesContent />
    </>,
    title: "Course Resources",
    notes: "It also includes multiple resources to access and download, such as:\n\
    - books,\n\
    - websites,\n\
    - influential videos and lectures,\n\
    - free software,\n\
    - and peer-reviewed articles."
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
    title: "Course Lectures",
    notes: "The students can access all the lectures to date including all slides and class recordings through the portal."
  },
  {
    element: (
      <Image
        src="/images/computer-graphics/sketchpad.png"
        alt="Ivan Sutherland inventor of Sketchpad, the first GUI"
        caption={'a) In 1963, Ivan Sutherland at MIT developed a program called ‘Sketchpad’, the first GUI.  b) Sketchpad interface. source: Sdegno, Alberto. 2017. "For an Archeology of the Digital Iconography" Proceedings 1, no. 9: 1093.'}
      />
    ),
    title: "Example of a slide",
    notes:
      'The portal also acts as a slideshow.\n\
      The slides themselves are created with the same tools so they can inspect the source code of the entire presentation and see how it works.\n\
      This is an example of one of the theory slides:\n\
      Speaker notes are also available through the browser devTools.\n\
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
    title: "Interactive features",
    notes:
      'There are interactive features that the students can use to test their knowledge when studying for the quizzes.',
  },
  {
    element: (
      <>
        <h2>CODE Editor</h2>
        <br />
        <CodeEditor />

      </>
    ),
    title: "Code Editor",
    notes: 'More importantly, I have created interactive features to practice their programming skills.\n\
    This example is a simple real-time  sandbox for them to test the different languages they learn in the course.\n\
    \n\
    It is progressive because first we talk about HTML, then CSS and finally JavaScript.\n\
    At the end they can test the 3 languages together and see in real time how they interact.'
  },

  {
    element: (
      <>
        <h4 className='w-full text-left' >Drawing with Pixels (raster):</h4>
        <br />
        <div className='relative inline-block w-full h-full'>
          <iframe
            className="w-full h-full"
            src="https://acepixels.netlify.app/"
          />
          <div className='absolute left-0 top-0 bottom-0 w-1 bg-green-500'></div>
          <div className='absolute left-0 -top-6 text-green-500 font-bold'>Y</div>
          <div className='absolute bottom-0 right-0 h-1 bg-red-500 w-full'></div>
          <div className='absolute -right-6 bottom-0 text-red-500 font-bold'>X</div>
        </div>
      </>
    ),
    title: "Drawing with Pixels (raster)",
    notes:
      "I then introduce the foundational concepts of computer graphics.\n\
Students use this embedded raster tool to experiment directly with pixel-based drawing.\n\
This proves the portal is not just a passive presentation, but a hands-on tool.",
  },
  {
    element: (
      <>
        <h4 className='w-full text-left' >Drawing with Pixels (raster):</h4>
        <br />
        <div className='relative inline-block w-full h-full bg-[#675563]'>
          <Image
            src="/images/computer-graphics/pixel-art-kk.png"
            alt="Pixel art"
            className='mt-8'
          />
          <div className='absolute left-0 top-0 bottom-0 w-1 bg-green-500'></div>
          <div className='absolute left-0 -top-6 text-green-500 font-bold'>Y</div>
          <div className='absolute bottom-0 right-0 h-1 bg-red-500 w-full'></div>
          <div className='absolute -right-6 bottom-0 text-red-500 font-bold'>X</div>
        </div>
      </>
    ),
    title: "Pixel art",
    notes: 'I often lose students that spend the rest of the class creating pixel art.'
  },
  {
    element: <CartesianPlane />,
    title: "Interactive Cartesian Plane",
    notes:
      "We then move to the 3D space with an interactive Cartesian Plane built with Three.js.\n\
      This tool allows students to manipulate XYZ coordinates and see the results in real-time.\n\
      This is a much more dynamic and graphic way of understanding the basis of tri-dimensional digital world.\n\
      Which is harder to grasp with a static presentation",
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
    title: "Drawing with Code (vectorial)",
    notes: 'This leads to drawing with code.\n\
    Using P5.js, we generate vector graphics through scripts, showing that architectural marks can be defined as repeatable functions rather than static traces.\n\
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
    title: "CAD viewer (dxf)",
    notes: 'Having established the foundational concepts of computer graphics, the course pivots toward specific tools for architects.\n\
This allows students to experience real toolmaking for architectural representation.\n\
After grasping the theory behind CAD, 3D CAD, and BIM, the class moves to firsthand experimentation with custom tools.\n\
\n\
The first example is a CAD viewer that works with the open format DXF.'
  },
  {
    element: (
      <iframe className="w-full h-full" src="https://threejs.org/editor/" />
    ),
    title: "Three.js Editor",
    notes: 'Moving into 3D modelling, I utilize the Three.js library to handle scenes, lights, and textures natively in the browser.\n\
This is the exact engine behind major proprietary cloud platforms like Autodesk Platform Services—formerly Forge—and the Autodesk Construction Cloud (or ACC).\n\
By learning Three.js, students are not just learning a library; they are discovering how to author the same industrial-grade tools used by tech giants, completely free and open-source.\n\
\n\
In this interactive feature, students can test the different elements and see the spatial results directly.'
  },
  {
    element: (
      <>
        <h4 className='w-full text-left' >3D viewer (three.js):</h4>
        <Three />
      </>
    ),
    title: "Custom 3D scene (three.js)",
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
    title: "Students photogrammetry models for assignment 2",
    notes:
      'This is an example of the students’ work with the 3D viewer.\n\
      For assignment 2, I asked them to create photogrammetric models of themselves. This composition shows some of the models from Fall 2024\n\
      Now let me show you the result of some of those assignments where they embedded their models in interactive 3D scenes',
  },
  {
    element: (
      <iframe className="w-full h-full" src="/arcn5005/terms/f2024/students/basilcurrie/three/index.html" />
    ),
    title: "Student Project: Interactive Video Game",
    notes: 'For example this student created a video game where his avatar was collecting points by jumping obstacles.'
  },
  {
    element: (
      <iframe className="w-full h-full overflow-hidden" src="/arcn5005/terms/f2024/students/maisjoudeh/three/index.html" />
    ),
    title: "Student Project: Interactive Cafeteria Design",
    notes: 'Or this student that designed a cafeteria where she used her avatar to embed herself in the design'
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
    title: "BIM viewer (ifc)",
    notes: 'This exercise was to use a library called open bim components to create a BIM viewer.\n\
    Here I wanted to show a super simple BIM viewer to load IFC models quickly and access the metadata.\n\
    This example was developed with just a few lines of code'
  },
  {
    element: (
      <>
        <h4 className='w-full text-left'>GIS viewer (Cesium JS):</h4>
        <iframe
          width="100%"
          height="100%"
          src="/utils/map/cesium/index.html"
          title="Cesium JS GL"
        ></iframe>
      </>
    ),
    title: "GIS viewer (Cesium JS)",
    notes: 'We then expand to the urban scale. I show students a spectrum of GIS web engines\n\
    This example uses Cesium JS...'
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
    title: "GIS viewer (Leaflet)",
    notes: 'This one uses the popular Leaflet...'
  },
  {
    element: (
      <>
        <h4 className='w-full text-left' >GIS viewer (Mapbox GL JS):</h4>
        <iframe
          width="100%"
          height="100%"
          src="/utils/map/mapbox/index.html"
          title="Mapbox"
        ></iframe>
      </>
    ),
    title: "GIS viewer (Mapbox GL JS)",
    notes: 'and Mapbox, for 3D mapping and visualization.'
  },
  {
    element: (
      <>
        <h4 className='w-full text-left' >GIS viewer (Maplibre GL JS):</h4>
        <iframe
          width="100%"
          height="100%"
          src="/utils/map/maplibre/index.html"
          title="Maplibre"
        ></iframe>
      </>
    ),
    title: "GIS viewer (Maplibre GL JS)",
    notes: 'Finally, we explore Maplibre, an open-source alternative to Mapbox, which offers similar functionality for creating interactive 3D maps.\n\
    In this example I also added a dataset from the open data gallery of Natural Resources Canada.\n\
    A BIM and a 3D model to show the potential of integrating diverse media with the map\n\
    _____________________________________________________________________________________\n\
    Let me now show you a few examples from Assignment 3 where students experiment with maplibre and open datasets to create custom maps'
  },
  {
    element: (
      <iframe className="w-full h-full" src="/arcn5005/terms/f2024/students/faezaafrin/map/index.html" />
    ),
    title: "Student Project:",
    notes: ' Interactive Ottawa food recommendations Map'
  },
  // {
  //   element: (
  //     <iframe className="w-full h-full" src="/arcn5005/terms/f2024/students/mostafabdeir/map/index.html " />
  //   ),
  //   title: "Student Project:",
  //   notes: ' Shawarma spots around Ottawa'
  // },
  // {
  //   element: (
  //     <iframe className="w-full h-full" src="/arcn5005/terms/f2024/students/basilcurrie/map/index.html" />
  //   ),
  //   title: "Student Project:",
  //   notes: 'Historic buildings in Almonte'
  // },
  {
    element: (
      <iframe className="w-full h-full" src="/arcn5005/terms/f2024/students/saraniadabee/map/index.html" />
    ),
    title: "Student Project:",
    notes: 'Timelapse of Volcanic Eruptions'
  },
  {
    element: (
      <iframe className="w-full h-full" src="/arcn5005/terms/f2024/students/williamlozides/map/index.html" />
    ),
    title: "Student Project:",
    notes: 'and the venues where the student performed at in Toronto'
  },
  // {
  //   element: <>
  //     <h4 className='mb-8' >Evaluations:</h4>
  //     <CustomizedTables data={Arcn5005F2024Evaluations} />
  //   </>,
  //   title: "Course Evaluations",
  //   notes: 'These are the evaluations:\n\
  //   _____________________________________________________________________________________\n\
  //   - There are also 2 quizzes where I cover the theory of the course\n\
  //   - Assignment 1 is a portfolio type work using HTML, CSS and JavaScript,\n\
  //   - Assignment 2 a 3d scene,\n\
  //   - Assignment 3 is a map,\n\
  //   - The BIM assignment is a bonus track for students that want to go deeper into the topic and get extra points.\n\
  //   - and the Final Assignment is everything combined.'
  // },
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
    title: "Course GitHub",
    notes: 'This is the GitHub repository.\n\
    Where students submit their work using the same tools as software developers use to collaborate in real projects.'
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
    title: "Forking the Course GitHub Repository",
    notes: 'Students need to Fork the repository, commit their work, create Pull requests, etc'
  },
  // {
  //   element: (
  //     <>
  //       <h3>Fork the course GitHub repository</h3>
  //       <br />
  //       <Image
  //         src="/images/defence/gitgraph.png"
  //         alt="Git Graph"
  //       />
  //     </>
  //   ),
  //   title: "Git Graph",
  //   notes: 'This is an example of a submission day, all the different colour lines are students merging their work.\n\
  //   All students can see each other work at all time and learn from each other.\n\
  //   Collaboration is encourage.\n\
  //   I even offer extra points to students that help their classmates to solve problems.'
  // },
  {
    element:
      <div className="w-full flex flex-col items-center justify-center grow gap-8 mdx">
        <StudentsList students={classListf2024} />
      </div>,
    title: "Student Projects",
    notes: 'At the end of the term, the students have created for portfolio type work, with 3d models, maps, bim and finally everything combined'
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
    title: "Return to Epistemic Objects",
    notes: 'That is a quick peek into the course,\n\
    Let’s now go back to look at the second epistemic object'
  }

];
