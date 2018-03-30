let val;

const list = document 
              .querySelector('ul.collection');

const listItem = document
                  .querySelector('li.collection-item:first-child');

          
val = list;
// returns a collection of all the li elements
// console.log(val);

// returns the first child element 
// val = listItem;
// console.log(val);

// returns a node list of all the li elements
// Get child nodes
// 1 - Element
// 2 - Attribute
// 3 - Text node 
// 8 - Comment
// 9 - Document itself
// 10 - doctype

// val = list.childNodes;
// console.log(val);
// console.log(val[0]);
// console.log(val[0].nodeName);
// console.log(val[3].nodeType);
// console.log(val[1]);


// Get children element nodes as an html collection
val = list.children;

val[0].textContent = 'Hello you';

// get delete link and give it an id
val = list.children[1].children[0].id = "test-link";
val = list.children[1].children[0];

// first child
val = list.firstChild;
val = list.firstElementChild;

// last child
val = list.lastChild;
val = list.lastElementChild;

// count child elements
val = list.childElementCount;

// get parent node
val = listItem.parentNode;
val = listItem.parentElement;
// traverse to grand parent
val = listItem.parentElement.parentElement;


// get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.previousElementSibling;


// get prev sibling
// val = listItem.previousSibling;
// val = listItem.previousElementSibling;


console.log(val);




