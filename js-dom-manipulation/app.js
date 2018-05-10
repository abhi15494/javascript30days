// var books = document.querySelectorAll("#book-list ul li .name");
// var list = document.querySelectorAll("#book-list");

// console.log(books);

// Array.from(books).forEach((book) =>{
//     book.textContent += " text Changed";
// })

var list = document.querySelector("#wrapper #book-list ul");

// Bubbling to delete element
list.addEventListener("click", function(e){
    if(e.target.className == "delete"){
        const li = e.target.parentNode;
        list.removeChild(li);
    }
});

// To add element in HTML DOM
const addForm = document.forms["add-book"];
addForm.addEventListener("submit", function(e){
    e.preventDefault();
    
    const value =  addForm.querySelector("input[type='text']").value;

    // Create elements
    const li = document.createElement("li");
    const name = document.createElement("span");
    const button = document.createElement("span");

    // Add content
    name.textContent = value;
    button.textContent = 'delete';

    name.classList.add("name");
    button.classList.add("delete");


    // Append to the document
    li.appendChild(name);
    li.appendChild(button);
    list.appendChild(li);
});

// Custom Filter
var searchForm = document.querySelector("#search-books input");
searchForm.addEventListener("keyup", function(e){
    const term = e.target.value;
    const books = list.querySelectorAll("li");
    books.forEach(function(li){
        const title = li.firstElementChild.textContent;
        if( title.indexOf(term)!= -1 ) 
            li.style.display = 'block';
        else{
            li.style.display = 'none';
            list.innerHTML = "<center>No books found</center>"; 
        }
    });
})