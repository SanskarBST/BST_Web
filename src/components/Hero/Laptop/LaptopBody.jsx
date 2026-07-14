import { RoundedBox } from '@react-three/drei';
import { LAPTOP_MODEL } from '../../../utils/constants';

const keyRows = [
  { z: -0.74, startX: -1.72, count: 14, step: 0.27, width: 0.22 },
  { z: -0.41, startX: -1.6, count: 13, step: 0.27, width: 0.22 },
  { z: -0.08, startX: -1.48, count: 13, step: 0.27, width: 0.22 },
  { z: 0.24, startX: -1.35, count: 12, step: 0.27, width: 0.22 },
];

const speakerHoles = Array.from({ length: 12 }, (_, rowIndex) => {
  const z = -0.88 + rowIndex * 0.16;

  return [
    [-2.14, -0.645, z],
    [-2.01, -0.645, z],
    [2.01, -0.645, z],
    [2.14, -0.645, z],
  ];
}).flat();

function Key({ position, size = [0.22, 0.035, 0.22], radius = 0.04 }) {
  return (
    <RoundedBox args={size} radius={radius} smoothness={4} position={position} castShadow>
      <meshStandardMaterial color="#1d1f23" metalness={0.1} roughness={0.72} />
    </RoundedBox>
  );
}

export function LaptopBody({ screenSlot }) {
  const { width, depth, baseY, lidWidth, lidHeight, lidPivot, lidAngle } = LAPTOP_MODEL;

  return (
    <group>
      <RoundedBox
        args={[width, 0.18, depth]}
        radius={0.14}
        smoothness={6}
        position={[0, baseY, 0.16]}
        castShadow
        receiveShadow
      >
        <meshPhysicalMaterial
          color="#c2c9d4"
          metalness={1}
          roughness={0.22}
          clearcoat={0.9}
          clearcoatRoughness={0.2}
          envMapIntensity={1}
        />
      </RoundedBox>

      <RoundedBox
        args={[width - 0.18, 0.03, depth - 0.2]}
        radius={0.12}
        smoothness={6}
        position={[0, baseY + 0.085, 0.12]}
        receiveShadow
      >
        <meshPhysicalMaterial
          color="#d0d6de"
          metalness={1}
          roughness={0.35}
          clearcoat={0.6}
          clearcoatRoughness={0.35}
        />
      </RoundedBox>

      <RoundedBox
        args={[4.08, 0.022, 2.28]}
        radius={0.08}
        smoothness={4}
        position={[0, baseY + 0.094, -0.18]}
      >
        <meshStandardMaterial color="#23262b" roughness={0.82} metalness={0.14} />
      </RoundedBox>

      {keyRows.flatMap((row) =>
        Array.from({ length: row.count }, (_, index) => {
          const x = row.startX + index * row.step;

          return (
            <Key
              key={`${row.z}-${x}`}
              position={[x, baseY + 0.12, row.z]}
              size={[row.width, 0.035, 0.22]}
            />
          );
        })
      )}

      <Key position={[-1.95, baseY + 0.12, -0.74]} size={[0.34, 0.035, 0.22]} />
      <Key position={[1.95, baseY + 0.12, -0.74]} size={[0.34, 0.035, 0.22]} />
      <Key position={[-1.84, baseY + 0.12, -0.41]} size={[0.46, 0.035, 0.22]} />
      <Key position={[1.76, baseY + 0.12, -0.08]} size={[0.48, 0.035, 0.22]} />
      <Key position={[-1.7, baseY + 0.12, 0.24]} size={[0.58, 0.035, 0.22]} />
      <Key position={[0, baseY + 0.12, 0.56]} size={[1.78, 0.035, 0.24]} />

      <RoundedBox
        args={[1.58, 0.01, 1.04]}
        radius={0.09}
        smoothness={4}
        position={[0, baseY + 0.103, 1.18]}
      >
        <meshPhysicalMaterial
          color="#b3bcc7"
          metalness={0.95}
          roughness={0.2}
          clearcoat={0.8}
          clearcoatRoughness={0.25}
        />
      </RoundedBox>

      {speakerHoles.map((position, index) => (
        <mesh key={index} position={position} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.028, 12]} />
          <meshBasicMaterial color="#0d0f12" />
        </mesh>
      ))}

      <mesh position={[0, baseY + 0.06, -1.57]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.07, 0.07, width - 0.42, 32]} />
        <meshPhysicalMaterial
          color="#8c95a0"
          metalness={1}
          roughness={0.26}
          clearcoat={0.5}
        />
      </mesh>

      <mesh position={[-1.42, baseY + 0.05, -1.54]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.09, 0.09, 0.42, 24]} />
        <meshStandardMaterial color="#69707a" metalness={0.9} roughness={0.3} />
      </mesh>
      <mesh position={[1.42, baseY + 0.05, -1.54]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.09, 0.09, 0.42, 24]} />
        <meshStandardMaterial color="#69707a" metalness={0.9} roughness={0.3} />
      </mesh>

      <group position={lidPivot} rotation={[lidAngle, 0, 0]}>
        <RoundedBox
          args={[lidWidth, lidHeight, 0.12]}
          radius={0.13}
          smoothness={6}
          position={[0, lidHeight / 2, 0]}
          castShadow
          receiveShadow
        >
          <meshPhysicalMaterial
            color="#c7ced7"
            metalness={1}
            roughness={0.2}
            clearcoat={0.95}
            clearcoatRoughness={0.18}
            envMapIntensity={1.15}
          />
        </RoundedBox>

        <RoundedBox
          args={[4.92, 2.9, 0.035]}
          radius={0.09}
          smoothness={5}
          position={[0, lidHeight / 2, 0.048]}
        >
          <meshStandardMaterial color="#090b10" roughness={0.96} metalness={0.04} />
        </RoundedBox>

        <RoundedBox
          args={[4.56, 2.58, 0.01]}
          radius={0.04}
          smoothness={4}
          position={[0, lidHeight / 2, 0.048]}
        >
          <meshPhysicalMaterial
            color="#0d1524"
            transmission={0.06}
            transparent
            opacity={0.24}
            roughness={0.08}
            metalness={0.05}
            clearcoat={1}
            clearcoatRoughness={0.04}
          />
        </RoundedBox>

        <RoundedBox
          args={[0.56, 0.16, 0.03]}
          radius={0.06}
          smoothness={4}
          position={[0, lidHeight - 0.14, 0.067]}
        >
          <meshStandardMaterial color="#050608" roughness={0.88} metalness={0.08} />
        </RoundedBox>

        <mesh position={[0, lidHeight - 0.155, 0.082]}>
          <circleGeometry args={[0.026, 16]} />
          <meshBasicMaterial color="#111827" />
        </mesh>

        <mesh position={[0, lidHeight / 2, -0.058]}>
          <circleGeometry args={[0.11, 28]} />
          <meshPhysicalMaterial
            color="#d9dce2"
            metalness={1}
            roughness={0.18}
            clearcoat={0.7}
            emissive="#7c879a"
            emissiveIntensity={0.08}
          />
        </mesh>

        {screenSlot}
      </group>
    </group>
  );
}
