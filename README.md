# WEBP-PNG-TOOLS-NFT
A small set of tools to manage WEBP and PNG files

Includes 4 tools. 

1. rename_webp.bat - for all *.webp files in a directory, this tool will rename to a random file name then rename all files 1.webp, 2.webp, 3. webp, etc. This is helpful for NFT collections.
2. convert_webp_to_png.js - uses Sharp to convert all *.webp files in a directory to *.png keeping naming convention.
3. compress_png_images.js - uses Sharp to compress all *.png images in a directory
4. rename_png.bat - renames all *png images in a directory to 1.png, 2.png, 3.png, etc. This is required since the previous tool, compress_png_images.js, will rename each file with the 'compressed' tag.

