import { Toc } from '@/app/types/types';

import Image from '@/components/Common/Image';
import Video from '@/components/Common/Video';
import Quote from '@/components/Common/Quote';
import EmojiTitle from '@/components/Common/EmojiTitle';
import PdfViewer from '@/components/Common/PdfViewer';
import Gltf from './Gltf';
import { title } from 'process';
import Conditionals from './Conditionals.mdx';
import Loops from './Loops.mdx';

export const content: Toc = [
  // JAVASCRIPT CONTENT
  {
    element: (
      <>
        <Image
          src="/images/javascript/js.gif"
          alt="JavaScript"
          href="https://www.w3schools.com/js/default.asp"
          caption={'JavaScript is the programming language of the Web'}
        />
      </>
    ),
    notes:
      'Do not confuse with Java, Javascript is the logic behind of all modern internet browsers. It is also one of the most popular programming languages in the world \n\
      JavaScript and Java are completely different languages, both in concept and design. \n\
JavaScript was invented by Brendan Eich in 1995, and became an ECMA standard in 1997. \n\
ECMA-262 is the official name of the standard. ECMAScript is the official name of the language.',
  },

  {
    element: (
      <Video
        src="https://www.youtube.com/embed/9RQhbmcbAfk?si=aZXDQhDv3dQcWJyO"
        title="Introduction to JavaScript - Fall 2024 - Part 1"
        caption={'Introduction to JavaScript - Fall 2024 - Part 1'}
      />
    ),
  },
  {
    element: (
      <Video
        src="https://www.youtube.com/embed/BJ5hcpEoMpY?si=FLqUkvV_bBb0O7Qk"
        title="Introduction to JavaScript and Three.js - Fall 2024 - Part 2"
        caption={'Introduction to JavaScript and Three.js - Fall 2024 - Part 2'}
      />
    ),
  },
  {
    element: (
      <>
        <Image
          src="/images/javascript/compiled-vs-interpreted-languages.png"
          alt="Compiled vs Interpreted"
          href="https://www.linkedin.com/pulse/what-difference-between-compiled-interpreted-programming-language/"
          caption={'Compiled vs Interpreted'}
        />
      </>
    ),
    notes:
      'Programming languages can be broadly categorized into two types based on how they are processed: compiled and interpreted. \n\
      In Compiled languages, the source code is passed through a program called a compiler, which translates it into machine (low-level language) code that the machine understands and can execute (.exe or .dll files) \n\
      In contrast, JavaScript has no compilation step. Instead, an interpreter in the browser reads over the JavaScript code, interprets each line, and runs it.',
  },

  {
    element: <EmojiTitle emoji={'👋🌎'} title="printing: 'Hello world!'" />,
  },

  {
    element: (
      <>
        <h3>{'<script> console.log(`Hello world!`) </script>'}</h3>
        <br />
        <Image
          src="/images/javascript/html-hello-world.png"
          alt="Script Hello world"
          caption={
            'Using JavaScript into HTML. Hello world within a script HTML element → the output will be rendered in the web browser Console (F12)'
          }
        />
      </>
    ),
  },

  {
    element: (
      <>
        <h3>{'<script src="./main.js" ></script>'}</h3>
        <br />
        <Image
          src="/images/javascript/hello-world.png"
          alt="Hello world"
          caption={
            'Adding a JavaScript external file to our HTML file. By convention we will call it main.js, app.js, or index.js → the output will be rendered in the web browser Console (F12)'
          }
        />
      </>
    ),
  },

  {
    element: (
      <EmojiTitle
        emoji={'JavaScript Variables 🗃️'}
        title="Variables or constants are containers that will eventually be declared with values"
      />
    ),
    notes:
      'Variables or constants are containers that will eventually be declared with values \n\
      In some occasions, you can use variable without declaring them, however, it is considered good programming practice to always declare variables before use.',
  },

  {
    element: (
      <>
        <h1>Var, let or const 🗃️❔</h1>
        <br />
        <h3>
          ℹ️The <b>var</b> keyword was used in all JS code from 1995 to 2015
        </h3>
        <h3>
          ℹ️The <a href="https://www.w3schools.com/JS/let.asp">let</a> and
          <a href="https://www.w3schools.com/JS/js_const.asp"> const </a>
          keywords were added to JS in 2015
        </h3>
        <h3>
          ⚠️The <b>var</b> keyword should only be used in code written for older
          browsers
        </h3>
      </>
    ),
    notes:
      ' \n\
      In some occasions, you can use variable without declaring them, however, it is considered good programming practice to always declare variables before use.',
  },
  {
    element: (
      <div>
        <h2>When to Use var, let, or const?</h2>
        <ol>
          <li>Always declare variables</li>
          <li>
            Always use <strong>const</strong> if the value should not be changed
          </li>
          <li>
            Always use <strong>const</strong> if the type should not be changed
            (Arrays and Objects)
          </li>
          <li>
            Only use <strong>let</strong> if you can`t use
            <strong> const</strong>
          </li>
          <li>
            Only use <strong>var</strong> if you MUST support old browsers.
          </li>
        </ol>
      </div>
    ),
    notes:
      ' \n\
      In some occasions, you can use variable without declaring them, however, it is considered good programming practice to always declare variables before use.',
  },

  {
    element: (
      <>
        <h2>JavaScript Arithmetic Operators</h2>
        <h5>Arithmetic Operators are used to perform arithmetic on numbers:</h5>
        <br />
        <table className="simple-table  text-left">
          <tbody>
            <tr>
              <th>Operator</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>+</td>
              <td>Addition</td>
            </tr>
            <tr>
              <td>-</td>
              <td>Subtraction</td>
            </tr>
            <tr>
              <td>*</td>
              <td>Multiplication</td>
            </tr>
            <tr>
              <td>**</td>
              <td>Exponentiation</td>
            </tr>
            <tr>
              <td>/</td>
              <td>Division</td>
            </tr>
            <tr>
              <td>%</td>
              <td>Modulus (Division Remainder)</td>
            </tr>
            <tr>
              <td>++</td>
              <td>Increment</td>
            </tr>
            <tr>
              <td>--</td>
              <td>Decrement</td>
            </tr>
          </tbody>
        </table>
        <br />
        <a href="https://www.w3schools.com/js/js_arithmetic.asp">
          source: https://www.w3schools.com/js/js_arithmetic.asp
        </a>
      </>
    ),
  },

  {
    element: (
      <>
        <h2>JavaScript Assignment Operators</h2>
        <h5>Assignment operators assign values to JavaScript variables.</h5>
        <br />
        <table className="simple-table  text-left">
          <tbody>
            <tr>
              <th>Operator</th>
              <th>Example</th>
              <th>Same As</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>=</td>
              <td>x = y</td>
              <td>x = y</td>
              <td>
                The Simple Assignment Operator assigns a value to a variable.
              </td>
            </tr>
            <tr>
              <td>+=</td>
              <td>x += y</td>
              <td>x = x + y</td>
              <td>
                The Addition Assignment Operator adds a value to a variable.
              </td>
            </tr>
            <tr>
              <td>-=</td>
              <td>x -= y</td>
              <td>x = x - y</td>
              <td>
                The Subtraction Assignment Operator subtracts a value from a
                variable.
              </td>
            </tr>
            <tr>
              <td>*=</td>
              <td>x *= y</td>
              <td>x = x * y</td>
              <td>
                The Multiplication Assignment Operator multiplies a variable.
              </td>
            </tr>
            <tr>
              <td>/=</td>
              <td>x /= y</td>
              <td>x = x / y</td>
              <td>The Division Assignment Operator divides a variable.</td>
            </tr>
            <tr>
              <td>%=</td>
              <td>x %= y</td>
              <td>x = x % y</td>
              <td>
                The Remainder Assignment Operator assigns a remainder to a
                variable.
              </td>
            </tr>
            <tr>
              <td>**=</td>
              <td>x **= y</td>
              <td>x = x ** y</td>
              <td>
                The Exponentiation Assignment Operator raises a variable to the
                power of the operand.
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <a href="https://www.w3schools.com/js/js_assignment.asp">
          source: https://www.w3schools.com/js/js_assignment.asp
        </a>
      </>
    ),
  },

  {
    element: (
      <>
        <h2>JavaScript Data Types</h2>
        <br />
        <div className="overflow-auto flex justify-center">
          <table className="simple-table text-left overflow-auto">
            <tbody>
              <tr>
                <th>Type</th>
                <th>Description</th>
              </tr>
              <tr>
                <td>String</td>
                <td>
                  A string (or a text string) is a series of characters like
                  `hey`, Strings are written with quotes. You can use single or
                  double quotes <br />
                  You can use quotes inside a string, as long as they don`t
                  match the quotes surrounding the string
                </td>
              </tr>
              <tr>
                <td>Number</td>
                <td>
                  All JavaScript numbers are stored as decimal numbers (floating
                  point). Numbers can be written with, or without decimals{' '}
                  <br />
                  Extra large or extra small numbers can be written with
                  scientific (exponential) notation ie: 123e5 (12300000) or
                  123e-5 (0.00123)
                </td>
              </tr>
              <tr>
                <td>Bigint</td>
                <td>
                  JavaScript BigInt is a new datatype (2020) that can be used to
                  store integer values that are too big to be represented by a
                  normal JavaScript Number. ie:
                  123456789012345678901234567890123456789
                </td>
              </tr>
              <tr>
                <td>Boolean</td>
                <td>Booleans can only have two values: true or false.</td>
              </tr>
              <tr>
                <td>Arrays</td>
                <td>
                  JavaScript arrays are written with square brackets. Array
                  items are separated by commas: <br />
                  {"[1, 'two', 3+5 , false, [1, 2, 3], {name: value}]"}. <br />
                  Array indexes are zero-based, which means the first item is
                  [0], second is [1], and so on.
                </td>
              </tr>
              <tr>
                <td>Objects</td>
                <td>
                  JavaScript objects are written with curly braces {'{...}'}.
                  Object properties are written as name:value pairs, separated
                  by commas: <br />
                  {
                    "{name: 'John', lastname: 'Lennon', children: ['Julian', 'Sean'], born: 1940, alive: false, died: 1980}"
                  }
                </td>
              </tr>
              <tr>
                <td>Undefined</td>
                <td>
                  In JavaScript, a variable without a value, has the value
                  undefined. The type is also undefined.
                </td>
              </tr>
              <tr>
                <td>Null</td>
                <td>
                  The null value represents the intentional absence of any
                  object value. It is one of JavaScript`s primitive values and
                  is treated as falsy for boolean operations.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <a href="https://www.w3schools.com/js/js_arithmetic.asp">
          source: https://www.w3schools.com/js/js_arithmetic.asp
        </a>
      </>
    ),
    notes:
      'In programming, data types is an important concept. \n\
    To be able to operate on variables, it is important to know something about the type.     \n\
    Without data types, a computer cannot safely solve this \n\
    JavaScript is not too strict in relation to data types like other languages, but that could lead to errors and bugs. \n\
    ie: When adding a number and a string, JavaScript will treat the number as a string. \n\
    JavaScript has dynamic types. This means that the same variable can be used to hold different data types \n\
     In a couple of weeks we are going to learn a framework called Typescript that was developed by Facebook to solve Type issues in Javascript',
  },
  // Objects
  {
    element: (
      <Image
        src="/images/javascript/js-object-parts.png"
        alt="JavaScript object"
        caption="A JavaScript object is a collection of properties, and a property is an association between a name (or key) and a value. "
      />
    ),
    notes:
      "An object is a collection of properties, and a property is an association between a name (or key) and a value. \n\
    A property's value can be a function, in which case the property is known as a method. \n\
    Objects in JavaScript, just as in many other programming languages, can be compared to objects in real life",
  },

  {
    element: (
      <Image
        src="/images/javascript/js-object-example.png"
        alt="JavaScript object"
        caption="Objects in JavaScript, can be compared to objects in real life"
      />
    ),
    notes:
      'Objects in JavaScript, just as in many other programming languages, can be compared to objects in real life \n\
      In JavaScript, an object is a standalone entity, with properties and type. \n\
      Compare it with a cup, for example. A cup is an object, with properties. \n\
      A cup has a color, a design, weight, a material it is made of, etc. \n\
      The same way, JavaScript objects can have properties, which define their characteristics.',
  },
  // functions
  {
    element: (
      <Image
        src="/images/javascript/js-function.png"
        alt="JavaScript functions"
        caption="A JavaScript function is a block of code designed to perform a particular task. It is is executed when `something` invokes it (calls it)."
      />
    ),
    notes:
      'A JavaScript function is a block of code designed to perform a particular task.\n\
    A JavaScript function is executed when `something` invokes it (calls it)',
  },

  // Conditionals
  {
    element: (
      <>
        <h2>Conditional Statements ✔️✖️❔</h2>
        <br />
        <Image
          src="/images/javascript/js-conditionals.png"
          alt="JavaScript conditionals"
          caption="Conditional statements are used to perform different actions based on different conditions."
        />
      </>
    ),
  },
  {
    element: <Conditionals />,
  },

  {
    element: (
      <Image
        src="/images/javascript/js-if.png"
        alt="if"
        caption="If statement"
        href="https://www.w3schools.com/js/js_if_else.asp"
      />
    ),
  },

  {
    element: (
      <Image
        src="/images/javascript/js-if-else.png"
        alt="if else"
        caption="If else statement"
        href="https://www.w3schools.com/js/js_if_else.asp"
      />
    ),
  },

  {
    element: (
      <Image
        src="/images/javascript/js-if-else-example.png"
        alt="if else example"
        caption="If else example"
        href="https://www.w3schools.com/js/js_if_else.asp"
      />
    ),
  },

  {
    element: (
      <Image
        src="/images/javascript/js-switch.png"
        alt="switch"
        caption="switch statement"
        href="https://www.w3schools.com/js/js_switch.asp"
      />
    ),
  },

  {
    element: (
      <Image
        src="/images/javascript/js-switch-example.png"
        alt="switch example"
        caption="switch example"
        href="https://www.w3schools.com/js/js_switch.asp"
      />
    ),
  },

  // loops
  {
    element: (
      <EmojiTitle
        emoji={'Loops 🔄️'}
        title={
          'Loops are ways JavaScript has to do something repeatedly🔁. They are a great way to automate processes 🤖'
        }
      />
    ),
    notes:
      'Loops offer a quick and easy way to do something repeatedly. \n\
      You can think of a loop as a computerized version of the game where you tell someone to take X steps in one direction, then Y steps in another.',
  },

  {
    element: <Loops />,
    notes:
      "There are many different kinds of loops, but they all essentially do the same thing: they repeat an action some number of times. \n\
      (Note that it's possible that number could be zero!) \n\
    The various loop mechanisms offer different ways to determine the start and end points of the loop. \n\
    There are various situations that are more easily served by one type of loop over the others.",
  },

  {
    element: (
      <Image
        src="/images/javascript/js-for-loop-example.png"
        alt="for loop example"
        caption="for → loops through a block of code a number of times"
        href="https://www.w3schools.com/js/js_switch.asp"
      />
    ),
  },

  {
    element: (
      <Image
        src="/images/javascript/js-for-in.png"
        alt="forEach loop example"
        caption="for/in → loops through the properties of an object"
        href="https://www.w3schools.com/js/js_loop_forin.asp"
      />
    ),
  },

  {
    element: (
      <Image
        src="/images/javascript/js-foreach-example.png"
        alt="forEach loop example"
        caption="forEach → calls a function (a callback function) once for each array element"
        href="https://www.w3schools.com/js/js_loop_forin.asp"
      />
    ),
  },

  {
    element: (
      <Image
        src="/images/javascript/js-for-of.png"
        alt="for of loop example"
        caption="for/of → loops through the values of an iterable object"
        href="https://www.w3schools.com/js/js_loop_forof.asp"
      />
    ),
  },

  {
    element: (
      <Image
        src="/images/javascript/js-while.png"
        alt="while loop example"
        caption="while → loops through a block of code while a specified condition is true"
        href="https://www.w3schools.com/js/js_loop_while.asp"
      />
    ),
  },

  {
    element: (
      <Image
        src="/images/javascript/js-do-while.png"
        alt="do while loop example"
        caption="do/while → also loops through a block of code while a specified condition is true"
        href="https://www.w3schools.com/js/js_loop_while.asp"
      />
    ),
  },

  // events
  {
    element: (
      <EmojiTitle
        emoji={'Events 👂'}
        title={
          "Events are actions assigned to HTML elements. JavaScript listens 👂 to javascript 'events' and reacts 🎬"
        }
      />
    ),
  },

  {
    element: (
      <>
        <a href="https://www.w3schools.com/js/js_events.asp">
          <h2>Common HTML Events 👂</h2>
        </a>
        <br />
        <table className="simple-table">
          <tbody>
            <tr>
              <th>Event</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>onchange</td>
              <td>An HTML element has been changed</td>
            </tr>
            <tr>
              <td>onclick</td>
              <td>The user clicks an HTML element</td>
            </tr>
            <tr>
              <td>onmouseover</td>
              <td>The user moves the mouse over an HTML element</td>
            </tr>
            <tr>
              <td>onmouseout</td>
              <td>The user moves the mouse away from an HTML element</td>
            </tr>
            <tr>
              <td>onkeydown</td>
              <td>The user pushes a keyboard key</td>
            </tr>
            <tr>
              <td>onload</td>
              <td>The browser has finished loading the page</td>
            </tr>
          </tbody>
        </table>
        <br />
        <a href="https://www.w3schools.com/jsref/dom_obj_event.asp">
          Here is the complete list of HTML events
        </a>
      </>
    ),
  },

  // {
  //   element: (
  //     <Image
  //       src="/images/javascript/js-onclick-event.png"
  //       alt="onClick event example"
  //       caption="onClick event example"
  //       href="https://www.w3schools.com/js/tryit.asp?filename=tryjs_event_onclick1"
  //     />
  //   ),
  // },

  {
    element: (
      <Image
        src="/images/javascript/js-addeventlistener.png"
        alt="onClick event example"
        caption="onClick event example"
        href="https://www.w3schools.com/jsref/met_document_addeventlistener.asp"
      />
    ),
  },

  // reserved words
  {
    element: (
      <>
        <h2>Reserved words 🚫</h2>
        <br />
        <div className="overflow-y-auto w-full flex justify-center">
          <table className="simple-table">
            <tbody>
              <tr>
                <td>abstract</td>
                <td>arguments</td>
                <td>await*</td>
                <td>boolean</td>
              </tr>
              <tr>
                <td>break</td>
                <td>byte</td>
                <td>case</td>
                <td>catch</td>
              </tr>
              <tr>
                <td>char</td>
                <td>class*</td>
                <td>const</td>
                <td>continue</td>
              </tr>
              <tr>
                <td>debugger</td>
                <td>default</td>
                <td>delete</td>
                <td>do</td>
              </tr>
              <tr>
                <td>double</td>
                <td>else</td>
                <td>enum*</td>
                <td>eval</td>
              </tr>
              <tr>
                <td>export*</td>
                <td>extends*</td>
                <td>false</td>
                <td>final</td>
              </tr>
              <tr>
                <td>finally</td>
                <td>float</td>
                <td>for</td>
                <td>function</td>
              </tr>
              <tr>
                <td>goto</td>
                <td>if</td>
                <td>implements</td>
                <td>import*</td>
              </tr>
              <tr>
                <td>in</td>
                <td>instanceof</td>
                <td>int</td>
                <td>interface</td>
              </tr>
              <tr>
                <td>let*</td>
                <td>long</td>
                <td>native</td>
                <td>new</td>
              </tr>
              <tr>
                <td>null</td>
                <td>package</td>
                <td>private</td>
                <td>protected</td>
              </tr>
              <tr>
                <td>public</td>
                <td>return</td>
                <td>short</td>
                <td>static</td>
              </tr>
              <tr>
                <td>super*</td>
                <td>switch</td>
                <td>synchronized</td>
                <td>this</td>
              </tr>
              <tr>
                <td>throw</td>
                <td>throws</td>
                <td>transient</td>
                <td>true</td>
              </tr>
              <tr>
                <td>try</td>
                <td>typeof</td>
                <td>var</td>
                <td>void</td>
              </tr>
              <tr>
                <td>volatile</td>
                <td>while</td>
                <td>with</td>
                <td>yield</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <a href="https://www.w3schools.com/js/js_reserved.asp">
          <h4>More reserved words ...</h4>
        </a>
      </>
    ),
    notes:
      'In any programming language, a reserved word or a reserved identifier is a word that cannot be used as an identifier, such as the name of a variable, function, or label. \n\
    Thus, it is reserved and cannot be used for defining any of these.',
  },

  {
    element: (
      <>
        <h2>HTML + CSS + JS </h2>
        <br />
        <iframe
          className="w-11/12 h-full border-solid border-2 border-dark p-5 rounded-lg bg-light shadow-md mx-10"
          src="/arcn5005/terms/f2024/students/nicolasarellanorisop/code-editors/html-css-js.html"
        />
      </>
    ),
  },

  // JS Libraries
  {
    element: (
      <>
        <Image
          src="/images/javascript/js-cloud.png"
          alt="JavaScript libraries"
          caption={'JavaScript libraries'}
        />
      </>
    ),
    notes:
      'Javascript libraries include pre-written JavaScript code that simplifies the completion of common and complicated tasks \n\
      Active Communities \n\
The most widely used libraries have active communities and forums where you may obtain help getting started with them. \
The library developer site is frequently used to get JavaScript libraries. \n\
Many library creators make both development and production versions of their libraries available. \
Comments and tips, as well as other non-minified code, are included in the development versions. \
Production versions are frequently minified and compressed for usage on live sites. \n\
Some libraries are even accessible via content delivery networks (CDNs), including cdnjs, Google Hosted Libraries, jsDelivr, and Microsoft Ajax Content Delivery Network, to name a few.',
  },
  {
    element: (
      <>
        <Image
          src="/images/javascript/js-libraries.png"
          alt="JavaScript visual libraries"
          href="https://en.wikipedia.org/wiki/List_of_JavaScript_libraries"
          caption={
            'JavaScript visual libraries - source: https://isquared.digital/blog/2020-03-24-viz-tools-pt2-1'
          }
        />
      </>
    ),
    notes:
      'There are plenty of JavaScript Visualization tools. Based on their functionality, we can cluster them into 4 main categories: \n\
      → Charting: to produce the most common DataViz plots;\n\
      → Graphs: representing and analyzing graph-based data;\n\
      → Maps: for representing data that has geo-features and\n\
      → 3D: creating three-dimensional charts and cool animations.',
  },

  // 3D graphics

  {
    element: (
      <>
        <Image
          src="/images/three/webgl.png"
          alt="Web gl"
          href="https://www.khronos.org/webgl/"
          caption={
            'WebGL™ is a cross-platform, royalty-free open web standard for a low-level 3D graphics API based on OpenGL ES'
          }
        />
      </>
    ),
    notes:
      "WebGL is a very low-level system that only draws points, lines, and triangles. (shaders) \
      To do anything useful with WebGL generally requires quite a bit of code and that is where three.js comes in. \
      It handles stuff like scenes, lights, shadows, materials, textures, 3d math, all things that you'd have to write yourself if you were to use WebGL directly.",
  },

  {
    element: (
      <Video
        src="https://www.youtube.com/embed/3wsFKrYhAHc?si=3KKtMe2XpZpR6eix"
        title="Introduction to WebGL, GLTF and Three.js"
        caption={
          'Introduction to 3D graphics on the web browser:  WebGL, GLTF and Three.js'
        }
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
          caption={'WebGL shaders are hard to use'}
        />
      </>
    ),
    notes:
      "To do anything useful with WebGL generally requires quite a bit of code and that is where three.js comes in. \
    It handles stuff like scenes, lights, shadows, materials, textures, 3d math, all things that you'd have to write yourself if you were to use WebGL directly.",
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
      'glTF™ is a royalty-free specification for the efficient transmission and loading of 3D scenes and models by engines and applications. \n\
    glTF minimizes the size of 3D assets, and the runtime processing needed to unpack and use them. \n\
    glTF defines an extensible, publishing format that streamlines authoring workflows and interactive services by enabling the interoperable use of 3D content across the industry. \n\
    glTF 2.0 has been released as the ISO/IEC 12113:2022 International Standard.',
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
  },

  {
    element: (
      <Video
        src="https://www.youtube.com/embed/tonSNnEj-ow?si=h7M704Svi3SpAvN3"
        title="Gltf"
        caption={'What is GLTF'}
      />
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
            'Three.js is a 3D library that tries to make it as easy as possible to get 3D content on a webpage'
          }
        />
      </>
    ),
    notes:
      'Three.js is a 3D library that tries to make it as easy as possible to get 3D content on a webpage. \n\
      Three.js is often confused with WebGL since more often than not, but not always, three.js uses WebGL to draw 3D.',
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
        emoji={'Lab 8 🌐🫖'}
        title={'Use Three js to upload your Blender model (mesh/gltf)'}
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
  //         src="/arcn5005/terms/f2024/students/nicolasarellanorisop/code-editors/html-css-js.html"
  //       />
  //     </>
  //   ),
  // },
];
