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

console.log('My Library Revisited')

//Main Object Constructor 
function book(title, author, pages, avail, read) {
    this.title = title; 
    this.author = author;
    this.pages = pages;
    this.avail = avail;
    this.read = read;
 };

//Add Read status in prototype for every book thats been added
 addBookToLibrary.prototype.isRead = function() {
     this.read = true;
 }
 addBookToLibrary.prototype.notRead = function() {
    this.read = false;
 }
 //Add available status in prototype for every book thats available
 addBookToLibrary.prototype.isAvail = function() {
     this.avail = true;
 }
 addBookToLibrary.prototype.notAvail = function() {
    this.avail = false;
 }

//Use book obj constructor for Add New Book
function addBookToLibrary(...args) {
    book.apply(this, args);
}

//use this function to add obj to library
function addToLib(...args) {
    myLibrary.push(new addBookToLibrary(...args));
}

//modal btn action, open and close the popup modal
const addBookBtn = document.querySelector("#openModalBtn");
const overlayContent = document.querySelector('.overlayContent');
const closeModalBtn = document.querySelector("#closeModalBtn");

addBookBtn.addEventListener('click', ()=> { overlayContent.style.display = 'block'; });
closeModalBtn.addEventListener('click', closeModalAddBook);

function closeModalAddBook() {
    overlayContent.style.display = 'none';
}

//submit button actions
document.addEventListener('submit', submitNewBook);
function submitNewBook(event) {
    event.preventDefault();
    const formInput = document.querySelectorAll('.form input');
    addToLib(formInput[0].value, formInput[1].value, formInput[2].value, addAvail(), addRead());
 
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

//new way to show Cards, no more reverse the library
function showToCards() {
    resetInputBook();
    for (let book of myLibrary) {
    appendToCard(book);
    }
}
//reset the container, so the old data's gone
const resetInputBook = () => {
    cardsContainer.innerHTML='';
}

function appendToCard(book){
    
    //Create Elements for Cards
    let div = document.createElement('div');
        div.className='cards';

    let title = document.createElement('div');
        title.className = 'titleCards';
        title.append(book.title);

    let author = document.createElement('div');
        author.className='authorCards';
        author.append(book.author);

    let pages = document.createElement('div');
        pages.className="pagesCards";
        pages.append(parseInt(book.pages));

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

    if (book.avail == true) {
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

    if (book.read == true) {
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
    
    let divdelBtn = document.createElement('div');
    let deleteBtn = document.createElement('button');
        divdelBtn.className='divDeleteBtn';
        deleteBtn.id='deleteBtn';
        deleteBtn.textContent = 'delete';
        divdelBtn.appendChild(deleteBtn);

    div.append(title,author, pages, availButt, readButt, divdelBtn);
    cardsContainer.append(div);
    
    DEFAULT_STATE();
    closeModalAddBook();
}


function DEFAULT_STATE() {
   // console.log('entering standby toglle state');
    const toggleAll = cardsContainer.querySelectorAll('input');
    const deleteBtnAll = cardsContainer.querySelectorAll('#deleteBtn');
    
    for (let delBtn of deleteBtnAll) {
        delBtn.addEventListener('click', deleteState, false);
    }
    
    //(e)=> console.log('Delete Btn-'+ e.target.parentNode.parentNode.childNodes[1].textContent)

    for(let toggle of toggleAll) {
        toggle.addEventListener('click', changeState, false);
    } 
} 

//Change the Label Status toggle and change the library array based on toggle
const changeState = (e) => {

    const titleCard = e.target.parentNode.parentNode.parentNode.childNodes[0].textContent; 
    let labelStatus = e.target.labels[0].parentNode.firstChild.textContent;
    //console.log(titleCard);
    //console.log(e);

    myLibrary.forEach((lib) => { 
        if (lib.title == titleCard) {
            switch (labelStatus) {
                case "Available": 
                    e.target.labels[0].parentNode.firstChild.textContent = "Unavailable";
                    lib.notAvail();
                    break;
                case "Unavailable":
                    e.target.labels[0].parentNode.firstChild.textContent = "Available";
                    lib.isAvail();
                    break;
                case "Read":
                    e.target.labels[0].parentNode.firstChild.textContent = "Not Read";
                    lib.notRead();
                    break;
                case "Not Read":
                    e.target.labels[0].parentNode.firstChild.textContent = "Read";
                    lib.isRead();
                    break;
                default:
                break;
            }
            console.log(lib); 
            } 
        else {
            console.log("nope")
        }}
    );
    DEFAULT_STATE();
    return
}

const deleteState = (e) => {
    const titleCard = e.target.parentNode.parentNode.childNodes[0].textContent;
    cardsContainer.removeChild(e.target.parentNode.parentNode); // this worked well to remove the cards, clean.
    myLibrary = myLibrary.filter(function (lib) { return lib.title !=titleCard; }); //this works well too. Goal achieved    
 //   console.log(myLibrary);
    DEFAULT_STATE();
}

window.onload = () => {
    DEFAULT_STATE();
}