// person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// greeting
Person.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName}`
}

const person1 = new Person('david', 'dacruz');

console.log(person1.greeting());

// customer constructor
function Customer(firstName, lastName, phone, membership){
  // call https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function/call
  // this referes to object and then call the properties 
  // that refer to the object
  Person.call(this, firstName, lastName);
  this.phone = phone;
  this.membership = membership;
}

// inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);
// make customer.prototype return customer
Customer.prototype.constructor = Customer;

const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard membership');

console.log(customer1);

// overidde the person prototype constructor
Customer.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName} welcome to our company`
}

// if no heritage
// Uncaught TypeError: customer1.greeting is not a function 
console.log(customer1.greeting());