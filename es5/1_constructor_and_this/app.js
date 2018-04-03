// // create an object
// const user = {
//   name: 'David',
//   age: 29
// }

// // get the object
// console.log(user);

// access value
// user.name

// if we need to create more than one instance create a constructor
// Person constructor
function Person(name, dob){
  // this refers to current
  // instance of object
  this.name = name;
  this.birthday = new Date(dob);

  this.calculateAge = function(){
    // subtract get time from bday to today
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  
  console.log(this);
}

// this inside the windows object refers to window object
// console.log(this);

const david = new Person('David', '04-22-1988');
console.log(david.calculateAge());
// const brad = new Person('Brad', 36);

// same as console log this
// console.log(david);
// console.log(brad);