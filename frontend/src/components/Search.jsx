import { React, useState, useEffect, useContext } from "react";
import styled from "styled-components";
import {ArtistContext} from "../contexts/artistList";
import {EventContext} from "../contexts/eventList";

function Search(inputText) {

  const { events } = useContext(EventContext);
  const { artist } = useContext(ArtistContext);

  let filterdArtistList = [];
  let eventList = [];

  // console.log("artists");
  // console.log(artist); // Is at the moment undefined
  // console.log("events");
  // console.log(events);
  console.log("inputText");
  console.log(inputText);

  useEffect(() => {
    console.log("dfslkjhfdkljhdfkjhlf")
    filterEvents();
    filterArtist();
  }, []);

  function filterArtist() {
    artist.filter((artist) => {
      console.log("artist");
      console.log(artist);
      console.log("inputText 2");
      console.log(inputText);
      if(inputText === ""){
        filterdArtistList.push(artist);
      }
      else{
        if(artist.Name.toLowerCase() === inputText.toLowerCase()) {
          filterdArtistList.push(artist);
        }
      }
    });
    console.log("inputText 3");
    console.log(inputText);
    return filterdArtistList
  }

  function filterEvents() {
    events.map((event) => {
      filterdArtistList.forEach((artist) => {
        console.log(artist);
        if (event.ArtistId === artist.Id) {
          eventList.push(event);
        }
      });
    });
  }

  return (
    // move to EventPage. Return should be a list with the correct events
    eventList
    // <Container>
      // <SearchContainer className="Search">
      //   <input type="text" placeholder="Search" onLoad={inputHandler} onChange={inputHandler}/>
      // </SearchContainer>
    //   <ListContainer>
    //     <List input={inputText}/>
    //   </ListContainer>
    // </Container>
  );
}

export default Search;

const Container = styled.div`
  background-color: white;
  text-align: center;
  padding: 15px;
  border-bottom: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ListContainer = styled.div`
    display: flex;
`
const SearchContainer = styled.div`
    dislpay: flex;
    margin-top: 4%;
    margin-bottom: 1%;
`