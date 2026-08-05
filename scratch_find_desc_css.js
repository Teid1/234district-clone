const fs = require('fs');

const homeCss = fs.readFileSync('C:/Users/DELL2/.gemini/antigravity/scratch/234district-clone/public/css/home.css', 'utf8');
const lines = homeCss.split('\n');

console.log("=== Matches for description on product page ===");
lines.forEach((line, idx) => {
  if (line.includes('description') || line.includes('desc')) {
    console.log(`Line ${idx + 1}: ${line.trim()}`);
  }
});
