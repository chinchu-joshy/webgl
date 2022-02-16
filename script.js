import vShader from "./Shader/vertexShader.glsl.js";
import fShader from "./Shader/fragmentShader.glsl.js";

let camera, scene, renderer,uniforms;
init();
animate();

const controls = new THREE.OrbitControls(camera, renderer.domElement);
/* -------------------------------- controls -------------------------------- */

function init() {
  /* -------------------------------- geometry -------------------------------- */
  scene = new THREE.Scene();
   uniforms={
    u_time:{type:'f',value:0.0}
  }
  const geometry = new THREE.PlaneGeometry(40,40,16,16);
  const material = new THREE.ShaderMaterial({
    vertexShader: vShader,
    fragmentShader: fShader,
    wireframe:true,
    uniforms
  });
  const plane = new THREE.Mesh(geometry, material);
  scene.add(plane);

  /* ---------------------------------- scene --------------------------------- */

  /* --------------------------------- camera --------------------------------- */
  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(0, 0, 100);
  camera.lookAt(0, 0, 0);
  /* --------------------------------- render --------------------------------- */
  renderer = new THREE.WebGL1Renderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  renderer.setPixelRatio(window.devicePixelRatio);
  document.body.appendChild(renderer.domElement);
}

/* --------------------------------- animate -------------------------------- */

function animate() {
  const clock=new THREE.Clock()
  uniforms.u_time.value=clock.getElapsedTime()
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
