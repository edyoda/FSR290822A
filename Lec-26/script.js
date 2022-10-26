// Add 
var list = document.querySelector('#movie-list ul');
console.log(document.forms);//
var addForm = document.forms['add-movie'];
addForm.addEventListener("submit", function (e) {
    e.preventDefault();//to prevent default refresh
    var value = document.querySelector('#add-movie input[type="text"]').value;//capturing user input for movie name
    var li = document.createElement('li');//creating li item
    var movieName = document.createElement('span');//creating span element
    var deleteBtn = document.createElement('span');//creating span element
    li.appendChild(movieName);//appending span inside li
    li.appendChild(deleteBtn);//appending span inside li
    list.appendChild(li);//appending li inside ul list
    movieName.textContent = value;//defining element content for span 
    deleteBtn.textContent = 'delete';//defining element content for span 

    // to add class to an element through js
    movieName.classList.add('name');
    deleteBtn.classList.add('delete');
});


// Hiding
var hideForm = document.querySelector('#add-movie #hide');
hideForm.addEventListener("click", function () {
    if (list.style.display == "none") {
        list.style.display = "block";
    }
    else {
        list.style.display = "none";
    }
});


// Delete
list.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);//element being selected
    console.log(e.target.className);
    console.log(e.target.parentElement);

    if (e.target.className == 'delete') {
        var li = e.target.parentElement;//parent element of span(having delete class)
        list.removeChild(li);
    }
});


// Search
var searchForm = document.forms['search-movies'][0];//selecting input box of search form
searchForm.addEventListener("keyup", function (e) {
    console.log(e.target.value);//capture use input from search box

    var searchItem = list.querySelectorAll('li');

    console.log(searchItem);//treat it like an array

    var searchFor = e.target.value.toLowerCase();

    for (var i = 0; i < searchItem.length; i++) {
        console.log(searchItem[i].textContent);

        if (searchItem[i].textContent.toLowerCase().indexOf(searchFor) > -1) {
            searchItem[i].style.display = "block";
        }
        else {
            searchItem[i].style.display = "none";
        }
    }
});

// str.indexOf('end');

 
 
