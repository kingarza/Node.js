var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const getTodos = (callback) => {    
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

    // request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
    request.open('GET', 'http://192.168.1.118:3000/todos.json');
    request.send();
}

getTodos((err, data) => {

    console.log('callback fired');
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});

//NOTAS: 
/*
Para leer un archivo JSON local se debe servir
*/