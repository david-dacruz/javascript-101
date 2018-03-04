// Primitive types

// String
const name = 'John Doe';

// Numbers
const age = 29;

// Boolean
const hasKids = true;

// Null
// In JavaScript null is "nothing". It is supposed to be something that doesn't exist.
// Unfortunately, in JavaScript, the data type of null is an object.
// You can consider it a bug in JavaScript that typeof null is an object. It should be null.
// You can empty an object by setting it to null:
// https://www.w3schools.com/js/js_datatypes.asp
const car = null;

// Undefined
let test;

// Symbol
const sym = Symbol();

console.log('[DEBUG] >> Primitive types');
console.log('===================================');

console.log('[DEBUG] >> name typeof', typeof name);
console.log('[DEBUG] >> age typeof',typeof age);
console.log('[DEBUG] >> hasKids typeof',typeof hasKids);
console.log('[DEBUG] >> car typeof',typeof car);
console.log('[DEBUG] >> test typeof',typeof test);
console.log('[DEBUG] >> sym typeof',typeof sym);

console.log('===================================');

// Reference types - Objects
console.log('[DEBUG] >> Reference types');
console.log('===================================');

// Array
const hobbies = ['movies', 'music'];

// Obect litteral
const adress = {
  country: 'France',
  adress: 'DTC',
  zipcode: 13,
  promo: '13'
}

const today = new Date();

console.log('[DEBUG] >> hobbies typeof', typeof hobbies);
console.log('[DEBUG] >> adress typeof', typeof adress);
console.log('[DEBUG] >> adress.country typeof', typeof adress.country);
console.log('[DEBUG] >> adress.zipcode typeof', typeof adress.zipcode);
console.log('[DEBUG] >> adress.promo typeof', typeof adress.promo);
console.log('[DEBUG] >> today typeof', typeof today);
console.log('[DEBUG] >> today', today);
