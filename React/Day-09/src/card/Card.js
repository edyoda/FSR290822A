import React from "react";
import styles from "./Card.module.css";

class Card extends React.PureComponent {
  // State is for handling data within component.
  // Props is from communication from parent to child
  // How to communicate from child to parent?

  constructor() {
    // Constructor be used only to define variables, states
    super();

    this.state = {
      selectedQuantity: 0,
      totalAmount: 0,
      showPrice: false,
      shouldBorderColorApply: false,
    };
  }

  togglePrice = () => {
    this.setState((currentState) => {
      return {
        showPrice: !currentState.showPrice,
      };
    });
  };

  /**
   *
   * @param {*} amount +1, -1
   */
  changeProductQuantity(amount) {
    this.setState((currentState) => {
      let newQuantity = currentState.selectedQuantity; // 0

      if (currentState.selectedQuantity + amount >= 0) {
        // -1, false
        newQuantity = currentState.selectedQuantity + amount;
      }

      this.props.addToCart(this.props.id, newQuantity);

      return {
        selectedQuantity: newQuantity, // 0
        totalAmount: this.props.price * newQuantity,
      };
    });
  }

  render() {
    return (
      <div className={`${styles.card}`}>
        <img src={this.props.image} className={styles.image} />

        <div className={styles.content}>
          <span className={styles.productName}>{this.props.title}</span>
          <span className={styles.price}>{this.props.price}$</span>

          <div className={styles.cartButtons}>
            <button className={ this.state.selectedQuantity === 0 ? styles.disabled : ''  }
              onClick={() => {
                this.changeProductQuantity(-1);
              }}
            >
              -
            </button>
            <span>{this.state.selectedQuantity}</span>
            <button
              onClick={() => {
                this.changeProductQuantity(1);
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
