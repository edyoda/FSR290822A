import styles from "./CardGrid.module.css";
import Card from "./Card";
import { Component } from "react";
import axios from "axios";

class CardGrid extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      showLoading: true,
      text: "Some text",
    };
  }

  componentDidMount() {
    axios
      .get("https://dummyjson.com/products?limit=20")
      .then((response) => {
        this.setState({
          products: response.data.products,
          showLoading: false,
        });
      })
      .catch((err) => {});
  }

  render() {
    return (
      <div>
        {this.state.showLoading && <p>Loading...</p>}
        {!this.state.showLoading && (
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
        )}
      </div>
    );
  }
}

export default CardGrid;
