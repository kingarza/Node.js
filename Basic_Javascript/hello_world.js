console.log('Hello World!');

/* var vs let */

// var puede ser declarado varias veces
var age = 10;
var age = 20;
console.log(age);

// let puede solo declarar una vez la variable
let age_2 = 10;
// let age_2 = 10; // si descomentamos daria error

 //al declarar un objeto con var, let o const, este puede ser modificado
const person = {
    name: 'Juanito',
    age : 20
}

console.log(person);

person.age  = 21;
person.country = 'México';

console.log(person);


/* funciones */

function sum (a, b) {
    console.log(a + b)
}

sum(10, 5);

const sum_2 = (a, b) => {
    console.log(a + b)
}

sum_2(10, 5);
