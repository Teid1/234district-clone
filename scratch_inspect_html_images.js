const fs = require('fs');

function checkFile(filePath) {
  console.log(`=== Matches in ${filePath} ===`);
  const content = fs.readFileSync(filePath, 'utf8');
  content.split('\n').forEach((line, idx) => {
    if (line.includes('-300x300') || line.includes('-150x150') || line.includes('-768x1024')) {
      console.log(`Line ${idx + 1}: ${line.trim()}`);
    }
  });
}

checkFile('C:/Users/DELL2/.gemini/antigravity/scratch/234district-clone/public/index.html');
checkFile('C:/Users/DELL2/.gemini/antigravity/scratch/234district-clone/public/shop.html');
checkFile('C:/Users/DELL2/.gemini/antigravity/scratch/234district-clone/public/product.html');
