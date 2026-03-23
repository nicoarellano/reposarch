import { Toc } from '@/app/types/types';

import SlideImage from '@/components/Common/SlideImage';
import Image from 'next/image';
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
import AutoRedirect from '../dev/AutoRedirect';

const BimViewer = dynamic(() => import('@/components/Common/BimViewer'), { ssr: false });

const MainMenuContent = dynamic(() => import('@/app/arcn5005/(main)/mainMenuContent'), { ssr: false });

export const content: Toc = [
  {
    element: <MainMenuContent />,
    title: "Course Portal, Main menu",
    notes: "Since you have already read the theory, I don’t want to repeat it.\n\
Instead, I want to explain why I built a custom portal to teach this course.\n\
This is the exact same reason I built this custom presentation tool for this defense.\n\
My central argument is that to teach my work effectively, I need interactive, real-time tools.\n\
Since, traditional software like PowerPoint cannot do this the way I needed, I had to build my own.\n\
\n\
This choice proves a core principle of my research: architects benefit by designing their own tools.\n\
Here, the medium is a core element of the research message.\n\
\n\
The portal is a web-based, open-source platform that serves as the course infrastructure.\n\
It holds the calendar, lectures, and resources.\n\
More importantly, it acts as a 'living lab' co-developed with the students—a space to test the exact tools taught in the class.\n\
\n\
Let me show you a few examples"
  },
  {
    element: <>
      <h4 className='mb-8' >Resources:</h4>
      <ResourcesContent />
    </>,
    title: "Course Resources",
    notes: "The portal includes multiple resources to access and download, such as:\n\
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
    notes: "Students can access ebooks and resources directly through the portal."
  },
  {
    element: <>
      <h4 >Lectures:</h4>
      <TOC />
    </>,
    title: "Course Lectures",
    notes: "Students can access all the lectures to date including all slides and class recordings through the portal."
  },
  {
    element: (
      <SlideImage
        src="/images/computer-graphics/sketchpad.png"
        alt="Ivan Sutherland inventor of Sketchpad, the first GUI"
        caption={'a) In 1963, Ivan Sutherland at MIT developed a program called ‘Sketchpad’, the first GUI.  b) Sketchpad interface. source: Sdegno, Alberto. 2017. "For an Archeology of the Digital Iconography" Proceedings 1, no. 9: 1093.'}
      />
    ),
    title: "Example of a slide",
    notes:
      'I use the portal as a slideshow.\n\
All the slides are created with the same tools.\n\
So the students can inspect the source code of the whole course material and see how it works.\n\
This is an example of one of the theory slides:\n\
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
      'There are dynamic features that students can use to test their knowledge when studying for the quizzes.',
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
    notes: 'More importantly, I have created interactive tools to practice their programming skills.\n\
\n\
This example is a simple real-time sandbox for them to test the different languages I teach in the course.\n\
\n\
It is progressive because first I teach them HTML, then CSS and finally JavaScript.\n\
\n\
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
          <SlideImage
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
    notes: 'Some students have used it to create pixel art.'
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
Using P5.js, we generate vector graphics through scripts,\n\
showing that architectural marks can be defined as repeatable functions rather than static traces.\n\
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
      <iframe className="w-full h-full" src="https://threejs.org/editor/" />
    ),
    title: "Three.js Editor",
    notes: 'Three.js library is a great tool to handle scenes, lights, and textures natively in the browser.\n\
It is the exact engine behind major proprietary cloud platforms such as Autodesk Forge (now Platform Services)\n\
and the popular Autodesk Construction Cloud (ACC) among others.\n\
\n\
By learning Three.js, students are not just learning a library; they are discovering how to author the same industrial-grade tools used by tech giants, completely free and open-source.\n\
\n\
In this interactive editor, students can test the different elements and see the spatial results directly.'
  },
  {
    element: (
      <>
        <h4 className='w-full text-left' >3D viewer (three.js):</h4>
        <Three />
      </>
    ),
    title: "Custom 3D scene (three.js)",
    notes: 'We then move to a more custom 3D viewer built with Three.js,\n\
this allows students to create their own scenes from scratch and to load and manipulate 3D models in real-time,\n\
demonstrating the core principles of 3D representation and interaction.'
  },
  {
    element: (
      <SlideImage
        src="/images/three/f2024-render.png"
        alt="students photogrammetry models"
        caption={'Composition of some of the student’s 3D models created for the photogrammetry exercise, class Fall 2024.'}
      />
    ),
    title: "Students photogrammetry models for assignment 2",
    notes:
      'This is an example of the students’ work.\n\
For assignment 2, I asked them to create photogrammetric models of themselves and add them to Three.js.\n\
This composition shows some of the models from Fall 2024\n\
Now let me show you the result of some of those assignments where students embedded their avatars in 3D scenes',
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
    notes: 'Or this student that designed a cafeteria where she used her photogrametric model to embed herselve in the design'
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
    notes: 'I taught students a library called Open BIM components\n\
which allows them to create custom BIM tools.\n\
This is an example of a simple BIM viewer to load IFC models and access the metadata.'
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
    notes: 'We then move to the urban scale.\n\
I show students the most popular GIS web engines\n\
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
    notes: 'This one uses the Leaflet, widely used for 2D maps'
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
    notes: 'Mapbox, for 3D mapping.'
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
    notes: 'Finally, Maplibre, an open-source alternative to Mapbox,\n\
\n\
In this example I also added a dataset from the open data gallery of Natural Resources Canada,\n\
Canadian Airports.\n\
A 3D model and the BIM of the Architecture school to show the potential for BIM-GIS integration\n\
\n\
Let me now show you a few examples from Assignment 3\n\
where students experiment with maplibre and datasets of their choice to create custom maps'
  },
  {
    element: (
      <iframe className="w-full h-full" src="/arcn5005/terms/f2024/students/faezaafrin/map/index.html" />
    ),
    title: "Student Project:",
    notes: 'This one is an interactive Ottawa food recommendations Map'
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
    notes: 'a timelapse of Volcanic Eruptions'
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
        <SlideImage
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
Where students submit their work using the same tools software developers use to collaborate in real projects.'
  },
  {
    element: (
      <>
        <h3>Fork the course GitHub repository</h3>
        <br />
        <SlideImage
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
    notes: 'Students need to fork the repository, commit their changes, and create Pull requests to merge their work to the course repository\n\
Their work will be accessible by their classmates and future students as a reference'
  },
  {
    element:
      <div className="w-full flex flex-col items-center justify-center grow gap-8 mdx">
        <StudentsList students={classListf2024} />
        <AutoRedirect href={'/deblackboxing/epistemic-object/?animation=false'} delay={0} automatic={false} />
      </div>,
    title: "Student Projects",
    notes: 'At the end of the term, the students have created:\n\
  - a portfolio type website,\n\
  - 3d scene,\n\
  - a custom map,\n\
  - a bim viewer\n\
  - and the final assignment is a combination of all new skills\n\
Here, you can see one example\n\
\n\
I encourage them to use their studio project in the final assignment\n\
_____________________________________________________________________________________\n\
  That was a glimpse into the course platform,\n\
  I will now transition back to the second epistemic object'
  },
  {
    element:
      <div className='flex flex-col items-center justify-center h-full gap-2'>
        <br />
        <br />
        <br />
        <br />
        <br />
        <a
          href={'/deblackboxing/epistemic-object/?animation=false'}
          className="cursor-pointer"
          aria-label="Open Epistemic Object page"
        >
          <Image
            priority
            src={'/images/openBox.png'}
            height={300}
            width={300}
            alt="Epistemic Object"
          />
          <AutoRedirect href={'/deblackboxing/epistemic-object/?animation=false'} delay={0} />
        </a>
      </div>,
    title: "Return to Epistemic Objects",
    notes: 'That was a glimpse into the course platform,\n\
  I will now transition back to the second epistemic object'
  }

];
