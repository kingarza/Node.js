// it governs how we perform task that take some time to complete
// (e.g. Getting data from a data base)

// SYNCHRONOUS JS
// can run ONE statement at a time
console.log(1);
console.log(2);

//this does not block the code
setTimeout(() => {
    console.log("callback function");
}, 2000);

console.log(3);
console.log(4);

//output
// 1
// 2
// 3
// 4
// callback function