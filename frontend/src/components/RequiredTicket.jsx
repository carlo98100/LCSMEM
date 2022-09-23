import { useContext } from "react";
import { Navigate, Outlet, useLocation, useParams } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import TicketContext from "../contexts/TicketsList";
import EventContext from "../contexts/EventList";

const RequiredTicket = () => {
    const { getUserId } = useContext(UserContext)
    const { tickets } = useContext(TicketContext)
    const { events } = useContext(EventContext)
    const { id } = useParams()

    if (!getUserId() || !tickets?.length || !events?.length) return <></>

    const streamEvent = events?.find?.(event => event.LiveStream == id)
    
    const hasTicket = tickets?.filter?.(ticket => ticket.EventId == streamEvent.Id)?.find?.(ticket => ticket.UserId == getUserId()) || false

    const location = useLocation();
        
    return(
        hasTicket ? <Outlet/> : <Navigate to={'/YourTickets'} state={{from: location}} replace/>
    )
}

export default RequiredTicket;