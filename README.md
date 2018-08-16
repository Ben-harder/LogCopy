# LogCopy
### Authour: Ben Harder, 2018

## Description
LogCopy is a GUI wrapper for a shell command to copy only Log/Txt files from a source to a destination while retaining folder structure. 

## Instructions
1. Enter a source directory.
2. Enter a destination directory.
3. Press 'copy'.

## Technical Information

### Info
The program was written using [Electron](https://electronjs.org/), a desktop application framework. It uses Node.js and is written in HTML, JavaScript, and CSS.

### Making Changes
If the program requires modifications, the developer will need [Node.js](https://nodejs.org/en/) installed. After installation, changes to the program's source code can be tested by executing the shell command 'npm start' in the projects directory. To create a new executable which contains these changes, execute the command 'npm run package-win'. The new executable will be located within the 'release-builds' folder. 

### Program Description
The program's main content is within two files. 'main.js' is the programs starting point; it creates and sets up the window as well as handles window events. 'index.html' contains all the HTML code that makes up the page's visual elements. 'index.html' also contains the programs JavaScript which can be found at the bottom of the file. This JavaScript controls the functionality of the application.
