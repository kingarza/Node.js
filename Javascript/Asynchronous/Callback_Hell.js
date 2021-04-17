/* 
    NOTAS: 
    Para leer un archivo JSON local se debe servir 
*/
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const getTodos = (resource, callback) => {    
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200){            
            const data = JSON.parse(request.responseText); //convert the JSON into JS object
            callback(undefined, data);
        }
        else if(request.readyState === 4){
            callback('Could not fectch data', undefined);
        }
    });

    request.open('GET', resource);
    request.send();
}

getTodos('http://192.168.1.118:3000/todos/luigi.json', (err, data) => {
    console.log(data);
    getTodos('http://192.168.1.118:3000/todos/mario.json', (err, data) => {
        console.log(data);
        getTodos('http://192.168.1.118:3000/todos/luis.json', (err, data) => {
            console.log(data);
        }); 
    });
});
