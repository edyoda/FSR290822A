import styles from "./Header.module.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";

function Header(props) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const username = useSelector((state) => state.auth.user.username);
  const totalCartItems = useSelector((state) => state.cartStore.totalCount);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        <span className={styles.cart} onClick={() => {navigate('/cart')}}>
          Cart <span className={styles.count}>{totalCartItems}</span>
        </span>
        {isLoggedIn && (
          <>
            <span>Hello {username}!! </span>

            <button
              onClick={() => {
                dispatch(authActions.logout());
              }}
            >
              Logout
            </button>
          </>
        )}

        {!isLoggedIn && (
          <Link to="/login" className={styles.link}>
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Header;
