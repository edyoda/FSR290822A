function handleRequest() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        // this is referring to xhttp
        if (this.readyState == 3) {
            alert('processing request');
        }
        else if (this.readyState == 4 && this.status == 200) {
            console.log(this.status);
            console.log(this.readyState);
            console.log(this.responseText);//capture the response
            console.log(this.statusText);
            document.getElementById('display').innerHTML = this.responseText;
        }
    }


    // making a get request

    //method, url, boolean(asyn or sync)
    // xhttp.open('GET', 'demo_get.asp', true);
    // xhttp.send();

    //to send information with url
    // xhttp.open('GET', 'demo_get.asp?moviename='bandersnatch', true);
    // xhttp.send();

    // json
    xhttp.open('GET', 'data.json', true);
    xhttp.send();

}

// this keyword - refers to owner object

//alone
console.log(this);//refer to window object

var person = {
    firstName: 'alina',
    age: 45,
    lastName: this.age,//this is refering to person
    fullName: function () {
        //this will refer to person
        console.log(this.firstName + this.lastName);//refer to the owner where function is residing
    }
}

console.log(person.firstName);


