import React, { useContext, useState } from "react";
import ArtistContext from "../contexts/ArtistList";
import styled from "styled-components";
import Search from "../components/Search";

const EventPage = () => {
  const [inputText, setInputText] = useState("");
  const [filterSettings, setFilterSettings] = useState({
    LiveStream: 2,
  });
  const { artists } = useContext(ArtistContext);

  const sortByDate = (list) =>
    list
      .slice()
      .sort((a, b) => new Date(a.Date).getTime() - new Date(b.Date).getTime());

  const updateSettings = (setting) => {
    console.log("öö", setting);
    setFilterSettings((prevState) => {;
      return { ...prevState, [setting.target.name]: parseInt(setting.target.value) };
    });
  };

  return (
    <>
      <SearchContainer>
        <input
          type="text"
          placeholder="Search"
          id="search"
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <LiveOrStreamContainer>
          <lable>Live/Stream: </lable>
          <select name="LiveStream" id="EventType" onChange={updateSettings}>
            <option value={2}>Both</option>
            <option value={0}>Live</option>
            <option value={1}>Stream</option>
          </select>
        </LiveOrStreamContainer>
      </SearchContainer>
      <Container className="event-list">
        <Title>Event List</Title>
        {sortByDate(Search(inputText, filterSettings)).map((event) => (
          <EventContainer key={event.Id}>
            <DateContainer>
              <h2 style={{ margin: 0 }}>
                {new Date(event.Date).toLocaleDateString("en-GB", {
                  day: "numeric",
                })}
              </h2>
              <h2 style={{ margin: 0 }}>
                {new Date(event.Date).toLocaleDateString("en-GB", {
                  month: "short",
                })}
              </h2>
            </DateContainer>
            <Boarder />
            <ArtistContainer>
              <ArtistName href={`/ArtistPage/${event.ArtistId}`}>
                {artists.find((element) => element.Id === event.ArtistId).Name}
              </ArtistName>
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
        ))}
      </Container>
    </>
  );
};
export default EventPage;

const LiveOrStreamContainer = styled.div`
  display: flex;
`;

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
  background-color: #ececec;
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
  color: #fc9d2c;
  margin: 1em;
  border: none;
  padding: 1em 3em 1em 1em;
  text-align: left;
  background: linear-gradient(
        -120deg,
        transparent 1em,
        #292929 1.05em,
        #292929 1.5em,
        transparent 1.45em,
        transparent 2em,
        #292929 2.05em
      )
      top no-repeat,
    linear-gradient(
        300deg,
        transparent 1em,
        #292929 1.05em,
        #292929 1.5em,
        transparent 1.45em,
        transparent 2em,
        #292929 2.05em
      )
      bottom no-repeat;
  background-size: 100% 50%;
  transition: transform 0.2s, padding 0.3s, background 0.3s, color 0.3s;
  &:hover {
    transform: translateX(1em);
    padding: 1em 5em 1em 1em;
    color: black;
    background: linear-gradient(
          -120deg,
          transparent 1em,
          #292929 1.05em,
          #292929 1.5em,
          transparent 1.45em,
          transparent 2em,
          #ff9e07 2.05em
        )
        top no-repeat,
      linear-gradient(
          300deg,
          transparent 1em,
          #292929 1.05em,
          #292929 1.5em,
          transparent 1.45em,
          transparent 2em,
          #ff9e07 2.05em
        )
        bottom no-repeat;
    background-size: 100% 50%;
    cursor: pointer;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  margin-top: 4%;
  margin-bottom: 1%;
`;
