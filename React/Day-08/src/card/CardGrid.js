import styles from "./CardGrid.module.css";
import Card from "./Card";
import { Component } from "react";
import axios from "axios";

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
  constructor() {
    super();

    console.log("Card Grid : Constructor");

    this.state = {
      products: [],
      showLoading: true,
    };
  }

  componentWillUnmount() {
    console.log("CardGrid :  Unmount");
  }

  componentDidMount() {
    axios
      .get("https://dummyjson.com/products?limit=10")
      .then((response) => {
        this.setState({
          products: response.data.products,
          showLoading: false
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  componentDidUpdate() {
    console.log("Card Grid : Did Update");
  }

  render() {
    console.log("Card Grid : Render");
    return (
      <div>
        {this.state.showLoading && <p>Loading...</p>}
        {!this.state.showLoading && (
          <div>
            <h1 className={styles.header}>Products</h1>
            <div className={styles.container}>
              {this.state.products.map((product) => {
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
        )}
      </div>
    );
  }
}

export default CardGrid;
