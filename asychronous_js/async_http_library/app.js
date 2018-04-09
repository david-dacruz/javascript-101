const http = new ezHTTP;

const data = {
  name: 'John Doe update',
  username: 'jdoe',
  email: 'jdoe@gmail.com'
}

http.delete(' https://jsonplaceholder.typicode.com/users/2')
 .then(data => console.log(data))
 .catch(err => console.log(err));

// http.put(' https://jsonplaceholder.typicode.com/users/2', data)
//  .then(data => console.log(data))
//  .catch(err => console.log(err));


// post request
// http.post(' https://jsonplaceholder.typicode.com/users', data)
//  .then(data => console.log(data))
//  .catch(err => console.log(err));


// http.get(' https://jsonplaceholder.typicode.com/users')
//    .then(data => console.log(data))
//    .catch(err => console.log(err));

