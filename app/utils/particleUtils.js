// Particle effect utility functions

export function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

export async function imageToParticles(imagePath, particleCount = 800) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      const size = 64;
      canvas.width = size;
      canvas.height = size;

      ctx.drawImage(img, 0, 0, size, size);

      const imageData = ctx.getImageData(0, 0, size, size);
      const pixels = imageData.data;

      const validPixels = [];
      for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
          const index = (y * size + x) * 4;
          const alpha = pixels[index + 3];

          if (alpha > 128) {
            const r = pixels[index] / 255;
            const g = pixels[index + 1] / 255;
            const b = pixels[index + 2] / 255;

            validPixels.push({
              x: (x / size - 0.5) * 2,
              y: -(y / size - 0.5) * 2,
              r,
              g,
              b
            });
          }
        }
      }

      if (validPixels.length === 0) {
        reject(new Error("No valid pixels found in image"));
        return;
      }

      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);
      const velocities = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        const pixel = validPixels[Math.floor(Math.random() * validPixels.length)];

        positions[i * 3] = pixel.x + (Math.random() - 0.5) * 0.05;
        positions[i * 3 + 1] = pixel.y + (Math.random() - 0.5) * 0.05;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 0.1;

        // Convert to grayscale using luminance formula
        const gray = pixel.r * 0.299 + pixel.g * 0.587 + pixel.b * 0.114;
        const grayValue = gray * 0.5 + 0.3; // Make it lighter and more visible
        colors[i * 3] = grayValue;
        colors[i * 3 + 1] = grayValue;
        colors[i * 3 + 2] = grayValue;

        velocities[i * 3] = 0;
        velocities[i * 3 + 1] = 0;
        velocities[i * 3 + 2] = 0;
      }

      resolve({
        positions,
        colors,
        velocities,
        particleCount
      });
    };

    img.onerror = () => {
      reject(new Error(`Failed to load image: ${imagePath}`));
    };

    img.src = imagePath;
  });
}

export function updateParticlePhysics(
  particleData,
  originalPositions,
  mousePosition,
  effectRadius = 0.4,
  repelStrength = 0.08,
  attractStrength = 0.04,
  damping = 0.92
) {
  const { positions, velocities, particleCount } = particleData;

  for (let i = 0; i < particleCount; i++) {
    const idx = i * 3;

    const ox = originalPositions[idx];
    const oy = originalPositions[idx + 1];
    const oz = originalPositions[idx + 2];

    let px = positions[idx];
    let py = positions[idx + 1];
    let pz = positions[idx + 2];

    let vx = velocities[idx];
    let vy = velocities[idx + 1];
    let vz = velocities[idx + 2];

    if (mousePosition) {
      const dx = px - mousePosition.x;
      const dy = py - mousePosition.y;
      const dz = pz - (mousePosition.z || 0);
      const distSq = dx * dx + dy * dy + dz * dz;
      const dist = Math.sqrt(distSq);

      if (distSq < effectRadius * effectRadius && distSq > 0.0001) {
        const force = (1 - dist / effectRadius) * repelStrength;
        vx += (dx / dist) * force;
        vy += (dy / dist) * force;
        vz += (dz / dist) * force;
      }
    }

    const attractDx = ox - px;
    const attractDy = oy - py;
    const attractDz = oz - pz;
    vx += attractDx * attractStrength;
    vy += attractDy * attractStrength;
    vz += attractDz * attractStrength;

    vx *= damping;
    vy *= damping;
    vz *= damping;

    px += vx;
    py += vy;
    pz += vz;

    positions[idx] = px;
    positions[idx + 1] = py;
    positions[idx + 2] = pz;

    velocities[idx] = vx;
    velocities[idx + 1] = vy;
    velocities[idx + 2] = vz;
  }
}
