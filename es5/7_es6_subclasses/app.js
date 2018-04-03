class Person {
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting(){
    return `Helo there ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership){
    // calls the 
    // parent class constructor
    super(firstName, lastName);
    // anything extra in the customer 
    // different from person
    // specifyy here
    this.phone = phone;
    this.membership = membership;

  }  

  // customer specific method
  static getMembershipCost(){
    return 500;
  }

}

const john = new Customer('John', 'Doe', '555-5555-5555', 'standard membership');

console.log(john);
console.log(john.greeting());
// person.getMembershipcost doesnt work we extend one way
console.log(Customer.getMembershipCost());