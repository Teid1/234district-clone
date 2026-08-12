const fs = require('fs');

const html = fs.readFileSync('C:/Users/DELL2/.gemini/antigravity/scratch/234district-clone/public/checkout.html', 'utf8');
const matches = html.match(/class=['\"][^'\"]*(?:container|grid|form|wrap|checkout)[^'\"]*['\"]/g) || [];

console.log("=== Checkout page containers ===");
const uniqueMatches = Array.from(new Set(matches));
uniqueMatches.forEach(m => console.log(m));
