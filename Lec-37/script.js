var arr = [90, 100, 200, 30, 40];

var mixArr = [90, "hello", null, true];

// Traversing
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//es6
arr.map(function (ele) {
  console.log(ele);
});

arr.forEach(function (ele) {
  console.log(ele);
});

// Searching
// linear search
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  if (20 == arr[i]) {
    console.log(arr[i]);
  }
}

// binary search: it should be a sorted array
function binarySearch(arrVal, element) {
  var firstIndex = 0;
  var lastIndex = arrVal.length - 1;

  var middleIndex = Math.floor((firstIndex + lastIndex) / 2);

  while (arrVal[middleIndex] != element && firstIndex <= lastIndex) {
    if (arrVal[middleIndex] > element) {
      lastIndex = middleIndex - 1;
    } else {
      firstIndex = middleIndex + 1;
    }
    middleIndex = Math.floor((firstIndex + lastIndex) / 2);
  }

  return arrVal[middleIndex] === element ? middleIndex : -1;
}

var arrVal = [20, 30, 40, 50, 90];
var result = binarySearch(arrVal, 30); //array, element to be searched
console.log("present at " + result);

// Add/delete
// push(), shift()  -> add
// pop(), unshift() -> delete
// splice() -> add & delete

// Merging
// concat()

// Sorting (sort method work only for array of string (in dictionary manner))
// bubble sort

// function bubbleSort(arr) {

// }

// bubbleSort([90, 9, 20, 78, 100, 45]);

