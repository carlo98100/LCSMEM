import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import LeftProfileNav from "../components/LeftProfileNav";
import TicketContext from "../contexts/TicketsList";
import UserContext from "../contexts/UserContext";
import Ticket from "../components/Ticket";
import Login from "./Login";

function YourTickets() {
  const { tickets } = useContext(TicketContext);
  const { user, userList } = useContext(UserContext);

  function getUsersTickets() {
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

  return user.loggedIn ? (
    <Container>
      <LeftProfileNav />
      <RightContainer>
        <TicketsTitle>Your tickets</TicketsTitle>
        <Body>{getUsersTickets().map((ticket) => Ticket(ticket))}</Body>
      </RightContainer>
    </Container>
  ) : (
    <Login />
  );
}

export default YourTickets;

const Container = styled.div`
  display: flex;
`;

const RightContainer = styled.div`
  background-color: #292929;
  width: 80%;
  min-width: 25ch;
  height: calc(100vh - 70px);
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
