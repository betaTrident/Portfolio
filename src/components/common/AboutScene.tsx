'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/* ── Orbiting particle shell ─────────────────────────────────────────── */
function ParticleShell() {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 280;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Distribute points on the surface of a sphere
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.2 + Math.random() * 0.8;
      arr[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.07;
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.04) * 0.25;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#60a5fa" size={0.045} sizeAttenuation transparent opacity={0.85} />
    </points>
  );
}

/* ── Inner wireframe icosahedron ─────────────────────────────────────── */
function CoreMesh() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.22;
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.1;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.4, 1]} />
      <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.25} />
    </mesh>
  );
}

/* ── Slow inner ring ─────────────────────────────────────────────────── */
function Ring() {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ringRef.current) return;
    ringRef.current.rotation.x = state.clock.elapsedTime * 0.15;
    ringRef.current.rotation.y = state.clock.elapsedTime * 0.08;
  });

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[1.9, 0.008, 4, 80]} />
      <meshBasicMaterial color="#93c5fd" transparent opacity={0.5} />
    </mesh>
  );
}

/* ── Exported canvas ─────────────────────────────────────────────────── */
export default function AboutScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 52 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ParticleShell />
      <CoreMesh />
      <Ring />
    </Canvas>
  );
}
