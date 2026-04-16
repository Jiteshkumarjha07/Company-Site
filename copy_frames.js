import fs from 'fs';
import path from 'path';

const sourceDir = '11-18';
const targetDir = 'public/frames';

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

let globalFrameIndex = 1;

for (let i = 11; i <= 18; i++) {
  const folderPath = path.join(sourceDir, i.toString());
  if (fs.existsSync(folderPath)) {
    const files = fs.readdirSync(folderPath).filter(f => f.endsWith('.jpg')).sort();
    for (const file of files) {
      const sourcePath = path.join(folderPath, file);
      const targetName = globalFrameIndex.toString().padStart(4, '0') + '.jpg';
      const targetPath = path.join(targetDir, targetName);
      fs.copyFileSync(sourcePath, targetPath);
      globalFrameIndex++;
    }
  }
}

console.log(`Copied and renamed ${globalFrameIndex - 1} frames to ${targetDir}`);
