
import PropTypes from 'prop-types';

function SumProps(props){
    return <>
        <h3> The sum is {props.num1 + props.num2}</h3>
        {props.button}
    
    </>
}

SumProps.propTypes = {
    num1 : PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    num2 : PropTypes.number.isRequired,
    button: PropTypes.node.isRequired,
    standard: PropTypes.oneOf(['classic' , 'designer']).isRequired
}



function TestProps(){
    const num1 = 1;
    const num2 = 4;
    const std = "classic"
    const myButton = <button>Click me</button>
    return <SumProps num1={num1} num2={num2} button = {myButton} standard={std}></SumProps>
}



export default TestProps