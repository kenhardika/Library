const adminBtn = document.getElementById('admin');
const userBtn = document.getElementById('user');
let titleInput = document.getElementById('title');
let authorInput = document.getElementById('author');
let pagesInput = document.getElementById('pages');
let read = document.getElementsByName('read');
let avail = document.getElementsByName('availability');


function book(title, author, pages, read, avail) {
    this.title = title; 
    this.author = author;
    this.pages = pages; 
    this.read = read;
    this.avail = avail;
 };

// book.prototype.read = function() {
//     console.log()
// }

book.prototype.info = function() {
    console.log(this.title + ", " + "written by " + this.author + ", " + `has ${this.pages} pages. ` + this.read +". "+ this.avail);
};

let book1 =  new book('Adventure of Shenzhen', 'Liam Kwok', '232', 'Not read yet', 'Available');
let myLibrary = [book1];

function addBookToLibrary(...args) {
    book.apply(this, args);
    this.status = "This is a new book";
}
function addToLib(...args) {
    let newbook = new addBookToLibrary(...args);
    myLibrary.push(newbook);
}