const fs = require('fs');

function checkFile(filePath) {
  console.log(`=== Scanning ${filePath} ===`);
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  
  lines.forEach((line, idx) => {
    // Look for things like width: 1200px or min-width: 1000px
    const match = line.match(/(width|min-width)\s*:\s*([6-9]\d{2}|[1-9]\d{3,})\s*px/i);
    if (match) {
      console.log(`Line ${idx + 1}: ${line.trim()}`);
    }
  });
}

checkFile('C:/Users/DELL2/.gemini/antigravity/scratch/234district-clone/public/css/main.css');
checkFile('C:/Users/DELL2/.gemini/antigravity/scratch/234district-clone/public/css/home.css');
