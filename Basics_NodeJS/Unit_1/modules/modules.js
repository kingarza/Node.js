// We find the file and run it.
const people = require('./people.js');

console.log(people.people, people.ages);

// If we just want to extract a specific object
// We do the following
const { ages } = require('./people');

console.log(ages)

// This is built-in to node itself, We dont need to create
// an OS file its already build into node
const os = require('os');

//information about the OS
console.log(os.platform(), os.homedir());

