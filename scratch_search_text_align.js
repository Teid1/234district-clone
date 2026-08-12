const fs = require('fs');

const mainCss = fs.readFileSync('C:/Users/DELL2/.gemini/antigravity/scratch/234district-clone/public/css/main.css', 'utf8');
const lines = mainCss.split('\n');

console.log("=== Text-align CSS declarations ===");
lines.forEach((line, idx) => {
  if (line.includes('text-align')) {
    console.log(`${idx + 1}: ${line.trim()}`);
  }
});
