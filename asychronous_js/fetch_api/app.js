document.getElementById('button1')
  .addEventListener('click', getText);


document.getElementById('button2')
  .addEventListener('click', getJson);


document.getElementById('button3')
  .addEventListener('click', getExternal);
 
  // get local text file
function getText(){
  fetch('data.txt')
    .then(response => response.text())
    .then(data => {
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch(error => console.log(error));
}

// get local json data 
function getJson(){
  fetch('data.json')
    .then(response => response.json())
    .then(posts => {
      console.log(posts);
      let output = '';

      posts.forEach(post => {
        output += `<li>${post.title}</li>`
      });

      document.getElementById('output').innerHTML = output;
    })
    .catch(error => console.log(error));
}

// get local json data 
function getExternal(){
  fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(users => {
      console.log(users);
      let output = '';

      users.forEach(user => {
        output += `<li>${user.login}</li>`
      });

      document.getElementById('output').innerHTML = output;
    })
    .catch(error => console.log(error));
}

