const fs = require('fs');
const buffer = fs.readFileSync('public/images/home/guru.png');
// PNG header is 8 bytes. IHDR chunk starts at byte 8.
// IHDR chunk: Length (4), Chunk Type (4), Width (4), Height (4), Bit depth (1), Color type (1)
// Offset: 8 (Length) + 4 (Type 'IHDR') + 4 (Width) + 4 (Height) + 1 (Bit depth) = byte 25 is Color type.
const colorType = buffer[25];
console.log('Color type:', colorType);
if (colorType === 6) {
  console.log('Image has Alpha channel (Truecolor with alpha)');
} else if (colorType === 4) {
  console.log('Image has Alpha channel (Grayscale with alpha)');
} else {
  console.log('Image does NOT have Alpha channel');
}
