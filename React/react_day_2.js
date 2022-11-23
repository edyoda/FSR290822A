// To run this file use the below command
// node react_day_2.js




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
    stock: 32,
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

// for(let i=0; i < arr.length; i++){
//    
//    console.log(arr[i] , `index is ${i}`)
//     
// }

// arr.forEach
//

// const arr = [1, 2, 3, 4, 5];
// arr.forEach((ele, index) => {
//   console.log(`Element is ${ele}, Index is ${index}`);
// });



// let result = products.map(product => {
//   return {title: product.title, id: product.id}
// })
// products.forEach(product => {
//   console.log(product.title)
// })
// console.log(result)


// products.forEach(product => {
//   if(product.brand === "Apple"){
//     result.push(product)
//   }else{
//   }
// })



// Filter
// const filteredProducts = products.filter((product, i) => ((product.brand === "Apple") || (product.brand === "Samsung")))
// const idOfFilteredProducts = filteredProducts.map(product => product.id);
// console.log(filteredProducts, idOfFilteredProducts)


// Find 
// const selectedProduct = products.find((product, index) => product.brand === "Micromax")

// console.log(selectedProduct)
// console.log(selectedProductUsingFilter)
// const selectedProductIndex = products.findIndex((product, index) => product.brand === "Mocrom")



// Reduce
// 1. Second argument to the reduce function becomes value of the previousValue variable for first iteration
// 2. anything that is return from the function is assigned to previousValue in the next iteration

const totalPrice = products.reduce((previousValue, product, index) => {
  return previousValue + product.price;
}, 0);

const maxPrice = products.reduce((previousValue, product, index) => {
  // return previousValue > product.price ? previousValue : product.price;
  if(previousValue > product.price){
    return previousValue
  }else{
    return product.price
  }

}, 0);



console.log(maxPrice)


// p1, prevValue=0,    return prevValue+price (0+549)
// p2, prevValue=549,  return prevValue+price (549+899)
// p3, prevValue=1448, return prevValue+price (1448+1249)
// p4, prevValue=2697, return prevValue+price(2697+280)
// p5, prevValue=2977, return prevValue+price(2977+499)




// https://dummyjson.com/products?limit=5
// Min price 
// total price of all the products which is from apple. (any-combination, reduce);
// Write a function that will return array of unique brands









