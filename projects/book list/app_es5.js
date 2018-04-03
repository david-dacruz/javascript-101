// es5
// book constructor
function Book(title, author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// ui constructor
function UI() {}

 // ADD BOOK TO LIST
 UI.prototype.addBookToList = function(book) {
  //console.log(book);
  const list = document.getElementById('book-list');
  // create tr element
  const row = document.createElement('tr');
  // insert cols
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td>
    <a href="#" class="delete">X</a>
  </td>
  `;

  list.appendChild(row);
}

UI.prototype.clearFields = function(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';

}

// on submit
document.getElementById('book-form').addEventListener('submit',
 function(e){
  //get form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;
        //console.log(title, author, isbn);
  
  // instantiate a book to create a new book object
  const book = new Book(title, author, isbn);
  
  // instantiate ui 
  const ui = new UI();

  // add book
  ui.addBookToList(book);
  // clear input fields
  ui.clearFields();
  
  // stop form from submiting
  e.preventDefault();
});