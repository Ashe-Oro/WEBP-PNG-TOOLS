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
    } else if (path.extname(name).toLowerCase() === '.webp') {
      files_.push(name);
    }
  }
  return files_;
}

(async () => {
  console.log('Scanning directory for .webp files...');
  let files = getFiles(directoryPath);
  console.log(`Found ${files.length} .webp files. Converting to PNG...`);

  for (let file of files) {
    let outputFile = path.join(path.dirname(file), path.basename(file, '.webp') + '.png');
    try {
      await sharp(file)
        .png()
        .toFile(outputFile);
      console.log(`Converted: ${file} -> ${outputFile}`);
    } catch (err) {
      console.error(`Error converting file ${file}: ${err}`);
    }
  }

  console.log('\nAll files have been converted from WEBP to PNG.');
})();
