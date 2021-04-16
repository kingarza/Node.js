var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const getTodos = () => {    
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200){
            callback(undefined, request.responseText);
        }
        else if(request.readyState === 4){
            callback('Could not fectch data', undefined);
        }
    });

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
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