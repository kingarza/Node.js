/*
Global Object

While in browsers the global scope is the window object, in nodeJS the global scope
of a module is the module itself, so when you define a variable in the global scope
of your nodeJS module, it will be local to this module.

We dont have the window in the global namespace of node

Reference: https://stackoverflow.com/questions/43627622/what-is-the-global-object-in-nodejs
*/

//console.log(global);

//This function is going to show a message after 3 seconds (just one time)
global.setTimeout(() =>{
    console.log('In the timeout');
    //we clean, stop the int Interval
    clearInterval(int);
}, 3000);

//This function is going to run every 1 seconds
const int = setInterval(() => {
    console.log('In the interval');
}, 1000);

//Gets the absolute path of the current folder that this file is in
console.log(__dirname);

//Gets the absolute path of the folder with the file name added on
console.log(__filename);




