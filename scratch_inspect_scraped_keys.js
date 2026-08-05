const fs = require('fs');

const data = JSON.parse(fs.readFileSync('C:/Users/DELL2/.gemini/antigravity/scratch/234district-clone/extracted_products.json', 'utf8'));

console.log("Keys in first element:", Object.keys(data[0]));
console.log("First element details:", JSON.stringify(data[0], null, 2));
