import { useEffect, useState } from 'react';
import './App.css';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
      import { Box3, Vector3 } from 'three';

function App() {
  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(50 , window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.y = 50;
    camera.position.z = 500;
    


    const canvas = document.getElementById('myThreeJsCanvas');
    const renderer = new THREE.WebGLRenderer({
      canvas, 
      antialias: true,
      });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    ambientLight.castShadow = true;
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.castShadow = true;
    spotLight.position.set(0,64,32);
    scene.add(spotLight);

    let model;
    const loader = new GLTFLoader();
      loader.load('/head_smaller.glb', (gltf) => {
      model = gltf.scene;
      // Compute bounding box
      const box = new Box3().setFromObject(model);
      const center = new Vector3();
      box.getCenter(center);

      // Re-center the model so it rotates around itself
      // model.position.sub(center);
    
      model.traverse((child) => {
      if (child.isMesh) {
        child.geometry.computeBoundingBox();
        const center = new THREE.Vector3();
        child.geometry.boundingBox.getCenter(center);
        child.geometry.translate(-center.x, -center.y, -center.z);
      }
      });

      scene.add(model);
      });
    

    const animate = () => {
      if (model) {
        model.rotation.y += 0.01;
      }
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div>
      <canvas id="myThreeJsCanvas"></canvas>
    </div>
  )
}

export default App
