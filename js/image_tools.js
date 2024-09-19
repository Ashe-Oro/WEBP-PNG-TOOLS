#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Rename WEBP files in the ./webp-images directory
function renameWebp() {
  const webpDir = path.join(__dirname, '..', 'webp-images');
  const files = fs.readdirSync(webpDir).filter(file => path.extname(file).toLowerCase() === '.webp');

  if (files.length === 0) {
    console.log('No WEBP files found to rename.');
    return;
  }

  let renamedCount = 0;

  files.forEach((file, index) => {
    const newFileName = `${index + 1}.webp`;
    const oldFilePath = path.join(webpDir, file);
    const newFilePath = path.join(webpDir, newFileName);

    if (oldFilePath !== newFilePath) {
      try {
        fs.renameSync(oldFilePath, newFilePath);
        renamedCount++;
        console.log(`Renamed: ${file} -> ${newFileName}`);
      } catch (err) {
        console.error(`Error renaming ${file}: ${err}`);
      }
    }
  });

  if (renamedCount === 0) {
    console.log('No files were renamed.');
  } else {
    console.log('All applicable WEBP files have been renamed.');
  }
}

// Rename PNG files in the ./png-images directory
function renamePng() {
  const pngDir = path.join(__dirname, '..', 'png-images');
  const files = fs.readdirSync(pngDir).filter(file => path.extname(file).toLowerCase() === '.png');

  if (files.length === 0) {
    console.log('No PNG files found to rename.');
    return;
  }

  let renamedCount = 0;

  files.forEach((file, index) => {
    const newFileName = `${index + 1}.png`;
    const oldFilePath = path.join(pngDir, file);
    const newFilePath = path.join(pngDir, newFileName);

    if (oldFilePath !== newFilePath) {
      try {
        fs.renameSync(oldFilePath, newFilePath);
        renamedCount++;
        console.log(`Renamed: ${file} -> ${newFileName}`);
      } catch (err) {
        console.error(`Error renaming ${file}: ${err}`);
      }
    }
  });

  if (renamedCount === 0) {
    console.log('No files were renamed.');
  } else {
    console.log('All applicable PNG files have been renamed.');
  }
}


// Get files from a directory based on the file extension
function getFiles(dir, ext) {
  const files_ = [];
  let files = fs.readdirSync(dir);
  for (let i in files) {
    let name = path.join(dir, files[i]);
    if (fs.statSync(name).isDirectory()) {
      files_.push(...getFiles(name, ext));
    } else if (path.extname(name).toLowerCase() === ext) {
      files_.push(name);
    }
  }
  return files_;
}

// Convert WEBP to PNG
function convertWebpToPng() {
  const webpDir = './webp-images';
  const pngDir = './png-images';

  fs.mkdirSync(pngDir, { recursive: true });
  let files = getFiles(webpDir, '.webp');
  console.log(`Found ${files.length} .webp files. Converting to PNG...`);

  (async () => {
    for (let file of files) {
      let outputFile = path.join(pngDir, path.basename(file, '.webp') + '.png');
      try {
        await sharp(file)
          .png()
          .toFile(outputFile);
        console.log(`Converted: ${file} -> ${outputFile}`);
      } catch (err) {
        console.error(`Error converting ${file}: ${err}`);
      }
    }
    console.log('All files have been converted from WEBP to PNG.');
  })();
}

// Compress PNG files
function compressPng() {
  const pngDir = './png-images';
  let files = getFiles(pngDir, '.png');
  console.log(`Found ${files.length} .png files. Compressing...`);

  (async () => {
    for (let file of files) {
      let outputFile = path.join(pngDir, path.basename(file, '.png') + '.compressed.png');
      try {
        await sharp(file)
          .png({
            compressionLevel: 9,
            palette: true,
            quality: 80,
          })
          .toFile(outputFile);
        console.log(`Compressed: ${file} -> ${outputFile}`);
      } catch (err) {
        console.error(`Error compressing ${file}: ${err}`);
      }
    }
    console.log('All PNG files have been compressed.');
  })();
}

// Export functions for use in index.js
module.exports = {
  convertWebpToPng,
  compressPng,
  renameWebp,
  renamePng
};
