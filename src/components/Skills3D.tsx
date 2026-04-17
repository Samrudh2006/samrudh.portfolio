'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

interface SkillBar {
  label: string;
  value: number;
  color: string;
  position: [number, number, number];
}

const skills: SkillBar[] = [
  { label: 'AI Automation', value: 0.9, color: '#ec4899', position: [-5, 0, 0] },
  { label: 'Python', value: 0.95, color: '#3776ab', position: [-3, 0, 0] },
  { label: 'Voice Agents', value: 0.85, color: '#0ea5e9', position: [-1, 0, 0] },
  { label: 'Data Science', value: 0.88, color: '#10b981', position: [1, 0, 0] },
  { label: 'Full Stack', value: 0.8, color: '#f59e0b', position: [3, 0, 0] },
  { label: 'Security', value: 0.82, color: '#8b5cf6', position: [5, 0, 0] },
];

function SkillBar({ label, value, color, position }: SkillBar) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Background bar */}
      <mesh position={[0, -2, 0]}>
        <boxGeometry args={[0.6, 4, 0.2]} />
        <meshPhongMaterial color="#1e1e2e" emissive="#0a0a0a" />
      </mesh>

      {/* Skill value bar */}
      <mesh position={[0, -2 + (value * 2), 0.15]}>
        <boxGeometry args={[0.6, value * 4, 0.15]} />
        <meshPhongMaterial color={color} emissive={color} emissiveIntensity={0.5} />
      </mesh>

      {/* Glow effect */}
      <mesh position={[0, -2 + (value * 2), 0.1]}>
        <boxGeometry args={[0.8, value * 4 + 0.2, 0.1]} />
        <meshBasicMaterial color={color} transparent opacity={0.2} />
      </mesh>

      {/* Label */}
      <Text
        position={[0, -2.8, 0.2]}
        fontSize={0.35}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        maxWidth={1.5}
      >
        {label}
      </Text>

      {/* Percentage */}
      <Text
        position={[0, -1 + (value * 2), 0.3]}
        fontSize={0.28}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {Math.round(value * 100)}%
      </Text>
    </group>
  );
}

function SkillsScene() {
  return (
    <>
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, 5, 5]} intensity={0.6} color="#0ea5e9" />

      {skills.map((skill) => (
        <SkillBar key={skill.label} {...skill} />
      ))}

      <OrbitControls
        autoRotate
        autoRotateSpeed={0.5}
        enableZoom={true}
        minZoom={8}
        maxZoom={15}
      />
    </>
  );
}

export function Skills3DVisualization() {
  return (
    <div className="relative w-full h-96 md:h-screen rounded-lg overflow-hidden bg-gradient-to-b from-background to-background/50">
      <Canvas camera={{ position: [0, 2, 12] }} dpr={[1, 2]}>
        <color attach="background" args={['#0f172a']} />
        <SkillsScene />
      </Canvas>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center absolute top-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white/80 mb-2">
            3D Skills Profile
          </h2>
          <p className="text-white/60">
            Drag to rotate • Scroll to zoom
          </p>
        </div>
      </div>
    </div>
  );
}
