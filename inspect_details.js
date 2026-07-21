const fs = require('fs');
const htmlPath = 'C:\\Users\\DELL2\\.gemini\\antigravity\\scratch\\original.html';
const html = fs.readFileSync(htmlPath, 'utf8');

const targetStr = 'STU x Denim Tears Spade Web Belt';
const index = html.indexOf(targetStr);

if (index === -1) {
    console.log('Target string not found.');
} else {
    const start = Math.max(0, index - 1200);
    const end = index + 100;
    console.log('Preceding HTML:');
    console.log(html.slice(start, end));
}
