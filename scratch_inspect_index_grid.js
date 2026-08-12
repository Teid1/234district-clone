const fs = require('fs');

const html = fs.readFileSync('C:/Users/DELL2/.gemini/antigravity/scratch/234district-clone/public/index.html', 'utf8');
const matches = html.match(/class=['\"][^'\"]*(?:grid|product|container)[^'\"]*['\"]/g) || [];

console.log("=== Matching classes in index.html ===");
const uniqueMatches = Array.from(new Set(matches));
uniqueMatches.slice(0, 30).forEach(m => console.log(m));
