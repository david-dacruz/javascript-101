// to replace elements
// create element
const newHeading = document.createElement('h2');
// add id
newHeading.id = 'task-title';
// new text node
newHeading.appendChild(document.createTextNode('My Task List \\0/'));
// get the old heading
const oldHeading = document.getElementById('task-title');
// we need a parent to call replaceChild
// parent
const cardAction = document.querySelector('.card-action');
// replace 
cardAction.replaceChild(newHeading, oldHeading);
// console.log(cardAction );


// console.log(newHeading);

// console.log("=================");


// remove element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');
// console.log(list);
// console.log(lis);

// remove first element
lis[0].remove();

// remove child element 
list.removeChild(lis[3]);

// classes and attributes
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];
// console.log(firstLi.children[0]);

let val; 

// classes 
val = link.className;
val = link.classList;
val = link.classList[0];
// like an array but its a nodetokenlist
val = link.classList[1];
// add class
link.classList.add('test-me');
link.classList.remove('test-me');
val = link;

// attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'https://google.com');
val = link.setAttribute('title', 'Google');

// check to see if link has attribute
val = link.hasAttribute('title');
// remove attribute
link.removeAttribute('title');
val = link;

console.log(val);
