'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function FloatingCube({ position, rotation, color }: any) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.008;
      meshRef.current.position.y += Math.sin(Date.now() * 0.0005) * 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation}>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhongMaterial color={color} emissive={color} emissiveIntensity={0.3} wireframe={false} />
    </mesh>
  );
}

function FloatingOctahedron({ position, color }: any) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.z += 0.007;
      meshRef.current.position.y += Math.cos(Date.now() * 0.0003) * 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <octahedronGeometry args={[0.8, 0]} />
      <meshPhongMaterial color={color} emissive={color} emissiveIntensity={0.2} wireframe={false} />
    </mesh>
  );
}

function FloatingTetrahedron({ position, color }: any) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.006;
      meshRef.current.rotation.y += 0.004;
      meshRef.current.position.y += Math.sin(Date.now() * 0.0004) * 0.015;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <tetrahedronGeometry args={[0.8, 0]} />
      <meshPhongMaterial color={color} emissive={color} emissiveIntensity={0.25} wireframe={false} />
    </mesh>
  );
}

function GeometryScene() {
  return (
    <>
      <ambientLight intensity={0.7} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0ea5e9" />
      
      {/* Floating geometries */}
      <FloatingCube position={[-3, 0, 0]} rotation={[0.5, 0.5, 0]} color="#ec4899" />
      <FloatingOctahedron position={[0, 0, 0]} color="#0ea5e9" />
      <FloatingTetrahedron position={[3, 0, 0]} color="#10b981" />
      
      <FloatingCube position={[-2, -2, -2]} rotation={[0.2, 0.3, 0]} color="#f59e0b" />
      <FloatingOctahedron position={[2, 2, -2]} color="#8b5cf6" />
      <FloatingTetrahedron position={[0, -3, 0]} color="#06b6d4" />
      
      <OrbitControls
        autoRotate
        autoRotateSpeed={1}
        enableZoom={true}
        enablePan={false}
      />
    </>
  );
}

export function FloatingGeometries() {
  return (
    <div className="relative w-full h-96 md:h-screen rounded-lg overflow-hidden bg-gradient-to-b from-background via-background/80 to-background">
      <Canvas camera={{ position: [0, 0, 10] }} dpr={[1, 2]}>
        <color attach="background" args={['#0f172a']} />
        <GeometryScene />
      </Canvas>
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white/80 mb-4">
            Geometric Mind
          </h2>
          <p className="text-white/60">
            Explore possibilities in 3D space
          </p>
        </div>
      </div>
    </div>
  );
}
