import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader, Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, Preload } from "@react-three/drei";

const Computers = ({ isMobile = false }) => {
  const gltf = useLoader(GLTFLoader, "/desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        scale={isMobile ? 0.7 : 0.6}
        position={[0, -2.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
        object={gltf.scene}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={"loading..."}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;
