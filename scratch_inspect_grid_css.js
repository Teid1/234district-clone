const fs = require('fs');

const mainCss = fs.readFileSync('C:/Users/DELL2/.gemini/antigravity/scratch/234district-clone/public/css/main.css', 'utf8');
const lines = mainCss.split('\n');

console.log("=== Container and Max-width CSS rules ===");
lines.forEach((line, idx) => {
  if (line.includes('max-width') || line.includes('justify-content') || line.includes('.container') || line.includes('grid-template-columns')) {
    console.log(`${idx + 1}: ${line.trim()}`);
  }
});
