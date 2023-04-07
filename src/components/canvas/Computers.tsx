import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

const Computers = ({ isMobile = false }) => {
  const gltf = useLoader(GLTFLoader, "/desktop_pc/scene.gltf");

  return (
    <group>
      <primitive
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
        object={gltf.scene}
      />
    </group>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas>
      <Computers />
    </Canvas>
  );
};

export default ComputersCanvas;
