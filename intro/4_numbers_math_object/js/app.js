const num1 = 100;
const num2 = 60;
let sum;

// Simple math
sum = num1 + num2;
sum = num1 * num2;
sum = num1 / num2;
// % le reste de la division 100 / 60 = 1 et il reste 40
sum = num1 % num2;
console.log(sum);

// Math Object
const pi = Math.PI;
console.log(pi);

const euler = Math.E;
console.log(euler);

let round = Math.round(2.4);
console.log(round);

round = Math.ceil(2.4);
console.log(round);

round = Math.floor(2.4);
console.log(round);

const sqrt = Math.sqrt(64);
console.log(sqrt);

const abs = Math.abs(-3);
console.log(abs);

const pow = Math.pow(8, 2);
console.log(pow);

const min = Math.min(2,4,5,1,10,9,8,-2);
console.log(min);

const max = Math.max(2,4,5,1,10,9,8,-2);
console.log(max);

const random = Math.random();
console.log(random);

// To get a random whole number Math.random() * by max number desired + 1
const wholeRandomNumber = Math.floor(Math.random() * 20 + 1);
console.log(wholeRandomNumber);