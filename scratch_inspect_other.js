const fs = require('fs');

function checkFile(filePath) {
  console.log(`=== Matches in ${filePath} ===`);
  const content = fs.readFileSync(filePath, 'utf8');
  content.split('\n').forEach((line, idx) => {
    if (line.includes('collections-section') || line.includes('accessories-section') || line.includes('bottoms-section') || line.includes('tops-section')) {
      console.log(`Line ${idx + 1}: ${line.trim()}`);
    }
  });
}

checkFile('C:/Users/DELL2/.gemini/antigravity/scratch/234district-clone/public/shop.html');
checkFile('C:/Users/DELL2/.gemini/antigravity/scratch/234district-clone/public/product.html');
