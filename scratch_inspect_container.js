const fs = require('fs');

const mainCss = fs.readFileSync('C:/Users/DELL2/.gemini/antigravity/scratch/234district-clone/public/css/main.css', 'utf8');
const lines = mainCss.split('\n');

console.log("=== Matches for .container in main.css ===");
lines.forEach((line, idx) => {
  if (line.includes('.container ') || line.trim() === '.container {') {
    console.log(`Line ${idx + 1}: ${line.trim()}`);
    for (let i = 1; i <= 6; i++) {
      console.log(`  Line ${idx + 1 + i}: ${lines[idx + i]}`);
    }
  }
});
