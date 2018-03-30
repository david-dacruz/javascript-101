// create html element 
const li = document.createElement('li');
// add class
li.className = 'collection-item';
// add id
li.id = 'new-item';
// add contribute
li.setAttribute('title', 'New Item');

// add text content
// li.innerText = 'New element created';

// create text node and append
li.appendChild(document.createTextNode('Hello world'));

// create new link
const link = document.createElement('a');

// add classes
link.className = 'delete-item secondary-content';
// add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

console.log(link);

// append link into li
li.appendChild(link);

// append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);