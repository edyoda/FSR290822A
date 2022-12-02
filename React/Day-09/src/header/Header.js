import styles from "./Header.module.css";
import React from "react";

class Header extends React.Component {
  render() {
    return (
      <nav className={styles.navbar}>
        <div className={styles.branding}>
          <h2>Flipazon</h2>
        </div>
        <div className={styles.cart}>
          <span>
            Cart <span className={styles.count}>{this.props.totalCartItems}</span>
          </span>
        </div>
      </nav>
    );
  }
}

export default Header;
