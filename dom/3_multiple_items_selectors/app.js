// // get html collection back
// const items = document.getElementsByClassName('collection-item');

// console.log(typeof items);
// console.log('=> ', items[0]);

// items[0].style.background = 'green';
// items[0].style.color = 'white';

// items[3].textContent = 'hello';

// // make it an array
// itemsArray = Array.from(items);

// // iterate the array
// itemsArray.forEach(item => {
//   console.log(item);
// });

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);

// document.getElementsByTagName
// let lis = document.getElementsByTagName('li');
// // lis[0].style.color = 'red';
// // lis[3].textContent = 'hello';
// // console.log(lis);
// // console.log(lis[0]);

// // convert html collection to array
// let lisArray = Array.from(lis);

// // //https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/reverse
// lisArray.reverse();

// lisArray.forEach(function(element, i){
//   element.textContent = `hello ${i}`;
//   console.log(element);
// });

// returns a node list not a html collection
// dont need to convert into array
let items = document.querySelectorAll('ul.collection li.collection-item');
console.log(items);

items.forEach(function(element, i){
  element.textContent = `hello ${i}`;
  console.log(element);
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(element, i){
  element.style.background = 'black';
  element.style.color= 'white';
});

for(let i = 0; i < liEven.length; i++){
  liEven[i].style.background = 'red';
  liEven[i].style.color= 'white';
}