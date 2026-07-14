// File: src/components/Laptop/DalaBrain.jsx
import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const PALETTE = ['#FF2E2B', '#2D2642', '#ffffff', '#ff5956']; 
const PARTICLE_COUNT = 1500;
const BURST_TRIGGER = 0.15; 
const BURST_SPEED = 0.10; 

function createBinaryTexture(text) {
  const canvas = document.createElement('canvas');
  canvas.width = 64; canvas.height = 64;
  const context = canvas.getContext('2d');
  context.font = 'bold 48px monospace';
  context.textAlign = 'center'; context.textBaseline = 'middle';
  context.fillStyle = '#ffffff'; context.fillText(text, 32, 32);
  return new THREE.CanvasTexture(canvas);
}

export function DalaBrain() {
  const mesh0Ref = useRef();
  const mesh1Ref = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  const tex0 = useMemo(() => createBinaryTexture('0'), []);
  const tex1 = useMemo(() => createBinaryTexture('1'), []);

  const mouse = useRef({ x: -1000, y: -1000 });
  const targetMouse = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      targetMouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const localMouse0 = useMemo(() => new THREE.Vector3(), []);
  const localMouse1 = useMemo(() => new THREE.Vector3(), []);
  const particlePos = useMemo(() => new THREE.Vector3(), []);

  const particleData = useMemo(() => {
    const data = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const r = 2.8; 
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      const baseX = r * Math.sin(phi) * Math.cos(theta);
      const baseY = r * Math.sin(phi) * Math.sin(theta);
      const baseZ = r * Math.cos(phi);
      
      const scatterX = (Math.random() - 0.5) * 60;
      const scatterY = (Math.random() - 0.5) * 50;
      const scatterZ = (Math.random() - 0.5) * 20 - 8; 
      
      const sizeVariation = 0.6 + Math.random() * 1.15; 
      const color = new THREE.Color(PALETTE[Math.floor(Math.random() * PALETTE.length)]);
      
      data.push({ 
        baseX, baseY, baseZ, 
        scatterX, scatterY, scatterZ, 
        sizeVariation, color,
        offsetX: 0, offsetY: 0, offsetZ: 0 
      });
    }
    return data;
  }, []);

  const [colors0, colors1] = useMemo(() => {
    const half = PARTICLE_COUNT / 2;
    const c0 = new Float32Array(half * 3);
    const c1 = new Float32Array(half * 3);
    particleData.forEach((p, i) => {
      if (i < half) {
        c0[i * 3] = p.color.r; c0[i * 3 + 1] = p.color.g; c0[i * 3 + 2] = p.color.b;
      } else {
        const idx = i - half;
        c1[idx * 3] = p.color.r; c1[idx * 3 + 1] = p.color.g; c1[idx * 3 + 2] = p.color.b;
      }
    });
    return [c0, c1];
  }, [particleData]);

  useFrame((state) => {
    if (!mesh0Ref.current || !mesh1Ref.current) return;
    const time = state.clock.elapsedTime;
    const scrollY = window.scrollY;
    const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
    const scrollProgress = Math.min(Math.max(scrollY / maxScroll, 0), 1); 

    const moveProgress = Math.min(scrollProgress / BURST_TRIGGER, 1);
    const easeMove = moveProgress * moveProgress * (3 - 2 * moveProgress);
    const sphereX = THREE.MathUtils.lerp(3.5, -4.5, easeMove);
    const sphereY = THREE.MathUtils.lerp(0, -3, easeMove);

    let scatterProgress = 0;
    if (scrollProgress > BURST_TRIGGER) {
      scatterProgress = Math.min((scrollProgress - BURST_TRIGGER) / BURST_SPEED, 1);
    }
    const easeScatter = 1 - Math.pow(1 - scatterProgress, 3); 

    mouse.current.x += (targetMouse.current.x - mouse.current.x) * 0.15;
    mouse.current.y += (targetMouse.current.y - mouse.current.y) * 0.15;

    localMouse0.set((mouse.current.x * state.viewport.width) / 2, (mouse.current.y * state.viewport.height) / 2, 0);
    localMouse1.set((mouse.current.x * state.viewport.width) / 2, (mouse.current.y * state.viewport.height) / 2, 0);
    
    mesh0Ref.current.worldToLocal(localMouse0);
    mesh1Ref.current.worldToLocal(localMouse1);

    const half = PARTICLE_COUNT / 2;

    particleData.forEach((p, i) => {
      let currentX = THREE.MathUtils.lerp(p.baseX + sphereX, p.scatterX, easeScatter);
      let currentY = THREE.MathUtils.lerp(p.baseY + sphereY, p.scatterY, easeScatter);
      let currentZ = THREE.MathUtils.lerp(p.baseZ, p.scatterZ, easeScatter);

      const localMouse = i < half ? localMouse0 : localMouse1;
      
      particlePos.set(currentX, currentY, currentZ);
      const dist = particlePos.distanceTo(localMouse);
      
      // Radius aur Push ko thoda scale kiya hai taaki scattered state mein bhi acha feel ho
      const repelRadius = 3.5 + (easeScatter * 1.5); 
      const maxPush = 1.8 + (easeScatter * 1.0); 
      
      let targetOffsetX = 0;
      let targetOffsetY = 0;
      let targetOffsetZ = 0;

      // FIX: Yahan se 'easeScatter < 0.2' ka lock hata diya hai. Ab har waqt repel karega!
      if (dist < repelRadius) {
        const force = Math.pow((repelRadius - dist) / repelRadius, 2.0); 
        const dir = particlePos.clone().sub(localMouse).normalize();
        
        targetOffsetX = dir.x * force * maxPush;
        targetOffsetY = dir.y * force * maxPush;
        targetOffsetZ = dir.z * force * maxPush;
      }

      p.offsetX += (targetOffsetX - p.offsetX) * 0.15;
      p.offsetY += (targetOffsetY - p.offsetY) * 0.15;
      p.offsetZ += (targetOffsetZ - p.offsetZ) * 0.15;

      const floatY = Math.sin(time * 0.5 + i) * (0.2 * easeScatter); 
      
      dummy.position.set(
        currentX + p.offsetX, 
        currentY + floatY + p.offsetY, 
        currentZ + p.offsetZ
      );
      
      dummy.scale.setScalar(p.sizeVariation); 
      dummy.rotation.set(0, 0, easeScatter * p.sizeVariation * 0.5); 
      dummy.updateMatrix();

      if (i < half) {
        mesh0Ref.current.setMatrixAt(i, dummy.matrix);
      } else {
        mesh1Ref.current.setMatrixAt(i - half, dummy.matrix);
      }
    });

    mesh0Ref.current.instanceMatrix.needsUpdate = true;
    mesh1Ref.current.instanceMatrix.needsUpdate = true;
    
    const globalRotY = time * 0.15 * (1 - easeScatter);
    const globalRotX = time * 0.1 * (1 - easeScatter);
    mesh0Ref.current.rotation.set(globalRotX, globalRotY, 0);
    mesh1Ref.current.rotation.set(globalRotX, globalRotY, 0);
  });

  return (
    <group>
      <instancedMesh ref={mesh0Ref} args={[null, null, PARTICLE_COUNT / 2]}>
        <planeGeometry args={[0.22, 0.22]}> 
           <instancedBufferAttribute attach="attributes-color" args={[colors0, 3]} />
        </planeGeometry>
        <meshBasicMaterial map={tex0} vertexColors={true} transparent={true} opacity={0.7} alphaTest={0.05} depthWrite={false} blending={THREE.AdditiveBlending} />
      </instancedMesh>
      
      <instancedMesh ref={mesh1Ref} args={[null, null, PARTICLE_COUNT / 2]}>
        <planeGeometry args={[0.22, 0.22]}> 
           <instancedBufferAttribute attach="attributes-color" args={[colors1, 3]} />
        </planeGeometry>
        <meshBasicMaterial map={tex1} vertexColors={true} transparent={true} opacity={0.7} alphaTest={0.05} depthWrite={false} blending={THREE.AdditiveBlending} />
      </instancedMesh>
    </group>
  );
}