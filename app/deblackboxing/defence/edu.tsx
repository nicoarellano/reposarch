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
import Elements from '@/app/arcn5005/(lectures)/week05/Elements';
import Three from '@/components/Common/Three';
import EpistemicObjectIcon from '@mui/icons-material/HomeRepairServiceRounded';

const BimViewer = dynamic(() => import('@/components/Common/BimViewer'), { ssr: false });

const MainMenuContent = dynamic(() => import('@/app/arcn5005/(main)/mainMenuContent'), { ssr: false });

export const content: Toc = [
  {
    element: <MainMenuContent />
  },
  // {
  //   element: <PdfViewer src="/arcn5005/terms/f2024/ARCN5005 f2024 - Course Outline.pdf" />
  // },
  {
    element: <>
      <h4 className='mb-8' >Resources:</h4>
      <ResourcesContent />
    </>
  },
  {
    element: (
      <>
        <h4>📖 Eric Raymond - The Cathedral and the Bazaar (1999)</h4>
        <br />
        <PdfViewer src="/resources/Raymond, Erik - The Cathedral and the Bazaar Musings on Linux and Open Source by an Accidental Revolutionary (1999).pdf" />
      </>
    ),
  },
  {
    element: <>
      <h4 >Lectures:</h4>
      <TOC />
    </>
  },
  {
    element: (
      <Image
        src="/images/computer-graphics/analog-process.png"
        alt="Analog Process"
        caption={'Analog creative process'}
      />
    ),
    notes:
      'We have been using analogue tools for centuries to express our creativity.\
    This allows a particular relationship with the object.',
  },
  // {
  //   element: (
  //     <Image
  //       src="/images/computer-graphics/process-with-gui.png"
  //       alt="Digital Creative Process"
  //       caption={'Digital creative process with GUI'}
  //     />
  //   ),
  //   notes:
  //     'Just as the new representational technology of pencil and paper challenged Renaissance architects to rethink the nature of their work away from the construction site,\
  //      today’s new representational technology must find ways to nurture the material imagination.\
  //       - Susan Piedmon-Palladino - Tools of the Imagination',
  // },

  // {
  //   element: <Freedoms />,
  //   notes:
  //     'Specifically, free software means users have the four essential freedoms: \
  // (0) to run the program, \
  // (1) to study and change the program in source code form, \
  // (2) to redistribute exact copies, and \
  // (3) to distribute modified versions.',
  // },
  {
    element: <Tags />,
    notes:
      'HTML tags are keywords used in HTML to display web-pages with certain properties. They are further used for defining HTML elements. \
        An HTML element consists of a starting tag, some content, and an ending tag. The web browser reads the HTML document from top to bottom, left to right. \
        Each HTML tag defines a new property that helps in rendering the website.',
  },
  {
    element: <Elements />,
    notes: '',
  },
  {
    element: (
      <>
        <h2>HTML Editor</h2>
        <br />
        <iframe
          className="w-11/12 h-full border-solid border-2 border-dark p-5 rounded-lg bg-light shadow-md mx-10"
          src="/utils/code-editors/html-css-js.html"
        />
      </>
    ),
    notes:
      `HTML EXAMPLE _________________________________________\n
<div class="card">\n
  <h1 id="greeting">Hello, Class!</h1>\n
  <p>Click the button to change my color.</p>\n
  <button id="magicButton">Change Color</button>\n
</div>\n
\n
CSS EXAMPLE __________________________________________________\n
.card {\n
  border: 2px solid #333;\n
  padding: 20px;\n
  text-align: center;\n
  border-radius: 12px;\n
  font-family: sans-serif;\n
  background-color: #f9f9f9;\n
}\n
\n
button {\n
  background-color: #007bff;\n
  color: white;\n
  border: none;\n
  padding: 10px 20px;\n
  border-radius: 5px;\n
  cursor: pointer;\n
}\n
\n
button:hover {\n
  background-color: #0056b3;\n
}\n
\n
JS EXAMPLE_____________________________________________________\n
const button = document.getElementById('magicButton');\n
const title = document.getElementById('greeting');\n
\n
button.addEventListener('click', () => {\n
  if (title.style.color === 'blueviolet') {\n
    title.style.color = 'black';\n
    title.style.backgroundColor = 'transparent';\n
  } else {\n
    title.style.color = 'blueviolet';\n
    title.style.backgroundColor = 'yellow';\n
  }\n
});`
  },
  {
    element: <CartesianPlane />,
    notes:
      "Cartesian or analytic geometry, which uses algebra to describe geometry. Descartes 'invented the convention of representing unknowns in equations by x, y, and z'",
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
      "A pixel (px) (short for 'picture element') is the smallest addressable dot or square that make up an digital raster image on a display device.\
      The more pixels the better image resolution. Image resolution of a computer monitor, smartphone, or TV screen, refers to the number of pixels. \
      The intensity of each pixel is variable. \
      In color imaging systems, a color is typically represented by three or four component intensities such as red, green, and blue (RGB), or cyan, magenta, yellow, and black.",
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
  },
  {
    element: (
      <>
        <h4 className='w-full text-left' >CAD viewer (dxf):</h4>
        <br />
        <iframe
          className="w-11/12 h-full border-solid border-2 border-dark p-5 rounded-lg bg-light shadow-md mx-10"
          src="https://vagran.github.io/dxf-viewer-example/"
        />
      </>
    ),
  },
  {
    element: (
      <>
        <h4 className='w-full text-left' >3D viewer (three.js):</h4>
        <Three />
      </>
    ),
  },
  {
    element: (
      <iframe className="w-full h-full" src="https://threejs.org/editor/" />
    ),
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
  },

  {
    element: <>
      <h4 className='mb-8' >Evaluations:</h4>
      <CustomizedTables data={Arcn5005F2024Evaluations} />
    </>
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
  },
  {
    element:
      <div className="w-full flex flex-col items-center justify-center grow gap-8 mdx">
        <StudentsList students={classListf2024} />
      </div>
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
