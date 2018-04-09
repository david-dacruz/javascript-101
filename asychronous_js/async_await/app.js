// es7 compile to to es5 with babel if not on chrome and in production

// adding async makes this function a promise
// async function myFunc(){
//   // if we do something asynchrous
//   // in here we can use await
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Salut'), 1000);
//   });

//   const error = true;

//   if(!error){
//     const res = await promise; // wait untill promise is resolved
//     return res;
//   } else {
//     await Promise.reject(new error('Something went wrong'));
//   }
// }

// console.log(myFunc()
//               .then(res => console.log(res))
//               .catch(err => console.log('something went wrong')));

async function getUsers(){
  // await response of the fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  // only proceed once that promise is resolved
  const data = await response.json();
  // only proceed once second promise is resolved
  return data;
} 

getUsers().then(users => console.log(users));