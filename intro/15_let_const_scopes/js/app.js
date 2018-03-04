// let and const have a block and function level scope
// var has a global scope
// global scope
var a = 1;
let b = 2;
const c = 3;


// function test(){
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log(`Function scope a: ${a} b: ${b} c: ${c}`);
// }


// if(true){
//  // block scope
//  // var a defined globaly changes it's value 
//  // in the if and affects global scope
//  var a = 4;
//  let b = 5;
//  const c = 6;
//  console.log(`If scope a: ${a} b: ${b} c: ${c}`);
// }

// console.log(`Global scope a: ${a} b: ${b} c: ${c}`);
// // test();

for(let a = 0; a < 10; a++){
  console.log(`for scope a: ${a}`);
}
console.log(`Global scope a: ${a} b: ${b} c: ${c}`);

for(var a = 0; a < 10; a++){
  console.log(`for scope a: ${a}`);
}

console.log(`Global scope a: ${a} b: ${b} c: ${c}`);




