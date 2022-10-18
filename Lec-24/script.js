function getName() {
    //get element by id
    var n = document.getElementById('name').value;
    console.log(n);

    // if (n.trim() == '') {
    //     document.getElementById('name-error').innerHTML = 'Please enter name';
    // } else if (n.length <= 3) {
    //     document.getElementById('name-error').innerHTML = 'Add more characters';
    // }

    // document.getElementById('display').textContent = n;
    // document.getElementById('display').innerHTML = n;

    //getelement by className

    var list = document.getElementsByClassName('item');
    console.log(list);//treat like an array

    var listArray = [];
    for (var i = 0; i < list.length; i++) {
        console.log(list[i].innerHTML);
        listArray.push(list[i].innerHTML);
    }

    console.log(listArray);

    for (var j = 0; j < listArray.length; j++) {
        if ('html'.toLowerCase() === listArray[j].toLowerCase()) {
            console.log('item found');
        }
    }

    //get element by tagname
    var liItems = document.getElementsByTagName('li');
    console.log(liItems);//treat like an array

    //Query Selectors (css selector)
    //query selector selects the first
    document.querySelector(".example").innerHTML = 'World';

    document.querySelector("ul li").innerHTML = 'World';

    //query selector selects the all
    var items = document.querySelectorAll(".example");
    console.log(items);//treat like an array

    for (var z = 0; z < items.length; z++) {
        items[z].innerHTML = 'World';
    }

    var item = document.querySelectorAll("li");
    console.log(item);//treat like an array

    // restructuring of object

    // Create a node(html element)
    var element = document.createElement('div');
    console.log(element);
    element.innerHTML = 'DOM';
    document.body.appendChild(element);

    //  update DOM node
    var newItem = document.createElement('li');
    newItem.innerHTML = 'ReactJs';
    document.querySelector('ul').appendChild(newItem);

    var newInput = document.createElement('input');
    newInput.type = 'text';
    document.body.appendChild(newInput);

    //delete node
    var e = document.querySelector('li:first-child');
    e.remove();

    //adding styles
    document.body.style.color = "orange";
    document.body.style.backgroundColor = "black";
    document.body.style.fontSize = '20px';
    document.body.style.fontFamily = "arial";

    document.getElementById('display').style.backgroundColor = "pink";

    document.getElementById('disply-block').style.display = "block";

}

// Accordian

//insertBefore() in js
//children property in js
// class List: addClass, removeClass, toggleClass


