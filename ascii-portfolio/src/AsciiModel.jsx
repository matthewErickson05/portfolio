import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { AsciiEffect } from 'three/addons/effects/AsciiEffect.js';
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader.js";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default function AsciiModel() {
  const containerRef = useRef();
  useEffect(() => {
    const scene = new THREE.Scene();
    const containerWidth = containerRef.current.offsetWidth;
    const containerHeight = containerRef.current.offsetHeight;

    const camera = new THREE.PerspectiveCamera(50, containerWidth / containerHeight, 1, 1000);
    camera.position.y = 50;
    camera.position.z = 550;

    // Remove canvas reference - ASCII effect creates its own DOM element
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
    });
    
    renderer.setSize(containerWidth, containerHeight);
    renderer.outputEncoding = THREE.sRGBEncoding;
    
    const effect = new AsciiEffect(renderer, " .'`^,:;Il!i>~+_?][}{1)(|8%B@$", { invert: true });
    effect.setSize(containerWidth, containerHeight);
    effect.domElement.style.color = 'lightgreen';

    containerRef.current.appendChild(effect.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    ambientLight.castShadow = true;
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.castShadow = true;
    spotLight.position.set(0, 64, 32);
    scene.add(spotLight);


    let model; 
    const loader = new PLYLoader();
    loader.load("/trynewMed_resHead.ply", (geometry) => {
      //geometry.computeVertexNormals();

      // Center the geometry
      geometry.computeBoundingBox();
      const center = new THREE.Vector3();
      geometry.boundingBox.getCenter(center);
      geometry.translate(-center.x, -center.y, -center.z);

      console.log(geometry.attributes);

      const material = new THREE.MeshStandardMaterial({ vertexColors: true });
      model = new THREE.Mesh(geometry, material); 
      model.rotation.x += 149;
      model.rotation.z += 135;

      scene.add(model);
    });

  const controls = new OrbitControls(camera, effect.domElement);

  // Limit zoom and panning if desired
  controls.enableZoom = false;
  controls.enablePan = false;


    const animate = () => {
      if (model) {
        model.rotation.z += 0.01;
      }
      controls.update();
      effect.render(scene, camera);
      window.requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
    const width = containerRef.current.offsetWidth;
    const height = containerRef.current.offsetHeight;
    
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    
    renderer.setSize(width, height);
    effect.setSize(width, height);
  };
    window.addEventListener('resize', handleResize);

    //Clean up function to remove the ASCII effect when component unmounts
    return () => {
        window.addEventListener('resize', handleResize);
      if (effect.domElement.parentNode) {
        effect.domElement.parentNode.removeChild(effect.domElement);
      }
    };
  }, []);




  return <div ref={containerRef} className="ascii-container" style={{
  width: "65vw",  // or whatever size you want
  height: '90vh',
  position: 'relative'  // important for positioning
}} />;
}
