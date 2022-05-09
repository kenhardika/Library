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

//Editing this part Show to Cards
// heres the default
// function showToCards() {
//     myLibrary.reverse();

//     appendToCard();
//   //  myCards.push(myLibrary[0]);
//     myLibrary.reverse();
// }


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

//check for of to myLibrary
// function checkLibrary() {
//     for (let book of myLibrary) {
//         console.log(book);
//         console.log(typeof(book));
//     }
// }


function appendToCard(book){
    
    //Create Elements for Cards
    let div = document.createElement('div');
    div.className='cards';

    let titleCaption = document.createElement('div');
    titleCaption.className = "titleCaption";
    titleCaption.append("Title  :");

    let title = document.createElement('div');
    title.className = 'titleCards';
    title.append(book.title);
    
    let authorCaption = document.createElement('div');
    authorCaption.className = 'authorCaption';
    authorCaption.append("Author    :")

    let author = document.createElement('div');
    author.className='authorCards';
    author.append(book.author);

    let pagesCaption = document.createElement('div');
    pagesCaption.className="pagesCaption";
    pagesCaption.append('Pages  :');

    let pages = document.createElement('div');
    pages.className="pagesCards";
    pages.append(book.pages);

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
    div.append(titleCaption, title, authorCaption, author, pagesCaption, pages, availButt, readButt);
    cardsContainer.append(div);
    DEFAULT_STATE();
    closeModalAddBook();
}

function DEFAULT_STATE() {
    console.log('entering default state');
    const toggleAll = cardsContainer.querySelectorAll('input'); 
    for(let toggle of toggleAll) {
        toggle.addEventListener('click', changeState, false);
    } 
} 

//finally worked, blessed the event target lmaooo
const changeState = (e) => {
    //let labelAll = cardsContainer.querySelectorAll('.label');
    console.log('changeState-mode- '); // [skipped look for workaround] why this loop twice after new cards is on the layout? IT WORKED 
    // console.log(e);
    console.log(e.target.labels[0].parentNode.firstChild.textContent);
    switch (e.target.labels[0].parentNode.firstChild.textContent) {
        case "Available": 
            e.target.labels[0].parentNode.firstChild.textContent = "Unavailable";
            break;
        case "Unavailable":
            e.target.labels[0].parentNode.firstChild.textContent = "Available";
            break;
        case "Read":
            e.target.labels[0].parentNode.firstChild.textContent = "Not Read";
            break;
        case "Not Read":
            e.target.labels[0].parentNode.firstChild.textContent = "Read";
            break;
        default:
        break;
    }
    return
}

