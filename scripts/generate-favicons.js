import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Simple ICO generator for PNG buffers
function createIco(pngBuffers) {
  const count = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type 1 = ICO
  header.writeUInt16LE(count, 4); // number of images

  let offset = 6 + (16 * count);
  const entries = [];

  for (const item of pngBuffers) {
    const entry = Buffer.alloc(16);
    const width = item.width >= 256 ? 0 : item.width;
    const height = item.height >= 256 ? 0 : item.height;
    entry.writeUInt8(width, 0);
    entry.writeUInt8(height, 1);
    entry.writeUInt8(0, 2); // color palette
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(item.buffer.length, 8); // image size in bytes
    entry.writeUInt32LE(offset, 12); // image offset
    entries.push(entry);
    offset += item.buffer.length;
  }

  return Buffer.concat([header, ...entries, ...pngBuffers.map(i => i.buffer)]);
}

async function run() {
  const svgPath = path.join(__dirname, '../public/favicon.svg');
  const svgBuffer = fs.readFileSync(svgPath);

  // Generate PNG sizes
  const s16 = await sharp(svgBuffer).resize(16, 16).png().toBuffer();
  const s32 = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
  const s48 = await sharp(svgBuffer).resize(48, 48).png().toBuffer();
  const s180 = await sharp(svgBuffer).resize(180, 180).png().toBuffer();
  const s192 = await sharp(svgBuffer).resize(192, 192).png().toBuffer();
  const s512 = await sharp(svgBuffer).resize(512, 512).png().toBuffer();

  const icoBuffer = createIco([
    { width: 16, height: 16, buffer: s16 },
    { width: 32, height: 32, buffer: s32 },
    { width: 48, height: 48, buffer: s48 },
  ]);

  // Write files
  const publicDir = path.join(__dirname, '../public');
  const appDir = path.join(__dirname, '../src/app');

  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), s180);
  fs.writeFileSync(path.join(publicDir, 'icon-192.png'), s192);
  fs.writeFileSync(path.join(publicDir, 'icon-512.png'), s512);

  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(appDir, 'apple-icon.png'), s180);

  console.log('Successfully generated all favicons and app icons!');
}

run().catch((err) => {
  console.error('Error generating icons:', err);
  process.exit(1);
});
