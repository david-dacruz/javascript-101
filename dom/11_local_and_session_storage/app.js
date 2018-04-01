// set local storage item
// LOCAL STORAGE NEEDS TO BE DELETED
//  localStorage.setItem('name', 'John');
//  localStorage.setItem('age', '30');

// // set session storage item
// SESSION STORAGE IS DELETED WHEN WINDOW OR BROWSER IS CLOSED
// sessionStorage.setItem('name', 'Beth');

// remove from storage
// localStorage.removeItem('name');

// get from storage
// const name = localStorage.getItem('name');
// console.log(name);

// const age = localStorage.getItem('age');
// console.log(age);

// localStorage.clear();

// document.querySelector('form').addEventListener('submit', 
//   function(e){
//     const task = document.getElementById('task').value;
//     // the problem is that it overwrites every time we add a task
//     localStorage.setItem('task', task);
//     alert('task saved');
//     e.preventDefault();
// });


document.querySelector('form').addEventListener('submit', 
  function(e){
 
    const task = document.getElementById('task').value;
    let tasks;

    if(localStorage.getItem('tasks') === null){
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
 
    alert('task saved');

    e.preventDefault();
  } 
);

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(task => {
  console.log(task);
});