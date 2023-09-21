import { Toc } from "../../../../types/types";
import Image from "../../../../components/Common/Image";
// import Image as NextImage from "next/image";

import Video from "../../../../components/Common/Video";
import Quote from "../../../../components/Common/Quote";
import EmojiTitle from "../../../../components/Common/EmojiTitle";
import PdfViewer from "../../../../components/Common/PdfViewer";

import Degree from "./degree.mdx";
import Curves from "./curves.mdx";
import Weygant from "./weygant.mdx";
import Weygant2 from "./weygant2.mdx";
import Bim from "./bim.mdx";
import BimLevels from "./bimLevels.mdx";
import Csg from "./csg.mdx";
import Boolean from "./boolean.mdx";
import SolidBoolean from "./solidBoolean.mdx";
import Brep from "./brep.mdx";
import Benefits from "./benefits.mdx";
import Cons from "./cons.mdx";
import BimDrivers from "./bimDrivers.mdx";
import SimpleButton from "../../../../components/Common/SimpleButton";

export const content: Toc = [
  {
    element: (
      <>
        <Image
          src="/images/week03/tools-of-the-imagination.jpg"
          alt="Tools of the Imagination"
          href="https://books.google.com.na/books?id=1WUIIh99xDkC&printsec=frontcover&source=gbs_book_other_versions_r&cad=4#v=onepage&q&f=false"
        />
        <Quote
          quote={
            "The architect needs the right tools for the job. [...] The newest \
            tool, the computer, is really an entirely new toolbox full of \
            software to solve old and new problems."
          }
          author={"Susan Piedmont Palladino - Tools of the imagination"}
        />
      </>
    ),
  },

  {
    element: (
      <Quote
        quote={
          "          It is through the mastery of the full range of tools that the images \
          in the architect’s mind are translated into drawings and models, and \
          from the drawings and the models into buildings. Whether a simple \
          pencil or computer software, these tools give form to the wishes and \
          the instructions of the architect, but they are also active shapers of \
          what is possible."
        }
        author={"Susan Piedmont Palladino - Tools of the imagination"}
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week01/sutherland.png"
        alt="Ivan Sutherland inventor of Sketchpad, the first GUI"
        caption={"Ivan Sutherland inventor of Sketchpad, the first GUI"}
      />
    ),
    notes:
      "In 1963, Ivan Sutherland at MIT developed a program called ‘Sketchpad’, which can be considered as the first computer drawing program or the first graphical user interface (GUI).\
       GUIs are human-computer interaction devices that allow users to interact with the computer through graphical icons instead of written code.\
       With a GUI the user can click or touch and manipulate the symbols displayed on the screen and thus, directly alter the program.\
       GUIs made computer more accessible for non-programmers, including architects.\
       Since then, GUIs are certainly the preferred vehicle for architects to interact with computers.",
  },
  {
    element: (
      <Video
        src="https://www.youtube.com/embed/6orsmFndx_o?si=kTjsHWqd1tDjfhuj"
        title="Sketchpad by Ivan Sutherland"
        caption={"Sketchpad by Ivan Sutherland"}
      />
    ),
  },
  {
    element: (
      <Quote
        quote={
          "Sketchpad pioneered the graphical user interface (GUI), which allows \
          interaction with the virtual world without typing in long strings of \
          coded commands. Instead, the user points, clicks, and double-clicks on \
          displays of icons, the virtual tools on the screen."
        }
        author={"Susan Piedmont Palladino - Tools of the imagination"}
      />
    ),
  },
  {
    element: (
      <Quote
        quote={
          "GUIs quickly became 'the only computer use that most people had ever known'"
        }
        author={"Mario Carpo - Digital Turn"}
      />
    ),
  },
  {
    element: <PdfViewer src="/resources/may_everythingisalreadyanimage.pdf" />,
  },
  {
    element: (
      <Image
        src="/images/week01/vendors.png"
        alt="AECO's main CAD/BIM Vendors"
        caption={"AECO's main CAD/BIM Vendors"}
      />
    ),
    notes:
      "the programs for architects that were produced using GUIs had been designed with specific functionalities.\
      On the one hand, they allowed architects to explore infinite graphic possibilities.\
      On the other hand, they drastically limited the boundaries that architects could explore outside what had been programmed.",
  },
  {
    element: (
      <Image
        src="/images/week01/process-with-gui.png"
        alt="Digital Creative Process"
        caption={"Digital creative process with GUI"}
      />
    ),
    notes:
      "Carpo says that GUIs quickly became “the only computer use that most people had ever known”.\
      This was the moment when, for most architects, programming ceased to be an open language to interact with the machine, and thus became a tool.\
      In some cases, an accessible tool, but in most cases, an utterly opaque one.",
  },
  {
    element: (
      <EmojiTitle emoji={"❔"} title={"Do you know what CAD stands for?"} />
    ),
  },
  {
    element: (
      <EmojiTitle
        emoji={"❔"}
        title={
          <h2>
            Computer Aided <b>Design</b> or Computer Aided <b>Drafting</b>?
          </h2>
        }
      />
    ),
  },
  {
    element: (
      <EmojiTitle
        emoji={"❔"}
        title={
          <>
            <h2>
              <b>CADD</b> : Computer Aided Design and Drafting
            </h2>
            <br />
            <h2>
              <b>CAAD</b> : Computer Aided Architectural Design
            </h2>
          </>
        }
      />
    ),
  },
  {
    element: (
      <EmojiTitle
        emoji={"CAD ✏️💻"}
        title={
          <h4>
            <b>A CAD system</b> is a combination of hardware and software that
            allows three-dimensional modeling of physical artifacts, enabling
            engineers and architects to design artifacts from simple parts to
            complex systems. <br />
            for example: Construction Detail → building element → space →
            building → site → neibourhood → city
          </h4>
        }
      />
    ),
  },
  {
    element: <EmojiTitle emoji={"✏️📐💻"} title={"Basis of CAD"} />,
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
  },
  { element: <EmojiTitle emoji={"👾"} title="What is a raster image?" /> },
  {
    element: (
      <EmojiTitle
        emoji={"Raster image 👾"}
        title={
          <h4>
            Raster (or bitmap) images are compiled using pixels, containing
            unique color and tonal information that come together to create the
            image. They are resolution dependent. The number of pixels that make
            up an image as well as how many of those pixels are displayed per
            inch, both determine the quality of an image. The more pixels in the
            image and the higher the resolution is, the higher quality the image
            will be. For example, if we scale a raster image to enlarge it,
            without changing resolution, it will lose quality and look blurry or
            pixilated. This is because we are stretching the pixels over a
            larger area, thus making them look less sharp.
          </h4>
        }
      />
    ),
  },
  {
    element: <EmojiTitle emoji={"Points ⚫  ⚫  ⚫"} title="What's a Point?" />,
  },
  {
    element: (
      <Image
        src="/images/week03/points.png"
        href="https://primer.dynamobim.org/05_Geometry-for-Computational-Design/5-3_points.html"
        alt="Points"
        caption={
          "A Point is defined by nothing more than one or more values called coordinates. How many coordinate values we need to define the Point depends upon the Coordinate System or context in which it resides. The most common kind of Point in Dynamo exists in our three-dimensional World Coordinate System and has three coordinates [X,Y,Z].- Dynamo Primer"
        }
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week03/points2.png"
        href="https://primer.dynamobim.org/05_Geometry-for-Computational-Design/5-3_points.html"
        alt="Points"
        caption={
          "Points can exist in a two-dimensional Coordinate System as well. Convention has different letter notation depending upon what kind of space we are working with - we might be using [X,Y] on a Plane or [U,V] if we are on a surface. - Dynamo Primer"
        }
      />
    ),
  },
  { element: <EmojiTitle emoji={"♾️"} title="What is a vector image?" /> },
  {
    element: (
      <EmojiTitle
        emoji={"Vector images ♾️"}
        title={
          <h4>
            Instead of trying to keep track of the millions of tiny pixels in a
            raster image, vector images keep track of points and the equations
            for the lines that connect them. they are made up of paths or line
            art that can infinitely scalable because they work based on
            algorithms rather than pixels. They can be re-sized infinitely
            larger or smaller, and they will still print out just as clearly,
            with no increase (or decrease) in file size.
          </h4>
        }
      />
    ),
  },
  {
    element: (
      <>
        <h2>Drawing with code (P5) ✏️</h2>
        <br />
        <iframe
          className="w-full h-full"
          src="/arcn5005/f2023/students/nicolasarellanorisop/p5/index.html"
        />
        <br />
        <SimpleButton
          title={"See Code"}
          href={
            "https://raw.githubusercontent.com/nicoarellano/reposarch/dev/public/arcn5005/f2023/students/nicolasarellanorisop/p5/sketch.js"
          }
        />
      </>
    ),
  },
  {
    element: (
      <>
        <h2>Drawing with code ✏️</h2>
        <br />
        <iframe
          className="w-full h-full"
          src="https://editor.p5js.org/alptugan/sketches/Ob3l1fsrO"
        />
      </>
    ),
  },
  {
    element: (
      <div>
        <div className="flex">
          <div className="flex flex-col items-start">
            <h2 className="text-left">Curve Types ➰</h2>
            <em>Source: Dynamo Primer</em>
            <ol className="flex flex-col w-[300px] ">
              <li>Line</li>
              <li>Polyline</li>
              <li>Arc</li>
              <li>Circle</li>
              <li>Ellipse</li>
              <li>Nurbs</li>
              <li>Polycurve</li>
            </ol>
          </div>
          <div className="w-[1000px]">
            <Image
              src="/images/week03/curve-types.png"
              alt="Curve types"
              href="https://primer.dynamobim.org/05_Geometry-for-Computational-Design/5-4_curves.html"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    element: (
      <Image
        src="/images/week03/curve.png"
        alt="Curve"
        caption={
          "A curve or curved line, may be the trace left by moving a point. It has no width nor depth"
        }
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week03/line.png"
        alt="Line"
        caption={
          "Lines are the simplest form of Curves. They may not look curvy but they are in fact Curves - just without any curvature. There are a few different ways to create Lines, the most intuitive being from Point A to Point B. The shape of the Line AB will be drawn between the points but mathematically it extends infinitely in both directions."
        }
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week03/polyline.png"
        alt="Polyline"
        caption={
          "When we connect two Lines together, we have a Polyline. Here we have a straightforward representation of what a Control Point is. Editing any of these point locations will change the shape of the Polyline. If the Polyline is closed, we have a Polygon. If the Polygon's edge lengths are all equal, it is described as regular."
        }
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week03/arcs.png"
        alt="Arcs, Circles, Ellipse Arcs, and Ellipses"
        caption={
          "As we add more complexity to the Parametric Functions that define a shape, we can take one step further from a Line to create an Arc, Circle, Ellipse Arc, or Ellipse by describing one or two radii. The differences between the Arc version and the Circle or Ellipse is only whether or not the shape is closed."
        }
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week03/nurbs.png"
        alt="NURBS"
        caption={
          "NURBS (Non-uniform Rational Basis Splines) are mathematical representations that can accurately model any shape from a simple two dimensional Line, Circle, Arc, or Rectangle to the most complex three-dimensional free-form organic Curve. Because of their flexibility (relatively few control points, yet smooth interpolation based on Degree settings) and precision (bound by a robust math), NURBS models can be used in any process from illustration and animation to manufacturing."
        }
      />
    ),
  },
  { element: <Degree /> },
  {
    element: (
      <Image
        src="/images/week03/degrees.png"
        alt="NURBS"
        caption={
          "1 Degree, 2 Degree, 3 Degree - The higher the degree value, the more Control Points are used to interpolate the resulting Curve."
        }
      />
    ),
  },
  { element: <Curves /> },
  {
    element: (
      <EmojiTitle
        emoji={"3D Modelling 🫖💻"}
        title={
          <h4>
            3D modeling is the process of developing a mathematical
            coordinate-based representation of and object with a specialized
            software by manipulated edges, vertices, and polygons in a simulated
            3D space <br />
            Most of the time 3d models are displayed in flat screens, but the
            graphic card simulates the geometry to give the illusion of depth.
            This process is called 3d rendering.
          </h4>
        }
      />
    ),
  },
  {
    element: (
      <EmojiTitle
        emoji={"3D CAD 🫖✏️💻"}
        title={"3d CAD is using a computer to draw 3d models to assist design"}
      />
    ),
  },
  {
    element: (
      <>
        <h2>Why do we make 3d models? 🫖❔</h2>
        <br />
        <ul>
          <li>3D models are easier to interpret</li>
          <li>Less expensive than building a physical model</li>
          <li>Safer than a physical model</li>
          <li>
            3D models can be used to perform building performance analysis
          </li>
          <li>
            3D models can be used directly in manufacturing, Computer Numerical
            Control (CNC).
          </li>
          <li>Can be used for presentations and marketing.</li>
        </ul>
        <br />
        <p>
          <em>
            source:
            https://www.slideshare.net/shambhoo416/introduction-to-solid-modeling
          </em>
        </p>
      </>
    ),
  },
  {
    element: (
      <>
        <h2>3 types of 3d models</h2>
        <br />
        <ul>
          <li>Wireframe modeling 🩻</li>
          <li>Surface modeling 🐚</li>
          <li>Solid modeling 🪨</li>
        </ul>
      </>
    ),
  },
  {
    element: (
      <>
        <h2>Geometry vs Topology</h2>
        <br />
        <table id="simple-table">
          <thead>
            <th>Geometry </th>
            <th>Topology </th>
          </thead>
          <tr>
            <td>Space </td>
            <td>Shell </td>
          </tr>
          <tr>
            <td>Surface </td>
            <td>Face </td>
          </tr>
          <tr>
            <td>Line </td>
            <td>Edge </td>
          </tr>
          <tr>
            <td>Point</td>
            <td>Vertex</td>
          </tr>
        </table>
      </>
    ),
  },
  {
    element: (
      <>
        <h2>Wireframe model 🩻</h2>
        <br />
        <ul>
          <li>
            Contains information about the locations of all the points
            (vertices) and edges in space coordinates.
          </li>
          <li>Each vertex is defined by x, y, z coordinate</li>
          <li>Edges are defined by a pair of vertices</li>
          <li>Faces are defined as three or more edges</li>
          <li>
            Wireframe is a collection of edges, there is no skin defining the
            area between the edges
          </li>
        </ul>
      </>
    ),
  },
  {
    element: (
      <Image
        src="/images/week03/wireframe.png"
        alt={"Wireframe 3d models"}
        href="https://en.wikipedia.org/wiki/Wire-frame_model"
        caption={"Wireframe 3d models"}
      />
    ),
  },
  {
    element: (
      <>
        <h2>Surface 3d model 🐚</h2>
        <br />
        <ul>
          <li>
            Represents the skin of an object, these skins have no thickness or
            material type
          </li>
          <li>Define the surface features, as well as the edges of objects</li>
          <li>A mathematical function describes the path of a curve</li>
          <li>Surfaces are edited as single entities</li>
          <li>Better visualization, objects appear more realistic</li>
        </ul>
      </>
    ),
  },
  {
    element: (
      <>
        <h2>Surface 3d model 🐚</h2>
        <br />
        <ul>
          <li>
            Visual representation of an object’s exterior and its contours.
          </li>
          <li>
            Can be geometrically and physically incorrect - with no properties
            of mass defined and no thickness. This gives the designer the unique
            ability to modify the model in ways that solid models are incapable.
          </li>
          <li>Cannot be sliced open like their solid counterparts → hollow</li>
          <li>
            Uses NURBS, B-splines and Beizer equations in order to define the
            features of your solid appearing object
          </li>
        </ul>
      </>
    ),
  },
  {
    element: (
      <Image
        src="/images/week03/surface.png"
        alt={"Surface 3d model"}
        caption={"Surface 3d model"}
      />
    ),
  },
  {
    element: (
      <div>
        <div className="flex">
          <div className="flex flex-col items-start">
            <h2 className="text-left">Surfaces 🐚</h2>
            <em>Source: Dynamo Primer</em>
            <ol className="flex flex-col w-[300px] ">
              <li>Surface</li>
              <li>U Isocurve</li>
              <li>V Isocurve</li>
              <li>UV Coordinate</li>
              <li>Perpendicular Plane</li>
              <li>Normal Vector</li>
            </ol>
          </div>
          <div className="w-[1000px]">
            <Image
              src="/images/week03/surface-parts.png"
              alt="Curve types"
              href="https://primer.dynamobim.org/05_Geometry-for-Computational-Design/5-5_surfaces.html"
            />
          </div>
        </div>
      </div>
    ),
    notes:
      "A Surface is a mathematical shape defined by a function and two parameters, Instead of t for Curves, we use U and V to describe the corresponding parameter space. This means we have more geometrical data to draw from when working with this type of Geometry. For example, Curves have tangent vectors and normal planes (which can rotate or twist along the curve's length), whereas Surfaces have normal vectors and tangent planes that will be consistent in their orientation.",
  },
  {
    element: (
      <Image
        src="/images/week03/surface-domain.png"
        alt={"Surface Domain"}
        caption={
          "A surface domain is defined as the range of (U,V) parameters that evaluate into a three dimensional point on that surface. The domain in each dimension (U or V) is usually described as two numbers (U Min to U Max) and (V Min to V Max). - Source: Dynamo Primer"
        }
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week03/nurbs-surfaces.png"
        alt={"Nurbs Surfaces"}
        caption={
          "NURBS Surfaces are very similar to NURBS curves. You can think of NURBS Surfaces as a grid of NURBS Curves that go in two directions. The shape of a NURBS Surface is defined by a number of control points and the degree of that surface in the U and V directions. The same algorithms are used to calculate shape, normals, tangents, curvatures and other properties by way of control points, weights and degree. In the case of NURBS surfaces, there are two directions implied by the geometry, because NURBS surfaces are, regardless of the shape we see, rectangular grids of control points. And even though these directions are often arbitrary relative to the world coordinate system, we will use them frequently to analyze our models or generate other geometry based on the Surface. - Source: Dynamo Primer"
        }
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week03/polysurface.png"
        alt={"Polysurfaces"}
        caption={
          "Polysurfaces are composed of Surfaces that are joined across an edge. Polysurfaces offer more than two dimensional UV definition in that we can now move through the connected shapes by way of their Topology. Sometimes called patches, joining Surfaces in this manner allows us to make more complex shapes as well as define detail across the seam. Conveniently we can apply a fillet or chamfer operation to the edges of a Polysurface. - Source: Dynamo Primer"
        }
      />
    ),
  },
  {
    element: (
      <>
        <h2>Solid 3d model 🪨</h2>
        <br />
        <ul>
          <li>
            The solid definitions include vertices (nodes), edges, surfaces,
            weight, and volume.
          </li>
          <li>
            The model is a complete and unambiguous representation of a
            precisely enclosed and filled volume
          </li>
          <li>
            Can easily be exported to different Finite Element Methods programs
            for analysis
          </li>
        </ul>
      </>
    ),
  },
  {
    element: (
      <>
        <h2>How to represent solids 🪨❔</h2>
        <br />
        <ul>
          <li>
            Decomposition models: a fixed collection of primitive object types,
            combined with a single gluing operation (Octrees)
          </li>
          <li>
            Constructive models: A point set as a combination of primitive point
            sets, typically by set-theoretic operations
          </li>
          <li>Boundary models: a point set in terms of its boundary</li>
        </ul>
      </>
    ),
  },
  {
    element: (
      <Image
        src="/images/week03/voxel.png"
        alt={"Decomposition models"}
        caption={"Decomposition models - Octrees"}
      />
    ),
  },
  { element: <Csg /> },
  {
    element: (
      <Image
        src="/images/week03/primitive-solids.png"
        alt={"Primitive Solids"}
        caption={"Primitive Solids "}
      />
    ),
  },

  { element: <Boolean /> },
  {
    element: (
      <Image
        src="/images/week03/boolean-operations.png"
        alt={"Boolean Operations"}
        caption={"Constructive Models - Boolean Operations "}
      />
    ),
  },
  { element: <SolidBoolean /> },
  {
    element: (
      <Image
        src="/images/week03/solid-boolean.png"
        alt={"Solid Boolean Operations"}
        caption={
          "There are three Solid Boolean operations that distinguish which parts of the geometry are kept. 1. Union: Remove the overlapping portions of the Solids and join them into a single Solid. 2. Difference: Subtract one Solid from another. The Solid to be subtracted is referred to as a tool. Note that you could switch which Solid is the tool to keep the inverse volume. 3. Intersection: Keep only the intersecting volume of the two Solids. - Source: Dynamo Primer"
        }
      />
    ),
  },

  { element: <Brep /> },
  {
    element: (
      <Image
        src="/images/week03/brep.png"
        alt={"Boundary models"}
        caption={"Boundary models - B-rep"}
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week03/euler.png"
        alt={"Euler Poincare Formula"}
        caption={"Euler Poincare Formula"}
      />
    ),
  },
  {
    element: (
      <>
        <h2>Comparison of solid modelling methods</h2>
        <br />
        <table id="simple-table">
          <thead>
            <td></td>
            <th>Octrees</th>
            <th>CSG</th>
            <th>B-Reps</th>
          </thead>
          <tr>
            <th>Expressiveness</th>
            <td>Approximate</td>
            <td>Accurate</td>
            <td>Most expressive</td>
          </tr>
          <tr>
            <th>Validity</th>
            <td>Always valid</td>
            <td>Always valid</td>
            <td>Not always valid</td>
          </tr>
          <tr>
            <th>Unambiguity</th>
            <td>Ambiguous</td>
            <td>Always unambiguous</td>
            <td>Valid b-reps are unambiguous.</td>
          </tr>
          <tr>
            <th>Conciseness</th>
            <td>Large</td>
            <td>Very concise</td>
            <td>Large</td>
          </tr>
        </table>
      </>
    ),
  },
  { element: <Benefits /> },
  { element: <Cons /> },
  {
    element: (
      <Quote
        quote={
          "Needless to say, it’s clear to see why CAD was adopted across so many industries. Virtually everything in the modern world is created using CAD technology, because its design process is so sleek and so powerful. Obviously, the pros and cons of CAD are susceptible to change. CAD is still evolving, and with it, so too will its advantages and disadvantages. A decade down the line, who’s to say what CAD will or won’t be capable of? "
        }
        author={"https://www.scan2cad.com/blog/cad/cad-evolved-since-1982/"}
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week03/autocad.png"
        alt={"Autodesk's AutoCad"}
        href="https://en.wikipedia.org/wiki/AutoCAD"
        caption={"Autodesk's AutoCad is the world's most popular CAD software"}
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week03/autocad-pricing.png"
        alt={"Autodesk's AutoCad"}
        href="https://www.autodesk.ca/en/products/autocad/overview?mktvar002=5656878%7CSEM%7C16183926843%7C137132251670%7Cpla-933128653804_autocad&plc=ACDIST&term=1-YEAR&support=ADVANCED&quantity=1&utm_source=GGL&utm_medium=SEM&utm_term=pla-933128653804&utm_id=5656878&utm_campaign=GGL_DEC_All-Products_AMER_CA_eComm_PLA_BR_New_NA_0000_4424459_&mkwid=s|pcrid|581813781112|pkw||pmt||pdv|c|slid||pgrid|137132251670|ptaid|pla-933128653804|pid|Autodesk%20AutoCAD%20(1%20year%20subscription)&utm_medium=cpc&utm_source=google&utm_campaign&utm_term&utm_content=s|pcrid|581813781112|pkw||pmt||pdv|c|slid||pgrid|137132251670|ptaid|pla-933128653804|&gclid=EAIaIQobChMIoovk042ogQMVP_uUCR2dig90EAYYAiABEgJY2PD_BwE&ef_id=ZQHwuAAABOyV0B@V:20230913172616:s&tab=subscription"
        caption={
          "Autodesk's AutoCad pricing in 2023 - CA$2575 per year per 1 user"
        }
      />
    ),
  },
  {
    element: (
      <>
        <h2>Open-source Alternatives? 💸</h2>
        <br />
        <Image
          src="/images/week03/librecad.png"
          alt={"LibreCad"}
          href="https://wiki.librecad.org/index.php"
          caption={"LibreCad is a free and open source alternative to AutoCad"}
        />
      </>
    ),
  },
  {
    element: (
      <>
        <h1>❔</h1>
        <br />
        <h2>Do you know what BIM stands for?</h2>
      </>
    ),
  },
  {
    element: (
      <>
        <h1>Building Information Model or Building Information Modelling</h1>
        <br />
        <h5>... definitely not a great acronym</h5>
      </>
    ),
  },
  {
    element: (
      <>
        <h1>❔</h1>
        <br />
        <h2>How is BIM different from CAD?</h2>
      </>
    ),
  },
  {
    element: (
      <Image
        src="/images/week03/bim-books.png"
        alt="BIM Books"
        caption={"Three fundamental BIM books: Weygnant’s, Saxon’s, Eastman’s"}
      />
    ),
    notes:
      "Weygnant’s definition is a good baseline for tool-oriented people; Saxon’s explanation is for client/business-oriented people; Eastman is considered the father of BIM, and has the most technically correct definition",
  },
  { element: <Weygant /> },
  { element: <Weygant2 /> },
  {
    element: (
      <Quote
        quote={
          "For estate-holding clients, BIM offers not just the possibility of faster, cheaper and better quality construction but also a database of operation and maintenance information to support the life cycle. Clients who have preferred or required standards for their properties can hold these standards in a BIM library of model elements and provide them to design-build teams to incorporate into projects."
        }
        author={"Saxon"}
      />
    ),
  },
  {
    element: (
      <Quote
        quote={
          "The arrival of BIM marks a switch for the construction industry from considering buildings as projects to considering them as assets. The circular model of the asset life cycle replaces the linear model of a project"
        }
        author={"Saxon"}
      />
    ),
  },
  {
    element: (
      <Quote
        quote={
          "BIM consists of a digital database of a particular building that contains information about its objects. This may include its geometry (generally defined by parametric rules), its performance, its planning, its construction and later its operation. A Revit® model and a Digital Project® model of a building are examples of building models. “Building model” can be considered the next generation replacement for “construction drawings”, or “architectural drawings”. Downstream in the process, the term “fabrication model” is already in common use as a replacement for “shop drawings”."
        }
        author={"Eastman"}
      />
    ),
  },
  { element: <Bim /> },
  {
    element: (
      <Image
        src="/images/week03/macleamy.png"
        alt="BIM Books"
        caption={"MacLeamy Curve"}
      />
    ),
  },
  { element: <BimLevels /> },
  {
    element: (
      <Image
        src="/images/week03/lod.png"
        alt="Levels of detail"
        caption={"Levels of detail"}
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week03/lod2.png"
        alt="Levels of detail"
        caption={"Levels of detail"}
      />
    ),
    notes:
      "Moving from conception → to approximate geometry → to Precise geometry → to fabrication → to as-built",
  },
  {
    element: (
      <Image
        src="/images/week03/levels.png"
        alt="BIM Maturity Levels"
        caption={"BIM Maturity Levels"}
      />
    ),
  },
  { element: <BimDrivers /> },
  {
    element: (
      <Image
        src="/images/week03/bim-ecosystem.png"
        alt="Traditional BIM Ecosystem"
        caption={"Traditional BIM Ecosystem"}
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week03/revitorarchicad.png"
        alt="Revit or Archicad?"
        caption={
          "BIM authoring tools have been fighting to become the standard tool in the industry. Who is winning?"
        }
      />
    ),
  },
  {
    element: (
      <Video
        src="https://www.youtube.com/embed/iuiichHnV9g?si=qgNvNyF7h8Pwk5S1"
        title="Revit wins"
        caption={"Revit has become the most popular BIM software in the world"}
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week03/revit.png"
        alt={"Autodesk's Revit"}
        href="https://en.wikipedia.org/wiki/Autodesk_Revit"
        caption={"Autodesk's Revit is the world's most popular BIM software"}
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/week03/closed-bim.png"
        alt="Closed BIM"
        caption={
          "Proprietary BIM authoring tools and formats turn BIM into a closed process\
          BIM has been defined as a communication and collaboration tool or process originally created to connect people, processes, and data.\
However, that is not exactly the way the Architecture Engineering and Construction or AEC industry is using BIM.\
The status quo is to work with proprietary solutions and closed file formats."
        }
      />
    ),
  },
  {
    element: (
      <>
        <h1>❔</h1>
        <br />
        <h2>Why should we care?</h2>
      </>
    ),
  },
  {
    element: (
      <Image
        src="/images/week03/mandates.png"
        alt="BIM Mandates"
        caption={"By BICP Global BIM Study - Lessons For Ireland's Programme"}
      />
    ),
    notes:
      "Government BIM mandates.\
    Countries all over the word are becoming to regulate the use of BIM. So if one wants to participate in public works and even non public projects BIM is a requirement.\
    Which means that BIM is in many cases not an option anymore but a mandate.\
    Knowing that BIM software are mainly controlled by a few vendors, this mean that these software companies will have a tremendous impact over our practice.",
  },
  {
    element: (
      <Image
        src="/images/week03/revit-pricing.png"
        alt={"Autodesk's Revit 2023 price"}
        href="https://www.autodesk.ca/en/products/revit/overview?us_oa=dotcom-us&us_si=8abb21ea-6ba6-46ac-929b-39cecb847ed0&us_st=revit&us_pt=RVT&term=1-YEAR&tab=subscription&plc=RVT"
        caption={
          "Autodesk's Revit pricing in 2023 - CA$3695 per year per 1 user"
        }
      />
    ),
  },
  {
    element: (
      <>
        <h2>Open-source Alternatives? 💸</h2>
        <br />
        <Image
          src="/images/week03/blenderbim.png"
          alt={"BlenderBIM"}
          href="https://blenderbim.org/"
          caption={
            "BlenderBIM is a free and open source alternative to Revit - On a few weeks we will have a lecture and a workshop dedicated specifically to BlenderBIM"
          }
        />
      </>
    ),
  },
  {
    element: (
      <>
        <h1>💻 Lab 3</h1>
        <br />
        <h2>LibreCad</h2>
        <br />
        <h2>Blender</h2>
      </>
    ),
  },
  {
    element: <PdfViewer src="/resources/Blender+2.9+Shortcuts+v1.1.pdf" />,
  },
];
