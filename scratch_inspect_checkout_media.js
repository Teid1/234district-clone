const fs = require('fs');

const html = fs.readFileSync('C:/Users/DELL2/.gemini/antigravity/scratch/234district-clone/public/checkout.html', 'utf8');
const lines = html.split('\n');

console.log("=== Checkout page media queries and responsive styling ===");
let printLines = false;
let braceCount = 0;

lines.forEach((line, idx) => {
  const trimmed = line.trim();
  if (trimmed.includes('@media')) {
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
