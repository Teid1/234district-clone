const fs = require('fs');

const mainCss = fs.readFileSync('C:/Users/DELL2/.gemini/antigravity/scratch/234district-clone/public/css/main.css', 'utf8');
const homeCss = fs.readFileSync('C:/Users/DELL2/.gemini/antigravity/scratch/234district-clone/public/css/home.css', 'utf8');

console.log("=== products-grid in main.css ===");
mainCss.split('\n').forEach((line, idx) => {
  if (line.includes('products-grid') || line.includes('product-grid')) {
    console.log(`Line ${idx + 1}: ${line.trim()}`);
  }
});

console.log("=== products-grid in home.css ===");
homeCss.split('\n').forEach((line, idx) => {
  if (line.includes('products-grid') || line.includes('product-grid')) {
    console.log(`Line ${idx + 1}: ${line.trim()}`);
  }
});
