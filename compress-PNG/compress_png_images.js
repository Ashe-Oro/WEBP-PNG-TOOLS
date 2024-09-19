const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const directoryPath = process.argv[2] || '.';

function getFiles(dir, files_) {
  files_ = files_ || [];
  let files = fs.readdirSync(dir);
  for (let i in files) {
    let name = path.join(dir, files[i]);
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files_);
    } else if (path.extname(name).toLowerCase() === '.png') {
      files_.push(name);
    }
  }
  return files_;
}

(async () => {
  console.log('Scanning directory for .png files...');
  let files = getFiles(directoryPath);
  console.log(`Found ${files.length} .png files. Reducing file size...`);

  for (let file of files) {
    let outputFile = path.join(path.dirname(file), path.basename(file));
    try {
      await sharp(file)
        .png({
          compressionLevel: 9, // Max compression (0-9)
          palette: true,       // Convert to 8-bit palette PNG
          quality: 80,         // Quality for palette images (0-100)
        })
        .toFile(outputFile + '.compressed.png');
      console.log(`Compressed: ${file} -> ${outputFile}.compressed.png`);
    } catch (err) {
      console.error(`Error compressing file ${file}: ${err}`);
    }
  }

  console.log('\nAll PNG files have been compressed.');
})();
