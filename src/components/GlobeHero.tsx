'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, useTexture } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function Globe() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshPhongMaterial
          color="#1e40af"
          emissive="#0369a1"
          shininess={100}
          wireframe={false}
        />
      </mesh>
      
      {/* Glowing effect */}
      <mesh>
        <sphereGeometry args={[2.05, 64, 64]} />
        <meshBasicMaterial
          color="#0ea5e9"
          transparent
          opacity={0.1}
        />
      </mesh>

      {/* Grid lines */}
      <lineSegments>
        <bufferGeometry />
        <lineBasicMaterial color="#0369a1" opacity={0.2} transparent />
      </lineSegments>
    </group>
  );
}

function GlobeScene() {
  const { camera } = useThree();
  
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, -10]} intensity={0.3} />
      <Globe />
      <OrbitControls
        autoRotate
        autoRotateSpeed={2}
        enableZoom={false}
        enablePan={false}
      />
    </>
  );
}

export function GlobeHero() {
  return (
    <div className="relative w-full h-96 md:h-screen rounded-lg overflow-hidden bg-gradient-to-b from-background to-background/50 flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <GlobeScene />
      </Canvas>
      
      {/* Overlay text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white/80 mb-4">
            Global Perspective
          </h2>
          <p className="text-white/60">
            Building AI solutions across the world
          </p>
        </div>
      </div>
    </div>
  );
}
