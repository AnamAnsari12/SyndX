import { Navigate } from "react-router-dom";

function Protected({ children }) {
    const user = localStorage.getItem("userInfo");

    if(!user){
        return <Navigate to='/signin' replace={true}></Navigate>
    }

    return children;
}

export default Protected;