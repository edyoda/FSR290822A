import React from "react";
import styles from "./Header.module.css";

class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <p>EDYODA</p>
            <span>Stories</span>
          </div>
          <p>
            Explore Categories <i className="fa fa-angle-down"></i>{" "}
          </p>
        </div>
        <div className={styles.right}>
          <p className={styles.p}>EdYoda is free learning and knowledge sharing platform for techies</p>
          <button className={styles.button}>Go To Main Website</button>
        </div>
      </header>
    );
  }
}

export default Header;
