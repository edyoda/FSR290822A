// this keyword

//alone
var x = this;
console.log(this);

var obj = {
    name: 'alina',
    last: this.name + 'joe',//this is referring to obj
    fullName: function () {
        console.log(this.name);//this is referring to obj
    }
}

function add() {
    console.log(this);//window
}

add();


// Prototype (ES5)
//object function constructor
// function University(name, last, age, dept) {
//     this.firstName = name;
//     this.lastName = last;
//     this.age = age;
//     this.dept = dept;
// }


// var studentOne = new University('alex', 'joe', 20, 'ece');//object instantiation
// console.log(studentOne);

// var studentTwo = new University('alina', 'jen', 22, 'cse');
// console.log(studentTwo);

// // prototype is allowing to add new prop & method
// University.prototype.nationality = 'Indian';

// console.log(studentOne.nationality);

// //adding a property to a particular object
// studentTwo.maritalStatus = false;

// console.log(studentTwo);


var str = 'hello';
var str = new String('hello');//

var num = 20;
var num = new Number(20);//

var arr = new Array([90, 89, 10]);

var bool = new Boolean(true);


// class & objects (ES6)
//template for js objects
class University {
    flag = true;//property of university

    constructor(name, age, dept) {//special method to intialized values 
        //this is referring to University
        this.name = name;
        this.age = age;
        this.dept = dept;
    }

    display(a) {
        console.log(this.name + ' ' + this.age + ' ' + a + ' ' + this.flag);
    }
}

var stuOne = new University('alex', 30, 'ece');//object instantiation
console.log(stuOne);
stuOne.display('hello');
stuOne.flag = false;

var stuTwo = new University('harry', 30, 'cse');
console.log(stuTwo);
stuTwo.display('hi');


// es6-> let, const

//parent class
class Shape {
    constructor(id) {
        this.id = id;
    }
}

//Circle -> child/dervied class
class Circle extends Shape {
    constructor(id, radius) {
        super(id);//call's parent constrcutor
        this.radius = radius;
    }

    circumference() {
        // console.log(Math.PI);
        // console.log(Math);
        console.log(Math.floor(2 * Math.PI * this.radius));
    }
}

var c = new Circle(1, 5);//id, radius
c.circumference();


class Triangle extends Shape {
    constructor(id, type) {
        super(id);
        this.type = type;
    }

    type_of_traingle() {
        console.log(this.type);
    }
}

var t = new Triangle(3, 'right-angled');//id, type of triangle
t.type_of_traingle();

// t.circumference();//both child classes can't access each other's data


// Abstraction
class Abtract {
    constructor(text) {
        this._text = text;
    }


    doSomething() {
        throw new Error('You have to implement something');
    }
}

class Der extends Abtract {
    constructor(text) {
        super(text)
    }

    doSomething() {
        console.log('Method implemented');
    }
}

var b = new Der('hello');
b.doSomething();

// Typescript