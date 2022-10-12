// 1 loop = 1 iteration
// for loops
// syntax
// for(statement1; statement2; statement3) {
//block of code
// }

// statement 1-> initialization
// statement2 -> condition
// statement3 -> inc/dec

// steps of execution
// st1 -> st2 -> BOC -> st3 ->st2 -> BOC -> st3

for (var j = 10; j >= 0; j--) {
    console.log(j);//10 9 8 ... 1 0
}

for (var i = 0; i <= 20; i = i + 2) {
    console.log(i);//1 2 ... 19 20
}

for (var i = 1; i <= 20; i = i + 2) {
    console.log(i);//1 2 ... 19 20
}

for (var x = 0; x < 0; x++) {
    console.log(x);//
}

//iterate over array
var arr = [90, 78, 67, 78, 100];//5

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);//90 78 67 78 100

    if (arr[i] == 100) {
        console.log('found');
    }
    // for() {

    // }
}

// infinite loop
// for(var i = 0; i >= 0; i++){}


// while loops
//syntax
// while(condition) {
//block of code
// }

var z = 10;
while (z >= 0) {
    console.log(z);
    z--;
}

var i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++
}

// infinite loop

// do while
// do {
//block of code
// } while(condition)

var y = 1;
do {
    console.log(y);
} while (y < 0);

// infinite loop

// var a = 10;
// do {
//     console.log(a);//10 9
//     a--;
// } while (a < 10);


// statement
// break: it will terminate loop/ switch
// continue: it terminate current loop and continue


for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);//90 78 67 78 100

    if (arr[i] == 100) {
        console.log('found');
    }
    // else {
    //     console.log('not found');
    // }
}


console.log('BREAK');

//90 78 98 89 100
for (var i = 0; i < arr.length; i++) {

    if (arr[i] === 78) {
        console.log('found');
        break;
        console.log();
    }
    else {

    }
}

// continue
// continue: it terminate current loop and continue

console.log('CONTINUE');
for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 78) {
        console.log('found');
    }

    continue;
    console.log(arr[i]);
}


//iterate over strings
var count = 0;
var str = 'Hi, hello';

for (var i = 0; i < str.length; i++) {
    // console.log(str[i]);
    if (str[i] == 'l') {
        count++;//2
        continue;
        console.log(i);
    }
}

console.log(count);

for (var i = 0; i < str.length; i++) {
    if (str[i] == 'l') {
        console.log(i);
        break;
        console.log(i);
    }

    continue;
}






