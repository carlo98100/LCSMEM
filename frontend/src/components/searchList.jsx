import { React, useEffect, useState } from "react";
import styled from "styled-components";
import ConsertEventBoard from "../Components/ConsertEventBoard";

function searchList({ input }) {
  const [artists, setArtists] = useState([]);
  const [events, setEvents] = useState([]);
  const [allEvents, setAllEvents] = useState([]); // Initial value

  useEffect(() => {
    GetArtists();
    GetAllEvents();
  }, []);

  useEffect(() => {
    filterEvents();
  }, [input]);

  async function GetArtists() {
    try {
      const response = await fetch(`/data/artist`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const jsonData = await response.json();
      console.log("getallartists");
      console.log(jsonData);
      setArtists(jsonData);
      console.log(artists);
    } catch (err) {
      console.error(err);
    }
  }
  const filterdArtistList = artists.filter((artist) => {
    return input === "" ? true : artist.Name.toLowerCase().startsWith(input); // || element.Genre.toLowerCase().startsWith(input) add later when database has genre prop
  });

  async function GetAllEvents() {
    try {
      const response = await fetch(`/data/Event`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const jsonData = await response.json();
      console.log("getallevents");
      console.log(jsonData);
      setAllEvents(jsonData);
      //   console.log(allEvents);
    } catch (err) {
      console.error(err);
    }
  }

  function filterEvents() {

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
    let tmpList = [];
    allEvents.filter((event) => {
      filterdArtistList.forEach((artist) => {
        console.log(artist);
        if (event.ArtistId === artist.Id) {
          tmpList.push(event);
          //   console.log(tmpList);
        }
      });
    });
    // console.log("tmplist");
    // console.log(tmpList);
    if (tmpList.length === 0) {
      setEvents(allEvents);
    } else {
      setEvents(tmpList);
    }
  }

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
