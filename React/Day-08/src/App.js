import CardGrid from "./card/CardGrid";
import React from "react";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      showProductGrid: true
    };

    console.log("APP: constructor")
  }


  componentDidMount(){
    console.log("App: ComponentDidMount")
  }

  componentDidUpdate(){
    console.log("App: ComponentDidUpdate")
  }


  componentWillUnmount(){
    console.log("App: componentWillUnmount")
  }


  toggleProductGridHandler = () => {
    this.setState((currentState) => {
      return {
        showProductGrid : !currentState.showProductGrid
      }
    })

  }

  addToCartHandler = (productId, totalQuantity) => {
    // http
    console.log(`productId : ${productId}`, totalQuantity)
    this.setState((currentState) => {
      console.log([...currentState.cart, { id: productId, totalQuantity: totalQuantity }] )
      return { cart: [...currentState.cart, { id: productId, totalQuantity: totalQuantity }] };
    });
  };

  render() {
    console.log("App: Render")
    return <div>
      {this.state.showProductGrid && <CardGrid showPrice={this.state.showPrice} addToCart={this.addToCartHandler}></CardGrid>}
      <button onClick={this.toggleProductGridHandler}>Toggle Product Grid</button>
    </div>
    
  }
}

export default App;

// function App() {
//   return <CardGrid></CardGrid>
// }
