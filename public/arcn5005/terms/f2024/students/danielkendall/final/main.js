document.addEventListener('DOMContentLoaded', () => {
    const map = new maplibregl.Map({
        container: 'maplibre',
        style: 'https://demotiles.maplibre.org/style.json',
        center: [0, 0],
        zoom: 2
    });

    const canvas = document.getElementById('threejs');
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.offsetWidth / canvas.offsetHeight, 0.1, 1000);
    camera.position.z = 5;
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    function resizeCanvas() {
        const width = canvas.offsetWidth;
        const height = canvas.offsetHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    
    animate();
});