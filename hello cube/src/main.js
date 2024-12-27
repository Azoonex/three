import * as THREE from 'three';

const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color : 0x00ff00})
const mesh = new THREE.Mesh(geometry,material);
mesh.position.set(1,1,1)
mesh.scale.set(3,1,1)
mesh.rotation.set(1,5,1)
scene.add(mesh)

// camera
const aspect = {
    width : window.innerWidth,
    height : window.innerHeight
}
const camera = new THREE.PerspectiveCamera(75,aspect.width / aspect.height,);
// 3d => x / y / z => x -- y || z deep
camera.position.set(1,1.70,4)
scene.add(camera);


const canvas = document.getElementById('canvas');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(aspect.width, aspect.height);
renderer.render(scene, camera);

// =========================
