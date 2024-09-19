Here’s a more refined README in markdown format for your repository:

```markdown
# WEBP-PNG-TOOLS-NFT

A small set of tools for managing WEBP and PNG image files, designed specifically for NFT workflows.

## Features:
1. **Rename WEBP**: Randomizes and renames all `.webp` files sequentially (e.g., `1.webp`, `2.webp`).
2. **Convert WEBP to PNG**: Converts `.webp` images to `.png` using `sharp`.
3. **Compress PNG**: Compresses `.png` images to reduce file size with `sharp`.
4. **Rename PNG**: Renames compressed `.png` files sequentially.

## Requirements:
- [Node.js](https://nodejs.org/)
- [sharp](https://sharp.pixelplumbing.com/): Install via `npm install sharp`.

## Usage:

### 1. Rename WEBP Files
Run the `rename_webp.bat` script to rename all `.webp` files in the current directory sequentially.

```bash
rename_webp.bat
```

### 2. Convert WEBP to PNG
Run the `convert_webp_to_png.js` script using Node.js to convert all `.webp` files in the current directory to `.png`.

```bash
node convert_webp_to_png.js
```

### 3. Compress PNG Images
Run the `compress_png_images.js` script using Node.js to compress `.png` images for optimized storage.

```bash
node compress_png_images.js
```

### 4. Rename PNG Files
Run the `rename_png.bat` script to rename all compressed `.png` files sequentially.

```bash
rename_png.bat
```

## License
MIT License
```

This version is clear, concise, and provides a good overview of your project. Let me know if you'd like to make any further adjustments!
