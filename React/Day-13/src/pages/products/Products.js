import CardGrid from "../../card/CardGrid";

function Product(props) {
  return <CardGrid showPrice={true} addToCart={() => {}} products={props.products}></CardGrid>;
}

export default Product;
