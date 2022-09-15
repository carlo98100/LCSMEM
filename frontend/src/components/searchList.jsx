import { React, useEffect, useState } from "react";
import styled from "styled-components";
import ConsertEventBoard from "../Components/ConsertEventBoard";
import allEvents from "./eventList"
import allArtists from "./artistList"

const searchList = ({ input }) => {

  useEffect(() => {
    filterEvents();
    allArtists();
    allEvents();
  }, [input]);



  
      // some javaScript magic :)
    // const tmpList = allEvents.filter(({ ArtistId: id1 }) =>
    //   filterdArtistList.some(({ Id: id2 }) => id1 === id2)
    // );
    // console.log(tmpList);
    // if (tmpList.length === 0) {
    //   setEvents(allEvents);
    // } else {
    //   setEvents(tmpList);
    // }

  return (
    <EventContainer>
      <ConsertEventBoard events={events} />
    </EventContainer>
  );
  // return (
  //     <ul>
  //         {filterdArtistList.map((artist) => (
  //             <li key={artist.id}>{artist.Name}</li>  //old return
  //         ))}
  //     </ul>
  // )
}

const EventsTitle = styled.h1`
  text-align: center;
  background-color: gray;
  padding: 15px;
  margin: 0;
  width: 80%;
`;

const Container = styled.div`
  padding: 2em;
  margin: 0;
  /* margin-left: 20px;
	margin-ri */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important; */
`;

const EventContainer = styled.div`
  display: flex;
  /* background-color: Blue; */
  /* height: calc(100vh - 70px); */
  width: 40%;
`;

export default searchList;
