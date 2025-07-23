import { useEffect, useState } from 'react';
import './App.css';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Box3, Vector3 } from 'three';
import { AsciiEffect } from 'three/addons/effects/AsciiEffect.js';
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader.js";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

function App() {
  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.y = 50;
    camera.position.z = 550;

    // Remove canvas reference - ASCII effect creates its own DOM element
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputEncoding = THREE.sRGBEncoding;
    
    const effect = new AsciiEffect(renderer, " .'`^,:;Il!i>~+_?][}{1)(|8%B@$", { invert: true });
    effect.setSize(window.innerWidth, window.innerHeight);
    effect.domElement.style.color = 'lightgreen';
    effect.domElement.style.backgroundColor = 'black';
    effect.domElement.style.fontSize = '4px';
    effect.domElement.style.lineHeight = '4px';

    document.body.appendChild(effect.domElement);

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

    // const loader = new GLTFLoader();
    // loader.load('/lowagain_res_head.glb', (gltf) => {
    //   model = gltf.scene;
    //   // Compute bounding box
    //   const box = new Box3().setFromObject(model);
    //   const center = new Vector3();
    //   box.getCenter(center);

    //   // Re-center the model so it rotates around itself
    //   // model.position.sub(center);
    
    //   model.traverse((child) => {
    //     if (child.isMesh) {
    //       child.geometry.computeBoundingBox();
    //       const center = new THREE.Vector3();
    //       child.geometry.boundingBox.getCenter(center);
    //       child.geometry.translate(-center.x, -center.y, -center.z);
    //     }
    //   });

    //   scene.add(model);
    // });

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

    //Clean up function to remove the ASCII effect when component unmounts
    return () => {
      if (effect.domElement.parentNode) {
        effect.domElement.parentNode.removeChild(effect.domElement);
      }
    };
  }, []);

  return (
    <div>
      {/* Canvas removed - ASCII effect creates its own DOM element */}
    </div>
  );
}

export default App;