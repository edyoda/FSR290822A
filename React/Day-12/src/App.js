import CardGrid from "./card/CardGrid";
import React from "react";
import styles from "./App.module.css";
import Header from "./header/Header";
import Footer from './footer/Footer';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: {},
    };
  }

  addToCartHandler = (productId, quantity) => {
    this.setState((prevState) => {
      const newCart = { ...prevState.cart };
      newCart[productId] = quantity;

      console.log(newCart);

      return {
        cart: newCart,
      };
    });
  };

  render() {

    const totalCartItems = Object.values(this.state.cart).reduce((prevSum ,element) => {return prevSum + element}, 0)

    return (
      <div className={styles.app}>
        <Header totalCartItems = {totalCartItems}></Header>
        <CardGrid showPrice={this.state.showPrice} addToCart={this.addToCartHandler}></CardGrid>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
