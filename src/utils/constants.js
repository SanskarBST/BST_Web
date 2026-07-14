export const scrollData = { progress: 0 };

export const PARTICLE_COUNT = 5200;

export const HERO_CANVAS_CAMERA = {
  position: [0, 0.2, 10.6],
  fov: 30,
};

export const HERO_CANVAS_DPR = [1, 1.5];

export const LAPTOP_MODEL = {
  width: 5.4,
  depth: 3.55,
  baseThickness: 0.18,
  baseY: -0.78,
  lidWidth: 5.22,
  lidHeight: 3.18,
  lidThickness: 0.12,
  lidPivot: [0, -0.59, -1.53],
  lidAngle: -1.17,
  screenWidth: 4.56,
  screenHeight: 2.58,
  screenZ: 0.082,
};

export const LAPTOP_GROUP_POSITION = [1.72, -0.02, 0.12];

export const LAPTOP_GROUP_ROTATION = [0.06, -0.36, 0.02];

export const LAPTOP_GROUP_SCALE = 0.8;

export const LAPTOP_FLOAT_CONFIG = {
  floatIntensity: 0.1,
  speed: 1,
  rotationIntensity: 0.025,
  floatingRange: [-0.035, 0.035],
};

export const CURSOR_FIELD_CONFIG = {
  rotateX: 0.11,
  rotateY: 0.19,
  moveX: 0.24,
  moveY: 0.12,
  moveZ: 0.08,
  damping: 3.6,
};

export const HERO_TEXT_ANIMATION = {
  from: { y: '120%', opacity: 0 },
  to: {
    y: '0%',
    opacity: 1,
    duration: 1.5,
    stagger: 0.15,
    ease: 'power4.out',
    delay: 0.2,
  },
};

export const SCROLL_TIMELINE_CONFIG = {
  ease: 'none',
  start: 'top top',
  end: 'bottom bottom',
  scrub: 2.2,
};

export const LIGHT_CONFIG = {
  ambient: 0.48,
  hemisphere: {
    intensity: 0.34,
    skyColor: '#8da6ff',
    groundColor: '#07080d',
  },
  key: {
    position: [-6.8, 5.4, 7.8],
    intensity: 2.6,
    color: '#ffffff',
  },
  rim: {
    position: [7.4, 3.2, 1.4],
    intensity: 18,
    color: '#b46bff',
    angle: 0.48,
    penumbra: 1,
  },
  accent: {
    position: [4.6, 0.8, 5.8],
    intensity: 7,
    color: '#68a7ff',
    distance: 16,
  },
  fill: {
    position: [-0.8, 2.8, 3.8],
    intensity: 0.52,
    color: '#cbd5ff',
  },
  contactShadow: {
    position: [0, -1.85, 0],
    scale: 15,
    blur: 2.6,
    opacity: 0.22,
    far: 8,
  },
};
