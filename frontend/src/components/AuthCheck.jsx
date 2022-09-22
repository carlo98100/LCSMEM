import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import UserContext from "../contexts/UserContext";

const RequireAuth = () => {
    const { user } = useContext(UserContext)
    const location = useLocation();
    return(
        user?.loggedIn ? <Outlet/> : <Navigate to={'/login'} state={{from: location}} replace/>
    )
}

export default RequireAuth;