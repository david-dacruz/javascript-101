// single item selector
let val;


// repeating is not efficient cache into variable
const taskTitle = document.getElementById('task-title');

// get element
// val = taskTitle;
// console.log(val);

// get the id 
val = taskTitle.id;
console.log(val);

// get class
val = document.getElementById('main').className;
console.log(val);

// change styling
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';
//taskTitle.style.display = 'none';

// change content
taskTitle.textContent = 'Todo';
taskTitle.innerText = 'Magic';
taskTitle.innerHTML = '<span style="color:red;">Yo</span>';

console.log(taskTitle);


// document.querySelector()
val = document.querySelector('#task-title');
console.log(val);

val = document.querySelector('.card');
console.log(val);

// if theres more than oe h5 it gets the first one
val = document.querySelector('h5');
console.log(val);

// single element turns red
document.querySelector('li').style.color = 'red';
// single subclass element turns blue
document.querySelector('ul li').style.color = 'blue';// single element turns red


document.querySelector('li:last-child').style.color = 'blue';// single element turns red
document.querySelector('li:first-child').style.color = 'green';// single element turns red
document.querySelector('li:nth-child(3)').style.color = 'yellow';// single element turns red
document.querySelector('li:nth-child(4)').textContent = 'Hello';// single element turns red

