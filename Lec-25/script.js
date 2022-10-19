function getName() {
    var n = document.getElementById('name').value;

    document.getElementById('display').textContent = n;
}

function focusEvent() {
    document.getElementById("input-one").style.border = "2px solid pink";
}

function keydownEvent() {
    document.getElementById("input-two").style.border = "2px solid yellow";
    document.getElementById("input-two").style.backgroundColor = "yellow";
}

function blurEvent() {
    document.getElementById("input-three").style.backgroundColor = "pink";

}

function keyupEvent() {
    document.getElementById("input-four").style.backgroundColor = "orange";

}

function keypressEvent() {
    document.getElementById("input-five").style.backgroundColor = "blue";

}

function handleData() {
    var n = document.getElementById('input-six').value;
    console.log(n);

    document.getElementById('display-change').innerHTML = n;
}



//    e.preventDefault()


//attach an event through js
// addEventListerner(event name, callback function)

document.getElementById('click-button').addEventListener('click', function (e) {
    e.preventDefault();//prevent default behavior of any event
    console.log(e);//event object
});

document.getElementById('input-one').addEventListener("focus", focusEvent);

document.getElementById('check').addEventListener("click", function (event) {
    event.preventDefault();
})

document.getElementById('amazon-data').addEventListener("click", function (event) {
    event.preventDefault();
})

// onload: body, iframe, img


// document.getElementById('form').addEventListener("submit", function(e) {
    
// });