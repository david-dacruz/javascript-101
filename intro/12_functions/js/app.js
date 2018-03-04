// function declaration
function greet(firstName = 'John', lastName = 'Doe'){
  return `Hello ${firstName} ${lastName}`;
}
console.log(greet('Daweed', 'Dacruz'));
console.log(greet());

// function expression
const square = function(x = 2){
  return x * x;
};
console.log(square());
console.log(square(8));

// immediatly invocable function expressions
(function(){
  console.log('IIFE ran');
})();

(function(name){
  console.log(`yo ${name}`);
})('js');

// property methods
// function inside objet
const todo = {
  add: function(){
    console.log('add todo ...');
  },
  edit: function(id){
    console.log(`edit todo ${id}`);
  }
}

todo.delete = function(id){
  console.log(`delete todo ${id}`);
}

todo.add();
todo.edit(22);
todo.delete(22);