import styles from "./CardGrid.module.css";
import { products } from "../data/products";
import Card from "./Card";
import { Component } from "react";

// function CardGrid(){
//    return  <div>
//     <h1 className={styles.header}>Products</h1>
//     <div className={styles.container}>
//       {products.map((product) => {
//         return <Card key={product.id} title={product.title} description={product.description} />;
//       })}
//   </div>
// }

class CardGrid extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.header}>Products</h1>
        <div className={styles.container}>
          {products.map((product) => {
            return (
              <Card
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                image={product.thumbnail}
                addToCart={this.props.addToCart}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default CardGrid;
