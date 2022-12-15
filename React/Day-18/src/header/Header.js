import styles from "./Header.module.css";
import React from "react";
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import { authActions } from "../store/auth-slice";

function Header(props) {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const username = useSelector(state => state.auth.user.username);
  const dispatch = useDispatch();

  return (
    <nav className={styles.navbar}>
      <div className={styles.branding}>
        <Link to="/" className={styles.link}>
          <h2>Flipazon</h2>
        </Link>
        {isLoggedIn && (
          <Link to="/products" className={`${styles.link} ${styles["link-item"]}`}>
            Products
          </Link>
        )}
      </div>

      <div>
        {isLoggedIn && (
          <>
            <span>Hello {username}!! </span>
            <span className={styles.cart}>
              Cart <span className={styles.count}>{props.totalCartItems}</span>
            </span>
            <button onClick={() => { dispatch(authActions.logout())}}>Logout</button>
          </>
        )}

        {
          !isLoggedIn && <Link to="/login" className={styles.link}>Login</Link>
        }
      </div>
    </nav>
  );
}

export default Header;
