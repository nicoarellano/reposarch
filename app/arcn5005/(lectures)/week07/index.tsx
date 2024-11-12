import { Toc } from '@/app/types/types';

import Image from '@/components/Common/Image';
import Video from '@/components/Common/Video';
import EmojiTitle from '@/components/Common/EmojiTitle';
import PdfViewer from '@/components/Common/PdfViewer';
import AudioPlayer from '@/components/Common/AudioPlayer';

export const content: Toc = [
  {
    element: <EmojiTitle emoji={'🏗️💻'} title={'Open Source BIM'} />,
  },

  {
    element: (
      <Image
        src="/images/bonsaibim/raphael.jpg"
        alt="Raphaël Vouilloz"
        caption="Guess lecturer: Raphaël Vouilloz"
      />
    ),
    notes: '',
  },
  {
    element: (
      <>
        <h3>Raphaël Vouilloz</h3>
        <br />
        <h5>
          Raphaël Vouilloz is a Swiss architect based in Lausanne. He graduated
          from the Ecole Polytechnique Fédérale de Lausanne in Architecture,
          Urban and Territorial Design. His master thesis was supervised by
          Prof. Bernard Cache and focused on BIM uses for transforming existing
          buildings: digital survey, phasing and planning. He joined the
          laboratory for Digital Cultures of the Architectural Project
          laboratory (CNPA) as a scientific assistant for teaching geometry and
          stereotomy on parametric software and BIM, as well as for research and
          development oriented towards open formats and open-source tools for
          architects, such as Speckle, IFC.js and BonsaiBIM (formerly
          BlenderBIM). He is doing a PhD under the co-direction of Prof. Bernard
          Cache and Philippe Marin, of the Méthodes et Histoire de
          l`Architecture (MHA) laboratory at the École Nationale Supérieure
          d`Architecture de Grenoble (ENSAG). His research involves defining
          digital BIM and CAD/CAM processes for ashlar construction, prototyping
          a model of the horseshoe-shaped staircase at the Château de
          Fontainebleau.
        </h5>
      </>
    ),
  },

  {
    element: (
      <Video
        src="https://www.youtube.com/embed/g3GxMstbgDc?si=5VXjfc2G_5JrnTCU"
        title="Raphael Vouilloz - BonsaiBIM - Fall 2024"
        caption={'Raphael Vouilloz - BonsaiBIM - Fall 2024'}
      />
    ),
  },

  {
    element: (
      <>
        <h2>List of links provided by Raphael</h2>
        <br />
        <ol>
          <li>
            <a href="https://bonsaibim.org/">BonsaiBIM</a>
          </li>
          <li>
            <a href="https://osarch.org">OSArch</a>
          </li>
          <li>
            <a href="https://mediaspace.epfl.ch/media/04+Dion+Moult/0_6p3ydrvh/33141">
              Dion Moult - The Open-Source Architecture Community. Towards
              BlenderBIM, a free & IFC-native Software for Architects (must
              watch!)
            </a>
          </li>
          <li>
            <a href="https://enac-cnpa.github.io/BlenderBIM-Tutoriel-Villa-Le-Sextant/1_introduction.html">
              EPFL BlenderBIM
            </a>
          </li>
        </ol>
      </>
    ),
  },

  {
    element: (
      <>
        <Image
          src="/images/bonsaibim/native-ifc.png"
          alt="Native IFC"
          href="https://github.com/brunopostle/ifcmerge/blob/main/docs/whitepaper.rst"
          caption="Native IFC"
        />
        <br />
        <AudioPlayer src={'/resources/native-ifc.m4a'} />
      </>
    ),
    notes:
      'A simple to implement set of protocols for reading and writing BIM data, known as *Native IFC*, enables robust multi-user collaborative BIM workflows.\n\
   The whitepaper shows full version tracking, rollback, attribution, staging, merging, multi-user editing, issue tracking, \n\
    automated checking, and publishing can be achieved by hosting IFC data in established commercial and open source git-forge services.\n\
    It shows that the git revision control system as a Common Data Environment (CDE) for BIM data is scalable, secure, future-proof and fully interoperable with existing systems. \n\
    It shows multiple software applications and libraries that already implement *Native IFC*, this is a real-world technology.',
  },

  {
    element: (
      <>
        <PdfViewer src="/resources/ifcmerge_docs_whitepaper.pdf" />
        <br />
        <a href="https://github.com/brunopostle/ifcmerge/blob/main/docs/whitepaper.rst">
          <em>
            Source: OSArch
            https://github.com/brunopostle/ifcmerge/blob/main/docs/whitepaper.rst
          </em>
        </a>
      </>
    ),
  },

  // BONSAI BIM
  {
    element: (
      <Image
        src="/images/bonsaibim/blender+bim.png"
        alt={'BonsaiBIM'}
        href="https://bonsaibim.org/"
        caption={
          'BonsaiBIM (formerly BlenderBIM) is a free and open source alternative to Revit - On a few weeks we will have a lecture and a workshop dedicated specifically to BonsaiBIM'
        }
      />
    ),
  },

  {
    element: (
      <Video
        src="https://www.youtube.com/embed/oF-0qq_yi34?si=eNJuZKtzSou_wX9I"
        title="BonsaiBIM - Addon Update - 24.06.02"
        caption={'BonsaiBIM - Addon Update - 24.06.02'}
      />
    ),
  },
  {
    element: (
      <Video
        src="https://www.youtube.com/embed/kmPPR0fWOrI?si=Z4gWdJ1Y0aa51h2G"
        title="Import DXF Files in Blender"
        caption={'Import DXF Files in Blender'}
      />
    ),
  },
  {
    element: (
      <EmojiTitle
        emoji={'Lab 7 🏗️'}
        title={
          'BonsaiBIM & That Open Engine: Create a BIM model and a BIM Viewer'
        }
      />
    ),
  },
];
