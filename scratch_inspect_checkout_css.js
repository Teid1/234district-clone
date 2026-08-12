const fs = require('fs');

const mainCss = fs.readFileSync('C:/Users/DELL2/.gemini/antigravity/scratch/234district-clone/public/css/main.css', 'utf8');
const lines = mainCss.split('\n');

const searchSelectors = [
  '.checkout-layout',
  '.checkout-form-col',
  '.checkout-summary-col'
];

console.log("=== Checkout Styles in main.css ===");

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
