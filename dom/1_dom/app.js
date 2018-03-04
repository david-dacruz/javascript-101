let val;

// get the whole html document from doctype to the bottom
val = document;

// get html collection
val = document.all;
// acces index // get the head
val = document.all[1];
// count all elements in the dom
val = document.all.length;
// access the head
val = document.head;
// access the body
val = document.body;
// access the doctype html / xml
val = document.doctype;
// access the domain
val = document.domain;
// access the url
val = document.url;
// access the characterSet
val = document.contentSet;
// access the contentType
val = document.contentType;

// can access elements like this but shouldnt
val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

console.log(val);

let scriptsCollection = document.scripts;

let scriptsArray = Array.from(scriptsCollection);

scriptsArray.forEach(script => {
  console.log(script.getAttribute('src'));
});