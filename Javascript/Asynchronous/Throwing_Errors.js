// Async & await
// They basically allow us to do is chain promises together
// in a clean and much more readable way

const fetch = require("node-fetch");

// asynchronous function
const getTodos = async () => {
    //we can use the await keyword instead of .then method
    //the fetch return a promise
    //await saves a value until the promise is solved
    //when we get a response object back from using fetch
    //what we have to do is use .json method to get the data back
    const response = await fetch('http://192.168.1.118:3000/Javascript/Asynchronous/todos/luis.json');
    
    if(response.status !== 200)
        throw new Error('Cannot fetch the data');
    
    const data = await response.json();
    console.log(data);

};

console.log(1);
console.log(2);

getTodos()
    .then((data) => console.log('resolved: ', data));

console.log(3);
console.log(4);