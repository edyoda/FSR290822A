// API: Applicatipn Program Interface (url)

// http method: get (200), post (201), update(post/id), delete

// http status code/response

// Free GET API
// https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001
// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/posts/
// https://rapidapi.com/

// https://data/employee/{apikey}/1
// var apiKey = 'yhdhhnikjefjol90eifjfkj'

//Google Api's

// for POST reuqest free api
// https://reqres.in/



// with jQuery

//get method get(url(API), callback)
var apiData = [];
$(document).ready(function () {
    var url = 'https://jsonplaceholder.typicode.com/users'
    $('#getdata').click(function () {
        $.get(url, function (data, status) {//callback parameters
            if (data.length) {
                apiData = data;
                console.log(apiData);
                console.log(status);
            }
            else {
                console.log('api failed');
            }
        });
    });
});


//Post method (url, data, callback)

$(document).ready(function () {
    let postApi = 'https://reqres.in/api/users';


    $('#postdata').click(function () {
        var name = $('#name').val();
        var designation = $('#designation').val();

        if (validateName(name) && validateDesignation(designation)) {
            let user = {
                "name": name,
                "job": designation
            }

            $.post(postApi, user, function (data, status) {
                console.log(data);
                console.log(status);
            });

            $('#name').val('');
            $('#designation').val('');
        }
        else {
            // alert('Please check input');
        }


    });
});


let pattern = /^[A-Za-z]+$/;

function validateName(name) {
    var formValid = false;

    if (name.trim() === '') {
        $('#name-error').text('This field is required');
        formValid = false;
    }
    else if (name.length <= 3) {
        $('#name-error').text('Enter more than 3 characters');
        formValid = false;
    }
    else if (!pattern.test(name)) {
        $('#name-error').text('Enter only characters');
        formValid = false;
    }
    else {
        $('#name-error').text('');
        formValid = true;
    }

    return formValid;

}

function validateDesignation(designation) {
    if (designation.trim() === '') {
        $('#design-error').text('This field is required');
        formValid = false;
    }
    else if (!pattern.test(designation)) {
        $('#design-error').text('Enter only characters');
        formValid = false;
    }
    else {
        $('#design-error').text('');
        formValid = true;
    }

    return formValid;
}

//common
$(document).ready(function () {
    $('#clickcommon').click(function () {
        jQuery.ajax({
            url: 'https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001',
            type: 'GET',
            success: function (data, status) {
                console.log(data);
                console.log(status);
            }
        });

        // jQuery.ajax({
        //     url: 'https://reqres.in/api/users',
        //     type: 'POST',
        //     user: user,
        //     success: function (data, status) {
        //         console.log(data);
        //         console.log(status);
        //     }
        // });
    });
})

// Regex

$(document).ready(function () {
    $('#button').click(function () {
        var contact = $('#contact').val();
        var email = $('#email').val();

        if (validateContact(contact) && validateEmail(email)) {
            alert('correct');
            $('#contact').val('');
            $('#email').val('');
        }
        else {
            alert('Please enter correct');
        }
    });
});


function validateContact(contact) {
    var formValid = false;
    let patternContact = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    if (contact.trim() === '') {
        $('#contact-error').text('This field is required');
        var formValid = false;
    }
    else if (!patternContact.test(contact)) {
        $('#contact-error').text('Please enter valid contact');
        var formValid = false;
    }
    else {
        $('#contact-error').text('');
        var formValid = true;
    }
    return formValid;
}

function validateEmail(email) {
    let formValid = false;
    var emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email.trim() === '') {
        $('#email-error').text('This field is required');
        formValid = false;
    }
    else if (!emailPattern.test(email)) {
        $('#email-error').text('Please enter valid email');
        formValid = false;
    }
    else {
        $('#email-error').text('');
        formValid = true;
    }

    return formValid;
}