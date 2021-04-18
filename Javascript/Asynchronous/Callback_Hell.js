/* 
    NOTAS: 
    Para leer un archivo JSON local se debe servir 
*/

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

getTodos('http://192.168.1.118:3000/todos/luigi.json').then((data) => {
    console.log('promise resolved: ', data);
}).catch((err) => {
    console.log('promise rejected ', err);
})

/*

// promise example

const getSomething = () => {
    return new Promise((resolve, reject) => {
        // fetch something
        resolve('some data');
        reject('some error');
    });
}

//the first arrow function is executed if the promise resolve, else the second
//getSomething().then((data) => {
//    console.log(data);
//},(err) => {
//    console.log(err);
//});

//another way to do it
getSomething().then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})

*/