// Number to string
let val = 5;

console.log('[DEBUG] >> val =>', val);
console.log('[DEBUG] >> typeof val =>', typeof val);

// .length is not available on numbers
// convert number to string and acces string methods
val = String(55+5);
console.log('[DEBUG] >> typeof val after type convertion =>', typeof val);
console.log('[DEBUG] >> typeof val.length =>', val.length);

// Boolean to string
let status = true;
// Output
console.log('[DEBUG] >> status =>', status);
console.log('[DEBUG] >> typeof status =>', typeof status);

status = String(true);
console.log('[DEBUG] >> status after type convertion =>', status);
console.log('[DEBUG] >> typeof status =>', typeof status);

// Date to string
let today = new Date();
console.log('[DEBUG] >> today =>',today);
console.log('[DEBUG] >> typeof today =>', typeof today);

today = String(today);
console.log('[DEBUG] >> today after type convertion =>',today);
console.log('[DEBUG] >> typeof today =>', typeof today);

// Array to string
let a = [1,2,3,4,5];
console.log('[DEBUG] >> a =>', a);
console.log('[DEBUG] >> typeof a =>', typeof a);

a = String(a);
console.log('[DEBUG] >> a after type convertion =>', a);
console.log('[DEBUG] >> typeof a =>', typeof a);

// same as toString() method use either or 
let itoa = (5).toString();
let btoa = (true).toString();
console.log('[DEBUG] >> itoa after type convertion =>', itoa);
console.log('[DEBUG] >> btoa after type convertion =>', btoa);

// String to number
let n = '5';
console.log('[DEBUG] >> n =>', n);
console.log('[DEBUG] >> typeof n =>', typeof n);
console.log('[DEBUG] >> n.length =>', n.length);

// String to number
n = Number(n);
// toFixed() lets you specify the number of decimals
console.log('[DEBUG] >> n.toFixed() after type convertion =>', n.toFixed(2));

// Boolean to number 
// true = 1, false = 0, null = 0
n = Number(true);
console.log('[DEBUG] >> n boolean after type convertion =>', n.toFixed());
console.log('[DEBUG] >> ', n.toFixed(2));

// String to number parseInt()
n = parseInt('100');
console.log('[DEBUG] >> n parseInt() =>', n.toFixed());
// 'hello' NaN, not a number
// same with an array
n = parseInt('true');
console.log('[DEBUG] >> n parseInt() =>', n.toFixed());

// String to number with parseFloat() if you want decimals
n = parseFloat('100.30');
console.log('[DEBUG] >> n parseFloat() =>', n.toFixed());
console.log('[DEBUG] >> n parseFloat() =>', n.toFixed(2));

n = parseFloat('100.31');
console.log('[DEBUG] >> n parseFloat() =>', n.toFixed());
console.log('[DEBUG] >> n parseFloat() =>', n.toFixed(2));

const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum);
