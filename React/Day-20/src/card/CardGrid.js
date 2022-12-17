import styles from "./CardGrid.module.css";
import Card from "./Card";
import {useSelector} from 'react-redux';

function CardGrid(props) {
  const products = useSelector(state => state.productStore.products)
  const cart = useSelector(state => state.cartStore.products);

  return (
    <div>
      <>
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
                addToCart={props.addToCart}
                isInCart = {cart.find(c => c.id === product.id) !== undefined}
              />
            );
          })}
        </div>
      </>
    </div>
  );
}

export default CardGrid;
