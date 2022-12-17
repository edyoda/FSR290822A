import { useNavigate, useParams } from "react-router-dom";

function withRoute(Component) {

    const AddRouting = (props) => {
        const navigate = useNavigate();
        const params = useParams();
        return <Component {...props} navigate={navigate} params={params}></Component>
    }

    return AddRouting;
}



export default withRoute;