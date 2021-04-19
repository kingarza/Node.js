/*

    Read and write files

    File System module
    Allow us to read and write data to the file system.
*/
const fs = require('fs');

//                          file path,        character encoding
const txt = fs.readFileSync('./txt/input.txt','utf-8');
console.log(txt);

//string manipulation
const textOut = `This is what we know about the avocato: ${txt}.\nCreated on ${Date.now()}`;
//               file path,         what we will write in it
fs.writeFileSync('./txt/output.txt', textOut);
console.log('File written');
