const firstName = 'William';
const lastName = 'Johnson';
const age = 29;
const str = 'Hello my name is david';
const tags = 'web development,javascript,development';
let val;

// Concatenation
val = firstName + ' an empty string ' + lastName;
console.log(val);

// Append
val = 'Brad ';
val += 'Traversy';
console.log(val);

val = 'hello my name is ' + firstName + ' I am ' + age;
console.log(val);

// Escaping
val = 'That\'s awsome';
console.log(val);

// Length
val = firstName.length;
console.log(val);

// Concat
val = firstName.concat(' ', lastName);
console.log(val);

// Change case
val = firstName.toLowerCase();
console.log(val);
val = firstName.toUpperCase();
console.log(val);

// Access value by Index
val = firstName[0];
console.log(val.toLowerCase());

// Find indexOf()
val = firstName.indexOf('l');
console.log(val);
val = firstName.lastIndexOf('l');
console.log(val);

// charAt()
val = firstName.charAt(2);
console.log(val);

// get last character from string
val = firstName.charAt(firstName.length - 1);
console.log(val);

// get substring
// william => will
val = firstName.substring(0,4);
console.log(val);

// slice()
val = firstName.slice(0,4);
console.log(val);
// slice n from the end of the string
val = firstName.slice(-3);
console.log(val);

// split()
// from space
val = str.split(' ');
console.log(val);
// from comma
val = tags.split(',');
console.log(val);

// replace()
val = str.replace('david', 'Daweed');
console.log(val);

// includes() => CASE SENSITIVE
val = str.includes('Hello');
console.log(val);