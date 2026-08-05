const fs = require('fs');
const XLSX = require('xlsx');

const homeJsContent = fs.readFileSync('C:/Users/DELL2/.gemini/antigravity/scratch/234district-clone/public/js/home.js', 'utf8');

const productsMatch = homeJsContent.match(/const PRODUCTS = (\[[\s\S]*?\]);/);
if (!productsMatch) {
  console.log("Could not find PRODUCTS array in home.js!");
  process.exit(1);
}

const PRODUCTS = eval(productsMatch[1]);

const workbook = XLSX.readFile('C:/Users/DELL2/Downloads/Copy of Products Import spreadsheet.xlsx');
const worksheet = workbook.Sheets[workbook.SheetNames[0]];
const excelProducts = XLSX.utils.sheet_to_json(worksheet);

function normalize(str) {
  if (!str) return '';
  return str
    .replace(/&#038;/g, '&')
    .replace(/&amp;/g, '&')
    .replace(/[\u2013\u2014]/g, '-') // Normalize dashes
    .replace(/[^a-zA-Z0-9]/g, '')    // Remove non-alphanumeric characters
    .toLowerCase()
    .trim();
}

let matched = 0;
let unmatched = [];

PRODUCTS.forEach(p => {
  const normName = normalize(p.name);
  const excelMatch = excelProducts.find(ep => normalize(ep.Name) === normName);
  
  if (excelMatch) {
    matched++;
  } else {
    unmatched.push(p.name);
  }
});

console.log(`Matched with normalization: ${matched} / ${PRODUCTS.length}`);
if (unmatched.length > 0) {
  console.log("Still unmatched products:", unmatched);
  
  // Print some Excel names for manual check
  console.log("\nSample Excel names:");
  excelProducts.slice(0, 15).forEach(ep => console.log(`- ${ep.Name}`));
}
