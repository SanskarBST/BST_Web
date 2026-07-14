import { useMemo } from 'react';
import { PARTICLE_COUNT } from '../../../utils/constants';

function sampleSpherePoint() {
  const r = 2.5 + Math.random() * 0.5; // Radius
  const theta = Math.random() * 2 * Math.PI;
  const phi = Math.acos(2 * Math.random() - 1);

  const x = r * Math.sin(phi) * Math.cos(theta);
  const y = r * Math.sin(phi) * Math.sin(theta);
  const z = r * Math.cos(phi);
  return [x, y, z];
}

function sampleScatteredPoint() {
  return [(Math.random() - 0.5) * 15, (Math.random() - 0.5) * 15, (Math.random() - 0.5) * 15];
}

function createDataSet(count) {
  return {
    laptop: new Float32Array((count / 2) * 3),
    scattered: new Float32Array((count / 2) * 3),
    current: new Float32Array((count / 2) * 3),
    phase: new Float32Array(count / 2),
    amplitude: new Float32Array(count / 2),
    drift: new Float32Array(count / 2),
  };
}

function fillDataSet(data, count) {
  for (let index = 0; index < count / 2; index += 1) {
    const offset = index * 3;
    const point = sampleSpherePoint();
    data.laptop[offset] = point[0]; data.laptop[offset + 1] = point[1]; data.laptop[offset + 2] = point[2];
    data.scattered[offset] = sampleScatteredPoint()[0];
    data.scattered[offset + 1] = sampleScatteredPoint()[1];
    data.scattered[offset + 2] = sampleScatteredPoint()[2];
    data.current[offset] = point[0]; data.current[offset + 1] = point[1]; data.current[offset + 2] = point[2];
    data.phase[index] = Math.random() * Math.PI * 2;
    data.amplitude[index] = 0.02 + Math.random() * 0.04;
    data.drift[index] = 0.2 + Math.random() * 0.3;
  }
}

export function useParticleSystem(count = PARTICLE_COUNT) {
  return useMemo(() => {
    const zeroData = createDataSet(count);
    const oneData = createDataSet(count);
    fillDataSet(zeroData, count);
    fillDataSet(oneData, count);
    return {
      laptopPos0: zeroData.laptop, scatteredPos0: zeroData.scattered, currentPos0: zeroData.current, phase0: zeroData.phase, amplitude0: zeroData.amplitude, drift0: zeroData.drift,
      laptopPos1: oneData.laptop, scatteredPos1: oneData.scattered, currentPos1: oneData.current, phase1: oneData.phase, amplitude1: oneData.amplitude, drift1: oneData.drift,
    };
  }, [count]);
}