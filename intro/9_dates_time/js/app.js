let val;

const today = new Date();

let birthday = new Date('04/22/1988');
// let birthday = new Date('04-22-1988 11:11:00');
// let birthday = new Date('April 22 1988');

// turn date into string
// val = today.toString();
// console.log(val);
// console.log(typeof val);

// val = birthday;
// console.log(val);

// January == 0 then its +1 until 11
val = today.getMonth();
console.log(val);

val = today.getDate();
console.log(val);

// start at Sunday index 0 then +1
val = today.getDay();
console.log(val);

val = today.getFullYear();
console.log(val);

// midnight == 0
val = today.getHours();
console.log(val);

val = today.getMinutes();
console.log(val);

val = today.getSeconds();
console.log(val);

val = today.getMilliseconds();
console.log(val);

// timestamp
val = today.getTime();
console.log(val);

// setMonth
birthday.setMonth(0);
console.log(birthday);

birthday.setDate(12);
console.log(birthday);

birthday.setFullYear(1989);
console.log(birthday);

birthday.setHours(3);
console.log(birthday);

birthday.setMinutes(30);
console.log(birthday);

birthday.setSeconds(36);
console.log(birthday);
