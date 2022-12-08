import React from "react";
import styles from "./App.module.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Login from "./pages/login/Login";

import Product from "./pages/products/Products";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/home";
import ProductDescription from "./pages/products/ProductDescription";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: {},
      products: [],
      isLoggedIn: false,
    };
  }

  logInUser(loginStatus) {
    this.setState({
      isLoggedIn: loginStatus,
    });

    sessionStorage.setItem("login", true);
  }

  logout() {
    this.setState({
      isLoggedIn: false,
    });

    sessionStorage.removeItem("login");
  }

  componentDidMount() {
    console.log(sessionStorage.getItem("login"));

    if (sessionStorage.getItem("login")) {
      this.setState({
        isLoggedIn: true,
      });
    }

    axios
      .get("https://dummyjson.com/products?limit=20")
      .then((response) => {
        console.log(response);
        this.setState({
          products: response.data.products,
        });
      })
      .catch((err) => {});
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
    const totalCartItems = Object.values(this.state.cart).reduce((prevSum, element) => {
      return prevSum + element;
    }, 0);

    return (
      <div className={styles.app}>
        <Header onLogout={this.logout.bind(this)} isLoggedIn={this.state.isLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/login"
            element={
              this.state.isLoggedIn ? (
                <Navigate to="/products "></Navigate>
              ) : (
                <Login onLogin={this.logInUser.bind(this)}></Login>
              )
            }
          ></Route>
          <Route
            path="/products"
            element={
              this.state.isLoggedIn ? (
                <Product products={this.state.products} />
              ) : (
                <Navigate to="/login"></Navigate>
              )
            }
          ></Route>
          <Route
            path="/products/:productId"
            element={<ProductDescription products={this.state.products} />}
          ></Route>

          <Route path="*" element={<h1>This page does not exist</h1>}></Route>
        </Routes>
        <Footer />

        {/* <Header totalCartItems={totalCartItems}></Header>

        <CardGrid showPrice={this.state.showPrice} addToCart={this.addToCartHandler}></CardGrid>
        <Footer></Footer> */}

        {/* <TestUseEffect></TestUseEffect> */}
      </div>
    );
  }
}

export default App;
