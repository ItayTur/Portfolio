import { useGLTF } from "@react-three/drei";
import React from "react";

const Computers = () => {
  const computer = useGLTF("/desktop_pc/scene.gltf");
  return <div>Computers</div>;
};

export default Computers;
