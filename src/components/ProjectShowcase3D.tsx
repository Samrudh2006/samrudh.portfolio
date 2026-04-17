'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Plane, Text } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';

function ProjectCard({ position, title, color }: any) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = hovered ? 0.3 : 0;
      groupRef.current.position.z = hovered ? 2 : 0;
    }
  });

  return (
    <group
      ref={groupRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Card background */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 3, 0.2]} />
        <meshPhongMaterial color={color} emissive={color} emissiveIntensity={0.4} />
      </mesh>

      {/* Card shine effect */}
      <mesh position={[0, 0, 0.15]}>
        <boxGeometry args={[1.95, 2.95, 0.1]} />
        <meshPhongMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.2} transparent opacity={0.3} />
      </mesh>

      {/* Text on card */}
      <Text
        position={[0, 0, 0.2]}
        fontSize={0.3}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {title}
      </Text>
    </group>
  );
}

function ProjectShowcaseScene() {
  return (
    <>
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, 10]} intensity={0.6} color="#0ea5e9" />

      <ProjectCard position={[-4, 1, 0]} title="AI Automation" color="#ec4899" />
      <ProjectCard position={[0, 1, 0]} title="Voice Agents" color="#0ea5e9" />
      <ProjectCard position={[4, 1, 0]} title="Data Science" color="#10b981" />

      <ProjectCard position={[-4, -2, 0]} title="Web Dev" color="#f59e0b" />
      <ProjectCard position={[0, -2, 0]} title="Full Stack" color="#8b5cf6" />
      <ProjectCard position={[4, -2, 0]} title="Security" color="#06b6d4" />
    </>
  );
}

export function ProjectShowcase3D() {
  return (
    <div className="relative w-full h-96 md:h-screen rounded-lg overflow-hidden bg-gradient-to-b from-background to-background/50">
      <Canvas camera={{ position: [0, 0, 15] }} dpr={[1, 2]}>
        <color attach="background" args={['#0f172a']} />
        <ProjectShowcaseScene />
      </Canvas>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center absolute top-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white/80 mb-2">
            Project Showcase
          </h2>
          <p className="text-white/60">
            Hover over cards to explore
          </p>
        </div>
      </div>
    </div>
  );
}
