const http = new ezHTTP;

// GET POSTS
// http.get('https://jsonplaceholder.typicode.com/posts',
// function(err, posts){
//   if(err){
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// get single post
// http.get('https://jsonplaceholder.typicode.com/posts/1',
// function(err, post){
//   if(err){
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// create data
// const data = {
//   title: 'Custom post yo',
//   body: 'This is a custom post'
// };

// post request
// http.post('https://jsonplaceholder.typicode.com/posts',
// data, function(err, post) {
//   if(err){
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// update post put request
// http.put('https://jsonplaceholder.typicode.com/posts/1',
// data, function(err, post) {
//   if(err){
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });


// delet POSTS
http.delete('https://jsonplaceholder.typicode.com/posts/1',
function(err, response){
  if(err){
    console.log(err);
  } else {
    console.log(response);
  }
});
