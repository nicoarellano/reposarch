import { Toc } from '@/app/types/types';
import Image from '@/components/Common/Image';
// import Image as NextImage from "next/image";

import Video from '@/components/Common/Video';
import Quote from '@/components/Common/Quote';
import EmojiTitle from '@/components/Common/EmojiTitle';
import PdfViewer from '@/components/Common/PdfViewer';

import Degree from './degree.mdx';
import Curves from './curves.mdx';
import Weygant from './weygant.mdx';
import Weygant2 from './weygant2.mdx';
import Bim from './bim.mdx';
import BimLevels from './bimLevels.mdx';
import Csg from './csg.mdx';
import Boolean from './boolean.mdx';
import SolidBoolean from './solidBoolean.mdx';
import Brep from './brep.mdx';
import Benefits from './beneficios.mdx';
import Cons from './cons.mdx';
import BimDrivers from './bimImpulsores.mdx';
import SimpleButton from '@/components/Common/SimpleButton';
import Gltf from '../week08/Gltf';

export const content: Toc = [
  {
    element: (
      <>
        <Image
          src="/images/cad-bim/tools-of-the-imagination.jpg"
          alt="Tools of the Imagination"
          href="https://books.google.com.na/books?id=1WUIIh99xDkC&printsec=frontcover&source=gbs_book_other_versions_r&cad=4#v=onepage&q&f=false"
        />
        <Quote
          quote={
            'El arquitecto necesita las herramientas adecuadas para el trabajo. [...] La herramienta más nueva, la computadora, es realmente una caja de herramientas completamente nueva llena de software para resolver problemas antiguos y nuevos.'
          }
          author={'Susan Piedmont Palladino - Tools of the Imagination'}
        />
      </>
    ),
  },

  {
    element: (
      <Quote
        quote={
          'Es a través del dominio de toda la gama de herramientas que las imágenes en la mente del arquitecto se traducen en dibujos y modelos, y de los dibujos y modelos en edificios. Ya sea un simple lápiz o software de computadora, estas herramientas dan forma a los deseos y las instrucciones del arquitecto, pero también son moldeadores activos de lo que es posible.'
        }
        author={'Susan Piedmont Palladino - Tools of the Imagination'}
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/computer-graphics/sutherland.png"
        alt="Ivan Sutherland inventor de Sketchpad, la primera GUI"
        caption={'Ivan Sutherland inventor de Sketchpad, la primera GUI'}
      />
    ),
    notes:
      'En 1963, Ivan Sutherland en el MIT desarrolló un programa llamado "Sketchpad", que puede considerarse como el primer programa de dibujo por computadora o la primera interfaz gráfica de usuario (GUI).\
       Las GUIs son dispositivos de interacción humano-computadora que permiten a los usuarios interactuar con la computadora a través de íconos gráficos en lugar de código escrito.\
       Con una GUI, el usuario puede hacer clic o tocar y manipular los símbolos mostrados en la pantalla y, por lo tanto, alterar directamente el programa.\
       Las GUIs hicieron que las computadoras fueran más accesibles para los no programadores, incluidos los arquitectos.\
       Desde entonces, las GUIs son ciertamente el vehículo preferido para que los arquitectos interactúen con las computadoras.',
  },
  {
    element: (
      <Video
        src="https://www.youtube.com/embed/6orsmFndx_o?si=kTjsHWqd1tDjfhuj"
        title="Sketchpad por Ivan Sutherland"
        caption={'Sketchpad por Ivan Sutherland'}
      />
    ),
  },
  {
    element: (
      <Quote
        quote={
          'Sketchpad fue pionero en la interfaz gráfica de usuario (GUI), que permite \
          la interacción con el mundo virtual sin escribir largas cadenas de \
          comandos codificados. En su lugar, el usuario apunta, hace clic y doble clic en \
          las pantallas de íconos, las herramientas virtuales en la pantalla.'
        }
        author={'Susan Piedmont Palladino - Herramientas de la imaginación'}
      />
    ),
  },
  {
    element: (
      <Quote
        quote={
          "Las GUIs rápidamente se convirtieron en 'el único uso de la computadora que la mayoría de la gente había conocido'"
        }
        author={'Mario Carpo - Digital Turn'}
      />
    ),
  },
  {
    element: <PdfViewer src="/resources/may_everythingisalreadyanimage.pdf" />,
  },
  {
    element: (
      <Image
        src="/images/computer-graphics/vendors.png"
        alt="AECO's Proveedores principales de CAD/BIM"
        caption={"AECO's proveedores principales de CAD/BIM"}
      />
    ),
    notes:
      'Los programas para arquitectos que se produjeron usando GUI se habían diseñado con funcionalidades específicas.\
      Por un lado, permitieron a los arquitectos explorar infinitas posibilidades gráficas.\
      Por otro lado, limitaron drásticamente los límites que los arquitectos podrían explorar fuera de lo que se había programado.',
  },
  {
    element: (
      <Image
        src="/images/computer-graphics/process-with-gui.png"
        alt="Digital Creative Process"
        caption={'Proceso creativo digital con GUI'}
      />
    ),
    notes:
      'Carpo dice que las GUI rápidamente se convirtieron en "el único uso de la computadora que la mayoría de la gente había conocido”.\
      Este fue el momento en que, para la mayoría de los arquitectos, la programación dejó de ser un lenguaje abierto para interactuar con la máquina, y así se convirtió en una herramienta.\
      En algunos casos, una herramienta accesible, pero en la mayoría de los casos, una completamente opaca.',
  },
  {
    element: <EmojiTitle emoji={'❔'} title={'¿Sabes lo que significa CAD?'} />,
  },
  {
    element: (
      <EmojiTitle
        emoji={'❔'}
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
        emoji={'❔'}
        title={
          <>
            <h2>
              <b>Diseño Asistido por Computadora</b> o{' '}
              <b>Dibujo Asistido por Computadora</b>?
            </h2>
            <br />
            <h2>
              <b>CADD</b> : Diseño y Dibujo Asistidos por Computadora
            </h2>
            <br />
            <h2>
              <b>CAAD</b> : Diseño Arquitectónico Asistido por Computadora
            </h2>
          </>
        }
      />
    ),
  },
  {
    element: (
      <EmojiTitle
        emoji={'CAD ✏️💻'}
        title={
          <h4>
            <b> Un sistema CAD </b> es una combinación de hardware y software
            que Permite el modelado tridimensional de artefactos físicos,
            habilitando ingenieros y arquitectos para diseñar artefactos desde
            piezas simples hasta sistemas complejos.
            <br />
            Por ejemplo: Detalles de construcción → Elemento de construcción →
            Espacio → Edificio → Sitio → Barrio → Ciudad
          </h4>
        }
      />
    ),
  },
  {
    element: <EmojiTitle emoji={'✏️📐💻'} title={'Bases del CAD'} />,
  },
  {
    element: (
      <>
        <h2>Dibujo con píxeles ✏️</h2>
        <br />
        <iframe
          className="w-full h-full"
          src="https://acepixels.netlify.app/"
        />
      </>
    ),
    notes:
      "Un píxel (px) (abreviatura de 'elemento de imagen') es el punto o cuadrado más pequeño direccionable que compone una imagen raster digital en un dispositivo de visualización.\
      Cuantos más píxeles, mejor resolución de imagen. La resolución de imagen de un monitor de computadora, teléfono inteligente o pantalla de TV, se refiere al número de píxeles. \
      La intensidad de cada píxel es variable. \
      En los sistemas de imágenes en color, un color se representa típicamente por tres o cuatro intensidades de componentes como rojo, verde y azul (RGB), o cian, magenta, amarillo y negro.",
  },
  {
    element: <EmojiTitle emoji={'👾'} title="¿Qué es una imagen raster?" />,
  },
  {
    element: (
      <EmojiTitle
        emoji={'Imagen raster 👾'}
        title={
          <h4>
            Las imágenes raster (o de mapa de bits) se compilan utilizando
            píxeles, que contienen información de color y tonal única que se
            unen para crear la imagen. Son dependientes de la resolución. El
            número de píxeles que componen una imagen, así como cuántos de esos
            píxeles se muestran por pulgada, determinan la calidad de una
            imagen. Cuantos más píxeles en la imagen y mayor sea la resolución,
            mayor será la calidad de la imagen. Por ejemplo, si escalamos una
            imagen raster para agrandarla, sin cambiar la resolución, perderá
            calidad y se verá borrosa o pixelada. Esto se debe a que estamos
            estirando los píxeles sobre un área más grande, haciéndolos parecer
            menos nítidos.
          </h4>
        }
      />
    ),
  },
  {
    element: (
      <EmojiTitle emoji={'Puntos ⚫  ⚫  ⚫'} title="¿Qué es un Punto?" />
    ),
  },
  {
    element: (
      <Image
        src="/images/cad-bim/points.png"
        href="https://primer.dynamobim.org/05_Geometry-for-Computational-Design/5-3_points.html"
        alt="Points"
        caption={
          'Un punto se define por nada más que uno o más valores llamados coordenados.Cuántos valores de coordenadas necesitamos para definir el punto depende del sistema o contexto de coordenadas en el que reside.El tipo de punto más común en el software CAD existe en nuestros sistemas de coordenadas bidimensionales (X, Y) o tridimensionales (X, Y, Z) .- Dynamo Primer '
        }
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/cad-bim/points2.png"
        href="https://primer.dynamobim.org/05_Geometry-for-Computational-Design/5-3_points.html"
        alt="Puntos"
        caption={
          'Los puntos también pueden existir en un sistema de coordenadas bidimensional.La convención tiene una notación de letra diferente dependiendo del tipo de espacio con el que estemos trabajando: podríamos estar usando [x, y] en un plano o [u, v] si estamos en una superficie.- Dynamo Primer '
        }
      />
    ),
  },
  {
    element: <EmojiTitle emoji={'♾️'} title="¿Qué es una imagen vectorial?" />,
  },
  {
    element: (
      <EmojiTitle
        emoji={'Imágenes vectoriales ♾️'}
        title={
          <h4>
            En lugar de tratar de realizar un seguimiento de los millones de
            píxeles pequeños en un Imagen de trama, imágenes vectoriales
            realizan un seguimiento de los puntos y las ecuaciones para las
            líneas que los conectan.Están formados por caminos o línea arte que
            puede ser infinitamente escalable porque funcionan en función de
            algoritmos en lugar de píxeles.Se pueden volver a tamaño
            infinitamente más grande o más pequeño, y aún se imprimirán con la
            misma claridad, sin aumento (o disminución) en el tamaño del
            archivo.
          </h4>
        }
      />
    ),
  },
  {
    element: (
      <>
        <h2>Dibujo con código (P5) ✏️</h2>
        <br />
        <iframe
          className="w-full h-full"
          src="/arcn5005/terms/f2024/students/nicolasarellanorisop/p5/index.html"
        />
        <br />
        <SimpleButton
          title={'Ver codigo'}
          href={
            'https://raw.githubusercontent.com/nicoarellano/reposarch/dev/public/arcn5005/terms/f2024/students/nicolasarellanorisop/p5/sketch.js'
          }
        />
      </>
    ),
  },
  {
    element: (
      <>
        <h2>Dibujo con código ✏️</h2>
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
            <em>Fuente: Dynamo Primer</em>
            <ol className="flex flex-col w-[300px] ">
              <li> línea </li>
              <li> Polyline </li>
              <li> arco </li>
              <li> círculo </li>
              <li> Ellipse </li>
              <li> NURBS </li>
              <li> Polycurve </li>
            </ol>
          </div>
          <div className="w-[1000px]">
            <Image
              src="/images/cad-bim/curve-types.png"
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
        src="/images/cad-bim/curve.png"
        alt="Curve"
        caption={
          'Una curva o una línea curva, puede ser el rastro que queda moviendo un punto.No tiene ancho ni profundidad'
        }
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/cad-bim/line.png"
        alt="Line"
        caption={
          'Las líneas son la forma más simple de curvas.Es posible que no parezcan curvas, pero de hecho son curvas, solo sin ninguna curvatura.Hay algunas formas diferentes de crear líneas, el ser más intuitivo del punto A al punto B. La forma de la línea AB se dibujará entre los puntos, pero matemáticamente se extiende infinitamente en ambas direcciones.'
        }
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/cad-bim/polyline.png"
        alt="Polilínea"
        caption={
          'Cuando conectamos dos líneas juntas, tenemos una polilínea.Aquí tenemos una representación directa de lo que es un punto de control.La edición de cualquiera de estas ubicaciones de puntos cambiará la forma de la polilínea.Si la polilínea está cerrada, tenemos un polígono.Si las longitudes del borde del polígono son iguales, se describe como regular.'
        }
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/cad-bim/arcs.png"
        alt="Arcs, Circles, Ellipse Arcs, and Ellipses"
        caption={
          'A medida que agregamos más complejidad a las funciones paramétricas que definen una forma, podemos tomar un paso más allá de una línea para crear un arco, círculo, arco de elipse o elipse describiendo uno o dos radios.Las diferencias entre la versión ARC y el círculo o la elipse es solo si la forma está cerrada o no.'
        }
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/cad-bim/nurbs.png"
        alt="NURBS"
        caption={
          'NURBS (Non-uniform Rational Basis Splines) son representaciones matemáticas que pueden modelar con precisión cualquier forma desde una línea simple, círculo, arco o rectángulo bidimensionales simples hasta la curva orgánica de forma libre tridimensional más compleja.Debido a su flexibilidad (relativamente pocos puntos de control, pero interpolación suave basada en configuraciones de grado) y precisión (vinculada por una matemática robusta), los modelos NURBS se pueden usar en cualquier proceso, desde la ilustración y la animación hasta la fabricación.'
        }
      />
    ),
  },
  // { element: <Degree /> },
  {
    element: (
      <Image
        src="/images/cad-bim/degrees.png"
        alt="NURBS"
        caption={
          '1 grado, 2 grados, 3 grados: cuanto mayor sea el valor de grado, más puntos de control se usan para interpolar la curva resultante.'
        }
      />
    ),
  },
  // { element: <Curves /> },
  {
    element: (
      <EmojiTitle
        emoji={'Modelado 3D 🫖💻'}
        title={
          <h4>
            El modelado 3D es el proceso de desarrollar una matemática
            representación y objeto basado en coordenadas con un especializado
            software por bordes manipulados, vértices y polígonos en un Espacio
            3D <br />
            La mayoría de las veces se muestran modelos 3D en pantallas planas,
            pero el La tarjeta gráfica simula la geometría para dar la ilusión
            de profundidad. Este proceso se llama representación 3D.
          </h4>
        }
      />
    ),
  },
  {
    element: (
      <EmojiTitle
        emoji={'CAD 3D 🫖✏️💻'}
        title={
          '3D CAD es utilizar un computador para dibujar modelos 3D con el objetivo de asistir al diseño'
        }
      />
    ),
  },
  {
    element: (
      <>
        <h2> ¿Por qué hacemos modelos 3D?🫖❔ </h2>
        <br />
        <ul>
          <li> Los modelos 3D son más fáciles de interpretar </li>
          <li> menos costoso que construir un modelo físico </li>
          <li> más seguro que un modelo físico </li>
          <li>
            Los modelos 3D se pueden usar para realizar el análisis de
            rendimiento del edificio
          </li>
          <li>
            Los modelos 3D se pueden usar directamente en fabricación, Computer
            Numeric Contorl (CNC).
          </li>
          <li> puede usarse para presentaciones y marketing. </li>
        </ul>
        <br />
        <p>
          <em>
            fuente:
            https://www.slideshare.net/shambhoo416/introduction-to-solid-modeling
          </em>
        </p>
      </>
    ),
  },
  {
    element: (
      <>
        <h2> 3 tipos de modelos 3D </h2>
        <br />
        <ul>
          <li> Modelado de Wireframe 🩻 </li>
          <li> Modelado de superficie 🐚 </li>
          <li> Modelado sólido 🪨 </li>
        </ul>
      </>
    ),
  },
  {
    element: (
      <>
        <h2>Geometría vs topología</h2>
        <br />
        <table className="simple-table">
          <thead>
            <th> geometría </th>
            <th> Topología </th>
          </thead>
          <tr>
            <td> espacio </td>
            <td> shell </td>
          </tr>
          <tr>
            <td> superficie </td>
            <td> Face </td>
          </tr>
          <tr>
            <td> línea </td>
            <td> Edge </td>
          </tr>
          <tr>
            <td> Point </td>
            <td> Vertex </td>
          </tr>
        </table>
      </>
    ),
  },
  {
    element: (
      <>
        <h2>Modelo Wireframe 🩻</h2>
        <br />
        <ul>
          <li>
            Contiene información sobre las ubicaciones de todos los puntos
            (Vértices) y bordes en coordenadas espaciales.
          </li>
          <li> Cada vértice se define por la coordenada x, y, z </li>
          <li> Los bordes se definen por un par de vértices </li>
          <li> Las caras se definen como tres o más bordes </li>
          <li>
            Wireframe es una colección de bordes, no hay superficie que define
            el área entre los bordes
          </li>
        </ul>
      </>
    ),
  },
  {
    element: (
      <Image
        src="/images/cad-bim/wireframe.png"
        alt={'Wireframe 3d models'}
        href="https://en.wikipedia.org/wiki/Wire-frame_model"
        caption={'Wireframe 3d models'}
      />
    ),
  },
  {
    element: (
      <>
        <h2> Modelo 3D de superficie 🐚 </h2>
        <br />
        <ul>
          <li>
            Representa la superficie de un objeto, estas superficies no tienen
            grosor o tipo de material
          </li>
          <li>
            Defina las características de la superficie, así como los bordes de
            los objetos
          </li>
          <li> Una función matemática describe el camino de una curva </li>
          <li> Las superficies se editan como entidades individuales </li>
          <li> Mejor visualización, los objetos parecen más realistas </li>
        </ul>
      </>
    ),
  },
  {
    element: (
      <>
        <h2> Modelo 3D de superficie 🐚 </h2>
        <br />
        <ul>
          <li>
            Representación visual del exterior de un objeto y sus contornos.
          </li>
          <li>
            Puede ser geométrico y físicamente incorrecto, sin propiedades de
            masa definida y sin espesor.Esto le da al diseñador el único
            Capacidad para modificar el modelo de manera que los modelos sólidos
            sean incapaces.
          </li>
          <li>
            {' '}
            no se puede cortar en rodajas como sus contrapartes sólidas → Hollow{' '}
          </li>
          <li>
            Utiliza nurbs, b-splines y ecuaciones de beyer para definir el
            Características de su objeto de aparición sólido
          </li>
        </ul>
      </>
    ),
  },
  {
    element: (
      <Image
        src="/images/cad-bim/surface.png"
        alt={'Modelo 3D de superficie'}
        caption={'Modelo 3D de superficie'}
      />
    ),
  },
  {
    element: (
      <div>
        <div className="flex">
          <div className="flex flex-col items-start">
            <h2 className="text-left">Surfaces 🐚</h2>
            <em>Fuente: Dynamo Primer</em>
            <ol className="flex flex-col w-[300px] ">
              <li> superficie </li>
              <li> u isocurve </li>
              <li> V isocurve </li>
              <li> coordenadas UV </li>
              <li> Plano perpendicular </li>
              <li> Vector normal </li>
            </ol>
          </div>
          <div className="w-[1000px]">
            <Image
              src="/images/cad-bim/surface-parts.png"
              alt="Curve types"
              href="https://primer.dynamobim.org/05_Geometry-for-Computational-Design/5-5_surfaces.html"
            />
          </div>
        </div>
      </div>
    ),
    notes:
      'Una superficie es una forma matemática definida por una función y dos parámetros, en lugar de T para curvas, usamos U y V para describir el espacio de parámetros correspondiente.Esto significa que tenemos más datos geométricos para extraer cuando trabajamos con este tipo de geometría.Por ejemplo, las curvas tienen vectores tangentes y planos normales (que pueden girar o girar a lo largo de la longitud de la curva), mientras que las superficies tienen vectores normales y planos tangentes que serán consistentes en su orientación.',
  },
  {
    element: (
      <Image
        src="/images/cad-bim/surface-domain.png"
        alt={'Surface Domain'}
        caption={
          'Un dominio de la superficie se define como el rango de parámetros (U, V) que se evalúan en un punto tridimensional en esa superficie.El dominio en cada dimensión (u o v) generalmente se describe como dos números (u min a u max) y (v min a v max).- Fuente: Dynamo Primer '
        }
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/cad-bim/nurbs-surfaces.png"
        alt={'Nurbs Surfaces'}
        caption={
          'Las superficies de NURBS son muy similares a las curvas de Nurbs.Puede pensar en las superficies de Nurbs como una cuadrícula de curvas de Nurbs que van en dos direcciones.La forma de una superficie de NURBS se define por una serie de puntos de control y el grado de esa superficie en las direcciones U y V.Los mismos algoritmos se utilizan para calcular la forma, las normales, las tangentes, las curvaturas y otras propiedades a través de puntos de control, pesos y grado.En el caso de las superficies de Nurbs, hay dos direcciones implicadas por la geometría, porque las superficies de Nurbs son, independientemente de la forma que veamos, redes rectangulares de puntos de control.Y a pesar de que estas direcciones a menudo son arbitrarias en relación con el sistema de coordenadas mundiales, las usaremos con frecuencia para analizar nuestros modelos o generar otra geometría basada en la superficie.- Fuente: Dynamo Primer '
        }
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/cad-bim/polysurface.png"
        alt={'Polysurfaces'}
        caption={
          'Polysurfaces están compuestas de superficies que se unen a través de un borde.Los polisuperfaces ofrecen una definición de UV más de dos dimensiones, ya que ahora podemos movernos a través de las formas conectadas a través de su topología.A veces llamados parches, unir superficies de esta manera nos permite hacer formas más complejas y definir detalles en la costura.Convenientemente, podemos aplicar un filete o una operación de chaflán en los bordes de una polisureza.- Fuente: Dynamo Primer '
        }
      />
    ),
  },
  {
    element: (
      <>
        <h2> modelo 3D sólido 🪨 </h2>
        <br />
        <ul>
          <li>
            Las definiciones sólidas incluyen vértices (nodos), bordes,
            superficies, peso y volumen.
          </li>
          <li>
            El modelo es una representación completa e inequívoca de un Volumen
            encerrado y lleno de precisión
          </li>
          <li>
            Se puede exportar fácilmente a diferentes programas de métodos de
            elementos finitos para el análisis
          </li>
        </ul>
      </>
    ),
  },
  {
    element: (
      <>
        <h2> Cómo representar sólidos 🪨❔ </h2>
        <br />
        <ul>
          <li>
            Modelos de descomposición: una colección fija de tipos de objetos
            primitivos, combinado con una operación de pegado único (ocrees)
          </li>
          <li>
            Modelos constructivos: un punto establecido como una combinación de
            punto primitivo Conjuntos, típicamente por operaciones teóricas de
            conjunto
          </li>
          <li>
            Modelos de límite: un punto establecido en términos de su límite
          </li>
        </ul>
      </>
    ),
  },
  {
    element: (
      <Image
        src="/images/cad-bim/voxel.png"
        alt={'Decomposition models'}
        caption={'Modelos de descomposición - ocrees '}
      />
    ),
  },
  { element: <Csg /> },
  {
    element: (
      <Image
        src="/images/cad-bim/primitive-solids.png"
        alt={'Primitive Solids'}
        caption={'Sólidos primitivos'}
      />
    ),
  },

  { element: <Boolean /> },
  {
    element: (
      <Image
        src="/images/cad-bim/boolean-operations.png"
        alt={'Boolean Operations'}
        caption={'Modelos constructivos - Operaciones booleanas '}
      />
    ),
  },
  { element: <SolidBoolean /> },
  {
    element: (
      <Image
        src="/images/cad-bim/solid-boolean.png"
        alt={'Solid Boolean Operations'}
        caption={
          'Hay tres operaciones booleanas sólidas que distinguen qué partes de la geometría se mantienen.1. Unión: Retire las porciones superpuestas de los sólidos y unirse a un solo sólido.2. Diferencia: reste un sólido de otro.El sólido a restarse se conoce como una herramienta.Tenga en cuenta que puede cambiar qué sólido es la herramienta para mantener el volumen inverso.3. Intersección: mantenga solo el volumen de intersección de los dos sólidos.- Fuente: Dynamo Primer '
        }
      />
    ),
  },

  { element: <Brep /> },
  {
    element: (
      <Image
        src="/images/cad-bim/brep.png"
        alt={'Boundary models'}
        caption={'Boundary models - B-rep'}
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/cad-bim/euler.png"
        alt={'Formula Euler Poincare'}
        caption={'Formula Euler Poincare'}
      />
    ),
  },
  {
    element: (
      <>
        <h2> Comparación de métodos de modelado sólido </h2>
        <br />
        <table className="simple-table">
          <thead>
            <td> </td>
            <th> ocrees </th>
            <th> csg </th>
            <th> B-Reps </th>
          </thead>
          <tr>
            <th> expresividad </th>
            <td> aproximado </td>
            <td> preciso </td>
            <td> más expresivo </td>
          </tr>
          <tr>
            <th> validez </th>
            <td> siempre válido </td>
            <td> siempre válido </td>
            <td> No siempre válido </td>
          </tr>
          <tr>
            <th> ineambiganza </th>
            <td> ambiguo </td>
            <td> siempre inequívoco </td>
            <td> Los repeticiones B válidas son inequívocas. </td>
          </tr>
          <tr>
            <th> concisión </th>
            <td> grande </td>
            <td> muy conciso </td>
            <td> grande </td>
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
          'No hace falta decir que está claro ver por qué CAD fue adoptado en tantas industrias.Prácticamente todo en el mundo moderno se crea utilizando tecnología CAD, porque su proceso de diseño es muy elegante y tan poderoso.Obviamente, los pros y los contras de CAD son susceptibles al cambio.CAD todavía está evolucionando, y con él, también lo harán sus ventajas y desventajas.Una década más adelante, ¿quién puede decir de qué CAD será capaz o no?'
        }
        author={'https://www.scan2cad.com/blog/cad/cad-evolved-since-1982/'}
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/cad-bim/autocad.png"
        alt={"Autodesk's AutoCad"}
        href="https://en.wikipedia.org/wiki/AutoCAD"
        caption={"Autodesk's AutoCAD es el software CAD más popular del mundo"}
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/cad-bim/autocad-pricing.png"
        alt={"Autodesk's AutoCad"}
        href="https://www.autodesk.ca/en/products/autocad/overview?mktvar002=5656878%7CSEM%7C16183926843%7C137132251670%7Cpla-933128653804_autocad&plc=ACDIST&term=1-YEAR&support=ADVANCED&quantity=1&utm_source=GGL&utm_medium=SEM&utm_term=pla-933128653804&utm_id=5656878&utm_campaign=GGL_DEC_All-Products_AMER_CA_eComm_PLA_BR_New_NA_0000_4424459_&mkwid=s|pcrid|581813781112|pkw||pmt||pdv|c|slid||pgrid|137132251670|ptaid|pla-933128653804|pid|Autodesk%20AutoCAD%20(1%20year%20subscription)&utm_medium=cpc&utm_source=google&utm_campaign&utm_term&utm_content=s|pcrid|581813781112|pkw||pmt||pdv|c|slid||pgrid|137132251670|ptaid|pla-933128653804|&gclid=EAIaIQobChMIoovk042ogQMVP_uUCR2dig90EAYYAiABEgJY2PD_BwE&ef_id=ZQHwuAAABOyV0B@V:20230913172616:s&tab=subscription"
        caption={
          'Precios de AutoCAD de Autodesk en 2024 - $2030 (USD) por año por 1 usuario'
        }
      />
    ),
  },
  {
    element: (
      <>
        <h2>¿Alternativas CAD de código abierto? 💸</h2>
        <br />
        <Image
          src="/images/cad-bim/librecad.png"
          alt={'LibreCad'}
          href="https://wiki.librecad.org/index.php"
          caption={
            'Librecad es una alternativa de código libre y abierto a AutoCAD'
          }
        />
      </>
    ),
  },
  {
    element: (
      <>
        <Image
          src="/images/cad-bim/qcad-logo.png"
          alt={'QCad'}
          href="https://www.qcad.org/en/"
          caption={
            'Qcad es otra alternativa de código libre y abierto a AutoCAD'
          }
        />
      </>
    ),
  },

  {
    element: (
      <>
        <h2>¿Alternativas CAD 3D de código abierto? 💸</h2>
        <br />
        <Image
          src="/images/coding/blender.png"
          alt="Blender"
          caption={
            'Blender - Suite creativa 3D de código abierto - CAD 3D, BIM y mucho más...'
          }
          href="https://www.blender.org/download/"
        />
      </>
    ),
  },
  {
    element: (
      <>
        <h1>❔</h1>
        <br />
        <h2>¿Sabes lo que significa BIM?</h2>
      </>
    ),
  },
  {
    element: (
      <>
        <h1>Building Information Model or Building Information Modelling</h1>
        <br />
        <h5>... Claramente no es un gran acrónimo</h5>
      </>
    ),
  },
  {
    element: (
      <>
        <h1>❔</h1>
        <br />
        <h2>¿En qué se diferencia BIM de CAD?</h2>
      </>
    ),
  },
  {
    element: (
      <Image
        src="/images/cad-bim/bim-books.png"
        alt="BIM Books"
        caption={
          'Tres libros BIM fundamentales: Weygnant’s, Saxon’s, Eastman’s'
        }
      />
    ),
    notes:
      'La definición de Weygnant es una buena base para las personas orientadas a herramientas;La explicación de Saxon es para personas orientadas a clientes/negocios;Eastman es considerado el padre de BIM, y tiene la definición más correcta técnicamente ',
  },
  { element: <Weygant /> },
  { element: <Weygant2 /> },
  {
    element: (
      <Quote
        quote={
          'para clientes de estate-holding clients,BIM ofrece no solo la posibilidad de una construcción más rápida, más barata y de mejor calidad, sino también una base de datos de información de operación y mantenimiento para respaldar el ciclo de vida.Los clientes que han preferido o requerido estándares para sus propiedades pueden mantener estos estándares en una biblioteca BIM de elementos modelo y proporcionarles a los equipos de diseño de diseño para incorporar a los proyectos '
        }
        author={'Saxon'}
      />
    ),
  },
  {
    element: (
      <Quote
        quote={
          'La llegada de BIM marca un interruptor para la industria de la construcción de considerar los edificios como proyectos para considerarlos como activos.El modelo circular del ciclo de vida de los activos reemplaza el modelo lineal de un proyecto '
        }
        author={'Saxon'}
      />
    ),
  },
  {
    element: (
      <Quote
        quote={
          'BIM consiste en una base de datos digital de un edificio particular que contiene información sobre sus objetos.Esto puede incluir su geometría (generalmente definida por reglas paramétricas), su rendimiento, su planificación, su construcción y luego su funcionamiento.Un modelo Revit® y un modelo digital Project® de un edificio son ejemplos de modelos de edificios.El "modelo de construcción" puede considerarse el reemplazo de la próxima generación para "dibujos de construcción" o "dibujos arquitectónicos".Agustream en el proceso, el término "modelo de fabricación" ya es de uso común como reemplazo de "dibujos de taller"'
        }
        author={'Eastman'}
      />
    ),
  },
  { element: <Bim /> },
  {
    element: (
      <Image
        src="/images/cad-bim/macleamy.png"
        alt="BIM Books"
        caption={'Curva MacLeamy'}
      />
    ),
  },
  { element: <BimLevels /> },
  {
    element: (
      <Image
        src="/images/cad-bim/lod.png"
        alt="Levels of detail"
        caption={'Levels of detail'}
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/cad-bim/lod2.png"
        alt="Levels of detail"
        caption={'Levels of detail'}
      />
    ),
    notes:
      'Pasar de la concepción → a la geometría aproximada → a la geometría precisa → a la fabricación → a la medida',
  },
  {
    element: (
      <Image
        src="/images/cad-bim/levels.png"
        alt="BIM Maturity Levels"
        caption={'Niveles de madurez bim'}
      />
    ),
  },
  { element: <BimDrivers /> },
  {
    element: (
      <Image
        src="/images/cad-bim/bim-ecosystem.png"
        alt="Traditional BIM Ecosystem"
        caption={'Ecosistema BIM tradicional'}
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/cad-bim/revitorarchicad.png"
        alt="Revit or Archicad?"
        caption={
          'Las herramientas de autoría BIM han estado luchando para convertirse en la herramienta estándar en la industria.¿Quién está ganando?'
        }
      />
    ),
  },
  {
    element: (
      <Video
        src="https://www.youtube.com/embed/iuiichHnV9g?si=qgNvNyF7h8Pwk5S1"
        title="Revit wins"
        caption={
          'Revit se ha convertido en el software BIM más popular del mundo'
        }
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/cad-bim/revit.png"
        alt={"Autodesk's Revit"}
        href="https://en.wikipedia.org/wiki/Autodesk_Revit"
        caption={'Revit de Autodesk es el software BIM más popular del mundo'}
      />
    ),
  },
  {
    element: (
      <Image
        src="/images/cad-bim/closed-bim.png"
        alt="Closed BIM"
        caption={
          'Las herramientas y formatos cerrados BIM convierten BIM en un proceso opaco \
            BIM se ha definido como una herramienta o proceso de comunicación y colaboración creado originalmente para conectar a las personas, procesos y datos. \
            Sin embargo, esa no es exactamente la forma en que la industria AEC está utilizando BIM. \
            Lo comun es trabajar con soluciones patentadas y formatos de archivo cerrados.'
        }
      />
    ),
  },
  {
    element: (
      <>
        <h1>❔</h1>
        <br />
        <h2>¿Por qué deberíamos preocuparnos?</h2>
      </>
    ),
  },
  {
    element: (
      <Image
        src="/images/cad-bim/mandates.png"
        alt="Mandatos BIM"
        caption={"By BICP Global BIM Study - Lessons For Ireland's Programme"}
      />
    ),
    notes:
      'Mandatos BIM gubernamentales.\
Los países de toda la palabra se están convirtiendo en regular el uso de BIM.Entonces, si uno quiere participar en obras públicas e incluso proyectos no públicos, BIM es un requisito.\
Lo que significa que BIM ya no es una opción, sino un mandato.\
Sabiendo que el software BIM está controlado principalmente por algunos proveedores, esto significa que estas compañías de software tendrán un tremendo impacto en nuestra práctica.',
  },
  {
    element: (
      <Image
        src="/images/cad-bim/revit-pricing.png"
        alt={"Autodesk's Revit 2024 price"}
        href="https://www.autodesk.ca/en/products/revit/overview?us_oa=dotcom-us&us_si=8abb21ea-6ba6-46ac-929b-39cecb847ed0&us_st=revit&us_pt=RVT&term=1-YEAR&tab=subscription&plc=RVT"
        caption={
          'Precios Revit de Autodesk en 2024 - $ 2910 (USD) por año por 1 usuario'
        }
      />
    ),
  },

  // BONSAI BIM
  {
    element: (
      <>
        <h2>Open-source Alternatives? 💸</h2>
        <br />
        <Image
          src="/images/cad-bim/blenderbim.png"
          alt={'BonsaiBIM'}
          href="https://bonsaibim.org/"
          caption={
            'BonsaiBIM (anteriormente BlenderBIM) es una alternativa de código libre y abierto a Revit'
          }
        />
      </>
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

  // 3D graphics en el navegador de internet

  {
    element: (
      <>
        <Image
          src="/images/three/webgl.png"
          alt="Web gl"
          href="https://www.khronos.org/webgl/"
          caption={
            'WebGL ™ es un estándar web Open Open multiplataforma y libre de regalías para una API gráfica 3D de low-level basada en OpenGL'
          }
        />
      </>
    ),
    notes:
      'WebGL es un sistema de muy low-level que solo dibuja puntos, líneas y triángulos.(shaders) \
Hacer cualquier cosa útil con WebGL generalmente requiere bastante código y ahí es donde entran three.js. \
Maneja cosas como escenas, luces, sombras, materiales, texturas, matemáticas 3D, todas las cosas que tendrías que escribir si tuvieras que usar WebGL directamente.',
  },
  {
    element: (
      <>
        <h3> ¿Cómo se ve WebGL?</h3>
        <br />
        <Image
          src="/images/three/webgl-vertex-shader.png"
          alt="WebGL shaders"
          caption={'Los shaders de WebGL son difíciles de usar '}
        />
      </>
    ),
    notes:
      'Hacer cualquier cosa útil con WebGL generalmente requiere bastante código y ahí es donde entran three.js.\
Maneja cosas como escenas, luces, sombras, materiales, texturas, matemáticas 3D, todas las cosas que tendrías que escribir si tuvieras que usar WebGL directamente.',
  },
  {
    element: (
      <>
        <Gltf />

        <a href="https://en.wikipedia.org/wiki/GlTF">
          <em>GLTF: Graphics Library Transmission Format</em>{' '}
        </a>
      </>
    ),
    notes:
      'GLTF ™ es una especificación libre de regalías para la transmisión eficiente y la carga de escenas y modelos 3D por motores y aplicaciones.\n\
GLTF minimiza el tamaño de los activos 3D, y el procesamiento de tiempo de ejecución necesario para desempacarlos y usarlos.\n\
GLTF define un formato de publicación extensible que agiliza los flujos de trabajo de autor y los servicios interactivos al permitir el uso interoperable de contenido 3D en toda la industria.\n\
GLTF 2.0 ha sido lanzado como el estándar internacional ISO 12113: 2022.',
  },
  {
    element: (
      <>
        <Image
          src="/images/three/gltf-jpeg-of-3d.jpg"
          alt="GLTF"
          href="https://www.khronos.org/gltf/"
          caption={"GlTF es la 'JPEG de 3D'"}
        />
      </>
    ),
  },
  {
    element: (
      <>
        <Image
          src="/images/three/gltf-ecosystem.png"
          alt="GLTF"
          href="https://www.khronos.org/gltf/"
          caption={"Ecosistema GLTF'"}
        />
      </>
    ),
  },

  {
    element: (
      <Video
        src="https://www.youtube.com/embed/tonSNnEj-ow?si=h7M704Svi3SpAvN3"
        title="Gltf"
        caption={'Que es gltf?'}
      />
    ),
  },

  // Sketchfab

  {
    element: (
      <>
        <Image
          src="/images/cad-bim/sketchfab-logo.png"
          alt="Sketchfab"
          href="https://sketchfab.com/"
          caption={
            'SketchFab es la plataforma más grande para publicar, compartir y descubrir contenido 3D en línea y en realidad virtual'
          }
        />
      </>
    ),
  },
  {
    element: (
      <Video
        src="https://www.youtube.com/embed/PH05RV00F7o?si=tzrbBwdMhiyTzyQr"
        title="Sketchfab"
        caption={'¿Que es Sketchfab?'}
      />
    ),
  },
  {
    element: (
      <>
        <iframe
          className="w-full h-full"
          src="https://sketchfab.com/levantamiento1?utm_source=triggered-emails&utm_medium=email&utm_campaign=new-model-uploaded-by-following"
        />
      </>
    ),
  },
  {
    element: (
      <>
        <iframe
          className="w-full h-full"
          src="https://sketchfab.com/levantamiento2?utm_source=triggered-emails&utm_medium=email&utm_campaign=new-model-uploaded-by-following"
        />
      </>
    ),
  },
  {
    element: (
      <>
        <iframe
          className="w-full h-full"
          src="https://sketchfab.com/levantamiento3?utm_source=triggered-emails&utm_medium=email&utm_campaign=new-model-uploaded-by-following"
        />
      </>
    ),
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
            'Three.js es una biblioteca 3D que trata de hacer que sea lo más fácil posible obtener contenido 3D en una página web'
          }
        />
      </>
    ),
    notes:
      'Three.js es una biblioteca 3D que intenta hacer que sea lo más fácil posible obtener contenido 3D en una página web. \n\
      Three.js a menudo se confunde con WebGL, ya que la mayoría de las veces, pero no siempre, tres.js usa WebGL para dibujar 3D.',
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

  // {
  //   element: (
  //     <EmojiTitle
  //       emoji={'Lab 8 🌐🫖'}
  //       title={'Use Three js to upload your Blender model (mesh/gltf)'}
  //     />
  //   ),
  // },

  // That Open

  {
    element: (
      <Image
        src="/images/obc/timeline.png"
        alt="OS timeline"
        caption={'OSArch - timeline'}
      />
    ),
    notes:
      'Sin embargo, antes de finales de 2019, imaginar una alternativa al software patentado para la industria de la AEC era un desafío. \n\
La industria era (y sigue siendo) demasiado dependiente de las soluciones del proveedor principal. \n\
Pero luego, una cadena de eventos comenzó a abrir la puerta a alternativas \n \
→ En octubre de 2019 Dion Moult libera Blenderbim \n \
→ En febrero de 2020, se crea el OS Arch: Osarch, es una comunidad en línea que promueve que el entorno construido se puede diseñar, construir, operar y reciclar con software gratuito/libre y de código abierto. \n \
→ En julio de 2020, varias firmas líderes de AEC del Reino Unido e Internacional escribieron una carta abierta a los cambios exigentes de Autodesk relacionados con costos, licencias y prácticas comerciales \n\
→ En diciembre de 2020 se lanza la Biblioteca IFC.JS.La primera biblioteca en línea de Floss para trabajar con BIM e IFC. \n\
→ En septiembre de 2022 hay una carta de seguimiento de las asociaciones arquitectónicas nórdicas respaldadas por el Consejo de Europa de los Arquitectos.\norte\
→ En mi opinión, en lugar de escribir cartas a los proveedores que nosotros, como sector, debemos seguir tomando medidas con nuestras propias manos ',
  },

  {
    element: (
      <Image
        src="/images/obc/thatopencompany.png"
        alt="That Open Company - Welcome to the AECOsystem."
        caption={'That Open Company - Welcome to the AECOsystem.'}
        href="https://thatopen.com/"
      />
    ),
    notes:
      "Open Engine: Un conjunto de tecnologías abierta basada en IFCJS gratuita común (viewer and parser) \n\
    Open Store: Un mercado donde los desarrolladores pueden vender herramientas, y los usuarios pueden comprarlas directamente para su uso en sus proyectos. \n\
    Open Editor: Un editor gratuito de geometría basado en la web (Clay) que permite a los usuarios ejecutar todas las aplicaciones directamente en sus navegadores web. \n\
    Open Services: Servicios de procesamiento, almacenamiento y análisis desarrollados por That Open Company para ayudar a los desarrolladores a crear y lanzar software. \n\
    That People Community: Conocer a otros miembros, foros, chats y reuniones cada seis semanas dentro del equipo de That Open Company's Para averiguar qué está sucediendo exclusivamente cosas mientras comparte opiniones. \n\
    Open University: Una nueva plataforma construida por That Open Company Para crear una ruta desde cero conocimiento sobre la programación hasta convertirse en desarrollador de software en menos tiempo que posible, con maestros que apoyan a los estudiantes en sus carreras profesionales.",
  },
  {
    element: (
      <div>
        <h3>That Open Company enlaces útiles</h3>
        <br />
        <ol>
          <li>
            <SimpleButton
              title="That Open Company"
              href="https://thatopen.com/"
            />
          </li>
          <li>
            <SimpleButton
              title="That Open People"
              href="https://people.thatopen.com/"
            />
          </li>
          <li>
            <SimpleButton
              title="That Open Documentation"
              href="https://docs.thatopen.com/"
            />
          </li>
          <li>
            <SimpleButton
              title="That Open Company Github"
              href="https://github.com/ThatOpen/"
            />
          </li>
        </ol>
      </div>
    ),
  },

  {
    element: (
      <>
        <h1>💻 Lab </h1>
        <br />
        <h2>Blender</h2>
        <h2>Sketchfab</h2>
        <h2>si tenemos tiempo Three.js</h2>
      </>
    ),
  },
  {
    element: <PdfViewer src="/resources/Blender+2.9+Shortcuts+v1.1.pdf" />,
  },
];
