import React from "react";
import styles from "./Card.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

function Card(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const addToCartHandler = (event) => {
    event.stopPropagation();
    dispatch(cartActions.addToCart({id: props.id, price: props.price}))
  }

  const navigateToPDP = () => {
    navigate(`/products/${props.id}`);
  };

  return (
    <div key={props.id} className={`${styles.card}`} onClick={navigateToPDP}>
      <img src={props.image} className={styles.image} />

      <div className={styles.content}>
        <span className={styles.productName}>{props.title}</span>
        <span className={styles.price}>{props.price}$</span>
      </div>

      <button onClick={addToCartHandler}>{ props.isInCart ? "Already In Cart" : "Add to Cart"}</button>
    </div>
  );
}

export default Card;
