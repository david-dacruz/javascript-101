const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// Clear input
//taskInput.value = '';

 form.addEventListener('submit', runEvent);

// Keydown
// taskInput.addEventListener('keydown', runEvent);
// Keydown
// taskInput.addEventListener('keyup', runEvent);
// General key event Keypress
// taskInput.addEventListener('keypress', runEvent);

// Focus when click inside input
// taskInput.addEventListener('focus', runEvent);
// Blur when click outside input
// taskInput.addEventListener('blur', runEvent);

// Cut
// taskInput.addEventListener('cut', runEvent);
// Paste
// taskInput.addEventListener('paste', runEvent);

//  will fire of at any kind of event  on event
// taskInput.addEventListener('input', runEvent);

// Change (for select lists)
// select.addEventListener('change', runEvent);

function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);

  // console.log(e.target.value);

  //  heading.innerText = e.target.value;

  // Get input value
  // console.log(taskInput.value);

   e.preventDefault();
}