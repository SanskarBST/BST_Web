import * as THREE from 'three';

export function createBinaryTexture(text) {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;

  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 256, 256);
  ctx.fillStyle = 'rgba(0, 0, 0, 0)';
  ctx.fillRect(0, 0, 256, 256);

  ctx.shadowColor = text === '1' ? '#d8b4fe' : '#a855f7';
  ctx.shadowBlur = 22;
  ctx.strokeStyle = 'rgba(255,255,255,0.08)';
  ctx.lineWidth = 8;
  ctx.font = '900 168px monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.strokeText(text, 128, 130);

  ctx.fillStyle = text === '1' ? '#d8b4fe' : '#a855f7';
  ctx.fillText(text, 128, 130);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;

  return texture;
}
