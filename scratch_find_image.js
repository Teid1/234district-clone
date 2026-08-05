const XLSX = require('xlsx');

const workbook = XLSX.readFile('C:/Users/DELL2/Downloads/Copy of Products Import spreadsheet.xlsx');
const worksheet = workbook.Sheets[workbook.SheetNames[0]];
const excelProducts = XLSX.utils.sheet_to_json(worksheet);

console.log("=== Excel rows containing '1616' or '1621' ===");
excelProducts.forEach(ep => {
  const rowStr = JSON.stringify(ep).toLowerCase();
  if (rowStr.includes('1616') || rowStr.includes('1621')) {
    console.log("Name:", ep.Name);
    console.log(JSON.stringify(ep, null, 2));
  }
});
