// Verify script is being called
// console.log('[DEBUG] >> Script file loaded');

// // Declaring variables var, let , const since es2015
// // letters, numbers, _, $
// // $ is not recommended unles using jQuery
// // _ is by convention private global variables
// // can not start with number
// // example var 1name is wrong correct is var name1
// // camelCase is the convention in this course
// // PascalCase is used in oop
// // for the constructor and the class names by convention
// var name = 'Pierre Martin';
// console.log(name);

// // You can reasign variables when using var or let
// name = 'David Dacruz';
// console.log(name);

// // You can create variables without assigning value 
// // If you console log it will be undefined
// // Before you assign a value to the variable
// var greeting;
// console.log(greeting); // undefined
// greeting = 'Hello';
// console.log(greeting);

// LET
// let and var are similar and almost the same
// on a global scope it's the same
// the advantage occur during block level scoping
// let name;
// name = 'Pierre Martin';
// console.log(name);
// // You can reasign variables when using var or let
// name = 'David Dacruz';
// console.log(name);

// CONST
// cain't be declared without a value being assigned
const name = 'John Doe';
console.log(name);
// can not reassign
// throws => Uncaught TypeError: 
// Assignment to constant variable.
// name = 'Me'; 

const person = {
  name: 'John',
  age: 30
}

// we can actually MUTATE const/change values 
// we just cain't reassign person
// even though we change the data it's still
// set to this person object
person.name = 'David';
person.age = 29;

console.log(person);

// same applies to arrays
const numbers = [1,2,3,4,5];
console.log(numbers);

// change the first number in the array
numbers[0] = 0;
console.log(numbers);

// add number in the array 
numbers.push(6);
console.log(numbers);