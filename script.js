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
    div.className='cards';

    let titleCaption = document.createElement('div');
    titleCaption.className = "titleCaption";
    titleCaption.append("Title  :");

    let title = document.createElement('div');
    title.className = 'titleCards';
    title.append(myLibrary[0].title);
    
    let authorCaption = document.createElement('div');
    authorCaption.className = 'authorCaption';
    authorCaption.append("Author    :")

    let author = document.createElement('div');
    author.className='authorCards';
    author.append(myLibrary[0].author);

    let pagesCaption = document.createElement('div');
    pagesCaption.className="pagesCaption";
    pagesCaption.append('Pages  :');

    let pages = document.createElement('div');
    pages.className="pagesCards";
    pages.append(myLibrary[0].pages);

    let availButt = document.createElement('div');
    let ava = document.createElement('button');
    ava.id = "availButton";
    availButt.className = "availableButton";
    if (myLibrary[0].avail == true) {
        ava.append("Available");
        availButt.append(ava);
    }
    else {
        ava.append("Unavailable");    
        availButt.append(ava);
    }
    
    let readButt = document.createElement('div');
    let read = document.createElement('button');
    read.id = 'readButton';
    readButt.className = "readButton";
    if (myLibrary[0].read == true) {
        read.append("Read");
        readButt.append(read);
    }
    else {
        read.append("Not Read");
        readButt.append(read);
    }    
    div.append(titleCaption, title, authorCaption, author, pagesCaption, pages, availButt, readButt);
    cardsContainer.append(div);
}