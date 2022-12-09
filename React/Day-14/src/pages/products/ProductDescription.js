import {useParams} from 'react-router-dom';


function ProductDescription(props) {
    const params = useParams();

    const selectedProduct = props.products.find(product => product.id === +params.productId);

    if(selectedProduct === undefined){
        return  <h1>Product Description</h1>
    }

    return <>
        <h1>Product Description</h1>
        <h3>{selectedProduct.title}</h3>
        {/* <img src={selectedProduct.thumbnail}></img> */}
        <p>{selectedProduct.description}</p>
    
    </>

}


export default ProductDescription;