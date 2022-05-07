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
    
    //Create Elements for Cards
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
    let ava = document.createElement('input');
    let labAva = document.createElement('label');
    let labSlider = document.createElement('label');
    let slider = document.createElement('span');
    ava.type ="checkbox";
    ava.id = "availButton";
    availButt.className = "availableButton";
    labAva.className= "label";
    labSlider.className = 'switchAvail';
    slider.className= "slider round";
    
    
    
    //checks the checkboxes from the input forms 

    if (myLibrary[0].avail == true) {
        labAva.textContent = "Available";
        ava.checked = "checked";
        labSlider.append(ava);
        labSlider.append(slider);
        availButt.append(labAva);
        availButt.append(labSlider);
    }
    else {
        labAva.textContent = "Unavailable";
        ava.checked = null;
        labSlider.append(ava);
        labSlider.append(slider);
        availButt.append(labAva);
        availButt.append(labSlider);
    }
    
    let readButt = document.createElement('div');
    let read = document.createElement('input');
    let labRead = document.createElement('label');
    let labelSlider = document.createElement('label');
    let sliderRead = document.createElement('span');
    read.type ="checkbox";
    read.id = 'readButton';
    readButt.className = "readButton";
    labRead.className = 'label';
    labelSlider.className = 'switchRead';
    sliderRead.className= "sliderRead round";

    if (myLibrary[0].read == true) {
        labRead.textContent = "Read";
        read.checked = "checked";
        labelSlider.append(read);
        labelSlider.append(sliderRead);
        readButt.append(labRead);
        readButt.append(labelSlider);
    }
    else {
        labRead.textContent = "Not Read";
        read.checked = null;
        labelSlider.append(read);
        labelSlider.append(sliderRead);
        readButt.append(labRead);
        readButt.append(labelSlider);
    }    
    div.append(titleCaption, title, authorCaption, author, pagesCaption, pages, availButt, readButt);
    cardsContainer.append(div);
    DEFAULT_STATE();
}

function DEFAULT_STATE() {

    let toggleAll = cardsContainer.querySelectorAll('input');
    
    for(let i = 0 ; i < toggleAll.length; i++) {
        toggleAll[i].addEventListener('click',() => changeState(i) ); 

function changeState(i) {
    
    console.log('changeState-' + i); // why this loop twice after new cards is on the layout?
    let labelAll = cardsContainer.querySelectorAll('.label');
    
    switch (labelAll[i].textContent) {
        case "Available": 
            labelAll[i].textContent = "Unavailable";
            break;
        case "Unavailable":
            labelAll[i].textContent = "Available";
            break;
        case "Read":
            labelAll[i].textContent = "Not Read";
            break;
        case "Not Read":
            labelAll[i].textContent = "Read";
            break;
        default:
        break;
    }
}