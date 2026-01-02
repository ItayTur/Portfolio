import { Suspense, Component, ErrorInfo, ReactNode, useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { StaticImageData } from "next/image";
import { Texture } from "three";
import Loader from "./Loader";

// Helper function to validate texture and prevent NaN values
const isValidTexture = (tex: Texture | null | undefined): boolean => {
  if (!tex) return false;
  if (!tex.image) return false;

  try {
    const img = tex.image as HTMLImageElement | HTMLCanvasElement | ImageBitmap;

    // Try to get dimensions - handle different image types
    let width = 0;
    let height = 0;

    if (img instanceof HTMLImageElement) {
      width = img.width || img.naturalWidth || 0;
      height = img.height || img.naturalHeight || 0;
    } else if (img instanceof HTMLCanvasElement) {
      width = img.width || 0;
      height = img.height || 0;
    } else if ('width' in img && 'height' in img) {
      width = img.width as number;
      height = img.height as number;
    }

    // Check for valid dimensions and prevent NaN
    if (width === 0 || height === 0) return false;
    if (isNaN(width) || isNaN(height)) return false;
    if (!isFinite(width) || !isFinite(height)) return false;

    return true;
  } catch (err) {
    // If we can't validate, assume invalid to be safe
    return false;
  }
};

// Ball component with texture validation
const Ball = ({ imgUrl }: { imgUrl: StaticImageData }) => {
  // useTexture will suspend if loading, Suspense will handle it
  const textures = useTexture([imgUrl.src]);
  const decal = textures[0];

  // Validate texture to prevent NaN geometry errors
  const validTexture = isValidTexture(decal) ? decal : null;
  const showDecal = !!validTexture;

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={1}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        {showDecal && validTexture ? (
          <>
            <meshStandardMaterial
              color="#fff8eb"
              polygonOffset
              polygonOffsetFactor={-5}
              flatShading
            />
            <Decal
              position={[0, 0, 1]}
              rotation={[2 * Math.PI, 0, 6.25]}
              scale={1}
              map={validTexture}
              flatShading
            />
          </>
        ) : (
          // Fallback: Show a colored sphere when texture validation fails
          <meshStandardMaterial
            color="#fff8eb"
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
        )}
      </mesh>
    </Float>
  );
};

// Error boundary component for Ball rendering errors
class BallErrorBoundary extends Component<
  { children: ReactNode; icon: StaticImageData },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: ReactNode; icon: StaticImageData }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Ball rendering error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI when error occurs
      return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={1}>
          <ambientLight intensity={0.25} />
          <directionalLight position={[0, 0, 0.05]} />
          <mesh castShadow receiveShadow scale={2.75}>
            <icosahedronGeometry args={[1, 1]} />
            <meshStandardMaterial
              color="#915EFF"
              emissive="#915EFF"
              emissiveIntensity={0.3}
            />
          </mesh>
        </Float>
      );
    }

    return this.props.children;
  }
}

// Hook to check WebGL support and context
const useWebGLSupport = () => {
  if (typeof window === "undefined") return { supported: true, isMobile: false };

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("webgl2");
    return { supported: !!gl, isMobile };
  } catch (e) {
    return { supported: false, isMobile };
  }
};


const BallCanvas = ({ icon }: { icon: StaticImageData }) => {
  const { supported: webglSupported, isMobile } = useWebGLSupport();

  // Adjust DPR for mobile devices to improve performance
  const dpr: [number, number] = isMobile ? [1, 1.5] : [1, 2];

  if (!webglSupported) {
    // Fallback for devices without WebGL support
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-[#915EFF] opacity-50 flex items-center justify-center">
          <span className="text-white text-xs">?</span>
        </div>
      </div>
    );
  }

  return (
    <Canvas
      frameloop="demand"
      dpr={dpr}
      gl={{
        preserveDrawingBuffer: true,
        alpha: true,
        antialias: !isMobile, // Disable antialiasing on mobile for performance
        powerPreference: isMobile ? "low-power" : "high-performance",
      }}
    >
      <Suspense fallback={<Loader />}>
        <BallErrorBoundary icon={icon}>
          <Ball imgUrl={icon} />
        </BallErrorBoundary>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
