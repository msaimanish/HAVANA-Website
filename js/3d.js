//Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// To allow for importing the .gltf file
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

//Create a Three.JS Scene
const scene = new THREE.Scene();
//Create a new camera with positions and angles
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//Keep track of the mouse position, so we can make the robot interact
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

//Keep the 3D object on a global variable so we can access it later
let object;

//OrbitControls allow the camera to move around the scene
let controls;

//Set which object to render
let objToRender = "cube_robot";

//Instantiate a loader for the .gltf file
const loader = new GLTFLoader();

//Load the file
loader.load(
  `models/${objToRender}/scene.gltf`,
  function (gltf) {
    //If the file is loaded, add it to the scene
    object = gltf.scene;
    scene.add(object);

    // Adjust the size and position of the robot model
    object.scale.set(25, 25, 25); // Change scale if the model is too big/small
    object.position.set(0, -10, 0); // Adjust the position for better alignment
    // object.rotation.y = Math.PI / 4; // Rotate by 45 degrees (or any value you want)
  },
  function (xhr) {
    //While it is loading, log the progress
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  function (error) {
    //If there is an error, log it
    console.error(error);
  }
);



//Instantiate a new renderer and set its size
const renderer = new THREE.WebGLRenderer({ alpha: true }); //Alpha: true allows for the transparent background
renderer.setSize(window.innerWidth, window.innerHeight);

//Add the renderer to the DOM
document.getElementById("container3D").appendChild(renderer.domElement);

//Set how far the camera will be from the 3D model
camera.position.z = 50; // Adjust camera distance for the robot

//Add lights to the scene, so we can actually see the 3D model
const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
topLight.position.set(500, 500, 500); // Top-left-ish
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333, 2); // Increase intensity for better lighting
scene.add(ambientLight);

//This adds controls to the camera, so we can rotate/zoom it with the mouse
controls = new OrbitControls(camera, renderer.domElement);

//Render the scene
function animate() {
  requestAnimationFrame(animate);
  

  
  renderer.render(scene, camera);
}

//Add a listener to the window, so we can resize the window and the camera
window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

//Add mouse position listener, so we can make the robot interact
document.onmousemove = (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  if (object) {
    // Update rotation based on mouse position
    object.rotation.y = mouseX / window.innerWidth * 2 - 1;
    object.rotation.x = mouseY / window.innerHeight * 2 - 1;
  }
};

//Start the 3D rendering
animate();


// Remove scroll listener or ensure it doesn't affect the camera or object
document.removeEventListener('wheel', null);

// OR, if a scroll listener exists but must be kept for another purpose:
document.addEventListener('wheel', (e) => {
  // No changes to the camera or object on scroll
});

// This adds controls to the camera, so we can rotate/zoom it with the mouse
controls = new OrbitControls(camera, renderer.domElement);

// Disable zooming with scroll or trackpad gestures
controls.enableZoom = false;

// Optional: Adjust other controls settings if needed
controls.enableRotate = true; // Allow rotation
controls.enablePan = false; // Disable panning
