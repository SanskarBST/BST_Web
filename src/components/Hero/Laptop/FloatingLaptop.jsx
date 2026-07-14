import { Float } from '@react-three/drei';
import {
  LAPTOP_FLOAT_CONFIG,
  LAPTOP_GROUP_POSITION,
  LAPTOP_GROUP_ROTATION,
  LAPTOP_GROUP_SCALE,
} from '../../../utils/constants';

export function FloatingLaptop({ children, groupRef }) {
  return (
    <Float
      floatIntensity={LAPTOP_FLOAT_CONFIG.floatIntensity}
      speed={LAPTOP_FLOAT_CONFIG.speed}
      rotationIntensity={LAPTOP_FLOAT_CONFIG.rotationIntensity}
      floatingRange={LAPTOP_FLOAT_CONFIG.floatingRange}
    >
      <group
        ref={groupRef}
        position={LAPTOP_GROUP_POSITION}
        rotation={LAPTOP_GROUP_ROTATION}
        scale={LAPTOP_GROUP_SCALE}
      >
        {children}
      </group>
    </Float>
  );
}
