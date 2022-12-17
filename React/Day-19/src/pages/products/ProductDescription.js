import axios from "axios";
import { useEffect, useState , useCallback} from "react";
import { useParams,  } from "react-router-dom";

function ProductDescription(props) {
  const params = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const fetchProduct = useCallback(async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${params.productId}`);
      setSelectedProduct(response.data);
    } catch (err) {
      // setError();
    }
  }, [])

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  if (selectedProduct === null) {
    return <h1>Product Description</h1>;
  }

  return (
    <>
      <h1>Product Description</h1>
      <h3>{selectedProduct.title}</h3>
      {/* <img src={selectedProduct.thumbnail}></img> */}
      <p>{selectedProduct.description}</p>
    </>
  );
}

export default ProductDescription;
