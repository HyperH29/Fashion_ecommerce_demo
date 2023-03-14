import * as Three from "three";
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
const Computers = ({ isMobile }) => {
  // This is where we port are object
  const computer = useGLTF("./desktop_pc/scene.gltf");
  // Here we position the light and mesh to the scene
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor={"black"} />
      <pointLight instensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      {/*We can play around with the scale and the position of the object here.*/}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.75}
        position={isMobile ? [0, -3, -1.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  // This is the user mobile validation hook
  // It will check if the media query matches

  // We use a useEffect hook to add a listener to the media query then set the isMobile state to true if the media query matches
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 764px)");
    setIsMobile(mediaQuery.matches);

    // If the event listener matches the media query then we set the isMobile state to true
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };
    // We add the event listener to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    // We return a function to remove the event listener
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    // Here we set the camera and it props.
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
