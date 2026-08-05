const fs = require('fs');

const indexHtml = fs.readFileSync('C:/Users/DELL2/.gemini/antigravity/scratch/234district-clone/public/index.html', 'utf8');
const lines = indexHtml.split('\n');

console.log("=== Matches for category hash links in index.html ===");
lines.forEach((line, idx) => {
  if (line.includes('#collections-section') || line.includes('#accessories-section') || line.includes('#bottoms-section') || line.includes('#tops-section')) {
    console.log(`Line ${idx + 1}: ${line.trim()}`);
  }
});
