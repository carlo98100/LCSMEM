import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import UserContext from "../contexts/UserContext";

const RequireAuth = () => {
    const { user } = useContext(UserContext)
    const location = useLocation();
    console.log('auth', auth);
    return(
        user?.loggedIn ? <Outlet/> : <Navigate to={'/sign-in'} state={{from: location}} replace/>
    )
}

export default RequireAuth;