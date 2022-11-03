// element selector

// document.getElementById().addEventListener('click', function () {
//     document.getElementById('').style.display = 'none';
// })

// $(document).ready(function () {
//     $('button').click(function () {
//         $('p').hide();
//     });
// });

//id selector
// $(document).ready(function() {
//     $('button').click(function() {
//         $('#demo').hide();
//     });
// });

// class selector
// $(document).ready(function() {
//     $('button').click(function() {
//         $('.demo').hide(function () {
//             alert('hello');
//         });
//     });
// });


// universal (all elements)
// $(document).ready(function() {
//     $('button').click(function() {
//         $('*').hide(function () {
//             // alert('hello');
//         });
//     });
// });


//Precise Selector
//:first, :last, :even, :odd

// $(document).ready(function () {
//     $('button').click(function () {
//         $('p:odd').hide();
//     });
// });


//combination of selectors
//:first-child
//:first-of-type
//:last-child
//:last-of-type
//:nth-child

// $(document).ready(function () {
//     $('button').click(function () {
//         $('p:last-child').hide();
//     });
// });


// $(document).ready(function () {
//     $('button').click(function () {
//         $('p:nth-child(3)').hide();
//     });
// });

//heirarchy selectors (combinator in js
//parent > child
//parent descendant
//elment + next
//element ~ siblings

// $(document).ready(function () {
//     $('button').click(function () {
//         $('div ~ p').hide();
//     });
// });

// $(document).ready(function () {
//     $('button').click(function () {
//         $('ul li').hide();
//     });
// });

// Selection index filters
// :eq(index) : index starts from 0
// :gt()
// :lt ()
// :not(selector)

// $(document).ready(function () {
//     $('button').click(function () {
//         $('ul li:eq(2)').hide();
//     });
// });


// $(document).ready(function () {
//     $('button').click(function () {
//         $('ul li:gt(1)').hide();
//     });
// });

// $(document).ready(function () {
//     $('button').click(function () {
//         $('ul li:lt(1)').hide();
//     });
// });


// Visibility filters
// :hidden
// :visible
// :header
// :empty

// $(document).ready(function () {
//     $('button').click(function () {
//         $(':header').hide();
//     });
// });

// $(document).ready(function () {
//     $('button').click(function () {
//         $('p:visible').hide();
//     });
// });


//filter
// $(document).ready(function () {
//     $('button').click(function () {
//         $('p').filter('.demo').css({
//             "color": 'pink'
//         });
//     });
// });


//not
// $(document).ready(function () {
//     $('button').click(function () {
//         $('p').not('.demo').css({
//             "color": 'pink'
//         });
//     });
// });



// HTML manipulation 
//to get the content
// text()
// html()
// val()
// attr()

// $(document).ready(function () {
//     $('#btn-1').click(function () {
//         alert($('.dummy').text());//textContent
//     });

//     $('#btn-2').click(function () {
//         alert($('#test').html());//innerHTML
//     });

//     $('#btn-3').click(function () {
//         alert($('#name').val());//value()
//         // console.log($('#name').val());
//     });

//     $('a').click(function () {
//  var n = $('#amazon').attr('href');
//         alert(n);//getAttribute()
//     });

// });

// set the content

// $(document).ready(function () {
//     $('#btn-1').click(function () {
//         $('.dummy').text('hello');//textContent
//     });

//     $('#btn-2').click(function () {
//         $('#test').html('<b>world</b>');//innerHTML
//     });

//     $('#btn-3').click(function () {
//         $('#name').val('admin@gmail.com');//value()
//     });

//     $('a').click(function () {
//         $('#amazon').attr('href', 'https://www.edyoda.com');//getAttribute()
//     });

// });

//callback inside html, text, val, attr

// $(document).ready(function () {
//     $('#btn-1').click(function () {
//         $('.dummy').text(function (i, t) {
//             console.log(i + ' ' + t);
//         });
//     });
// });

//this keyword
// $(document).ready(function () {
//     $('#btn-1').click(function () {
//         // this is referring to btn-1
//         $(this).css({ "color": 'pink' })
//     });
// });

//to add elements
// append()
// prepend()
// after()
// before()

// $(document).ready(function () {
// $('#add').click(function () {
//     var txt = $('<li></li>').text('Reactjs');
//     var txtTwo = $('<li></li>').text('Nextjs');
//     $('#add-data').append(txt, txtTwo);
// });

// $('#add').click(function () {
//     var txt = $('<li></li>').text('Reactjs');
//     var txtTwo = $('<li></li>').text('Nextjs');
//     $('#add-data').prepend(txt, txtTwo);
// });

//     $('#add').click(function () {
//         $('a').before('Hello');
//         $('a').after('World');
//     });
// });


//remove():  removes all the child elements and selected elements
// empty(): removes all the child elements of selected elements

// $(document).ready(function () {
//     $('#add').click(function () {
//         $('ul').empty();
//     });
// })

// $(document).ready(function () {
//     $('#add').click(function () {
//         $('ul').remove();
//     });
// });

//adding styling
//addClass()
//removeClass()
//toggleClass()
//css


$(document).ready(function () {
    // $('#add').click(function () {
    //     $('h2, p').addClass('button-class dummy-class');//add()
    // });

    // $('#add').click(function () {
    //     $('p').removeClass('dummy-class');//remove()
    // });

    // $('#add').click(function () {
    //     $('p').toggleClass('dummy-class button-class dummy');//toggle()
    // });

    $('#add').mouseleave(function () {
        $('p').css({
            "background-color": 'pink',
            "font-size": "20px"
        });//
    });

});


//mouseleave
//focus
//blur
//dbclick
//on (to multiple events)


function addVal() {
    $(document).ready(function () {
        $('p').css({
            "background-color": 'pink',
            "font-size": "20px"
        });
    })
}

//plugin, traversal, effects

// plugin: https://jqueryvalidation.org/documentation/