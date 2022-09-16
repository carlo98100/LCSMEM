import { React, useState, useEffect } from "react";
import styled from "styled-components";
import {ArtistContext} from "../contexts/artistList";
import {EventContext} from "../contexts/eventList";

function Search() {

  const [inputText, setInputText] = useState("");
  const { events } = useContext(EventContext);
  const { artists } = useContext(ArtistContext);


  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  useEffect(() => {
    filterEvents();
  }, []);

  const filterdArtistList = artists.filter((artist) => {
    return input === "" ? true : artist.Name.toLowerCase().startsWith(input); // || element.Genre.toLowerCase().startsWith(input) add later when database has genre prop
  });

  function filterEvents() {
    let tmpList = [];
    events.map((event) => {
      filterdArtistList.forEach((artist) => {
        console.log(artist);
        if (event.ArtistId === artist.Id) {
          tmpList.push(event);
        }
      });
    });
  }

  return (
    <Container>
      <SearchContainer className="Search">
        <input type="text" placeholder="Search" onLoad={inputHandler} onChange={inputHandler}/>
      </SearchContainer>
      <ListContainer>
        <List input={inputText}/>
      </ListContainer>
    </Container>
  );
}

export default Search;

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-style: solid;
`

const ListContainer = styled.div`
    display: flex;
`
const SearchContainer = styled.div`
    dislpay: flex;
    margin-top: 4%;
    margin-bottom: 1%;
`