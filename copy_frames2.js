import fs from 'fs';
import path from 'path';

const sourceDir = '1-8';
const targetDir = 'public/frames2';

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const files = fs.readdirSync(sourceDir).filter(f => f.endsWith('.jpg')).sort();
files.forEach((file, index) => {
  const sourcePath = path.join(sourceDir, file);
  const targetName = (index + 1).toString().padStart(4, '0') + '.jpg';
  const targetPath = path.join(targetDir, targetName);
  fs.copyFileSync(sourcePath, targetPath);
});

console.log(`Copied and renamed ${files.length} frames to ${targetDir}`);
