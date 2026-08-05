const XLSX = require('xlsx');

const workbook = XLSX.readFile('C:/Users/DELL2/Downloads/Copy of Products Import spreadsheet.xlsx');
const worksheet = workbook.Sheets[workbook.SheetNames[0]];
const excelProducts = XLSX.utils.sheet_to_json(worksheet);

console.log("=== Excel Products with 'rebel', 'stroke', or 'jeans' ===");
excelProducts.forEach(ep => {
  const name = ep.Name || '';
  if (name.toLowerCase().includes('rebel') || name.toLowerCase().includes('stroke') || name.toLowerCase().includes('jeans')) {
    console.log(`- ${name}`);
  }
});
