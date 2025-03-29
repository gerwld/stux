const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const imagesDir = path.join(__dirname, "public/images/previews");
const outputFile = path.join(__dirname, "public/blurData.json");

async function getFilesRecursively(dir) {
  let files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    if (fs.lstatSync(fullPath).isDirectory()) {
      files = files.concat(await getFilesRecursively(fullPath)); // Recurse into subdirectories
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

async function generateBlurData() {
  const files = await getFilesRecursively(imagesDir);
  const blurData = {};

  for (const filePath of files) {
    const relativePath = path.relative(imagesDir, filePath); // Keep relative path for JSON keys
    try {
      const buffer = await sharp(filePath)
        .resize(200) // Small size for blur effect
        .blur(0)
        .toBuffer();
      const base64 = `data:image/jpeg;base64,${buffer.toString("base64")}`;
      blurData[relativePath] = base64;
    } catch (error) {
      console.error(`Failed to process ${filePath}:`, error);
    }
  }

  fs.writeFileSync(outputFile, JSON.stringify(blurData, null, 2));
  console.log("BlurDataURL generated!");
}

generateBlurData();
