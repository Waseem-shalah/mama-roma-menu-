const fs = require("fs");
const path = require("path");

const imagesDir = path.join(process.cwd(), "src", "images");
const imagesJs = path.join(imagesDir, "images.js");

const realFiles = fs.readdirSync(imagesDir);
const content = fs.readFileSync(imagesJs, "utf8");

const imports = [...content.matchAll(/["']\.\/([^"']+\.(jpg|jpeg|png|webp|JPG|JPEG|PNG|WEBP))["']/g)]
  .map(match => match[1]);

let hasError = false;

console.log("\nChecking image imports...\n");

for (const importedFile of imports) {
  const exactExists = realFiles.includes(importedFile);

  if (!exactExists) {
    hasError = true;

    const caseInsensitiveMatch = realFiles.find(
      file => file.toLowerCase() === importedFile.toLowerCase()
    );

    console.log(`❌ Missing or wrong case: ${importedFile}`);

    if (caseInsensitiveMatch) {
      console.log(`   Git/real file is:       ${caseInsensitiveMatch}`);
      console.log(`   Import should be:       ./${caseInsensitiveMatch}`);
    } else {
      console.log(`   No matching file found in src/images`);
    }

    console.log("");
  } else {
    console.log(`✅ ${importedFile}`);
  }
}

if (hasError) {
  console.log("\nFix the wrong imports above before pushing.\n");
  process.exit(1);
} else {
  console.log("\nAll image imports match exact filenames.\n");
}