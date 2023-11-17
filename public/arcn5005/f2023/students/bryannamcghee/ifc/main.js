const scene = new THREE.Scene();

 

const size = {

  width: window.innerWidth,

  height: window.innerHeight,

};

 

const aspect = size.width / size.height;

const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);

 

//Set up the renderer

const threeCanvas = document.getElementById("three-canvas");

const renderer = new THREE.WebGLRenderer({

  canvas: threeCanvas,

  alpha: true,

});

 

renderer.setSize(size.width, size.height);

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

document.body.appendChild(renderer.domElement);

 

//Create grid

const grid = new THREE.GridHelper(20, 20);

scene.add(grid);

 

const axes = new THREE.AxesHelper();

axes.material.depthTest = false;

axes.renderOrder = 1;

scene.add(axes);

 

const geometry = new THREE.BoxGeometry(1.0, 1.5, 1.0);

 

const yellowMaterial = new THREE.MeshLambertMaterial({ color: 0xffff00 });

const blueMaterial = new THREE.MeshLambertMaterial({ color: 0x0000ff });

const redMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 });

const greenMaterial = new THREE.MeshLambertMaterial({ color: 0x00ff00 });

 

const yellowCube = new THREE.Mesh(geometry, redMaterial);

const blueCube = new THREE.Mesh(geometry, redMaterial);

const redCube = new THREE.Mesh(geometry, redMaterial);

const greenCube = new THREE.Mesh(geometry, redMaterial);



yellowCube.position.z = 3;

blueCube.position.x = 3;

redCube.position.x = 5;

greenCube.position.z = 5;



scene.add(yellowCube);

scene.add(blueCube);

scene.add(redCube);

scene.add(greenCube);

 

const gltfLoader = new THREE.GLTFLoader();

 

let mesh;

 

gltfLoader.load(

  "blendermodel.glb",

  function (gltf) {

    mesh = gltf.scene;

    mesh.scale.x = 2;

    mesh.scale.y = 2;

    mesh.scale.z = 2;

 

    scene.add(mesh);

  },

  undefined,

  function (error) {

    console.error(error);

  }

);




const fontLoader = new THREE.FontLoader();

 

function createText(text, elevation = 0, textColor = "0x000000", size = 0.5) {

  const textValue = text;

  const textSize = size;

  fontLoader.load("./fonts/helvetiker_regular.typeface.json", function (font) {

    const textGeo = new THREE.TextGeometry(textValue, {

      font: font,

      size: textSize,

      height: 0.1,

      curveSegments: 4,

      bevelEnabled: true,

      bevelThickness: 0.1,

      bevelSize: 0.0,

      bevelOffset: 0,

      bevelSegments: 5,

    });

 

    const color = new THREE.Color();

    color.setHex(textColor);

    const textMaterial = new THREE.MeshLambertMaterial({ color: color });

    const text = new THREE.Mesh(textGeo, textMaterial);

 

    text.position.x = 2;

    text.position.y = elevation;

 

    scene.add(text);

  });

}

 

createText("- Hacker", 6, "0Xff0000");

createText("- Opensource God", 5, "0Xff0000");

createText("- Github Specialist", 4, "0Xff0000");

createText("- Mesh", 3, "0Xff0000");

 

camera.position.z = 20;

camera.position.x = 1;

camera.position.y = 1;

 

scene.position.x = -5;

scene.position.z = 5;

scene.position.y = -7.5;

 

const controls = new THREE.OrbitControls(camera, renderer.domElement);

controls.enableDamping = true;

 

//Create the lights of the scene

const lightColor = 0xffffff;

 

const ambientLight = new THREE.AmbientLight(lightColor, 0.5);

scene.add(ambientLight);

 

const directionalLight = new THREE.DirectionalLight(lightColor, 1);

directionalLight.position.set(5, 10, 5);

directionalLight.target.position.set(0, 3, 0);

scene.add(directionalLight);

scene.add(directionalLight.target);

 

function animate() {

  requestAnimationFrame(animate);

 

  if (mesh) mesh.rotation.y += 0.009;

 

  yellowCube.rotation.x += 1;

  yellowCube.rotation.y += 3;

 

  blueCube.rotation.x += 5;

  blueCube.rotation.y -= 2;

 

  redCube.rotation.x -= 3;

  redCube.rotation.y -= 3;

 

  greenCube.rotation.x += 10;

  greenCube.rotation.y -= 10;

 

  renderer.render(scene, camera);

}

 

animate();

 


window.addEventListener("resize", () => {

  size.width = window.innerWidth;

  size.height = window.innerHeight;

  camera.aspect = size.width / size.height;

  camera.updateProjectionMatrix();

  renderer.setSize(size.width, size.height);

});

 



 

const preload = () => {

 

  let manager = new THREE.LoadingManager();

  manager.onLoad = function() {

    const environment = new Environment( typo, particle );

  }

 

  var typo = null;

  const loader = new THREE.FontLoader( manager );

  const font = loader.load('https://res.cloudinary.com/dydre7amr/raw/upload/v1612950355/font_zsd4dr.json', function ( font ) { typo = font; });

  const particle = new THREE.TextureLoader( manager ).load( 'https://res.cloudinary.com/dfvtkoboz/image/upload/v1605013866/particle_a64uzf.png');

 

}

 

if ( document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll))

  preload ();

else

  document.addEventListener("DOMContentLoaded", preload );

 

class Environment {

 

  constructor( font, particle ){

 

    this.font = font;

    this.particle = particle;

    this.container = document.querySelector( '#magic' );

    this.scene = new THREE.Scene();

    this.createCamera();

    this.createRenderer();

    this.setup()

    this.bindEvents();

  }

 

  bindEvents(){

 

    window.addEventListener( 'resize', this.onWindowResize.bind( this ));

   

  }

 

  setup(){

 

    this.createParticles = new CreateParticles( this.scene, this.font,             this.particle, this.camera, this.renderer );

  }

 

  render() {

   

     this.createParticles.render()

     this.renderer.render( this.scene, this.camera )

  }

 

  createCamera() {

 

    this.camera = new THREE.PerspectiveCamera( 65, this.container.clientWidth /  this.container.clientHeight, 1, 10000 );

    this.camera.position.set( 10,-20, 100 );

 

  }

 

  createRenderer() {

 

    this.renderer = new THREE.WebGLRenderer();

    this.renderer.setSize( this.container.clientWidth, this.container.clientHeight );

 

    this.renderer.setPixelRatio( Math.min( window.devicePixelRatio, 2));

 

    this.renderer.outputEncoding = THREE.sRGBEncoding;

    this.container.appendChild( this.renderer.domElement );

 

    this.renderer.setAnimationLoop(() => { this.render() })

 

  }

 

  onWindowResize(){

 

    this.camera.aspect = this.container.clientWidth / this.container.clientHeight;

    this.camera.updateProjectionMatrix();

    this.renderer.setSize( this.container.clientWidth, this.container.clientHeight );

 

  }

}

 

class CreateParticles {

   

    constructor( scene, font, particleImg, camera, renderer ) {

   

        this.scene = scene;

        this.font = font;

        this.particleImg = particleImg;

        this.camera = camera;

        this.renderer = renderer;

       

        this.raycaster = new THREE.Raycaster();

        this.mouse = new THREE.Vector2(-200, 200);

       

        this.colorChange = new THREE.Color();

 

        this.buttom = false;

 

        this.data = {

 

            text: 'Bryanna\n Mcghee',

            amount: 1500,

            particleSize: 1,

            particleColor: 0xffffff,

            textSize: 10,

            area: 200,

            ease: .05,

        }

 

        this.setup();

        this.bindEvents();

 

    }

 

    setup(){

 

        const geometry = new THREE.PlaneGeometry( this.visibleWidthAtZDepth( 100, this.camera ), this.visibleHeightAtZDepth( 100, this.camera ));

        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00, transparent: true } );

        this.planeArea = new THREE.Mesh( geometry, material );

        this.planeArea.visible = false;

        this.createText();

 

    }

 

    bindEvents() {

 

        document.addEventListener( 'mousedown', this.onMouseDown.bind( this ));

        document.addEventListener( 'mousemove', this.onMouseMove.bind( this ));

        document.addEventListener( 'mouseup', this.onMouseUp.bind( this ));

       

    }

 

    onMouseDown(){

       

        this.mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;

        this.mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

 

        const vector = new THREE.Vector3( this.mouse.x, this.mouse.y, 0.5);

        vector.unproject( this.camera );

        const dir = vector.sub( this.camera.position ).normalize();

        const distance = - this.camera.position.z / dir.z;

        this.currenPosition = this.camera.position.clone().add( dir.multiplyScalar( distance ) );

       

        const pos = this.particles.geometry.attributes.position;

        this.buttom = true;

        this.data.ease = .01;

       

    }

 

    onMouseUp(){

 

        this.buttom = false;

        this.data.ease = .05;

    }

 

    onMouseMove( ) {

 

        this.mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;

        this.mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

 

    }

 

    render( level ){

 

        const time = ((.001 * performance.now())%12)/12;

        const zigzagTime = (1 + (Math.sin( time * 2 * Math.PI )))/6;

 

        this.raycaster.setFromCamera( this.mouse, this.camera );

 

        const intersects = this.raycaster.intersectObject( this.planeArea );

 

        if ( intersects.length > 0 ) {

 

            const pos = this.particles.geometry.attributes.position;

            const copy = this.geometryCopy.attributes.position;

            const coulors = this.particles.geometry.attributes.customColor;

            const size = this.particles.geometry.attributes.size;

 

            const mx = intersects[ 0 ].point.x;

            const my = intersects[ 0 ].point.y;

            const mz = intersects[ 0 ].point.z;

 

            for ( var i = 0, l = pos.count; i < l; i++) {

 

                const initX = copy.getX(i);

                const initY = copy.getY(i);

                const initZ = copy.getZ(i);

 

                let px = pos.getX(i);

                let py = pos.getY(i);

                let pz = pos.getZ(i);

 

                this.colorChange.setHSL( .5, 1 , 1 )

                coulors.setXYZ( i, this.colorChange.r, this.colorChange.g, this.colorChange.b )

                coulors.needsUpdate = true;

 

                size.array[ i ]  = this.data.particleSize;

                size.needsUpdate = true;

 

                let dx = mx - px;

                let dy = my - py;

                const dz = mz - pz;

 

                const mouseDistance = this.distance( mx, my, px, py )

                let d = ( dx = mx - px ) * dx + ( dy = my - py ) * dy;

                const f = - this.data.area/d;

 

                if( this.buttom ){

 

                    const t = Math.atan2( dy, dx );

                    px -= f * Math.cos( t );

                    py -= f * Math.sin( t );

 

                    this.colorChange.setHSL( .5 + zigzagTime, 1.0 , .5 )

                    coulors.setXYZ( i, this.colorChange.r, this.colorChange.g, this.colorChange.b )

                    coulors.needsUpdate = true;

 

                    if ((px > (initX + 70)) || ( px < (initX - 70)) || (py > (initY + 70) || ( py < (initY - 70)))){

 

                        this.colorChange.setHSL( .15, 1.0 , .5 )

                        coulors.setXYZ( i, this.colorChange.r, this.colorChange.g, this.colorChange.b )

                        coulors.needsUpdate = true;

 

                    }

 

                }else{

               

                    if( mouseDistance < this.data.area ){

 

                        if(i%5==0){

 

                            const t = Math.atan2( dy, dx );

                            px -= .03 * Math.cos( t );

                            py -= .03 * Math.sin( t );

 

                            this.colorChange.setHSL( .15 , 1.0 , .5 )

                            coulors.setXYZ( i, this.colorChange.r, this.colorChange.g, this.colorChange.b )

                            coulors.needsUpdate = true;

 

                            size.array[ i ]  =  this.data.particleSize /1.2;

                            size.needsUpdate = true;

 

                        }else{

 

                            const t = Math.atan2( dy, dx );

                            px += f * Math.cos( t );

                            py += f * Math.sin( t );

 

                            pos.setXYZ( i, px, py, pz );

                            pos.needsUpdate = true;

 

                            size.array[ i ]  = this.data.particleSize * 1.3 ;

                            size.needsUpdate = true;

                        }

 

                        if ((px > (initX + 10)) || ( px < (initX - 10)) || (py > (initY + 10) || ( py < (initY - 10)))){

 

                            this.colorChange.setHSL( .15, 1.0 , .5 )

                            coulors.setXYZ( i, this.colorChange.r, this.colorChange.g, this.colorChange.b )

                            coulors.needsUpdate = true;

 

                            size.array[ i ]  = this.data.particleSize /1.8;

                            size.needsUpdate = true;

 

                        }

                    }

 

                }

 

                px += ( initX  - px ) * this.data.ease;

                py += ( initY  - py ) * this.data.ease;

                pz += ( initZ  - pz ) * this.data.ease;

 

                pos.setXYZ( i, px, py, pz );

                pos.needsUpdate = true;

 

            }

        }

    }

 

    createText(){

 

        let thePoints = [];

 

        let shapes = this.font.generateShapes( this.data.text , this.data.textSize  );

        let geometry = new THREE.ShapeGeometry( shapes );

        geometry.computeBoundingBox();

   

        const xMid = - 0.5 * ( geometry.boundingBox.max.x - geometry.boundingBox.min.x );

        const yMid =  (geometry.boundingBox.max.y - geometry.boundingBox.min.y)/2.85;

 

        geometry.center();

 

        let holeShapes = [];

 

        for ( let q = 0; q < shapes.length; q ++ ) {

 

            let shape = shapes[ q ];

 

            if ( shape.holes && shape.holes.length > 0 ) {

 

                for ( let  j = 0; j < shape.holes.length; j ++ ) {

 

                    let  hole = shape.holes[ j ];

                    holeShapes.push( hole );

                }

            }

 

        }

        shapes.push.apply( shapes, holeShapes );

 

        let colors = [];

        let sizes = [];

                   

        for ( let  x = 0; x < shapes.length; x ++ ) {

 

            let shape = shapes[ x ];

 

            const amountPoints = ( shape.type == 'Path') ? this.data.amount/2 : this.data.amount;

 

            let points = shape.getSpacedPoints( amountPoints ) ;

 

            points.forEach( ( element, z ) => {

                       

                const a = new THREE.Vector3( element.x, element.y, 0 );

                thePoints.push( a );

                colors.push( this.colorChange.r, this.colorChange.g, this.colorChange.b);

                sizes.push( 1 )

 

                });

        }

 

        let geoParticles = new THREE.BufferGeometry().setFromPoints( thePoints );

        geoParticles.translate( xMid, yMid, 0 );

               

        geoParticles.setAttribute( 'customColor', new THREE.Float32BufferAttribute( colors, 1 ) );

        geoParticles.setAttribute( 'size', new THREE.Float32BufferAttribute( sizes, 1) );

 

        const material = new THREE.ShaderMaterial( {

 

            uniforms: {

                color: { value: new THREE.Color( 0xffffff ) },

                pointTexture: { value: this.particleImg }

            },

            vertexShader: document.getElementById( 'vertexshader' ).textContent,

            fragmentShader: document.getElementById( 'fragmentshader' ).textContent,

 

            blending: THREE.AdditiveBlending,

            depthTest: false,

            transparent: true,

        } );

 

        this.particles = new THREE.Points( geoParticles, material );

        this.scene.add( this.particles );

 

        this.geometryCopy = new THREE.BufferGeometry();

        this.geometryCopy.copy( this.particles.geometry );

       

    }

 

    visibleHeightAtZDepth ( depth, camera ) {

 

      const cameraOffset = camera.position.z;

      if ( depth < cameraOffset ) depth -= cameraOffset;

      else depth += cameraOffset;

 

      const vFOV = camera.fov * Math.PI / 180;

 

      return 2 * Math.tan( vFOV / 2 ) * Math.abs( depth );

    }

 

    visibleWidthAtZDepth( depth, camera ) {

 

      const height = this.visibleHeightAtZDepth( depth, camera );

      return height * camera.aspect;

 

    }

 

    distance (x1, y1, x2, y2){

       

        return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));

    }

}