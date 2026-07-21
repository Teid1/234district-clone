const fs = require('fs');
const htmlPath = 'C:\\Users\\DELL2\\.gemini\\antigravity\\scratch\\original.html';
const html = fs.readFileSync(htmlPath, 'utf8');

const targetStr = 'IMG_1926-300x300.jpg';
const index = html.indexOf(targetStr);

if (index === -1) {
    console.log('Target string not found.');
} else {
    const start = Math.max(0, index - 350);
    const end = Math.min(html.length, index + 350);
    console.log('Surrounding HTML:');
    console.log(html.slice(start, end));
}
