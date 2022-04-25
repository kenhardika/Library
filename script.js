const adminBtn = document.getElementById('admin');
const userBtn = document.getElementById('user');
let titleInput = document.getElementById('title');
let authorInput = document.getElementById('author');
let pagesInput = document.getElementById('pages');
let read = document.getElementsByName('read');
let avail = document.getElementsByName('availability');
const submitButton = document.getElementById('submit');
 
let myLibrary = [];

//Main Object Constructor 
function book(title, author, pages, avail, read) {
    this.title = title; 
    this.author = author;
    this.pages = pages;
    this.avail = avail;
    this.read = read;
 };

//Add Read in prototype for every book thats been added
 addBookToLibrary.prototype.read = function() {
     this.read = true;
 }
 addBookToLibrary.prototype.notRead = function() {
    this.read = false;
 }

//Use book obj constructor for Add New Book
function addBookToLibrary(...args) {
    book.apply(this, args);
}

//use this function to add obj to library
function addToLib(...args) {
    myLibrary.push(new addBookToLibrary(...args));
}

//submit button actions
submitButton.addEventListener('click', submitNewBook);
function submitNewBook() {
    addToLib(titleInput.value, authorInput.value, pagesInput.value, addAvail(), addRead());
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";

    // if (addRead() === "read") {
    //     addBookToLibrary.read();
    // }
    // else {
    //     addBookToLibrary.notRead();
    // }

}

function addAvail() {
    for (var i = 0, length = avail.length; i < length; i++) {
        if (avail[i].checked) {
         return avail[i].value;
        }
    }
}

function addRead() {
    for (var i = 0, length = read.length; i < length; i++) {
        if (read[i].checked) {
          return read[i].value;
        }
    }
}