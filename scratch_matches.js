const fs = require('fs');
const XLSX = require('xlsx');

const homeJsContent = fs.readFileSync('C:/Users/DELL2/.gemini/antigravity/scratch/234district-clone/public/js/home.js', 'utf8');
const PRODUCTS = eval(homeJsContent.match(/const PRODUCTS = (\[[\s\S]*?\]);/)[1]);

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

console.log("=== Matching Details ===");
PRODUCTS.forEach(p => {
  const normName = normalize(p.name);
  const excelMatch = excelProducts.find(ep => normalize(ep.Name) === normName);
  if (excelMatch) {
    console.log(`Match: "${p.name}" ===> "${excelMatch.Name}"`);
  } else {
    console.log(`Unmatched: "${p.name}"`);
  }
});
