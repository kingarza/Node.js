// We are going to create a stream to read the blog3.txt file
const fs = require('fs');
//const { read } = require('node:fs');

const readStream = fs.createReadStream('Basics_NodeJS/docs/blog3.txt', { encoding : 'utf8'});

const writeStream = fs.createWriteStream('Basics_NodeJS/docs/blog4.txt');

//chunk : pedazo
// We are listening to a data event
// every time we recieve a buffer of data from the stream, we call the arrow function
/*
readStream.on('data', (chunk) => {
    console.log('---NEW CHUNK---');
    //console.log(chunk);
    console.log(chunk);
    writeStream.write('\nNEW CHUNK\n');
    writeStream.write(chunk);
})
*/

// Piping (do the same of the commented code)
readStream.pipe(writeStream);



