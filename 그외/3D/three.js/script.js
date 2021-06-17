var scene, camera, renderer;

scene = new THREE.Scene();
scene.background = new THREE.Color(0x5f5f0f);

camera = new THREE.PerspectiveCamera(75, 2, 3, 5);
camera.position.set(1,2,0.1);

renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
/*
var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.update();*/

var abint = new THREE.AmbientLight( 0x404040)
scene.add(abint)
var loader = new THREE.GLTFLoader();
loader.load( './desk.gltf', function ( gltf ) {
    gltf.scene.scale.set(1.5,1.5,1.5);
    scene.add( gltf.scene );
});

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate()