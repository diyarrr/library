
const submitButton = document.getElementById("submit");
const books = document.getElementById("books");


let numberOfBooks = 0;
let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
}


function addBookToLibrary(newBook) {
    myLibrary.push(newBook);

}


submitButton.addEventListener("click", function() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("page").value;
    let read = document.getElementById("flag").checked;

    // Simple form validation

    if(title === "" || author === "") {
        alert("Please enter the needed information.");
    }
    else if(!Number(pages)) {
        alert("Please enter the page number appropriately.");
    }

    else {
        if(read) {
            read = "Read";
        }
        else {
            read = "Not read";
        }

        let newBook = new Book(title, author, pages, read);
        addBookToLibrary(newBook);
    
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("page").value = "";
        document.getElementById("flag").checked = false;



        showBooks(numberOfBooks, myLibrary);

        numberOfBooks++;
    }


})


function showBooks(indexOfBook, lib) {
    // Creating all the divs for a book card
    const div = document.createElement("div");
    const titleDiv = document.createElement("div");
    const authorDiv = document.createElement("div");
    const pagesDiv = document.createElement("div");
    const readButton = document.createElement("button");
    const removeButton = document.createElement("button");

    // Appended the card div as a child and added a class to it

    books.appendChild(div);
    div.className = "books";
    
    titleDiv.textContent = "Title: " + lib[indexOfBook].title;
    authorDiv.textContent = "Author: " + lib[indexOfBook].author;
    pagesDiv.textContent = "Page: " + lib[indexOfBook].pages;
    readButton.textContent = lib[indexOfBook].read;
    
    readButton.className = "readButton";
    removeButton.textContent = "Remove";

    removeButton.setAttribute("id", indexOfBook);

    removeButton.className = "removeButton";
    //Appending to card div book's all properties

    div.appendChild(titleDiv);
    div.appendChild(authorDiv);
    div.appendChild(pagesDiv);
    div.appendChild(readButton);
    div.appendChild(removeButton);
}


// Removing the selected book

document.querySelector("#books").addEventListener("click", function(e) {
    if(e.target.textContent === "Remove") {
        removeBooks(e.target);
        console.log(e);
    }
    else if(e.target.textContent === "Not read" || e.target.textContent === "Read") {
        readToggle(e.target);
    }
})

function removeBooks(target) {
    if(target.textContent === "Remove") {
        target.parentElement.remove();
        myLibrary.splice(target.id);
        numberOfBooks--;
    }
}

// Read toggle

function readToggle(target) {
    if(target.textContent === "Not read") {
        target.textContent = "Read";
    }
    else if(target.textContent === "Read") {
        target.textContent = "Not read";
    }
}






