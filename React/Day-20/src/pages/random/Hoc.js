import { Component } from "react";
import withRoute from "../../util/withRoute";

class HComponent extends Component {

  loginHandler = () => {
    this.props.navigate('/login')
  };

  render() {
    console.log(this.props)
    return (
      <button onClick={this.loginHandler} style={{ margin: "auto", width: "100px" }}>
        Login
      </button>
    );
  }
}



export default withRoute(HComponent);
