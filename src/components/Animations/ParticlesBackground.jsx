import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function BrainSwarm({ count = 4000 }) {
  const meshRef = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Brain Shape Mathematics (Two lobes math)
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      // Decide left or right lobe
      const isLeftLobe = Math.random() > 0.5;
      const u = Math.random();
      const v = Math.random();
      
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      
      // Base sphere logic
      let x = Math.sin(phi) * Math.cos(theta) * 2.5;
      let y = Math.sin(phi) * Math.sin(theta) * 3.5;
      let z = Math.cos(phi) * 2.5;

      // Add deformation to look like a brain lobe
      x += isLeftLobe ? 1.2 : -1.2;
      y += Math.sin(x * 2) * 0.4; // Wrinkles/folds effect
      z *= 0.85;

      temp.push({
        x, y, z,
        origX: x, origY: y, origZ: z,
        speed: 0.5 + Math.random(),
      });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    // 3D Mouse space coordinates mapping
    const mouseX = (state.pointer.x * state.viewport.width) / 2;
    const mouseY = (state.pointer.y * state.viewport.height) / 2;

    // Slow continuous rotation like the video
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;

    particles.forEach((p, i) => {
      // Global position after mesh rotation
      const currentRotationY = meshRef.current.rotation.y;
      const rotX = p.x * Math.cos(currentRotationY) + p.z * Math.sin(currentRotationY);
      const rotZ = -p.x * Math.sin(currentRotationY) + p.z * Math.cos(currentRotationY);

      const dx = mouseX - rotX;
      const dy = mouseY - p.y;
      const distance = Math.sqrt(dx * dx + dy * dy);


      if (distance < 3.5) {
        const force = (3.5 - distance) / 3.5;
        p.x -= (dx / distance) * force * 0.15;
        p.y -= (dy / distance) * force * 0.15;
      } else {

        p.x += (p.origX - p.x) * 0.06;
        p.y += (p.origY - p.y) * 0.06;
      }

      dummy.position.set(p.x, p.y, p.z);
      

      dummy.scale.setScalar(0.7 + Math.sin(state.clock.getElapsedTime() * p.speed + i) * 0.3);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      {/* Tetrahedron gives that tech/triangle look from the video */}
      <tetrahedronGeometry args={[0.08, 0]} />
      {/* Cyan/Cyan-Blue glow effect matching the screenshots */}
      <meshBasicMaterial color="#00f3ff" wireframe transparent opacity={0.5} />
    </instancedMesh>
  );
}

export default function BrainParticles() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none bg-black">
      <Canvas camera={{ position: [0, 0, 12], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <BrainSwarm />
      </Canvas>
    </div>
  );
}