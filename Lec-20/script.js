//convert number to string
var x = 10.87;
console.log(x.toString());//return a string
console.log(x.toFixed(3));//return a string with a specified decimal places
console.log(x.toExponential(2));
console.log(String(x));

// convert boolean to string
console.log(String(false));//"false"
console.log(String(true));//"true"

// convert string to number
console.log(Number('20'));//return a number
console.log(Number(''));//0
console.log(Number('gdge'));//NaN


// how to capture user input
function getName() {
    //capturing user input in a variable
    var nameVal = document.getElementById('name').value;
    console.log(nameVal);
    alert(nameVal);
}

//Objects
var firstName = 'alina';

// creating an object
// 1. Object literal
// key/value
// property/value pair

var person = {
    name: 'alina',
    age: 20,
    designation: 'developer',
    hobbies: 'dancing',
    married: true,
    contact: {
        mobile: '7878898'
    }
}

// display/access object values
console.log(person);

console.log(person['name']);
console.log(person.name);

console.log(person.contact);
console.log(person.contact.mobile);


var car = {
    color: 'red',
    model: 'XUV09',
    brand: 'maruti',
    alloy: 'wheels',
    millege: 'u',
    type: 'disesel',
    price: '79809090',
    specialFeatures: {
        detail: 'reverse-parking'
    }
}

console.log(car.alloy);
console.log(car.specialFeatures.detail);


// 2. Object.create
var carVal = {
    color: 'red',
    model: 'XUV09',
    brand: 'maruti',
    alloy: 'wheels',
    millege: 'u',
    type: 'diesel',
    price: '79809090',
    specialFeatures: {
        detail: 'reverse-parking'
    }
}

var obj = Object.create(carVal);

console.log(obj.color);//color is a property of obj now
console.log(obj.type);

console.log(typeof (carVal));
console.log(typeof (obj));

//putting 2 values from one object to another
var colorVal = carVal.color;
var modelVal = carVal.model;
var newObj = {
    color: colorVal,
    model: modelVal
}

console.log(newObj);


// 3. new keyword with Prototype(function constructor) (ES5)
// var objVal = new Fun();

// 4. new keyword with classes (ES6)
// var classVal = new Student();


//To get all the keys/property
console.log(Object.keys(person));//return an array

//To get all the values 
console.log(Object.values(person));//return an array


//delete a property/key from an object
delete person.name;
delete person['contact'];

console.log(person);

//Updation 
person.age = 30;
person.designation = 'tester';
console.log(person);

console.log(`${person}`);

console.log('Hi, my hobby is' + person.hobbies);

console.log(`Hi, my hobby is ${person.hobbies}`);


// adding new after property after creation of object
person.name = 'alina';

console.log(person);


// take input using prompt

var store = prompt('Please enter name');

console.log(store);



