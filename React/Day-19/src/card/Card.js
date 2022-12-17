import React from "react";
import styles from "./Card.module.css";
import { useNavigate } from "react-router-dom";

function Card(props) {
  const navigate = useNavigate();

  const navigateToPDP = () => {
    
    navigate(`/products/${props.id}`);
  };

  return (
    <div className={`${styles.card}`} onClick={navigateToPDP}>
      <img src={props.image} className={styles.image} />

      <div className={styles.content}>
        <span className={styles.productName}>{props.title}</span>
        <span className={styles.price}>{props.price}$</span>
      </div>
    </div>
  );
}

export default Card;
