const fs = require('fs');

const data = JSON.parse(fs.readFileSync('C:/Users/DELL2/.gemini/antigravity/scratch/234district-clone/extracted_products.json', 'utf8'));

console.log("=== Original Scraped Image URLs in extracted_products.json ===");
// Find some samples
const sampleNames = ["YardCrew", "Aevis", "Sunbind"];

sampleNames.forEach(name => {
  const prod = data.find(p => p.name && p.name.includes(name));
  if (prod) {
    console.log(`Product: "${prod.name}"`);
    console.log(`- Image URL: ${prod.imageUrl}`);
    console.log(`- Gallery URLs:`, prod.galleryUrls);
  }
});
