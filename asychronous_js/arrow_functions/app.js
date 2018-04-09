// es5
// const sayHello = function(){
//   console.log('Hello');
// }

// arrow function
// const sayHello = () => {
//   console.log('Hello');
// }

// since it's one linne even shorter/ cleaner
//const sayHello = () => console.log('Hello');

// one line returns
// const sayHello = () => 'Hello';

// same a above 
// const sayHello = () => {
//   return 'Hello';
// }

// console.log(sayHello());

// return object
// const sayHello = () =>  ({ msg: 'hello' });

// console.log(sayHello().msg);

// return single param
// const sayHello = name =>  (console.log(`Hello ${name}`));

// sayHello('David');

// const sayHello = (firstName, lastName) =>  (console.log(`Hello ${firstName} ${lastName}`));

// sayHello('David', 'Dacruz');

const users = ['Nathan', 'John', 'William'];

// const nameLengths = users.map(function(name){
//   return name.length;
// });

// const nameLengths = users.map((name) => {
//   return name.length;
// });

// all three functions do the same
const nameLengths = users.map(name =>  name.length);

console.log(nameLengths);