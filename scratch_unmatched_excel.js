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

const homeNamesNorm = PRODUCTS.map(p => normalize(p.name));

console.log("=== Excel Products NOT matched in home.js ===");
excelProducts.forEach(ep => {
  if (!homeNamesNorm.includes(normalize(ep.Name))) {
    console.log(`- ${ep.Name} (Categories: ${ep.Categories}, Price: ${ep["Regular Price"]})`);
  }
});
