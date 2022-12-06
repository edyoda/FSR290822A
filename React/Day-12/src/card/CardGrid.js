import styles from "./CardGrid.module.css";
import Card from "./Card";
import { Component } from "react";
import axios from "axios";
import { useState, useEffect } from "react";


// All use effect will be call when the component is loaded
// And the useEffect is called when value of the variable mentioned inside dependency array is updated.

function CardGrid(props) {
  const [products, setProducts] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nextPage, setNextPage] = useState(0);


  // const [obj, setObj] = useState({fname: "bikash", lname: "Singh"})
  // updateName =() => {
  //   setObj((currentObj) => {
  //     return { fname: "Bikash", lname: "Singh"}
  //   })
  // }

  

  useEffect(() => {
    console.log("use effect 2")
    axios
      .get(`https://dummyjson.com/prodts?limit=20&skip=${nextPage * 20}`)
      .then((response) => {
        console.log(response);
        setProducts((currentProducts) => {
          return [...currentProducts ,...response.data.products]
        });
        setShowLoading(false);
        setError(null);
      })
      .catch((err) => {
        console.log(err)
        setProducts([]);
        setShowLoading(false);
        setError(err.message);
      });
  }, [nextPage]);


  const loadNextPage = () => {
    setNextPage((currentNextPage) => currentNextPage + 1);
  }

  return (
    <div>
      {!showLoading && error !== null && <h2>{error}</h2>}
      {showLoading && <h2>Loading...</h2>}
      {!showLoading && (
        <>
          <div className={styles.container}>
            {products.map((product) => {
              return (
                <Card
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  image={product.thumbnail}
                  addToCart={props.addToCart}
                />
              );
            })}
          </div>

          <button onClick={loadNextPage}>Next Page</button>
        </>
      )}
    </div>
  );
}

// class CardGrid extends Component {
//   constructor() {
//     super();
//     this.state = {
//       // allProducts: [],
//       products: [],
//       showLoading: true,
//       error: null,
//       nextPage: 1,
//     };
//   }

//   nextProducts = () => {

//     // this.setState((currentState) => {
//     //   return {
//     //     products : currentState.allProducts.filter((product, index) => index < 20*(currentState.nextPage+1)),
//     //     nextPage : currentState.nextPage+1
//     //   }
//     // })

//     axios
//       .get(`https://dummyjson.com/products?limit=20&skip=${this.state.nextPage * 20}`)
//       .then((response) => {
//         console.log(response);
//         this.setState((currentState) => {
//           return {
//             products: [...currentState.products, ...response.data.products],
//             showLoading: false,
//             error: null,
//             nextPage: currentState.nextPage + 1
//           };
//         });
//       })
//       .catch((err) => {
//         this.setState({
//           products: [],
//           error: err.message,
//           showLoading: false,
//         });
//       });
//   };

//   componentDidMount() {
//     // GET :   Generally used to fetch resource from server => Does not accept body
//     // POST:   Generally used to create resource in the server => It accepts body
//     // PUT:    Generally used to update resource in the server => It accepts body
//     // DELETE: Generally used to delete resource in the server => It does not accept body

//     //dummy.json/products/1 {price : 10, name: ...}

//     const body = {
//       name: "Bikash",
//     };

//     axios
//       .get("https://dummyjson.com/products?limit=20")
//       .then((response) => {
//         console.log(response);
//         this.setState({
//           // allProducts: response.data.products ,
//           // products: response.data.products.filter((product, index) => index <= 20 ),
//           products: response.data.products,
//           showLoading: false,
//           error: null,
//         });
//       })
//       .catch((err) => {
//         this.setState({
//           products: [],
//           error: err.message,
//           showLoading: false,
//         });
//       });

//     axios.post("https://dummyjson.com/products/add", body).then((response) => {
//       console.log("POST REQUEST Successful");
//     });

//     // const options = {
//     //   method: "DELETE",
//     //   headers: {
//     //     'Content-Type': 'application/json'
//     //   }
//     // }

//     // fetch("https://dummyjson.com/products/add", options)
//     //   .then((response) => {
//     //     console.log("From then");
//     //     if (!response.ok) {
//     //       throw new Error(response.statusText);
//     //     }
//     //     return response.json();
//     //   }).then(body => {
//     //     console.log("Body", body)
//     //   })
//     //   .catch((error) => {
//     //     console.log("From Catch")
//     //     console.log(error);
//     //   });
//   }

//   render() {
//     return (
//       <div>
//         {!this.state.showLoading && this.state.error !== null && <h2>{this.state.error}</h2>}
//         {this.state.showLoading && <h2>Loading...</h2>}
//         {!this.state.showLoading && (
//           <>
//             <div className={styles.container}>
//               {this.state.products.map((product) => {
//                 return (
//                   <Card
//                     key={product.id}
//                     id={product.id}
//                     title={product.title}
//                     description={product.description}
//                     price={product.price}
//                     image={product.thumbnail}
//                     addToCart={this.props.addToCart}
//                   />
//                 );
//               })}
//             </div>

//             <button onClick={this.nextProducts}>Next Page</button>
//           </>
//         )}
//       </div>
//     );
//   }
// }

export default CardGrid;
