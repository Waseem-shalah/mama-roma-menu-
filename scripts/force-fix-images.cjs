const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const projectRoot = process.cwd();
const srcDir = path.join(projectRoot, "src");
const imagesDir = path.join(srcDir, "images");

const imageExts = [".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg"];
const codeExts = [".js", ".jsx", ".ts", ".tsx", ".css"];

function walk(dir, allowedExts) {
  let results = [];

  for (const item of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      results = results.concat(walk(fullPath, allowedExts));
    } else if (allowedExts.includes(path.extname(item))) {
      results.push(fullPath);
    }
  }

  return results;
}

function safeRename(oldPath, newPath) {
  if (oldPath === newPath) return;

  const tempPath = oldPath + ".temp-rename";

  try {
    execFileSync("git", ["mv", "-f", oldPath, tempPath], { stdio: "ignore" });
    execFileSync("git", ["mv", "-f", tempPath, newPath], { stdio: "ignore" });
  } catch {
    fs.renameSync(oldPath, tempPath);
    fs.renameSync(tempPath, newPath);
  }
}

console.log("\n🔍 Checking image filenames...\n");

// Step 1: force image extensions to lowercase
const imageFilesBefore = walk(imagesDir, imageExts.concat(imageExts.map(e => e.toUpperCase())));

for (const filePath of imageFilesBefore) {
  const dir = path.dirname(filePath);
  const fileName = path.basename(filePath);
  const ext = path.extname(fileName);
  const base = fileName.slice(0, -ext.length);

  const lowerExt = ext.toLowerCase();
  const newName = base + lowerExt;
  const newPath = path.join(dir, newName);

  if (fileName !== newName) {
    console.log(`🔁 Rename: ${fileName} → ${newName}`);
    safeRename(filePath, newPath);
  }
}

// Step 2: create real filename map after renaming
const realImageFiles = fs.readdirSync(imagesDir).filter(file =>
  imageExts.includes(path.extname(file).toLowerCase())
);

const imageMap = new Map();

for (const file of realImageFiles) {
  imageMap.set(file.toLowerCase(), file);
}

// Step 3: fix imports in all src code files
console.log("\n🛠 Fixing image imports...\n");

const codeFiles = walk(srcDir, codeExts);
let missingImages = [];
let changedFiles = [];

for (const codeFile of codeFiles) {
  let content = fs.readFileSync(codeFile, "utf8");
  let originalContent = content;

  content = content.replace(
    /(["'`])([^"'`]*?)([^\/"'`]+?\.(jpg|jpeg|png|webp|gif|svg))\1/gi,
    (match, quote, prefixPath, fileName) => {
      const lowerFile = fileName.toLowerCase();

      if (imageMap.has(lowerFile)) {
        const correctFileName = imageMap.get(lowerFile);

        if (fileName !== correctFileName) {
          console.log(`✅ Fixed in ${path.relative(projectRoot, codeFile)}: ${fileName} → ${correctFileName}`);
        }

        return `${quote}${prefixPath}${correctFileName}${quote}`;
      }

      // Only report likely local image imports, not external URLs
      if (!prefixPath.startsWith("http") && !prefixPath.startsWith("data:")) {
        missingImages.push({
          file: path.relative(projectRoot, codeFile),
          importName: fileName,
        });
      }

      return match;
    }
  );

  if (content !== originalContent) {
    fs.writeFileSync(codeFile, content, "utf8");
    changedFiles.push(path.relative(projectRoot, codeFile));
  }
}

console.log("\n📁 Real images now in src/images:\n");
for (const file of realImageFiles.sort()) {
  console.log(`- ${file}`);
}

if (changedFiles.length > 0) {
  console.log("\n✅ Updated files:\n");
  for (const file of changedFiles) {
    console.log(`- ${file}`);
  }
} else {
  console.log("\n✅ No import files needed changes.");
}

if (missingImages.length > 0) {
  console.log("\n❌ Missing images found:\n");

  for (const item of missingImages) {
    console.log(`File: ${item.file}`);
    console.log(`Missing image: ${item.importName}`);
    console.log("");
  }

  console.log("Fix or add the missing images before pushing.\n");
  process.exit(1);
}

console.log("\n🎉 All image imports match real files.\n");