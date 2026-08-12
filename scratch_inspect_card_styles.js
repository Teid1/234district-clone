const fs = require('fs');

const homeCss = fs.readFileSync('C:/Users/DELL2/.gemini/antigravity/scratch/234district-clone/public/css/home.css', 'utf8');
const lines = homeCss.split('\n');

console.log("=== Product Card Custom Styles in home.css ===");
let printLines = false;
let braceCount = 0;

lines.forEach((line, idx) => {
  const trimmed = line.trim();
  if (trimmed.startsWith('.product-card-custom')) {
    printLines = true;
    braceCount = 0;
  }
  
  if (printLines) {
    console.log(`${idx + 1}: ${line}`);
    if (trimmed.includes('{')) braceCount++;
    if (trimmed.includes('}')) braceCount--;
    if (trimmed.includes('}') && braceCount <= 0) {
      printLines = false;
    }
  }
});
