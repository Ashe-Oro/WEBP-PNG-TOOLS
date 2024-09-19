# WEBP-PNG-TOOLS

A set of tools for managing WEBP and PNG images, designed for renaming, converting, and compressing files in bulk.

## Features
1. **Rename WEBP Files**: Automatically rename all `.webp` files in `./webp-images`.
2. **Convert WEBP to PNG**: Convert `.webp` images to `.png` in `./png-images`.
3. **Compress PNG Files**: Compress `.png` images in `./png-images` to reduce file size.
4. **Rename PNG Files**: Rename `.png` files in `./png-images`.
5. **Exit**: Option to exit the application.

## Usage
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the tool:
   ```bash
   node index.js
   ```

## Directory Structure
- **webp-images/**: Directory for `.webp` images.
- **png-images/**: Directory for `.png` images.

## Requirements
- Node.js
- `sharp` (image processing library)

## License
MIT License

