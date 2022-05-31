//psuedo 


//how is it like to be a book.
class books {
    constructor( title, author, pages, read, available ) {
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
    getRead() {
        return this.read;
    }
    getAvailable(){
        return this.available;
    }
}

let libraryArray = [];
let numberOfBooks = 0;

function getNewBook() {
    let book = new books(prompt('title?'), prompt('Author?'), prompt('Pages?'), true, true);
    libraryArray.push(book);
    numberOfBooks++;
}

//have to know the array order of book in library, stated as num
function deleteBook(num) {
    libraryArray.splice(num, 1);
    numberOfBooks--;
}

//change read, have to know books order in library
function changeRead(num) {
    if (libraryArray[num].read == true) {
        libraryArray[num].read = false 
        }
    else {
        libraryArray[num].read = true
    } 
}

//change available, have to know books order in library
function changeAvail(num) {
    if (libraryArray[num].available == true) {
        libraryArray[num].available = false 
        }
    else {
        libraryArray[num].available = true
    } 
}