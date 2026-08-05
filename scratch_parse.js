const XLSX = require('xlsx');

try {
  const workbook = XLSX.readFile('C:/Users/DELL2/Downloads/Copy of Products Import spreadsheet.xlsx');
  console.log("Worksheet names:", workbook.SheetNames);

  const firstSheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[firstSheetName];
  const jsonData = XLSX.utils.sheet_to_json(worksheet);

  console.log("Total rows found:", jsonData.length);
  if (jsonData.length > 0) {
    console.log("Column headers:", Object.keys(jsonData[0]));
    console.log("--- First row sample ---");
    console.log(JSON.stringify(jsonData[0], null, 2));
  }
} catch (err) {
  console.error("Error reading file:", err);
}
