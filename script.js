console.log('three')
console.log(THREE)

const sizes = {
    width: 800,
    height: 600
}

// const canvas = document.getElementById('webgl');
const canvas = document.querySelector('.webgl');

const scene = new THREE.Scene()

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
const cubeMaterial = new THREE.MeshBasicMaterial({
    color: '#ff0000'
})
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial)
scene.add(cubeMesh)



const camera = new THREE.PerspectiveCamera(50, sizes.width/sizes.height)
camera.position.z =3
camera.position.x = 1
scene.add(camera)

console.log(canvas)

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)