// event bubbling
// document.querySelector('.card-title').addEventListener('click', function(){
//   console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function(){
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function(){
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function(){
//   console.log('col');
// });

// event bubling end

// without event delegation

// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

// function deleteItem(){
//   console.log('delete item');
// }

// event  delegation

document.body.addEventListener('click', deleteItem)
function deleteItem(e){
      //console.log(e.target);

  // if(e.target.parentElement.className === 'delete-item secondary-content'){
  //   console.log(e.target);
  //   console.log('delete item');
  // }
  if(e.target.parentElement.classList.contains('delete-item')){
    removeElement(e);
    console.log('item removed');
  }
}

// remove li element from ul
function removeElement(e){
 e.target.parentElement.parentElement.remove();
}


