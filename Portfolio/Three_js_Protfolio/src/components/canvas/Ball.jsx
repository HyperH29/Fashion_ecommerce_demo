import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

// Play with the values here:

const CustomFrameRate = ({ fps = 30 }) => {
  const { set } = useThree();
  const previousTimeRef = useRef(0);
  useFrame((state, delta) => {
    const currentTime = state.clock.elapsedTime;
    if (currentTime - previousTimeRef.current > 1 / fps) {
      previousTimeRef.current = currentTime;
      set({ frameloop: "always" });
      state.gl.render(state.scene, state.camera);
      set({ frameloop: "demand" });
    }
  });
  return null;
};
const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const meshRef = useRef();

  return (
    <Float speed={10} rotationIntensity={0.2} floatIntensity={0.2}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh ref={meshRef} scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={"#fff8eb"}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <CustomFrameRate fps={30} />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};
export default BallCanvas;
