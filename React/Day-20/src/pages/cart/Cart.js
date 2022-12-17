import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cartStore);
  // const products = useSelector((state) => state.productStore.products);

  return (
    <div>
      {cart.products.map((product) => {
        return (<div>
          <span>{product.id}</span>
          &nbsp; &nbsp;
          <span>{product.quantity}</span>
          <hr></hr>
        </div>);
      })}
    </div>
  );
};

export default Cart;
