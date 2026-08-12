const fs = require('fs');

const homeCss = fs.readFileSync('C:/Users/DELL2/.gemini/antigravity/scratch/234district-clone/public/css/home.css', 'utf8');
const lines = homeCss.split('\n');

console.log("=== Lines containing 'checkout' in home.css ===");
lines.forEach((line, idx) => {
  if (line.toLowerCase().includes('checkout')) {
    console.log(`${idx + 1}: ${line.trim()}`);
  }
});
