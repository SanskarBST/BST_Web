import { ContactShadows } from '@react-three/drei';
import { LIGHT_CONFIG } from '../../../utils/constants';

export function Lights() {
  return (
    <>
      <ambientLight intensity={LIGHT_CONFIG.ambient} />
      <hemisphereLight
        intensity={LIGHT_CONFIG.hemisphere.intensity}
        skyColor={LIGHT_CONFIG.hemisphere.skyColor}
        groundColor={LIGHT_CONFIG.hemisphere.groundColor}
      />
      <directionalLight
        castShadow
        position={LIGHT_CONFIG.key.position}
        intensity={LIGHT_CONFIG.key.intensity}
        color={LIGHT_CONFIG.key.color}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />
      <spotLight
        castShadow
        position={LIGHT_CONFIG.rim.position}
        intensity={LIGHT_CONFIG.rim.intensity}
        color={LIGHT_CONFIG.rim.color}
        angle={LIGHT_CONFIG.rim.angle}
        penumbra={LIGHT_CONFIG.rim.penumbra}
      />
      <pointLight
        position={LIGHT_CONFIG.accent.position}
        intensity={LIGHT_CONFIG.accent.intensity}
        color={LIGHT_CONFIG.accent.color}
        distance={LIGHT_CONFIG.accent.distance}
      />
      <pointLight
        position={LIGHT_CONFIG.fill.position}
        intensity={LIGHT_CONFIG.fill.intensity}
        color={LIGHT_CONFIG.fill.color}
      />
      <ContactShadows
        position={LIGHT_CONFIG.contactShadow.position}
        scale={LIGHT_CONFIG.contactShadow.scale}
        blur={LIGHT_CONFIG.contactShadow.blur}
        opacity={LIGHT_CONFIG.contactShadow.opacity}
        far={LIGHT_CONFIG.contactShadow.far}
      />
    </>
  );
}
