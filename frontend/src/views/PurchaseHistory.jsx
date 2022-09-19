import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import LeftProfileNav from "../components/LeftProfileNav";
import TicketContext from "../contexts/TicketsList";
import { UserContext } from "../contexts/UserContext";
import TicketHistoryList from "../components/TicketHistoryList";

function PurchaseHistory() {
  const { tickets } = useContext(TicketContext);
  const { user, userList } = useContext(UserContext);

  function getUsersTicketHistoryList() {
    let temp = [];
    tickets.forEach((ticket) => {
      if (ticket.UserId === getUserId()) {
        temp.push(ticket);
      }
    });
    return temp;
  }

  function getUserId() {
    return userList.find((userL) => userL.email === user.email).id;
  }

  function getEvent(ticket) {
    return events.find((event) => event.Id === ticket.EventId);
  }

  function getArtist(ticket) {
    return artist.find((artist) => artist.Id === getEvent(ticket).ArtistId);
  }

  // const { userId } = useParams();
  // // const [form, setForm] = useState([]);
  // const [ticketInformation, setTicketInformation] = useState([]);
  // const [artistInformation, setArtistInformation] = useState([]);
  // const [eventInformation, setEventInformation] = useState([]);

  // useEffect(() => {
  //   if (!userId) return;
  //   GetArtistInformation();
  //   GetEventInformation();
  //   GetTicketInformation(userId);
  // }, []);

  // async function GetTicketInformation(id) {
  //   try {
  //     const response = await fetch(`/data/Ticket/${id}`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const jsonData = await response.json();
  //     setTicketInformation(jsonData);
  //     console.log(jsonData);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  // async function GetArtistInformation(id) {
  //   try {
  //     const response = await fetch(`/data/Artist/${id}`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const jsonData = await response.json();
  //     setArtistInformation(jsonData);
  //     console.log(jsonData);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  // async function GetEventInformation(id) {
  //   try {
  //     const response = await fetch(`/data/events/${id}`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const jsonData = await response.json();
  //     setEventInformation(jsonData);
  //     setForm(jsonData);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  // return (
  //   <Container>
  //     <LeftProfileNav />
  //     <RightContainer>
  //       <TicketsTitle>Your tickets</TicketsTitle>
  //       <Body>{getUsersTickets().map((ticket) => Ticket(ticket))}</Body>
  //       <TicketsTitle>Your purchased tickets</TicketsTitle>
  //       <HistoryBody>
  //         <HistoryTable>
  //           <thead>
  //             <tr>
  //               <th> Artist </th>
  //               <th> City </th>
  //               <th> Date </th>
  //               <th> Price </th>
  //             </tr>
  //           </thead>
  //           <tbody>
  //             <tr>
  //               <th> {artistInformation.Name} </th>
  //               <td> {eventInformation.City} </td>
  //               <td> {eventInformation.Date} </td>
  //               <td> Dyrt </td>
  //             </tr>
  //           </tbody>
  //         </HistoryTable>
  //       </HistoryBody>
  //     </RightContainer>
  //   </Container>
  // );
  return (
    <Container>
      <LeftProfileNav />
      <RightContainer>
        <TicketsTitle>Your tickets</TicketsTitle>
        <Body>
          {getUsersTicketHistoryList().map((ticket) =>
            TicketHistoryList(ticket)
          )}
        </Body>
      </RightContainer>
    </Container>
  );
}

export default PurchaseHistory;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const RightContainer = styled.div`
  background-color: #b96798;
  flex: 1 1 70%;
  // ch = how many characters wide
  min-width: 25ch;
  /* height: calc(100vh - 70px); */
  margin: 0;
  padding: 0;
`;

const TicketsTitle = styled.h1`
  background-color: #292929;
  color: #ff9e07;
  text-align: center;
  padding: 15px;
  margin: 0;
  border-bottom: 2px solid black;
`;

const Body = styled.body`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
