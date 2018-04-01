// annonymous function
// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//   e.preventDefault;
//   console.log('click');
// });

// same thing as 
//document.querySelector('.clear-tasks').addEventListener('mouseover', onClick);
user = {
        name: "Romane",
        age: 21, 
        profession: "Monteuse"
      }
// named function
document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
  // console.log('click');
  // e.preventDefault;
  let val;
  val = e; // mouse event
  val = e.target; // element
  val = e.target.className;
  //  val = e.target.id; doesnt have one
  val = e.target.classList;

  e.target.innerText = `Salut ${user.name} ${user.age} ans ${user.profession}`;

  // get the event type
  val = e.type;
  console.log('EVENT TYPE >', val);
  // console.count(e);

  // get the event timestamp 
  val = e.timeStamp;
  console.log('TIMESTAMP >', val);

  // get the coordinates relative to the window
  val = e.clientY;
  console.log('client Y >', val);

  val = e.clientX;
  console.log('client X >', val);

  // coords event relative to the element
  val = e.offsetY;
  console.log('offset Y >', val);

  val = e.offsetX;
  console.log('offset X >', val);

}

