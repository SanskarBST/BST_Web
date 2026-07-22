import React, { useMemo, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { DalaBrain } from './Laptop/DalaBrain'; 

// ==========================================
// NEW: CAMERA PARALLAX RIG (For that 3D Vibe)
// ==========================================
function ParallaxRig({ children }) {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize mouse coordinates (-1 to +1)
      target.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      target.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    // Smooth lerping for the camera movement
    mouse.current.x += (target.current.x - mouse.current.x) * 0.05;
    mouse.current.y += (target.current.y - mouse.current.y) * 0.05;

    // Shift camera position based on mouse (Adjust multipliers for more/less shake)
    camera.position.x = mouse.current.x * 1.5; 
    camera.position.y = mouse.current.y * 1.5;

    // Always look at the center of the scene to create the tilt/parallax depth
    camera.lookAt(0, 0, 0);
  });

  return <group>{children}</group>;
}

// ==========================================
// ORIGINAL: BACKGROUND DUST (Untouched logic)
// ==========================================
function SmoothDust({ count, color, size, speed }) {
  const pointsRef = useRef();

  const { positions, origPositions } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const orig = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 40;     
      const y = (Math.random() - 0.5) * 40; 
      const z = (Math.random() - 0.5) * 40; 
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
      orig[i * 3] = x;
      orig[i * 3 + 1] = y;
      orig[i * 3 + 2] = z;
    }
    return { positions: pos, origPositions: orig };
  }, [count]);

  const mouse = useRef(new THREE.Vector2(-1000, -1000));
  const targetMouse = useRef(new THREE.Vector2(-1000, -1000));

  useEffect(() => {
    const handleMouseMove = (e) => {
      targetMouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const localMouse = useMemo(() => new THREE.Vector3(), []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.elapsedTime;
    
    pointsRef.current.rotation.y = time * speed;
    pointsRef.current.rotation.x = time * (speed * 0.8);

    mouse.current.lerp(targetMouse.current, 0.1);
    localMouse.set(
      (mouse.current.x * state.viewport.width) / 2,
      (mouse.current.y * state.viewport.height) / 2,
      0
    );
    pointsRef.current.worldToLocal(localMouse);

    const posArray = pointsRef.current.geometry.attributes.position.array;
    
    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      const px = posArray[idx];
      const py = posArray[idx + 1];
      const pz = posArray[idx + 2];

      const dx = localMouse.x - px;
      const dy = localMouse.y - py;
      const dz = localMouse.z - pz;
      const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
      
      const repelRadius = 3.5; 

      if (distance < repelRadius) {
        const force = (repelRadius - distance) / repelRadius;
        posArray[idx] -= (dx / distance) * force * 0.20;
        posArray[idx + 1] -= (dy / distance) * force * 0.20;
        posArray[idx + 2] -= (dz / distance) * force * 0.20;
      } else {
        posArray[idx] += (origPositions[idx] - px) * 0.05;
        posArray[idx + 1] += (origPositions[idx + 1] - py) * 0.05;
        posArray[idx + 2] += (origPositions[idx + 2] - pz) * 0.05;
      }
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={size} color={color} transparent={true} opacity={0.4} sizeAttenuation={true} depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  );
}

export function HeroCanvas() {
  return (
    <div className="pointer-events-none fixed left-0 top-0 z-0 h-screen w-full bg-transparent">
      {/* 🔥 FIX: alpha: true lagaya hai jisse Canvas ka kala background transparent ho jayega */}
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }} gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}>
        
        {/* WRAPPED THE ENTIRE SCENE IN PARALLAX RIG */}
        <ParallaxRig>
          <group>
            <SmoothDust count={2000} color="#FF2E2B" size={0.05} speed={0.03} />
            <SmoothDust count={1000} color="#ffffff" size={0.06} speed={0.015} />
          </group>
          
          <DalaBrain />
        </ParallaxRig>

      </Canvas>
    </div>
  );
}