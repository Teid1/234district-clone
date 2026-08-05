const fs = require('fs');
const path = require('path');

const imgDir = 'C:/Users/DELL2/.gemini/antigravity/scratch/234district-clone/public/images';
const files = fs.readdirSync(imgDir);

console.log("=== Matching Image Resolution Versions ===");
// Let's check some sample image bases
const sampleBases = ['1196', '1192', '1455', '1457', '1460', '1616', '1621', '2368'];

sampleBases.forEach(base => {
  console.log(`\nFiles matching "${base}":`);
  files.forEach(f => {
    if (f.includes(base)) {
      const stats = fs.statSync(path.join(imgDir, f));
      console.log(`- ${f} (${(stats.size / 1024).toFixed(1)} KB)`);
    }
  });
});
