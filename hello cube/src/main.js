import * as THREE from 'three';

const scene = new THREE.Scene();
const group = new THREE.Group();

const geometry = new THREE.BoxGeometry(2,2,2);
const material = new THREE.MeshBasicMaterial({color : 0x00ff00})
const mesh = new THREE.Mesh(geometry,material);
mesh.position.y = 1;

const geometry2 = new THREE.BoxGeometry(1,1,1);
const material2 = new THREE.MeshBasicMaterial({color : "white"});
const mesh2 = new THREE.Mesh(geometry2,material2);

const Box3 = new THREE.BoxGeometry(1,1,1);
const material3 = new THREE.MeshBasicMaterial({color : "green"});
const mesh3 = new THREE.Mesh(geometry2,material2);

mesh2.position.y = 3;
mesh3.position.y = -2;

group.add(mesh,mesh2,mesh3)
group.position.x = 1
scene.add(group)

const axesHelper = new THREE.AxesHelper(6);
scene.add(axesHelper);

// camera
const aspect = {
    width : window.innerWidth,
    height : window.innerHeight
};
const camera = new THREE.PerspectiveCamera(100,aspect.width / aspect.height,);
// 3d => x / y / z => x -- y || z deep
camera.position.set(1,1,4);
scene.add(camera);


const canvas = document.getElementById('canvas');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(aspect.width, aspect.height);


const clock = new THREE.Clock();
function animate (){
    const elapsedTime = clock.getElapsedTime();
    mesh.position.x = Math.sin(elapsedTime);
    mesh.position.y = Math.acos(elapsedTime);


    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
}
animate()
// =========================