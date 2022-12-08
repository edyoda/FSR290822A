import React, { useState } from "react";
import styles from "./Card.module.css";
import { useNavigate } from "react-router-dom";

function Card(props) {
  const [selectedQuantity, setSelectedQuantity] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  /**
   *
   * @param {*} amount +1, -1
   */
  function changeProductQuantity(amount) {
    setSelectedQuantity((currentQuantity) => {
      let newQuantity = currentQuantity;

      if (currentQuantity + amount >= 0) {
        newQuantity = selectedQuantity + amount;
      }

      setTotalAmount(newQuantity * props.price);

      return newQuantity;
    });
  }

  const navigateToPDP = () => {

    navigate(`/products/${props.id}`)
  };

  return (
    <div className={`${styles.card}`} onClick={navigateToPDP}>
      <img src={props.image} className={styles.image} />

      <div className={styles.content}>
        <span className={styles.productName}>{props.title}</span>
        <span className={styles.price}>{props.price}$</span>

        <div className={styles.cartButtons}>
          <button
            className={selectedQuantity === 0 ? styles.disabled : ""}
            onClick={() => {
              changeProductQuantity(-1);
            }}
          >
            -
          </button>
          <span>{selectedQuantity}</span>
          <button
            onClick={() => {
              changeProductQuantity(1);
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
