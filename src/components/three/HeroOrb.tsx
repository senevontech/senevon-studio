"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Stars } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function Orb() {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.2;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25) * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.8}>
      <Sphere ref={ref} args={[1.25, 96, 96]} position={[0, 0.1, 0]}>
        <MeshDistortMaterial
          color="#8f9dff"
          distort={0.38}
          speed={2.2}
          roughness={0.06}
          metalness={0.72}
          emissive="#3f44ab"
          emissiveIntensity={0.8}
        />
      </Sphere>
    </Float>
  );
}

export function HeroOrb() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 4], fov: 48 }} gl={{ alpha: true }}>
        <fog attach="fog" args={["#0d0d14", 4, 10]} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 2, 3]} intensity={1.2} color="#95a8ff" />
        <pointLight position={[-2, -2, 1]} intensity={1} color="#8f9dff" />
        <Stars radius={30} depth={24} count={1200} factor={1.4} fade speed={0.6} />
        <Orb />
      </Canvas>
    </div>
  );
}
