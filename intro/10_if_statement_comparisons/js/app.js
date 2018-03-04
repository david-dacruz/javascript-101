const id = 100;

// equal to
// if(id == 100){
//   console.log('id is 100 => ', id);
// } else {
//   console.log('else id => ', id);
// }

// // not equal to
// if(id != 101){
//   console.log('id is => 100', id);
// } else {
//   console.log('else id => ', id);
// }

// // equal to value and type
// if(id === 100){
//   console.log('Correct ', id);
// } else {
//   console.log('Incorrect ',typeof id, id);
// }

// // not equal to value and type
// if(id !== 100){
//   console.log('Correct it\'s not equal in value and type ',typeof id, id);
// } else {
//   console.log('Incorrect ',typeof id, id);
// }


// test if undefined
// if(typeof id !== 'undefined'){
//   console.log(`The ID is ${id}`);
// } else {
//   console.log('NO ID');
// }

// // greater or less than, >, <, <=, >=
// if(id > 200){
//   console.log('correct');
//  }else {
//   console.log('incorrect');
// }

// // if else
// const color = 'green';

// if(color === 'red'){
//   console.log('color is red');
// } else if(color == 'blue'){
//   console.log('color is blue');
// } else {
//   console.log('color is not red or blue');
// }

// logical operators &&, ||

const name = 'Steve';
const age = 14;

// if (age > 0 && age < 12 ){
//   console.log(`${name} is a child`);
// } else if(age >= 13 && age <= 19){
//   console.log(`${name} is a teen`);
// } else {
//   console.log(`${name} is an adult`);
// }

if (age > 16 || age > 65 ){
  console.log(`${name} can run`);
} else {
  console.log(`${name} can not run`);
}

// terneray operator
console.log(id === 100 ? 'Correct' : 'Incorrect');

// without braces
if(id == 100)
  console.log('correct');
else
  console.log('incorrect');