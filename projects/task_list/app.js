// define Ui vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load all event listeners
loadEventListeners();

// load event listener
function loadEventListeners(){
  // dom load events
  document.addEventListener('DOMContentLoaded', getTasks);
  // add task event
  form.addEventListener('submit', addTask);
  // remove task event
  taskList.addEventListener('click', removeTask);
  // clear task event
  clearBtn.addEventListener('click', clearTasks);
  // filter tasks event
  filter.addEventListener('keyup', filterTasks);
}

// get tasks from local storage
function getTasks(){
  let tasks;
  if(localStorage.getItem('tasks') === null)
  {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach((task) => {
    const li = document.createElement('li');
    // add class
    li.className = 'collection-item';
    // create text node and append to li
    li.appendChinewld(document.createTextNode(task));
    // create  link element
    const link = document.createElement('a');
    // add class
    link.className = 'delete-item secondary-content';
    // add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // append the link to li
    li.appendChild(link);
    // append li to ul
    taskList.appendChild(li);
  });
}

function filterTasks(e){
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach
  (function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}

function clearTasks(){
  // can do taskList.innerHTML = '';
  // faster
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }
  clearTasksFromLocalStorage();
}

function clearTasksFromLocalStorage(){
  localStorage.clear();
}

//remove task
function removeTask(e){
  // to find the target element we need
  //console.log(e.target);
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure ?')){
      e.target.parentElement.parentElement.remove();
      // remove fro local storage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// remove from local storage
function removeTaskFromLocalStorage(taskItem){
  let tasks;
  if(localStorage.getItem('tasks') === null)
  {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach((task, index) => {
    if(taskItem.textContent === task){
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// add task
function addTask(e){
  // check that the input isn't empty
  if(taskInput.value === ''){
    alert('Add a task');
  } else {
    createLiElement();
  }
 
  e.preventDefault();
}

// create li element
function createLiElement(){
  const li = document.createElement('li');
  // add class
  li.className = 'collection-item';
  // create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // create new link element
  const link = document.createElement('a');
  // add class
  link.className = 'delete-item secondary-content';
  // add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // append the link to li
  li.appendChild(link);
  // append li to ul
  taskList.appendChild(li);

  // store in local storage
  storeTaskInLocalStorage(taskInput.value);

  // clear input
  taskInput.value = '';
}

// store task in local storage
function storeTaskInLocalStorage(task){
  let tasks;

  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}
