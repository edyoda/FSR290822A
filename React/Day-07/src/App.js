import CardGrid from "./card/CardGrid";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  addToCartHandler = (productId, totalQuantity) => {
    console.log(`productId : ${productId}`, totalQuantity)
    this.setState((currentState) => {
      return { cart: [...currentState.cart, { id: productId, totalQuantity: totalQuantity }] };
    });
  };

  render() {
    return <CardGrid showPrice={this.state.showPrice} addToCart={this.addToCartHandler}></CardGrid>;
  }
}

export default App;

// function App() {
//   return <CardGrid></CardGrid>
// }
