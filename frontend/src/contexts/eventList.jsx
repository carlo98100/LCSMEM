import { useEffect, useState, createContext } from "react"

const EventContext = createContext();

export const EventContextProvider = ({children}) => {
    const [ events, setEvents ] = useState([])

    let x = 10;

    useEffect(() => {
        fetchEvents();
    }, [])

    const fetchEvents = async () => {
        const response = await fetch('/data/Event')
        const data = await response.json()
        console.log(data)
        setEvents(data)
    }

    return (
    <EventContext.Provider 
    value={{
        events,
        x
    }}
    >
        {children}
        </EventContext.Provider>
    )
}

export default EventContext