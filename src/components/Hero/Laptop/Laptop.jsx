import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { BinaryParticles } from '../Particles/BinaryParticles';
import { useParticleSystem } from '../Particles/ParticleSystem';
import { createBinaryTexture } from '../Particles/BinaryTexture';

export function Laptop() {
  const sphereRef = useRef();
  const mesh0Ref = useRef();
  const mesh1Ref = useRef();
  
  const tex0 = useMemo(() => createBinaryTexture('0'), []);
  const tex1 = useMemo(() => createBinaryTexture('1'), []);
  const { laptopPos0, scatteredPos0, currentPos0, phase0, amplitude0, drift0, laptopPos1, scatteredPos1, currentPos1, phase1, amplitude1, drift1 } = useParticleSystem();

  useFrame((state, delta) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += delta * 0.1; // Slow rotation
      sphereRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1; // Halka sa tilt
    }
  });

  return (
    <group ref={sphereRef}>
      <BinaryParticles mesh0Ref={mesh0Ref} mesh1Ref={mesh1Ref} currentPos0={currentPos0} currentPos1={currentPos1} tex0={tex0} tex1={tex1} />
    </group>
  );
}