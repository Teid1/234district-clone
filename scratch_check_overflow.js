const fs = require('fs');

const mainCss = fs.readFileSync('C:/Users/DELL2/.gemini/antigravity/scratch/234district-clone/public/css/main.css', 'utf8');
const lines = mainCss.split('\n');

console.log("=== Checking for potential overflow fixed widths ===");
let inMediaQuery = false;
let mediaQueryDepth = 0;

lines.forEach((line, idx) => {
  const trimmed = line.trim();
  if (trimmed.includes('@media')) {
    inMediaQuery = true;
    mediaQueryDepth++;
  }
  if (inMediaQuery && trimmed.includes('}')) {
    // Basic bracket check for media query end
    const closeCount = (trimmed.match(/\}/g) || []).length;
    mediaQueryDepth -= closeCount;
    if (mediaQueryDepth <= 0) {
      inMediaQuery = false;
      mediaQueryDepth = 0;
    }
  }

  // Look for width: Xpx or min-width: Xpx
  const widthMatch = trimmed.match(/(?:min-)?width:\s*([0-9]+)px/);
  if (widthMatch) {
    const val = parseInt(widthMatch[1], 10);
    if (val > 360 && !inMediaQuery) {
      console.log(`Line ${idx + 1} (Outside Media Query): ${trimmed}`);
    }
  }
});
