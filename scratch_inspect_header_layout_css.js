const fs = require('fs');

const mainCss = fs.readFileSync('C:/Users/DELL2/.gemini/antigravity/scratch/234district-clone/public/css/main.css', 'utf8');
const lines = mainCss.split('\n');

console.log("=== Header columns layout rules ===");
lines.forEach((line, idx) => {
  if (line.includes('header-col') || line.includes('main-header') || line.includes('header-container')) {
    console.log(`Line ${idx + 1}: ${line.trim()}`);
  }
});
