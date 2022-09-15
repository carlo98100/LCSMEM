import { React, useState, useEffect } from "react";
import List from "./searchList";
import styled from "styled-components";

function Search() {

  const [inputText, setInputText] = useState("");

  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const filterdArtistList = artists.filter((artist) => {
    return input === "" ? true : artist.Name.toLowerCase().startsWith(input); // || element.Genre.toLowerCase().startsWith(input) add later when database has genre prop
  });

  // function filterEvents() {
  //   let tmpList = [];
  //   allEvents.map((event) => {
  //     filterdArtistList.forEach((artist) => {
  //       console.log(artist);
  //       if (event.ArtistId === artist.Id) {
  //         tmpList.push(event);
  //       }
  //     });
  //   });
  //   if (tmpList.length === 0) {
  //     setEvents(allEvents);
  //   } else {
  //     setEvents(tmpList);
  //   }
  // }

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