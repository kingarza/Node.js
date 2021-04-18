// Fetch API
//fetch reject only when get a network error

const fetch = require("node-fetch");

fetch('http://192.168.1.118:3000/Javascript/Asynchronous/todos/luis.json').then((response) => {
    console.log('resolved', response);
    return response.json(); //promise
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log('rejected', err);
});