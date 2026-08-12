const path = require('path');
const fs = require('fs');

const p = path.join(__dirname, 'public', 'index.html');
console.log("Resolved path from project root:", p);
console.log("File exists:", fs.existsSync(p));
