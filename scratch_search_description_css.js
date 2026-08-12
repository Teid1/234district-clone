const fs = require('fs');

const mainCss = fs.readFileSync('C:/Users/DELL2/.gemini/antigravity/scratch/234district-clone/public/css/main.css', 'utf8');
const lines = mainCss.split('\n');

console.log("=== Description and text alignment CSS selectors ===");
let printLines = false;
let braceCount = 0;

lines.forEach((line, idx) => {
  const trimmed = line.trim();
  if (trimmed.includes('.product-desc') || trimmed.includes('.product-description') || trimmed.includes('.desc') || trimmed.includes('description') || trimmed.includes('policy-content') || trimmed.includes('quick-view')) {
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
