const adminBtn = document.getElementById('admin');
const userBtn = document.getElementById('user');
let titleInput = document.getElementById('title');
let authorInput = document.getElementById('author');
let pagesInput = document.getElementById('pages');
let checkbox = document.getElementById('read');
let avail = document.getElementsByName('availability');
const cardsContainer = document.querySelector('.cardsContainer');
 
let myLibrary = [];
let myCards = [];

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
function submitNewBook() {
    addToLib(titleInput.value, authorInput.value, pagesInput.value, addAvail(), addRead());
    
    //clear the input
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";

    showToCards()
}

function addAvail() {
    for (var i = 0, length = avail.length; i < length; i++) {
        if (avail[i].checked) {
         return avail[i].value;
        }
    }
}

//add read with Checkbox
function addRead() {
    if(checkbox.checked) {
        return true;
    }
    else{
        return false;
    }
}

function showToCards() {
    myLibrary.reverse();

    appendToCard();
    myCards.push(myLibrary[0]);
    // console.table(myLibrary[0]);
    myLibrary.reverse();
}

function appendToCard(){
    let div = document.createElement('div');
    div.className = "cards";
    div.append(myLibrary[0].title);
    cardsContainer.append(div);
}