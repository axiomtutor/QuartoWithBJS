import './style.css'
import { ArcRotateCamera, Color3, Engine, MeshBuilder, Scene, StandardMaterial, Vector3 } from '@babylonjs/core';

export const index = function() {

// Get and style canvas element from the HTML

const canvas = document.querySelector<HTMLCanvasElement>('#bjscanvas');
if (canvas == null) { throw new Error("canvas id not found. "); }
canvas.style.height = "500px";
canvas.style.width = "500px";

// Set up BJS components

const engine = new Engine(canvas, true);
const scene = new Scene(engine);
const camera = new ArcRotateCamera("cam", 0,0,1, Vector3.Zero(), scene);
camera.position = new Vector3(3, 3, 3);
camera.cameraDirection = Vector3.Zero();
camera.attachControl(canvas, true);

// Draw a red sphere at (1,0,0).

const rsphere = MeshBuilder.CreateSphere("red sphere", {diameter: .3}, scene);
rsphere.position.set(1,0,0);

const rmat = new StandardMaterial("rmat", scene);
rmat.emissiveColor = new Color3(1,0,0);

rsphere.material = rmat;

// Draw the other spheres.

const gsphere = MeshBuilder.CreateSphere("green sphere", {diameter: .3}, scene);
gsphere.position.set(0,1,0);

const gmat = new StandardMaterial("gmat", scene);
gmat.emissiveColor = new Color3(0,1,0);

gsphere.material = gmat;

const bsphere = MeshBuilder.CreateSphere("blue sphere", {diameter: .3}, scene);
bsphere.position.set(0,0,1);

const bmat = new StandardMaterial("bmat", scene);
bmat.emissiveColor = new Color3(0,0,1);

bsphere.material = bmat;

const wsphere = MeshBuilder.CreateSphere("white sphere", {diameter: .3}, scene);
wsphere.position.set(0,0,0);

const wmat = new StandardMaterial("wmat", scene);
wmat.emissiveColor = new Color3(1,1,1);

wsphere.material = wmat;

// Start the render loop which makes the app animated and interactive.

engine.runRenderLoop( () => {
  scene.render();
})

};