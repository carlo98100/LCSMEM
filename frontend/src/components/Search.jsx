import { useContext } from "react";
import ArtistContext from "../contexts/ArtistList";
import EventContext from "../contexts/EventList";

function filterArtist(inputText, filterSettings) {
  const { artists } = useContext(ArtistContext);
  let temp = [];
  if (inputText === "") {
    temp = artists;
  } else {
    artists.forEach((artist) => {
      if (
        artist.Name.toLowerCase().includes(inputText.toLowerCase()) ||
        artist.Genre.toLowerCase().includes(inputText.toLowerCase())
      ) {
        temp.push(artist);
      }
    });
  }
  return temp;
}

function filterEvents(inputText, filterSettings) {
  const { events } = useContext(EventContext);
  let eventList = [];
  events.map((event) => {
    filterArtist(inputText).forEach((artist) => {
      if (event.ArtistId === artist.Id) {
          if(filterSettings.LiveStream === 2 || event.LiveStream === filterSettings.LiveStream){
            eventList.push(event);
          }
      }
    });
  });
  return eventList;
}

export default filterEvents;
