import { useEffect, useState, createContext } from "react";

const TicketContext = createContext();

export const TicketContextProvider = ({ children }) => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    const response = await fetch("/data/Ticket");
    const data = await response.json();
    console.log(data);
    setTickets(data);
  };

  return (
    <TicketContext.Provider
      value={{
        tickets,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};

export default TicketContext;