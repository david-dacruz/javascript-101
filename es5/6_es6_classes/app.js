// create a person class
class Person {
  
  // create a constructor for the object
  constructor(firstName, lastName, dob){
    // takes in any properties we want to set
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting(){
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  calculateAge(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(newLastName){
    this.lastName = newLastName;
  }

  //static method
  static addNUmbers(x, y){
    return x + y;
  }
}

const mary = new Person('Mary', 'Williams', '04-22-1988');
console.log(mary);
mary.getsMarried('THOMPSON');
console.log(mary.greeting());
console.log(mary.calculateAge());

// use static method
console.log(Person.addNUmbers(1, 2));