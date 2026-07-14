import React, { useMemo } from 'react';
import * as THREE from 'three';

const PALETTE = [new THREE.Color('#ff0055'), new THREE.Color('#bc13fe'), new THREE.Color('#00ffff')];

export function BinaryParticles({ mesh0Ref, mesh1Ref, currentPos0, currentPos1, tex0, tex1 }) {
  return (
    <>
      <points ref={mesh0Ref}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={currentPos0.length / 3} array={currentPos0} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial map={tex0} size={0.35} color="#bc13fe" transparent opacity={0.8} blending={THREE.AdditiveBlending} sizeAttenuation depthWrite={false} />
      </points>
      <points ref={mesh1Ref}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={currentPos1.length / 3} array={currentPos1} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial map={tex1} size={0.35} color="#00ffff" transparent opacity={0.8} blending={THREE.AdditiveBlending} sizeAttenuation depthWrite={false} />
      </points>
    </>
  );
}