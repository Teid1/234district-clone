const fs = require('fs');

const homeCss = fs.readFileSync('C:/Users/DELL2/.gemini/antigravity/scratch/234district-clone/public/css/home.css', 'utf8');
const lines = homeCss.split('\n');

const searchSelectors = [
  '.products-grid-custom',
  '.lookbook-grid',
  '.journal-grid',
  '.footer-grid'
];

console.log("=== Grid Styles in home.css ===");

searchSelectors.forEach(selector => {
  let printLines = false;
  let braceCount = 0;
  
  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    if (trimmed.startsWith(selector)) {
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
});
