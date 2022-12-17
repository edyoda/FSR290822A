import { Component } from "react";
import { connect } from "react-redux";
import { authActions } from "../../store/auth-slice";

class ReduxLoginStatus extends Component{
    render(){
        return <div>
            IsLoggedIn : {this.props.isLoggedIn.toString()} <br/>
            username: {this.props.username}

            <button onClick={() => {this.props.dispatch(authActions.logout())}}>Logout</button>
        </div>
    }
}



const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
        username: state.auth.user.username,
        products: state.productStore.products
    }
}

export default connect(mapStateToProps)(ReduxLoginStatus);