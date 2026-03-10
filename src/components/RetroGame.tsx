"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Wireframe } from "@react-three/drei";
import * as THREE from "three";

function RotatingShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);
  const [clicked, setClick] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * (hovered ? 0.5 : 0.2);
      meshRef.current.rotation.y += delta * (hovered ? 0.8 : 0.3);
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh
        ref={meshRef}
        scale={clicked ? 1.5 : 1}
        onClick={() => setClick(!clicked)}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHover(true);
        }}
        onPointerOut={(e) => setHover(false)}
      >
        <torusKnotGeometry args={[10, 3, 100, 16]} />
        <meshBasicMaterial
          color={hovered ? "#00FF41" : "#004411"}
          wireframe={true}
          transparent={true}
          opacity={hovered ? 1 : 0.6}
        />
      </mesh>
    </Float>
  );
}

export default function RetroGame() {
  return (
    <section className="relative w-full h-[400px] border-y border-phosphor-green border-opacity-20 bg-crt-dark bg-opacity-50 overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 z-0 pointer-events-none radial-gradient-overlay" />
      <div className="absolute top-4 left-4 font-mono text-xs text-phosphor-green opacity-50 z-10">
        <span className="animate-pulse">{"[SYSTEM: INITIATING RENDER...]"}</span>
      </div>
      
      <div className="absolute bottom-4 right-4 font-mono text-[10px] text-terminal-muted z-10 flex flex-col items-end">
        <span>X: 0x48 Y: 0x59</span>
        <span>WIREFRAME_READY=TRUE</span>
      </div>

      <div className="w-full h-full z-10 cursor-crosshair">
        <Canvas camera={{ position: [0, 0, 35], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <RotatingShape />
        </Canvas>
      </div>
      
      {/* Overlay controls hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[9px] text-phosphor-green glow-green-sm z-20 pointer-events-none opacity-80 uppercase tracking-widest text-center" style={{ textShadow: "0 0 10px #00ff41" }}>
        {"< CLICK TO ENLARGE | HOVER TO ACCELERATE >"}
      </div>
    </section>
  );
}
