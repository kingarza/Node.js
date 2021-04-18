const getTodos = ((resource, callback) => {
    return new Promise((resolve, reject) => {
        var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
        const request = new XMLHttpRequest();
    
        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200){            
                const data = JSON.parse(request.responseText); //convert the JSON into JS object
                resolve(data);
            }
            else if(request.readyState === 4){
                reject('Error getting resource');
            }
        });
        
        request.open('GET', resource);
        request.send();
    });
});

getTodos('http://192.168.1.118:3000/Javascript/Asynchronous/todos/luigi.json').then((data) => {
    console.log('promise 1 resolved: ', data);
    return getTodos('http://192.168.1.118:3000/Javascript/Asynchronous/todos/mario.json');
}).then((data) => {
    console.log('promise 2 resolved: ', data);
    return getTodos('http://192.168.1.118:3000/Javascript/Asynchronous/todos/luis.json');
}).then((data) => {
    console.log('promise 2 resolved: ', data);
}).catch((err) => {
    console.log('promise rejected ', err);
})

