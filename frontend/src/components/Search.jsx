import { useContext } from "react";
import { ArtistContext } from "../contexts/artistList";
import { EventContext } from "../contexts/eventList";

function filterArtist(inputText) {
  const { artists } = useContext(ArtistContext);
  let temp = []
  const newA = []
  if (inputText === "") {
    temp = artists;
  } else {
    artists.forEach((artist) => {
      if (artist.Name.toLowerCase().includes(inputText.toLowerCase())) {
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