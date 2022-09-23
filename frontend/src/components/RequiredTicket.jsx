import { useContext } from "react";
import { Navigate, Outlet, useLocation, useParams } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import TicketContext from "../contexts/TicketsList";

const RequiredTicket = () => {
    const { getUserId } = useContext(UserContext)
    const { tickets } = useContext(TicketContext)
    const { id } = useParams()

    if (!getUserId() || !tickets?.length) return <></>

    const hasTicket = tickets?.filter?.(ticket => ticket.EventId == id)?.find?.(ticket => ticket.UserId == getUserId()) || false

    const location = useLocation();
        
    return(
        hasTicket ? <Outlet/> : <Navigate to={'/YourTickets'} state={{from: location}} replace/>
    )
}

export default RequiredTicket;