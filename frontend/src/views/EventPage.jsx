import React, { useContext } from "react";
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
        <Title>Event List</Title>
        {events.map((event) => (
          <EventContainer key={event.Id}>
            <DateContainer>
              <h2 style={{ margin: 0 }}>{new Date(event.Date).toLocaleDateString("en-GB", { day: "numeric" })}</h2>
              <h2 style={{ margin: 0 }}>{new Date(event.Date).toLocaleDateString("en-GB", { month: "short" })}</h2>
            </DateContainer>
            <Boarder />
            <ArtistContainer>
                <ArtistName href={`/ArtistPage/${event.ArtistId}`}>{artist.find(element => element.Id === event.ArtistId).Name}</ArtistName>
            </ArtistContainer>
            <Boarder />
            <PlaceContainer>
              <City>{event.City}</City>
            </PlaceContainer>
            <Boarder />
            <ButtonContainer>
              <GoToEvent>Event</GoToEvent>
            </ButtonContainer>
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
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const Title = styled.h1`
text-align: center;
border-bottom: 2px solid black;
width: 100%;
max-width: 960px;
margin: 2vh 15vw;
`;


const EventContainer = styled.div`
background-color: white;
width: 100%;
height: 7vh;
font-size: 1em;
border-radius: 10px;
margin: 1vh 0;
padding: 0.5em 1em;
max-width: 960px;
display: flex;
justify-content: space-between;
text-align: center;
`;

const Boarder = styled.div`
width: 0.5%;
margin: 0 0.5%;
hight: 75%;
border-right: 1px solid #5f5f5f;
`;

const DateContainer = styled.div`
width: 10%;
	text-align: center;
  align-self: center;
  padding-right: 1em;
`;

const ArtistContainer = styled.div`
width: 40%;
display flex;
justify-content: center;
align-items: center;
`;

const ArtistName = styled.a`
text-decoration: none;
color: black;
`;

const PlaceContainer = styled.div`
width: 30%;
display: flex;
flex-direction: column;
justify-content: center;
`;

const City = styled.p`
width: 95%;
font-weight: bold;
margin: 0;
align-self: center;
`;

const ButtonContainer = styled.div`
width: 16.5%;
	display: flex;
  justify-content: center;
	align-items: center;
  padding-left: 0.5em;
`;

const GoToEvent = styled.button`
margin:1em;
border:none;
padding: 1em 3em 1em 1em;
text-align:left;
background:
  linear-gradient(-120deg, transparent 1em, #006992 1.05em , #006992 1.5em, transparent 1.45em, transparent 2em, #006992 2.05em) top no-repeat,
  linear-gradient(300deg, transparent 1em, #006992 1.05em , #006992 1.5em, transparent 1.45em, transparent 2em, #006992 2.05em) bottom no-repeat ;
background-size: 100% 50%;
color:white
`;