// create array
const numbers = [1,23,2,5,6,9];
const numbers2 = new Array(1,23,2,5,6,9);
const fruit = ['Pomme','Apple', 'Bannana', 'Orange'];
const mixed = [22, 'hello', true, undefined, null, {a:1, b:2}, new Date()];

let val;

// get array length
// val = numbers.length;
// console.log(val);

// // check to see if is array?
// val = Array.isArray(numbers);
// console.log(val);

// // get a single value from array
// val = numbers[1];
// console.log(val);

// // insert into array
// numbers[1] = 100;
// console.log(numbers);

// // find index of value
// val = numbers.indexOf(100);
// console.log(val);

// // mutating arrays
// // add to end of the array
// numbers.push(69);
// console.log(numbers);
// // add to front of the array
// numbers.unshift(69);
// console.log(numbers);

// // Take off from end of array 
// numbers.pop();
// console.log(numbers);

// // Take off from begining of array 
// // add to front of the array
// numbers.shift();
// console.log(numbers);

// // splice values
// numbers.splice(0,1);
// console.log(numbers);

// // reverse the array
// numbers.reverse();
// console.log(numbers);

// concatenate arrays together
// val = numbers.concat(numbers2);
// console.log(val);

// sorting arrays
// val = fruit.sort();
// console.log(val);

// // use the compare function instead
// val = numbers.sort();
// console.log(val);

// // sorting numbers compare function
// val = numbers.sort(function(x,y){
//   return x - y;
// });
// console.log(val);

// // Reverse sorting numbers compare function
// val = numbers.sort(function(x,y){
//   return y - x;
// });
// console.log(val);

// find the largest number over 2 from the array
function over2(num){
  return num > 2;
}

val = numbers.find(over2);
console.log(val);

// find the smallet number under 2 from the array

function under2(num){
  return num < 2;
}

val = numbers.find(under2);
console.log(val);