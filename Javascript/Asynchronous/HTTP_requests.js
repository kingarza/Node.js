// HTTP Requests
// Make HTTP requests to get data from another server
// We make these requests to API endpoints
// 
// When we make an http request we get a response (data) normally a JSON file

var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const request = new XMLHttpRequest();

/*
La propiedad XMLHttpRequest.readyState devuelve el estado en el que se encuentra un cliente XMLHttpRequest.

0 	UNSENT 	          Client has been created. open() not called yet.
1 	OPENED 	          open() has been called.
2 	HEADERS_RECEIVED  send() has been called, and headers and status are available.
3 	LOADING 	      Downloading; responseText holds partial data.
4 	DONE 	          The operation is complete.
*/
request.addEventListener('readystatechange', () => {
    if(request.readyState === 4){
        console.log(request.responseText);
    }
})

//SETTING UP THE REQUEST
// Type of request, endpoint (where to get that data from)
request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
request.send();


// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState