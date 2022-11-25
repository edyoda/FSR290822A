/**
 * Topic in Day-5
 *  1. Array Functions(forEach, map, filter, find, findIndex, reduce, sort)
 *  2. Doubt clearing
 *  3. Spread and rest operator examples and use cases.
 */

// ==============================================================================================================================================

/**
 * forEach,
 * map,
 * find,
 * findIndex,
 * filter,
 * reduce,
 * sort
 */

let arr = [10, 20, 30, 40, 50, 60];

// ForEach
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }

// arr.forEach(function(element, index){
//     console.log(`Element at index ${index} is ${element}`)
// });

// arr.forEach((element, index) => {
//     console.log(`Element at index ${index} is ${element}`)
// });

// MAP

// const result = arr.map((element, index) => {
//     console.log(`Element at index ${index} is ${element}`);
//     if(element < 30){
//         return element * 2;
//     }
//     return element;

// });

// console.log("Result" , result)

// 10 = ele*2 = 20
// "Apple" = <p>Apple</p>

// Filter

// const smallArray = arr.map((element) => {
//     return element / 10;
// })

// const evenNumbers = smallArray.filter((element) => {
//     return element%2 === 0
// })

// const divisibleBy8 = smallArray.filter((element) => {
//     console.log(element, index, arr , ele)
//     return element%8 === 0
// })

// console.log(evenNumbers, divisibleBy8)

// // Find
// const myElement = arr.find((element) => {
//     return element === 60
// })

// const notMyElement = arr.find((element) => {
//     return element === 70
// })

// console.log(myElement, notMyElement)

// // FindIndex
// const myElementIndex = arr.findIndex((element) => {
//     return element === 60
// })

// const notMyElementIndex = arr.findIndex((element) => {
//     return element === 70
// })
// console.log(myElementIndex, notMyElementIndex)

// Sort

// newArray = [1, 4 ,6 ,3 , 2, 0, 5, 10]
// newArray.sort((a,b) => {
//     return b-a
// })

// const stringArray = ["cat", "apple", "aim", "banana"]
// stringArray.sort()
// console.log(stringArray)

// const objArr = [
//     {id: 1, name: "Bikash", age: 25},
//     {id: 5, name: "Tushar", age: 50},
//     {id: 3, name: "Pritesh", age: 17},
//     {id: 4, name: "Thor", age: 40},
//     {id: 2, name: "Ganesh", age: 18},
// ]

// objArr.sort((a,b) => {
//     return a - b;
// })

// console.log(objArr)

arr = [10, 20, 30, 40, 50, 60];

// Reduce

const result = arr.reduce((prevIterationValue, currentValue, index) => {
  return currentValue * 2;
}, 0);

// console.log(result)

// 1 => prevIterationValue = 0, currentValue=10, index = 0
// 2 => prevIterationValue = 20, currentValue=20, index = 1
// 3 => prevIterationValue = 40, currentValue=30, index = 2
// 4 => prevIterationValue = 60, currentValue=40, index = 3
// 5 => prevIterationValue = 80, currentValue=50, index = 4
// 6 => prevIterationValue = 100, currentValue=60, index = 5  => 120

const sum = arr.reduce((prevIterationValue, currentValue, index) => {
  return prevIterationValue + currentValue;
}, 0);

// 1 => prevIterationValue = 0, currentValue=10, index = 0 => 10
// 2 => prevIterationValue = 10, currentValue=20, index = 1 => 30
// 3 => prevIterationValue = 30, currentValue=30, index = 2 => 60
// 4 => prevIterationValue = 60, currentValue=40, index = 3 => 100
// 5 => prevIterationValue = 100, currentValue=50, index = 4 => 150
// 6 => prevIterationValue = 150, currentValue=60, index = 5  => 210

// console.log(sum);

// PRACTICE

const products = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    ],
  },
  {
    id: 2,
    title: "iPhone X",
    description:
      "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/2/1.jpg",
      "https://i.dummyjson.com/data/products/2/2.jpg",
      "https://i.dummyjson.com/data/products/2/3.jpg",
      "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    ],
  },
  {
    id: 3,
    title: "Samsung Universe 9",
    description: "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    discountPercentage: 15.46,
    rating: 4.09,
    stock: 36,
    brand: "Samsung",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
    images: ["https://i.dummyjson.com/data/products/3/1.jpg"],
  },
  {
    id: 4,
    title: "OPPOF19",
    description: "OPPO F19 is officially announced on April 2021.",
    price: 280,
    discountPercentage: 17.91,
    rating: 4.3,
    stock: 123,
    brand: "OPPO",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/4/1.jpg",
      "https://i.dummyjson.com/data/products/4/2.jpg",
      "https://i.dummyjson.com/data/products/4/3.jpg",
      "https://i.dummyjson.com/data/products/4/4.jpg",
      "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
    ],
  },
  {
    id: 5,
    title: "Huawei P30",
    description:
      "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    price: 499,
    discountPercentage: 10.58,
    rating: 4.09,
    stock: 0,
    brand: "Huawei",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/5/1.jpg",
      "https://i.dummyjson.com/data/products/5/2.jpg",
      "https://i.dummyjson.com/data/products/5/3.jpg",
    ],
  },
];



// products.forEach(product => {
//     console.log(product)
// })

// const titles = products.map(product => product.title)
// console.log(titles)

// const appleProducts = products.filter(product => product.brand === "Apple")
// console.log(appleProducts)


// const productId = 4;
// const myProduct = products.find(product => product.id === productId);
// console.log(myProduct)

// const outOfStockProductIndex = products.findIndex(product => product.stock === 0)
// console.log(outOfStockProductIndex, products[outOfStockProductIndex])


// const outOfStockProduct = products.find(product => product.stock === 0)
// console.log(outOfStockProduct)




// const totalPrice = products.reduce((prevValue, currentProduct) => {
//     return prevValue + currentProduct.price
// }, 0)

// const maxPrice = products.reduce((prevValue, currentProduct) => {
//     if(prevValue > currentProduct.price){
//         return prevValue
//     }
//     else{
//         return currentProduct.price
//     }
// }, 0)


// const minPrice = products.reduce((prevValue, currentProduct) => {
//     if(prevValue > currentProduct.price){
//         return currentProduct.price
//     }
//     else{
//         return prevValue
//     }
// }, Number.MAX_VALUE)


// const uniqueBrands = products.reduce((unique, product) => {
//     const brand = unique.find(brand => brand === product.brand);
//     if(brand === undefined){
//         unique.push(product.brand)
//     }
//     return unique;
// }, [])


// If product.brand is not present in unique then push product.brand to unique array


// console.log(totalPrice, maxPrice, minPrice, uniqueBrands)




// Spread and Rest

const numberArray = [1,2,3,4]
// console.log(1,2,3,4)
// console.log(...numberArray)

// 1. Spread operator can be used to copy the array

// const numberArrayCopy = [...numberArray];
// numberArrayCopy.push(100)
// console.log(numberArray, numberArrayCopy)


// 2. Spread can be used to create a new array as a result of merging two arrays
// let numberArray2 = [5,6,7,8]

// let newArray = [...numberArray,...numberArray2]
// console.log(newArray)

// 3. Add element to an array at index 0.

// const newArray = [...numberArray,0]
// numberArray.push(0)
// console.log(newArray, numberArray)



const obj = {
    fname: "Bikash",
    lname: "Singh"
}

// const copyObj = {fname: "Bikash", lname: "Singh"}
// const copyObj = {...obj}

// copyObj.age = "25"
// console.log(copyObj, obj)

// const secondObj = {
//     age: 25,
//     hobbies: ["Basketball", "Coding"],
//     fname: "Vikash"
// }


// const mergeObj = { ...secondObj, ...obj, ...{emId: "123"}}
// console.log(mergeObj)



// Rest operator

function testRest(a,b,c,d, ...arr){
    console.log(a,b,c,d)
    console.log("Arr", arr)
}


testRest(1,2,3,4,5,6,7,8,9, "bikash", [1,2,3,4], {a: "a object"})
