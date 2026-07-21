const fs = require('fs');
const path = require('path');

const htmlPath = 'C:\\Users\\DELL2\\.gemini\\antigravity\\scratch\\original.html';
if (!fs.existsSync(htmlPath)) {
    console.error('original.html not found.');
    process.exit(1);
}

const html = fs.readFileSync(htmlPath, 'utf8');
const regex = /https:\/\/234district\.com\/wp-content\/uploads\/[^\s"'>]+\.(?:jpg|png|jpeg|webp)/gi;

const matches = html.match(regex) || [];
const uniqueMatches = Array.from(new Set(matches));

console.log('Unique Image URLs found in original.html:');
uniqueMatches.forEach((url, i) => {
    console.log(`${i + 1}: ${url}`);
});
