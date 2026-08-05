const fs = require('fs');

const mainJs = fs.readFileSync('C:/Users/DELL2/.gemini/antigravity/scratch/234district-clone/public/js/main.js', 'utf8');
const lines = mainJs.split('\n');

console.log("=== Matches for custom-cursor in main.js ===");
lines.forEach((line, idx) => {
  if (line.includes('cursor') || line.includes('Cursor')) {
    console.log(`Line ${idx + 1}: ${line.trim()}`);
  }
});
