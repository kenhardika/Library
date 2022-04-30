const adminBtn = document.getElementById('admin');
const userBtn = document.getElementById('user');
let titleInput = document.getElementById('title');
let authorInput = document.getElementById('author');
let pagesInput = document.getElementById('pages');
let readCheck = document.getElementById('read');
let availCheck = document.getElementById('avail');

const submitButton = document.getElementById('submitButton');
const cardsContainer = document.querySelector('.cardsContainer');
 
let myLibrary = [];

//Main Object Constructor 
function book(title, author, pages, avail, read) {
    this.title = title; 
    this.author = author;
    this.pages = pages;
    this.avail = avail;
    this.read = read;
 };

//Add Read status in prototype for every book thats been added
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
document.addEventListener('submit', submitNewBook);
function submitNewBook(event) {
    event.preventDefault();
    const formInput = document.querySelectorAll('.form input');
    addToLib(formInput[0].value, formInput[1].value, formInput[2].value, addAvail(), addRead());
    //addToLib(titleInput.value, authorInput.value, pagesInput.value, addAvail(), addRead());

    //clear the input
     titleInput.value = "";
     authorInput.value = "";
     pagesInput.value = "";

    showToCards()
}

function addAvail() {
    if(availCheck.checked) {
        return true;
    }
    else{
        return false;
    }
}

//add read with Checkbox
function addRead() {
    if(readCheck.checked) {
        return true;
    }
    else{
        return false;
    }
}

function showToCards() {
    myLibrary.reverse();

    appendToCard();
  //  myCards.push(myLibrary[0]);
    myLibrary.reverse();
}

function appendToCard(){
    let div = document.createElement('div');
    div.className = "cards";
    div.append(myLibrary[0].title);
    cardsContainer.append(div);
}