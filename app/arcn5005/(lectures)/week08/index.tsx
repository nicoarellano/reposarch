import { Toc } from "../../../../types/types";

import Image from "../../../../components/Common/Image";
import Video from "../../../../components/Common/Video";
import Quote from "../../../../components/Common/Quote";
import EmojiTitle from "../../../../components/Common/EmojiTitle";
import PdfViewer from "../../../../components/Common/PdfViewer";
import Gltf from "./Gltf";

export const content: Toc = [
  // JAVASCRIPT CONTENT
  {
    element: (
      <>
        <Image
          src="/images/javascript/js.gif"
          alt="JavaScript"
          href="https://www.w3schools.com/js/default.asp"
          caption={"JavaScript is the programming language of the Web"}
        />
      </>
    ),
    notes:
      "Do not confuse with Java, Javascript is the logic behind of all modern internet browsers. It is also one of the most popular programming languages in the world",
  },
  {
    element: (
      <>
        <Image
          src="/images/javascript/js-cloud.png"
          alt="JavaScript libraries"
          caption={"JavaScript libraries"}
        />
      </>
    ),
    notes:
      "Javascript libraries include pre-written JavaScript code that simplifies the completion of common and complicated tasks \n\
      Active Communities \n\
The most widely used libraries have active communities and forums where you may obtain help getting started with them. \
The library developer site is frequently used to get JavaScript libraries. \n\
Many library creators make both development and production versions of their libraries available. \
Comments and tips, as well as other non-minified code, are included in the development versions. \
Production versions are frequently minified and compressed for usage on live sites. \n\
Some libraries are even accessible via content delivery networks (CDNs), including cdnjs, Google Hosted Libraries, jsDelivr, and Microsoft Ajax Content Delivery Network, to name a few.",
  },
  {
    element: (
      <>
        <Image
          src="/images/javascript/js-libraries.png"
          alt="JavaScript visual libraries"
          href="https://en.wikipedia.org/wiki/List_of_JavaScript_libraries"
          caption={
            "JavaScript visual libraries - source: https://isquared.digital/blog/2020-03-24-viz-tools-pt2-1"
          }
        />
      </>
    ),
    notes:
      "There are plenty of JavaScript Visualization tools. Based on their functionality, we can cluster them into 4 main categories: \n\
      → Charting: to produce the most common DataViz plots;\n\
      → Graphs: representing and analyzing graph-based data;\n\
      → Maps: for representing data that has geo-features and\n\
      → 3D: creating three-dimensional charts and cool animations.",
  },

  {
    element: (
      <>
        <Image
          src="/images/three/webgl.png"
          alt="Web gl"
          href="https://www.khronos.org/webgl/"
          caption={
            "WebGL™ is a cross-platform, royalty-free open web standard for a low-level 3D graphics API based on OpenGL ES"
          }
        />
      </>
    ),
    notes:
      "WebGL is a very low-level system that only draws points, lines, and triangles. (shaders) \
      To do anything useful with WebGL generally requires quite a bit of code and that is where three.js comes in. \
      It handles stuff like scenes, lights, shadows, materials, textures, 3d math, all things that you'd have to write yourself if you were to use WebGL directly.",
  },

  // {
  //   element: (
  //     <>
  //       <Image
  //         src="/images/three/gltf.png"
  //         alt="Gltf and Glb"
  //         href="https://www.khronos.org/gltf/"
  //         caption={"Gltf and Glb"}
  //       />
  //     </>
  //   ),
  //   notes: "",
  // },

  {
    element: (
      <>
        <a href="https://en.wikipedia.org/wiki/GlTF">
          <Gltf />
        </a>
        <em>GLTF: Graphics Library Transmission Format</em>
      </>
    ),
    notes:
      "glTF™ is a royalty-free specification for the efficient transmission and loading of 3D scenes and models by engines and applications. \n\
    glTF minimizes the size of 3D assets, and the runtime processing needed to unpack and use them. \n\
    glTF defines an extensible, publishing format that streamlines authoring workflows and interactive services by enabling the interoperable use of 3D content across the industry. \n\
    glTF 2.0 has been released as the ISO/IEC 12113:2022 International Standard.",
  },
  {
    element: (
      <>
        <Image
          src="/images/three/gltf-jpeg-of-3d.jpg"
          alt="GLTF"
          href="https://www.khronos.org/gltf/"
          caption={"glTF is the 'JPEG of 3D'"}
        />
      </>
    ),
    notes: "",
  },
  {
    element: (
      <>
        <Image
          src="/images/three/gltf-ecosystem.png"
          alt="GLTF"
          href="https://www.khronos.org/gltf/"
          caption={"glTF Ecosystem'"}
        />
      </>
    ),
    notes: "",
  },

  {
    element: (
      <Video
        src="https://www.youtube.com/embed/tonSNnEj-ow?si=h7M704Svi3SpAvN3"
        title="Gltf"
        caption={"What is GLTF"}
      />
    ),
  },
  {
    element: (
      <>
        <h3>How does WebGL looks like?</h3>
        <br />
        <Image
          src="/images/three/webgl-vertex-shader.png"
          alt="WebGL shaders"
          caption={"WebGL shaders are hard to use"}
        />
      </>
    ),
    notes:
      "To do anything useful with WebGL generally requires quite a bit of code and that is where three.js comes in. \
    It handles stuff like scenes, lights, shadows, materials, textures, 3d math, all things that you'd have to write yourself if you were to use WebGL directly.",
  },
  // Three js
  {
    element: (
      <>
        <Image
          src="/images/three/three-js-logo.png"
          alt="Three js"
          href="https://threejs.org/"
          caption={
            "Three.js is a 3D library that tries to make it as easy as possible to get 3D content on a webpage"
          }
        />
      </>
    ),
    notes:
      "Three.js is a 3D library that tries to make it as easy as possible to get 3D content on a webpage. \n\
      Three.js is often confused with WebGL since more often than not, but not always, three.js uses WebGL to draw 3D.",
  },
  {
    element: (
      <>
        <h2>Three js Primitives</h2>
        <br />
        <iframe
          className="w-1/2 h-full"
          src="https://threejs.org/manual/examples/primitives.html"
        />
      </>
    ),
  },

  {
    element: (
      <iframe
        className="w-full h-full"
        src="https://threejs.org/manual/#en/fundamentals"
      />
    ),
  },

  {
    element: (
      <iframe className="w-full h-full" src="https://threejs.org/editor/" />
    ),
  },

  {
    element: (
      <EmojiTitle
        emoji={"Lab 8 🌐🫖"}
        title={"Use Three js to upload your Blender model (mesh/gltf)"}
      />
    ),
  },

  // {
  //   element: (
  //     <>
  //       <h2>HTML + CSS + JavaScript Editor</h2>
  //       <br />
  //       <iframe
  //         className="w-11/12 h-full border-solid border-2 border-dark p-5 rounded-lg bg-light shadow-md mx-10"
  //         src="/arcn5005/f2023/students/nicolasarellanorisop/code-editors/html-css-js.html"
  //       />
  //     </>
  //   ),
  // },
];
