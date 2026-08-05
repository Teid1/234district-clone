const fs = require('fs');

const mainCss = fs.readFileSync('C:/Users/DELL2/.gemini/antigravity/scratch/234district-clone/public/css/main.css', 'utf8');
const lines = mainCss.split('\n');

console.log("=== Matches for nav-actions-left ===");
lines.forEach((line, idx) => {
  if (line.includes('nav-actions-left')) {
    console.log(`Line ${idx + 1}: ${line.trim()}`);
  }
});
