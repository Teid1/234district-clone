const fs = require('fs');
const XLSX = require('xlsx');

// 1. Read home.js
const homeJsPath = 'C:/Users/DELL2/.gemini/antigravity/scratch/234district-clone/public/js/home.js';
const homeJsContent = fs.readFileSync(homeJsPath, 'utf8');

// Use regex to extract PRODUCTS array
const productsRegex = /(const PRODUCTS = )(\[[\s\S]*?\])(;)/;
const productsMatch = homeJsContent.match(productsRegex);
if (!productsMatch) {
  console.error("Could not find PRODUCTS array in home.js!");
  process.exit(1);
}

const PRODUCTS = eval(productsMatch[2]);
console.log("Original products count:", PRODUCTS.length);

// 2. Load Excel
const workbook = XLSX.readFile('C:/Users/DELL2/Downloads/Copy of Products Import spreadsheet.xlsx');
const worksheet = workbook.Sheets[workbook.SheetNames[0]];
const excelProducts = XLSX.utils.sheet_to_json(worksheet);

function normalize(str) {
  if (!str) return '';
  return str
    .replace(/&#038;/g, '&')
    .replace(/&amp;/g, '&')
    .replace(/[\u2013\u2014]/g, '-')
    .replace(/[^a-zA-Z0-9]/g, '')
    .toLowerCase()
    .trim();
}

// 3. Update products details
let updatedCount = 0;
const updatedPRODUCTS = PRODUCTS.map(p => {
  let excelMatch = null;
  const normName = normalize(p.name);
  
  if (p.name === "Rebel Stroke Wide Leg Denim Jeans") {
    excelMatch = excelProducts.find(ep => ep.Name === "Painted Wide Leg Denim Jeans");
  } else {
    excelMatch = excelProducts.find(ep => normalize(ep.Name) === normName);
  }

  if (excelMatch) {
    p.price = excelMatch["Regular Price"] || p.price;
    p.description = excelMatch["Description"] || excelMatch["Short Description"] || "";
    updatedCount++;
  } else {
    console.log(`No match for: "${p.name}"`);
  }
  return p;
});

console.log(`Successfully matched and updated ${updatedCount} out of ${PRODUCTS.length} products.`);

// 4. Serialize updated PRODUCTS to formatted JSON string
const updatedProductsString = JSON.stringify(updatedPRODUCTS, null, 2);

// Re-inject into home.js content
const updatedHomeJsContent = homeJsContent.replace(productsRegex, `$1${updatedProductsString}$3`);

fs.writeFileSync(homeJsPath, updatedHomeJsContent, 'utf8');
console.log("Successfully wrote updated PRODUCTS array directly to home.js!");
