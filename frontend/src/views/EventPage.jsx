import React, { useContext } from "react";
import { RiComputerLine } from "react-icons/ri";
import { GiTempleDoor } from "react-icons/gi";
import EventContext from "../contexts/eventList";
import ArtistContext from "../contexts/artistList";
import styled from "styled-components";

const EventPage = () => {
  const { events } = useContext(EventContext);
  const { artist } = useContext(ArtistContext);
  console.log(events);
  return (
    <>
      <Container className="event-list">
        <h1>Event List</h1>
        {events.map((event) => (
          <EventContainer>
            <DateContainer>
              <h2 style={{ margin: 0 }}>{new Date(event.Date).toLocaleDateString("en-GB", { day: "numeric" })}</h2>
              <h2 style={{ margin: 0 }}>{new Date(event.Date).toLocaleDateString("en-GB", { month: "long" })}</h2>
            </DateContainer>
            <LocationLink>{event.StreetName} {event.StreetNumber}</LocationLink>
            <TicketsContainer>
              <h3>{event.AvailableTickets} / {event.TotalAmountOfTickets}</h3>
              <GoToEvent>Checkout Event</GoToEvent>
            </TicketsContainer>
          </EventContainer>
        ))
        }
      </Container>
    </>
  );
};
export default EventPage;

const Container = styled.div`
  margin: 1vh 15vw;
	border-bottom: 2px solid black;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const EventContainer = styled.div`
background-color: white;
border-radius: 10px;
margin: 2vh 0;
padding: 15px 25px;
width: 100%;
max-width: 960px;
display: flex;
justify-content: space-between;
text-align: center;
`;

const DateContainer = styled.div`
	text-align: center;
  align-self: center;
`;

const TicketsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const GoToEvent = styled.button`
	font-size: 0.75em;
	padding: 0.5em 1em;
	border-radius: 1.25em;
	cursor: pointer;
	background-color: #eca400;
	border: none;
	margin-bottom: 1em;
`;

const LocationLink = styled.a`
	font-size: 1.5em;
	font-weight: bold;
  align-self: center;
`;