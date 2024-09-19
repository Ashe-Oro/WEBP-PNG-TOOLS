#!/usr/bin/env node

const inquirer = require('inquirer');
const imageTools = require('./js/image_tools');

// Function to display menu and keep application running
function showMenu() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'action',
        message: 'Choose an action:',
        choices: [
          '1. RENAME WEBP',
          '2. CONVERT WEBP TO PNG',
          '3. COMPRESS PNG',
          '4. RENAME PNG',
          '5. EXIT'
        ]
      }
    ])
    .then((answers) => {
      switch (answers.action) {
        case '1. RENAME WEBP':
          imageTools.renameWebp();
          break;
        case '2. CONVERT WEBP TO PNG':
          imageTools.convertWebpToPng();
          break;
        case '3. COMPRESS PNG':
          imageTools.compressPng();
          break;
        case '4. RENAME PNG':
          imageTools.renamePng();
          break;
        case '5. EXIT':
          console.log('Exiting the application.');
          return;
        default:
          console.log('Invalid choice');
      }
      // Show the menu again after an action is performed
      showMenu();
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });
}

// Start the application by showing the menu
showMenu();
