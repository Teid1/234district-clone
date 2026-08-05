const fs = require('fs');

const homeJsContent = fs.readFileSync('C:/Users/DELL2/.gemini/antigravity/scratch/234district-clone/public/js/home.js', 'utf8');
const lines = homeJsContent.split('\n');

console.log("=== Matches for Rebel Stroke in home.js ===");
lines.forEach((line, idx) => {
  if (line.includes('Rebel Stroke')) {
    console.log(`Line ${idx + 1}: ${line.trim()}`);
    for (let i = 1; i <= 6; i++) {
      console.log(`  Line ${idx + 1 + i}: ${lines[idx + i]}`);
    }
  }
});
