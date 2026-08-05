const fs = require('fs');
const https = require('https');

const sampleUrl = 'https://234district.com/wp-content/uploads/2026/06/IMG_1821.jpg';
const outputPath = 'C:/Users/DELL2/.gemini/antigravity/scratch/234district-clone/public/images/IMG_1821.jpg';

const file = fs.createWriteStream(outputPath);
console.log("Downloading sample high-res image from:", sampleUrl);

https.get(sampleUrl, (response) => {
  if (response.statusCode === 200) {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      const stats = fs.statSync(outputPath);
      console.log(`Download completed! High-res file size: ${(stats.size / 1024).toFixed(1)} KB`);
    });
  } else {
    console.error(`Failed to download. Status code: ${response.statusCode}`);
  }
}).on('error', (err) => {
  console.error("Error:", err.message);
});
