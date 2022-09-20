import { React, useEffect, useState } from "react";

function Tickets() {
  const [artists, setArtists] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    GetArtists();
    GetEvents();
  }, []);

  async function GetArtists(id) {
    try {
      const response = await fetch(`/data/artist/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const jsonData = await response.json();
      setArtists(jsonData);
    } catch (err) {
      console.error(err);
    }
  }

  async function GetEvents(id) {
    const id = filterdList[0].id;
    try {
      const response = await fetch(`/data/events/${id} `, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const jsonData = await response.json();
      setEvents(jsonData);
      console.log(jsonData);
    } catch (err) {
      console.error(err);
    }
  }
}

export default Tickets;
