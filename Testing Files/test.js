//psuedo 


//how is it like to be a book.
class books {
    constructor( title = "Unavailable", author = "Unknown", pages = null, read = null, available = null ) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.available = available;
    }
    getTitle() {  
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    getPages() {
        return this.pages;
    }
    changeRead() {
        return (this.read == true )? this.read = false : this.read = true;
    }
    changeAvailable(){
        return (this.available == true )? this.available = false : this.available = true;
    }
}


class library {
    constructor(){
        this.book = [];
    }
    pushToLibrary() {
        
    }

}

let libraryArray = [];
let numberOfBooks = 0;

function getNewBook() {
    let book = new books(prompt('title?'), prompt('Author?'), prompt('Pages?'), true, true);
    libraryArray.push(book);
    
    //show to cards
    addToCard(numberOfBooks);

    //add number of books
    numberOfBooks++;    
}

//have to know the array order of book in library, stated as num
function deleteBook(num) {
    document.querySelector('.cardsContainer').removeChild(document.querySelector('.cardsContainer').childNodes[num])
    libraryArray.splice(num, 1);
    numberOfBooks--;
}

//change read, have to know books order in library
// function changeRead(num) {
//     if (libraryArray[num].read == true) {
//         libraryArray[num].read = false 
//         }
//     else {
//         libraryArray[num].read = true
//     } 
// }

//change available, have to know books order in library
// function changeAvail(num) {
//     if (libraryArray[num].available == true) {
//         libraryArray[num].available = false 
//         }
//     else {
//         libraryArray[num].available = true
//     } 
// }

//show to cards display inside DOM 
function addToCard(num) {
    const cardsContainer = document.querySelector('.cardsContainer');
    const divs = document.createElement('div');
    const para = document.createElement('p');

    divs.className='card';
    para.textContent = `Title: ${libraryArray[num].title}`

    divs.appendChild(para);
    cardsContainer.append(divs);
}