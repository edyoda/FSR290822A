import styles from "./Header.module.css";
import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.branding}>
        <Link to="/">
          <h2>Flipazon</h2>
        </Link>
        <Link to="/products" className={styles.link}>
          Products
        </Link>
      </div>
      {props.isLoggedIn && (
        <div className={styles.cart}>
          {/* <span>
          Cart <span className={styles.count}>{props.totalCartItems}</span>
        </span> */}
          <button onClick={props.onLogout}>Logout</button>
        </div>
      )}
    </nav>
  );
}

export default Header;
