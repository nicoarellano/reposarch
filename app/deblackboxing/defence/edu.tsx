import { Toc } from '@/app/types/types';

import Image from '@/components/Common/Image';
import Video from '@/components/Common/Video';

import CartesianPlane from '@/components/CartesianPlane';
import TOC from '@/app/arcn5005/(main)/toc/page';
import SimpleButton from '@/components/Common/SimpleButton';
import dynamic from 'next/dynamic';
import PdfViewer from '@/components/Common/PdfViewer';
import CustomizedTables from '@/components/Common/Table';
import { Arcn5005F2024Evaluations } from '@/app/arcn5005/(main)/evaluations/arcn5005F2024evaluations';
import ResourcesContent from '@/app/arcn5005/(main)/resources/ResourcesContent';
import StudentsList from '@/components/Common/StudentsList';
import { classListf2024 } from '@/app/arcn5005/terms/[term]/students/(classListF2024)/classList';

const MainMenuContent = dynamic(() => import('@/app/arcn5005/(main)/mainMenuContent'), { ssr: false });

export const content: Toc = [
  {
    element: <MainMenuContent />,
    notes: '',
  },
  {
    element: <PdfViewer src="/arcn5005/terms/f2024/ARCN5005 f2024 - Course Outline.pdf" />,
    notes: '',
  },

  {
    element: <>
      <h3 className='mb-6'>Resources</h3>
      <ResourcesContent />
    </>,
    notes: '',
  },
  {
    element: <TOC />,
    notes: '',
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
  {
    element: (
      <Image
        src="/images/computer-graphics/process-with-gui.png"
        alt="Digital Creative Process"
        caption={'Digital creative process with GUI'}
      />
    ),
    notes:
      'Just as the new representational technology of pencil and paper challenged Renaissance architects to rethink the nature of their work away from the construction site,\
       today’s new representational technology must find ways to nurture the material imagination.\
        - Susan Piedmon-Palladino - Tools of the Imagination',
  },
  {
    element: <CartesianPlane />,
    notes:
      "Cartesian or analytic geometry, which uses algebra to describe geometry. Descartes 'invented the convention of representing unknowns in equations by x, y, and z'",
  },
  {
    element: (
      <>
        <h2>Drawing with Pixels ✏️</h2>
        <br />
        <iframe
          className="w-full h-full"
          src="https://acepixels.netlify.app/"
        />
      </>
    ),
    notes:
      "A pixel (px) (short for 'picture element') is the smallest addresable dot or square that make up an digital raster image on a display device.\
      The more pixels the better image resolution. Image resolution of a computer monitor, smartphone, or TV screen, refers to the number of pixels. \
      The intensity of each pixel is variable. \
      In color imaging systems, a color is typically represented by three or four component intensities such as red, green, and blue (RGB), or cyan, magenta, yellow, and black.",
  },
  {
    element: <CustomizedTables data={Arcn5005F2024Evaluations} />,
    notes: '',
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
        <SimpleButton
          href={`/arcn5005/terms/f2023/students`}
          title={`Assignments from Fall 2023`}
        />
      </div>,
    notes: '',
  },
];
