const fs = require("fs");
const path = require("path");

function createWav(durationSec, sampleRate = 44100) {
  const numSamples = Math.floor(durationSec * sampleRate);
  const dataSize = numSamples * 2;
  const buffer = Buffer.alloc(44 + dataSize);

  buffer.write("RIFF", 0);
  buffer.writeUInt32LE(36 + dataSize, 4);
  buffer.write("WAVE", 8);
  buffer.write("fmt ", 12);
  buffer.writeUInt32LE(16, 16);
  buffer.writeUInt16LE(1, 20);
  buffer.writeUInt16LE(1, 22);
  buffer.writeUInt32LE(sampleRate, 24);
  buffer.writeUInt32LE(sampleRate * 2, 28);
  buffer.writeUInt16LE(2, 32);
  buffer.writeUInt16LE(16, 34);
  buffer.write("data", 36);
  buffer.writeUInt32LE(dataSize, 40);

  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    const freq = 165 + Math.sin(t * 1.5) * 25;
    const envelope = Math.min(1, t * 1.5) * Math.min(1, (durationSec - t) * 1.5);
    const sample = Math.sin(2 * Math.PI * freq * t) * envelope * 0.25;
    const intSample = Math.max(
      -32768,
      Math.min(32767, Math.floor(sample * 32767)),
    );
    buffer.writeInt16LE(intSample, 44 + i * 2);
  }

  return buffer;
}

const outDir = path.join(__dirname, "..", "public", "audio");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "demo.wav"), createWav(10));

console.log("Created demo.wav:", fs.statSync(path.join(outDir, "demo.wav")).size, "bytes");
