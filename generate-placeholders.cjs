const fs = require('fs');
const path = require('path');

const webpBase64 = 'UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=';
const buffer = Buffer.from(webpBase64, 'base64');
const dir = path.join(__dirname, 'public', 'images');

const files = [
  'logo.webp',
  'hero-bharatanatyam.webp',
  'guru-kamakshi.webp',
  'international-performance.webp',
  'india-performance.webp',
  'nritya-sanje.webp'
];

// Add awards placeholder images
for (let i = 1; i <= 9; i++) {
  files.push(`award-0${i}.webp`);
}

files.forEach(file => {
  fs.writeFileSync(path.join(dir, file), buffer);
  console.log(`Created ${file}`);
});
