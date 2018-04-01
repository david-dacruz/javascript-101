// mousedown
// mouseup
// mousemove
// click
// dblclick
// mouseover
// mouseout
// mouseenter
// mouseleave
// contextmenu

// get the clear task button
const clearBtn = document.querySelector('.clear-tasks');

// get the card element
const card = document.querySelector('.card');

// get the heading before the ul
const heading = document.querySelector('h5');

// clicks
// clearBtn.addEventListener('click', runEvent);
// // double click
// clearBtn.addEventListener('dblclick', runEvent);

// mousedown
// clearBtn.addEventListener('mousedown', runEvent);
// // mouseup
// clearBtn.addEventListener('mouseup', runEvent);

// mouseenter
// card.addEventListener('mouseenter', runEvent);
// // mouseleave
// card.addEventListener('mouseleave', runEvent);

// // will fire off everytime if action is done in a child element
// // mouseenter simislar to mouseover
// card.addEventListener('mouseover', runEvent);
// // mouseenter simislar to mouseleave
// card.addEventListener('mouseout', runEvent);


// mousemove
card.addEventListener('mousemove', runEvent);


// event handler
function runEvent(e){
  e.preventDefault;
  console.log(`Event TYPE > ${e.type}`);

  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`
}