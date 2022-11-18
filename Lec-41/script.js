// Linear Search
function search(arr, n, x) {
  var i;
  for (i = 0; i < n; i++) {
    if (arr[i] == x) {
      return i;
    }
  }
}

var arr = [1, 10, 30, 15];
var x = 30;
var n = arr.length;
console.log(search(arr, n, x));

// Best Case: O(1), This will take place if the element to be searched is on the first index of the given list. So, the number of comparisons, in this case, is 1.
// Average Case: O(n), This will take place if the element to be searched is on the middle index of the given list.
// Worst Case: O(n), This will take place if:
// The element to be searched is on the last index
// The element to be searched is not present on the list

// Recursion

function oddArray(arr) {
  let result = [];
  function helperRecursion(arr) {
    if (arr.length === 0) {
      return;
    } else if (arr[0] % 2 !== 0) {
      result.push(arr[0]);
    }
    helperRecursion(arr.slice(1));
  }
  helperRecursion(arr);
  return result;
}

console.log(oddArray([1, 2, 4, 8, 9, 10, 6]));

//sort: merge, selection sort, quick sort
