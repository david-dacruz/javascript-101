// for loop
// for(let i = 0; i < 10; i++){
//   if( i === 2){
//     console.log(`2 is my fav #`);
//   }
//   console.log(`Loop ${i}`);
// }

// continue means keep going to the next iteration 
// for(let i = 0; i < 10; i++){
//   if( i === 2){
//     console.log(`2 is my fav #`);
//     continue; //  the last console.log 2 
//     // is not applied it's skipped with continue
//   }

//   // break stop iteration at 5
//   // actually 4 because index 0 based
//   if(i === 5){
//     console.log(`Loop stop at ${i}`);
//     break;
//   }

//   console.log(`Loop ${i}`);
// }

// // while loop
// let i = 0;

// while(i < 10){
//   console.log(`while Loop ${i}`);
//   i++;
// }

// // do while runs at least once always
// i = 0;

// do {
//   console.log(`do Loop ${i}`);
//   i++;
// }

// while(i > 10);

// loop through array
// const cars = ['ford', 'chevy', 'toyota'];

// // for(let i = 0;i < cars.length; i++){
// //   console.log(`${i} => ${cars[i]}`)
// // }

// // FOREACH
// cars.forEach(function(car, i, array){
//   console.log(`${i} => ${car}`);
//   console.log(`${array}`)
// });

// // MAP
// const users = [
//   {id:1, name:'John'},
//   {id:2, name:'Sarah'},
//   {id:3, name:'yes'},
//   {id:4, name:'Yoahn'}
// ]

// const names = users.map(function(user){
//   return user.name
// });

// const ids = users.map(function(user){
//   return user.id
// });

// console.log(names);
// console.log(ids);

// FOR IN
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40
}

for(let key in user){
  console.log(`Keys ${key} : value ${user[key]}`);
}