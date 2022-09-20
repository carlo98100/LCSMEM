import { useContext } from "react";
import ArtistContext from "../contexts/ArtistList";
import EventContext from "../contexts/EventList";

function filterArtist(inputText) {
  const { artists } = useContext(ArtistContext);
  let temp = []
  if (inputText === "") {
    temp = artists;
  } else {
    artists.forEach((artist) => {
      if (artist.Name.toLowerCase().includes(inputText.toLowerCase()) || artist.Genre.toLowerCase().includes(inputText.toLowerCase())) {
        temp.push(artist);
      }
    });
  }
  return temp
}

function filterEvents(inputText) {
  const { events } = useContext(EventContext);
  let eventList = []
  events.map((event) => {
    filterArtist(inputText).forEach((artist) => {
      if (event.ArtistId === artist.Id) {
        eventList.push(event);
      }
    });
  });
  return eventList
}

export default filterEvents
