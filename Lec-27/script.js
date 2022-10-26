console.log(window);

var x = 20;
console.log(window.x);

function add() {
    console.log(20 + 20);
}

window.add();


// window.alert('hello');

// window = {
//     x: 20, 
//     add: function () {

//     },
// }

// window.document.getElementById()

// window.document.write()


console.log(window.innerHeight);
console.log(window.innerWidth);

// window has pre-defined objects
// Screen Object: contains information about user's screen
console.log(window.screen.width);
console.log(window.screen.height);
console.log(screen.availWidth);//gives width after removing external browser scrollbar
console.log(screen.availHeight);//gives height after removing external browser scrollbar
console.log(screen.colorDepth);

// Location object
console.log(window.location.href);//url
console.log(window.hostname);//domain name
console.log(window.location.pathname);
console.log(location.protocol);
console.log(location.port);
// console.log(location.replace(url));

// history Object
// window.history.back();
// window.history.forward();

// navigation object
console.log(window.navigator.appCodeName);
console.log(window.navigator.appName);
console.log(navigator.appVersion);
console.log(navigator.cookieEnabled);
console.log(navigator.platform);
console.log(navigator.geolocation);
console.log(navigator.language);
console.log(navigator.product);
console.log(navigator.connection);


console.log(window.location);
console.log(window.navigator);

//Timings Events
window.setTimeout(function () {
    alert('hello');
}, 4000);

window.setTimeout(add, 4000);

// 1000ms = 1 sec

window.setInterval(function () {
    console.log(new Date());
}, 1000);


// Storages
//to store data
sessionStorage.setItem('firstname', 'alex');

//to retrieve data
document.getElementById('display').innerHTML = sessionStorage.getItem('firstname');


sessionStorage.clear();

// Local Storage
localStorage.setItem('lastName', 'joe');

console.log(localStorage.getItem('lastName'));

localStorage.clear();

// JSON
// parse(), stringify()

//receiveing data
var obj = JSON.parse('{"name": "john","age": 30,"city": "pune"}');
console.log(obj);

var arr = JSON.parse('["Ford", "Audi", "Kwid"]');
console.log(arr);

//sending data
var person = {
    name: 'alex',
    age: 25
}

console.log(JSON.stringify(person));

var arrVal = [89, 89, 78, 100];
console.log(JSON.stringify(arrVal));

