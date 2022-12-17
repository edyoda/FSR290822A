import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Login from "./pages/login/Login";

import Product from "./pages/products/Products";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Home from "./pages/home/Home";
import ProductDescription from "./pages/products/ProductDescription";
import Register from "./pages/register/Register";
import axios from "axios";
import TestProps from "./pages/random/PropTypes";
import { useSelector, useDispatch } from "react-redux";
import { productActions } from "./store/product-slice";
import HComponent from "./pages/random/Hoc";
import ReduxLoginStatus from "./pages/random/ReduxLoginStatus";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // if (sessionStorage.getItem("login")) {
    //   this.setState({
    //     isLoggedIn: true,
    //   });
    // }

    async function fetchProducts() {
      const result = await axios.get("https://dummyjson.com/products?limit=20");
      dispatch(productActions.addProducts(result.data.products));
    }

    fetchProducts();
  }, []);

  return (
    <div className={styles.app}>
      <p>This was deployed using a script</p>
      <Header totalCartItems={0} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/"></Navigate> : <Login></Login>}
        ></Route>
        <Route
          path="/products"
          element={isLoggedIn ? <Product /> : <Navigate to="/login"></Navigate>}
        ></Route>
        <Route path="/products/:productId" element={<ProductDescription />}></Route>

        <Route path="/register" element={<Register></Register>} />
        <Route path="/hoc" element={<HComponent  id={100}/>}></Route>
        <Route path="/redux-state" element={<ReduxLoginStatus  sid={100}/>}></Route>
        <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       cart: {},
//       products: []
//     };
//   }

//   async componentDidMount() {
//     console.log(sessionStorage.getItem("login"));

//     // if (sessionStorage.getItem("login")) {
//     //   this.setState({
//     //     isLoggedIn: true,
//     //   });
//     // }

//     const result = await axios.get("https://dummyjson.com/products?limit=20")
//     this.setState({
//       products: result.data.products
//     })
//   }

//   addToCartHandler = (productId, quantity) => {
//     this.setState((prevState) => {
//       const newCart = { ...prevState.cart };
//       newCart[productId] = quantity;

//       console.log(newCart);

//       return {
//         cart: newCart,
//       };
//     });
//   };

//   render() {
//     const totalCartItems = Object.values(this.state.cart).reduce((prevSum, element) => {
//       return prevSum + element;
//     }, 0);

//     return (
//       <div className={styles.app}>
//         <Header onLogout={this.logout.bind(this)} isLoggedIn={this.state.isLoggedIn} totalCartItems={totalCartItems} />
//         <Routes>
//           <Route path="/" element={<Home />}></Route>
//           <Route
//             path="/login"
//             element={
//               this.state.isLoggedIn ? (
//                 <Navigate to="/"></Navigate>
//               ) : (
//                 <Login onLogin={this.logInUser.bind(this)}></Login>
//               )
//             }
//           ></Route>
//           <Route
//             path="/products"
//             element={
//               this.state.isLoggedIn ? (
//                 <Product products={this.state.products} />
//               ) : (
//                 <Navigate to="/login"></Navigate>
//               )
//             }
//           >
//           </Route>
//           <Route
//             path="/products/:productId"
//             element={<ProductDescription products={this.state.products} />}
//           ></Route>

//           <Route path="/register" element={<Register></Register>}/>
//           <Route path="/props" element={<TestProps></TestProps>}/>

//           <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
//         </Routes>
//         <Footer />
//       </div>
//     );
//   }
// }

export default App;
