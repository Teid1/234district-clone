const fs = require('fs');
const path = require('path');
const https = require('https');

const IMAGES_TO_DOWNLOAD = [
  // Logo
  { url: 'https://234district.com/wp-content/uploads/2026/04/cropped-234District-logo-on-wall-Black-and-white-theme-Photoroom.png', filename: 'logo.png' },
  // Hero slides
  { url: 'https://234district.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-08-at-12.43.59-AM-3.jpeg', filename: 'hero-1.jpg' },
  { url: 'https://234district.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-08-at-12.43.59-AM-2.jpeg', filename: 'hero-2.jpg' },
  { url: 'https://234district.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-08-at-12.46.05-AM-2.jpeg', filename: 'hero-3.jpg' },
  // Products
  { url: 'https://234district.com/wp-content/uploads/2026/06/IMG_1821-300x300.jpg', filename: 'IMG_1821-300x300.jpg' },
  { url: 'https://234district.com/wp-content/uploads/2026/06/IMG_1823-300x300.jpg', filename: 'IMG_1823-300x300.jpg' },
  { url: 'https://234district.com/wp-content/uploads/2026/06/IMG_1035-300x300.jpg', filename: 'IMG_1035-300x300.jpg' },
  { url: 'https://234district.com/wp-content/uploads/2026/06/IMG_1034-300x300.jpg', filename: 'IMG_1034-300x300.jpg' },
  { url: 'https://234district.com/wp-content/uploads/2026/06/IMG_1715-300x300.jpg', filename: 'IMG_1715-300x300.jpg' },
  { url: 'https://234district.com/wp-content/uploads/2026/06/IMG_1716-300x300.jpg', filename: 'IMG_1716-300x300.jpg' },
  { url: 'https://234district.com/wp-content/uploads/2026/06/IMG_1694-300x300.jpg', filename: 'IMG_1694-300x300.jpg' },
  { url: 'https://234district.com/wp-content/uploads/2026/06/IMG_1700-300x300.jpg', filename: 'IMG_1700-300x300.jpg' },
  { url: 'https://234district.com/wp-content/uploads/2026/06/IMG_1692-300x300.jpg', filename: 'IMG_1692-300x300.jpg' },
  { url: 'https://234district.com/wp-content/uploads/2026/06/IMG_1693-300x300.jpg', filename: 'IMG_1693-300x300.jpg' },
  { url: 'https://234district.com/wp-content/uploads/2026/06/IMG_1581-300x300.jpg', filename: 'IMG_1581-300x300.jpg' },
  { url: 'https://234district.com/wp-content/uploads/2026/06/IMG_1580-300x300.jpg', filename: 'IMG_1580-300x300.jpg' },
  { url: 'https://234district.com/wp-content/uploads/2026/06/IMG_1462-300x300.jpg', filename: 'IMG_1462-300x300.jpg' },
  { url: 'https://234district.com/wp-content/uploads/2026/06/IMG_1463-300x300.jpg', filename: 'IMG_1463-300x300.jpg' },
  { url: 'https://234district.com/wp-content/uploads/2026/06/IMG_1863-300x300.jpg', filename: 'IMG_1863-300x300.jpg' },
  { url: 'https://234district.com/wp-content/uploads/2026/06/IMG_1864-300x300.jpg', filename: 'IMG_1864-300x300.jpg' },
  { url: 'https://234district.com/wp-content/uploads/2026/06/IMG_1854-300x300.jpg', filename: 'IMG_1854-300x300.jpg' },
  { url: 'https://234district.com/wp-content/uploads/2026/06/IMG_1855-300x300.jpg', filename: 'IMG_1855-300x300.jpg' },
  { url: 'https://234district.com/wp-content/uploads/2026/06/IMG_1752-300x300.jpg', filename: 'IMG_1752-300x300.jpg' },
  { url: 'https://234district.com/wp-content/uploads/2026/06/IMG_1758-300x300.jpg', filename: 'IMG_1758-300x300.jpg' },
  { url: 'https://234district.com/wp-content/uploads/2026/06/IMG_1759-300x300.jpg', filename: 'IMG_1759-300x300.jpg' },
  { url: 'https://234district.com/wp-content/uploads/2026/06/IMG_1762-300x300.jpg', filename: 'IMG_1762-300x300.jpg' },
  { url: 'https://234district.com/wp-content/uploads/2026/06/IMG_1744-300x300.jpg', filename: 'IMG_1744-300x300.jpg' },
  { url: 'https://234district.com/wp-content/uploads/2026/06/IMG_1745-300x300.jpg', filename: 'IMG_1745-300x300.jpg' },
  { url: 'https://234district.com/wp-content/uploads/2026/06/IMG_1749-300x300.jpg', filename: 'IMG_1749-300x300.jpg' },
  { url: 'https://234district.com/wp-content/uploads/2026/06/IMG_1741-300x300.jpg', filename: 'IMG_1741-300x300.jpg' },
  { url: 'https://234district.com/wp-content/uploads/2026/06/IMG_1739-300x300.jpg', filename: 'IMG_1739-300x300.jpg' },
  { url: 'https://234district.com/wp-content/uploads/2026/06/IMG_1648-300x300.jpg', filename: 'IMG_1648-300x300.jpg' },
  { url: 'https://234district.com/wp-content/uploads/2026/06/IMG_1649-300x300.jpg', filename: 'IMG_1649-300x300.jpg' },
  { url: 'https://234district.com/wp-content/uploads/2026/06/IMG_1615-300x300.jpg', filename: 'IMG_1615-300x300.jpg' },
  { url: 'https://234district.com/wp-content/uploads/2026/06/IMG_1616-300x300.jpg', filename: 'IMG_1616-300x300.jpg' },
  { url: 'https://234district.com/wp-content/uploads/2026/06/IMG_1537-300x300.jpg', filename: 'IMG_1537-300x300.jpg' },
  { url: 'https://234district.com/wp-content/uploads/2026/06/IMG_1538-300x300.jpg', filename: 'IMG_1538-300x300.jpg' },
  { url: 'https://234district.com/wp-content/uploads/2026/06/IMG_1549-300x300.jpg', filename: 'IMG_1549-300x300.jpg' },
  { url: 'https://234district.com/wp-content/uploads/2026/06/IMG_1550-300x300.jpg', filename: 'IMG_1550-300x300.jpg' },
  { url: 'https://234district.com/wp-content/uploads/2026/06/IMG_1556-300x300.jpg', filename: 'IMG_1556-300x300.jpg' },
  { url: 'https://234district.com/wp-content/uploads/2026/06/IMG_1557-300x300.jpg', filename: 'IMG_1557-300x300.jpg' },
  { url: 'https://234district.com/wp-content/uploads/2026/06/IMG_1523-300x300.jpg', filename: 'IMG_1523-300x300.jpg' },
  { url: 'https://234district.com/wp-content/uploads/2026/06/IMG_1524-300x300.jpg', filename: 'IMG_1524-300x300.jpg' },
  { url: 'https://234district.com/wp-content/uploads/2026/06/IMG_1565-300x300.jpg', filename: 'IMG_1565-300x300.jpg' },
  { url: 'https://234district.com/wp-content/uploads/2026/06/IMG_1566-300x300.jpg', filename: 'IMG_1566-300x300.jpg' },
  { url: 'https://234district.com/wp-content/uploads/2026/06/IMG_1568-300x300.jpg', filename: 'IMG_1568-300x300.jpg' },
  { url: 'https://234district.com/wp-content/uploads/2026/06/IMG_1569-300x300.jpg', filename: 'IMG_1569-300x300.jpg' }
];

const destDir = path.join(__dirname, 'public', 'images');

// Ensure directory exists
if (!fs.existsSync(destDir)){
    fs.mkdirSync(destDir, { recursive: true });
}

function download(url, dest, callback) {
    const file = fs.createWriteStream(dest);
    https.get(url, {
        headers: { 'User-Agent': 'Mozilla/5.0' }
    }, function(response) {
        // Automatically handle temporary or permanent HTTP redirects recursively
        if (response.statusCode === 301 || response.statusCode === 302 || response.statusCode === 307 || response.statusCode === 308) {
            file.close();
            fs.unlink(dest, () => {});
            const redirectUrl = response.headers.location;
            console.log(`Redirect status ${response.statusCode} - following path: ${redirectUrl}`);
            download(redirectUrl, dest, callback);
            return;
        }

        if (response.statusCode !== 200) {
            file.close();
            fs.unlink(dest, () => {});
            callback(new Error(`Status ${response.statusCode}`));
            return;
        }
        
        response.pipe(file);
        file.on('finish', function() {
            file.close(callback);
        });
    }).on('error', function(err) {
        fs.unlink(dest, () => {});
        callback(err);
    });
}

let currentIndex = 0;

function downloadNext() {
    if (currentIndex >= IMAGES_TO_DOWNLOAD.length) {
        console.log('SUCCESS: All original assets downloaded locally.');
        process.exit(0);
    }
    const item = IMAGES_TO_DOWNLOAD[currentIndex];
    const destPath = path.join(destDir, item.filename);

    // Skip if already downloaded and has correct size to avoid redundant requests
    if (fs.existsSync(destPath) && fs.statSync(destPath).size > 1000) {
        console.log(`Skipping (Already Exists): ${item.filename}`);
        currentIndex++;
        return downloadNext();
    }
    
    console.log(`Downloading (${currentIndex + 1}/${IMAGES_TO_DOWNLOAD.length}): ${item.filename}...`);
    
    download(item.url, destPath, (err) => {
        if (err) {
            console.error(`Skipping due to error: ${item.filename}`, err);
        } else {
            console.log(`Saved: ${item.filename}`);
        }
        currentIndex++;
        setTimeout(downloadNext, 100); // Politeness delay
    });
}

downloadNext();
