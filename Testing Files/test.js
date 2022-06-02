//psuedo 


//how is it like to be a book.
class Books {
    constructor( title = "Unavailable", author = "Unknown", pages = null, read = false, available = false ) {
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


class Library {
    constructor(){
        this.book = [];
    }
    addToLibrary(newBook) {
        if(!this.checkDuplicate(newBook)){ // "!" means if the conditions false
            this.book.push(newBook);
            console.log(this.book);
        }
        else{
            console.log("Book is already registered")
        }
    }

    getBookTitle(title) {
        return this.book.find((book) => book.title == title) // choose the element that match that particular argument, return as obj
    }

    getIndex(title) {
        return this.book.indexOf(this.getBookTitle(title));
    }

    checkDuplicate(newBook) {
       return this.book.some((book)=> book.title === newBook.title); // .some will return as boolean, it checks the array if some of it true or not.
    // this.book.find((book)=> {if (book.title == newBook.title) { console.log("Book Duplicate found"); return true} else false })
    }
    removeBook(removeBook) {
        return this.book = this.book.filter((book)=> book.title !== removeBook); //change the this.book into filtered ones, return into obj array
    }
}

// let libraryArray = [];
//let numberOfBooks = 0;
// const array1 = [5, 11, 12, 130, 44];
// const found = array1.find(element => element > 10);
// console.log(found);

const myLibrary = new Library();
// const basedBook = new Books('Maneater', 'Jackson Figura', 121, true, false);
// const basedBook2 = new Books('Womenizer', 'Lohan Lindas', 211, true, false);
// myLibrary.addToLibrary(basedBook);
// myLibrary.addToLibrary(basedBook2);

const addBook = (event) => {
    // event.preventDefault();
        const book = new Books(prompt('title?'), prompt('Author?'), prompt('Pages?'), true, true);
        myLibrary.addToLibrary(book);
        addToCard(book);
} 

function deleteBook(title){
    document.querySelector('.cardsContainer').removeChild(document.querySelector('.cardsContainer').childNodes[myLibrary.getIndex(title)])
    myLibrary.removeBook(title);
    console.log('initiate delete '+ title)

}

function getBook(title) {
   return myLibrary.getBookTitle(title);
}

//show to cards display inside DOM 
function addToCard(book) {
    const cardsContainer = document.querySelector('.cardsContainer');
    const divs = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');

    divs.className='card';
    title.textContent = `${book.title}`;
    author.textContent = `${book.author}`;
    pages.textContent = `${book.pages}`;
    
    divs.append(title, author, pages);
  
    cardsContainer.append(divs);
}