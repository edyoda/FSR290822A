import React from "react";
import styles from "./Card.module.css";

// function Card(props) {
//   return (
//     <div className={styles.card}>
//       <h1 className={styles.header}>{props.title}</h1>
//       <p>{props.description}</p>
//     </div>
//   );
// }

class Card extends React.Component {

  // State is for handling data within component.
  // Props is from communication from parent to child
  // How to communicate from child to parent?


  // Should be used only to define variables or methods
  
  constructor(){
    super();

    this.state = {
      selectedQuantity : 0,
      totalAmount : 0,
      showPrice: false,
      shouldBorderColorApply: false
    }
    console.log("Card : Constructor")
  }

  componentWillUnmount(){
    console.log("Card :  Unmount")
  }

  componentDidMount(){
    console.log("Card : Did Mount")
  }

  componentDidUpdate(){
    console.log("Card : Did Update")
  }


  togglePrice = () => {
    this.setState((currentState) => {
      return {
        showPrice: !currentState.showPrice
      }
    })
  }


  

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log(nextProps, nextState, this.state)

  //   if(nextState.selectedQuantity === this.state.selectedQuantity){
  //     return false
  //   }

  //   return true;
  // }  
 


  addProductHandler = () => {
    this.setState((currentState) => {
      // this.props.addToCart(this.props.id, currentState.selectedQuantity+1);
      return {
        selectedQuantity : currentState.selectedQuantity+1,
        totalAmount: this.props.price * (currentState.selectedQuantity + 1)
      }
    })
  }



  makeBorderRed = () => {
    this.setState({
      shouldBorderColorApply: true
    })
  }


  render() {
    console.log("Card: Render")
    return (
      <div className={ `${styles.card} ${this.state.shouldBorderColorApply ? styles.active: ''}`  }>
        <img src={this.props.image} className={styles.image}/>
        <h3 className={styles.header}>{this.props.title}</h3>
        <div className={styles.price}>
            <span>Price</span>
            <span>{this.props.price}</span>
        </div>
        <button onClick={this.addProductHandler}>Add to cart ({this.state.selectedQuantity})</button>
        <button onClick={this.makeBorderRed}>Change Border</button>
      </div>

    )
  }
}

export default Card;
