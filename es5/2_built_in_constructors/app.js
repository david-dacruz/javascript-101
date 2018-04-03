// strings
// set a primitive value to name1
const name1 = 'Jeff';

// create object much slower not recommended
const name2 = new String('Jeff');

console.log(name1);
// with object you can create attribtues
name2.foo = 'bar';
console.log(name2.foo);

// can run into problems when matching types
console.log(typeof name1);
console.log(typeof name2);
// example
if(name2 === 'Jeff'){
  console.log('yes');
} else {
  console.log('no')
}

// numbers
const num1 = 5;
const num2 = new Number(5);
console.log(num1);
console.log(typeof num1);
console.log(num2);
console.log(typeof num2);

// boolean
const bool1 = true;
const bool2 = new Boolean('true');
console.log(bool1);
console.log(typeof bool1);
console.log(bool2);
console.log(typeof bool2);

// functions
const getSum1 = function(x, y){
                  return x + y;
                }
console.log(getSum1(1, 1));


const getSum2 = new Function('x', 'y', 'return x + y');
console.log(getSum2(2, 2));

// object
const john = {name: 'John'};
const john1 = new Object({name: 'John'});
console.log(john);
console.log(john1);
console.log(typeof john);
console.log(typeof john1);

// arrays 
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);
console.log(arr1);
console.log(arr2);
console.log(typeof arr1);
console.log(typeof arr2);

// regular expression

const re1 = /\w+/;
const re2 = new RegExp('\\w+');
console.log(re1);
console.log(re2);