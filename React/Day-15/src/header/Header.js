import styles from "./Header.module.css";
import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.branding}>
        <Link to="/" className={styles.link}>
          <h2>Flipazon</h2>
        </Link>
        {props.isLoggedIn && (
          <Link to="/products" className={`${styles.link} ${styles["link-item"]}`}>
            Products
          </Link>
        )}
      </div>

      <div>
        {props.isLoggedIn && (
          <>
            <span className={styles.cart}>
              Cart <span className={styles.count}>{props.totalCartItems}</span>
            </span>
            <button onClick={props.onLogout}>Logout</button>
          </>
        )}

        {
          !props.isLoggedIn && <Link to="/login" className={styles.link}>Login</Link>
        }
      </div>
    </nav>
  );
}

export default Header;
