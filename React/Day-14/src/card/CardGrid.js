import styles from "./CardGrid.module.css";
import Card from "./Card";

function CardGrid(props) {
  return (
    <div>
      <>
        <div className={styles.container}>
          {props.products.map((product) => {
            return (
              <Card
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                image={product.thumbnail}
                addToCart={props.addToCart}
              />
            );
          })}
        </div>
      </>
    </div>
  );
}

export default CardGrid;
