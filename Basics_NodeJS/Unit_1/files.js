//core module to do the next interactions
const fs = require('fs');
const { read } = require('node:fs');
//const { copyFileSync } = require('node:fs');

// reading files callback function...
fs.readFile('Basics_NodeJS/docs/blog1.txt', (err, data) => {
    if(err)
        console.log(err);
    else
        console.log('ReadFile: ' + data.toString()); // Hello, World
});

// writing files
//if the file doesnt exist, the function create it
fs.writeFile('Basics_NodeJS/docs/blog2.txt', 'Luis Garza', () => {
    console.log('File was written');
});

// directories (create and delete)
//Check if the folder exist first of all, and then created if it doesnt exist
if(!fs.existsSync('Basics_NodeJS/assets')){
    fs.mkdir('Basics_NodeJS/assets', (err) => {
        if(err){
            console.log(err);
        }
        console.log('Folder created');
    })
}
else{ //delete the folder
    fs.rmdir('Basics_NodeJS/assets', (err) => {
        if(err) {
            console.log(err);
        }
        console.log('Folder deleted');
    });
}

// deleting files
if(fs.existsSync('Basics_NodeJS/docs/delete.txt')){
    fs.unlink('Basics_NodeJS/docs/delete.txt', (err) => {
        if(err){
            console.log(err);
        }
        console.log('File deleted');
    })
}

/*

Using streams we can start using the data before its fully been read.


*/