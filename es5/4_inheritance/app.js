// Object.prototype
// Person.prototype

function Person(firstName, lastName, dob){
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  
  // this.calculateAge = function(){
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
}

// calculate age 
Person.prototype.calculateAge = function(){
                                  const diff = Date.now() - this.birthday.getTime();
                                  const ageDate = new Date(diff);
                                  return Math.abs(ageDate.getUTCFullYear() - 1970);
                                }

// get full name
Person.prototype.getFullName = function(){
                                return `${this.firstName} ${this.lastName}`
                                }

// gets married
Person.prototype.getsMaried = function(newlastName){
                                this.lastName = newlastName;
                              }

const david = new Person('david', 'dacruz', '04-22-1988');
const mary = new Person('mary', 'doe', 'April 22 1988');

console.log(david.getFullName());
console.log(mary.calculateAge());
console.log(mary.getFullName());
mary.getsMaried('dacruz');
console.log(mary.getFullName());


// access Object.prototype
console.log(mary.hasOwnProperty('firstName'));
console.log(mary.hasOwnProperty('getFullName'));