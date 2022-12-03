import styles from "./Button.module.css";
import React from "react";

class Button extends React.Component {
  analytics = (event) => {
    // analytics
    console.log("Analytics was done", this);
    if (this.props.eventHandler) {
      this.props.eventHandler(event);
    }
  };

  render() {
    return (
      <button
        type={this.props.type}
        className={`${styles.button} ${this.props.className}`}
        onClick={this.analytics}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
