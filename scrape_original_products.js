const fs = require('fs');
const path = require('path');

const htmlPath = 'C:\\Users\\DELL2\\.gemini\\antigravity\\scratch\\original.html';
const html = fs.readFileSync(htmlPath, 'utf8');

const liBlocks = html.split('<li class="entry content-bg loop-entry product');
console.log(`Found ${liBlocks.length - 1} product blocks in original.html.`);

const parsedProducts = [];

liBlocks.slice(1).forEach((block, index) => {
    // Extract title
    const titleMatch = block.match(/class="woocommerce-LoopProduct-link-title[^"]*">([^<]+)<\/a>/i) || 
                       block.match(/class="woocommerce-loop-product__title[^"]*"><a[^>]*>([^<]+)<\/a>/i);
    let title = titleMatch ? titleMatch[1].trim() : 'Unknown Product';
    
    // Clean html entities
    title = title
        .replace(/&#8211;/g, '–')
        .replace(/&#038;/g, '&')
        .replace(/&#8217;/g, "'")
        .replace(/&amp;/g, '&');

    // Extract price from inside <bdi> container (bypassing the currencySymbol span)
    const priceMatch = block.match(/<bdi>(?:<span[^>]*>[^<]+<\/span>)?([\d,]+(?:\.\d{2})?)/i);
    const priceText = priceMatch ? priceMatch[1] : '0';
    const price = parseFloat(priceText.replace(/,/g, ''));

    // Extract images
    const innerCard = block.split('</li>')[0];
    const imgRegex = /src="([^"]+\.(?:jpg|png|jpeg|webp))"/gi;
    const images = [];
    let match;
    while ((match = imgRegex.exec(innerCard)) !== null) {
        images.push(match[1]);
    }

    const primaryImg = images[0] || '';
    const secondaryImg = images[1] || primaryImg;

    // Filter out logo image redirects if they crawled in
    const cleanPrimary = primaryImg.includes('logo') ? '' : primaryImg;
    const cleanSecondary = secondaryImg.includes('logo') ? '' : secondaryImg;

    if (cleanPrimary && title !== 'Unknown Product') {
        parsedProducts.push({
            name: title,
            price: price,
            image: cleanPrimary,
            secondaryImage: cleanSecondary
        });
    }
});

// Remove duplicates by product name
const uniqueProducts = [];
const seenNames = new Set();
for (const p of parsedProducts) {
    if (!seenNames.has(p.name)) {
        seenNames.add(p.name);
        uniqueProducts.push(p);
    }
}

console.log(`Parsed ${uniqueProducts.length} unique products.`);
console.log(JSON.stringify(uniqueProducts.slice(0, 5), null, 2));

// Save to JSON
fs.writeFileSync('C:\\Users\\DELL2\\.gemini\\antigravity\\scratch\\234district-clone\\extracted_products.json', JSON.stringify(uniqueProducts, null, 2));
