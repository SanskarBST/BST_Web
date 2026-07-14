import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useMouse } from '../../../hooks/useMouse';
import {
  CURSOR_FIELD_CONFIG,
  LAPTOP_GROUP_POSITION,
  LAPTOP_GROUP_ROTATION,
  scrollData,
} from '../../../utils/constants';
import { smoothstep } from '../../../utils/helpers';

export function CursorField({ groupRef }) {
  const mouseRef = useMouse();

  useFrame((_, delta) => {
    if (!groupRef.current) {
      return;
    }

    const { x, y } = mouseRef.current;
    const presence = 1 - smoothstep(0.42, 0.92, scrollData.progress);

    const targetRotationX =
      LAPTOP_GROUP_ROTATION[0] + y * CURSOR_FIELD_CONFIG.rotateX * presence;
    const targetRotationY =
      LAPTOP_GROUP_ROTATION[1] + x * CURSOR_FIELD_CONFIG.rotateY * presence;
    const targetPositionX =
      LAPTOP_GROUP_POSITION[0] + x * CURSOR_FIELD_CONFIG.moveX * presence;
    const targetPositionY =
      LAPTOP_GROUP_POSITION[1] + y * CURSOR_FIELD_CONFIG.moveY * presence;
    const targetPositionZ =
      LAPTOP_GROUP_POSITION[2] + Math.abs(x) * CURSOR_FIELD_CONFIG.moveZ * presence;

    groupRef.current.rotation.x = THREE.MathUtils.damp(
      groupRef.current.rotation.x,
      targetRotationX,
      CURSOR_FIELD_CONFIG.damping,
      delta
    );
    groupRef.current.rotation.y = THREE.MathUtils.damp(
      groupRef.current.rotation.y,
      targetRotationY,
      CURSOR_FIELD_CONFIG.damping,
      delta
    );
    groupRef.current.position.x = THREE.MathUtils.damp(
      groupRef.current.position.x,
      targetPositionX,
      CURSOR_FIELD_CONFIG.damping,
      delta
    );
    groupRef.current.position.y = THREE.MathUtils.damp(
      groupRef.current.position.y,
      targetPositionY,
      CURSOR_FIELD_CONFIG.damping,
      delta
    );
    groupRef.current.position.z = THREE.MathUtils.damp(
      groupRef.current.position.z,
      targetPositionZ,
      CURSOR_FIELD_CONFIG.damping,
      delta
    );
  });

  return null;
}
