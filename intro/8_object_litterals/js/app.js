const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 29,
  hobbies: ['music', 'code'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function(){
    return 2017 - this.age;
  }
}

let val;

val = person;
console.log(val);

// get specific values
val = person.firstName;
// same as val = person['firstName'];
console.log(val);

val = person.age;
console.log(val);

val = person.hobbies;
console.log(val);

val = person.hobbies[0];
console.log(val);

val = person.address;
console.log(val);

val = person.address.state;
console.log(val);

val = person.address['city'];
console.log(val);

val = person.getBirthYear();
console.log(val);

const people = [
  {name: 'Mike', age: 30},
  {name: 'Johny', age: 32}, 
  {name: 'Nancy', age: 32}
];

for(let i = 0; i < people.length; i++){
  console.log(people[i].name);
}