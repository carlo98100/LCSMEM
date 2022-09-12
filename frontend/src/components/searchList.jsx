import { React, useEffect, useState } from 'react'

function searchList({input}) {

const [artists, setArtists] = useState([]);  
const [events, setEvents] = useState([]); 

useEffect(() => {
    GetArtists();
    GetEvents();
}, []);
    async function GetArtists() {
        try {
            const response = await fetch(`/data/artist`, {
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
    };
    const filterdList = artists.filter((el) => {
        if (input === "") {
            return el;
        }
        else{
            return el.Name.toLowerCase().startsWith(input);
        }
        console.log(el.Name);
        console.log(input);
    });


    async function GetEvents() {
        const id = filterdList[0].id;
        try {
            const response = await fetch(`/data/events/${id}`, {
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

    return (
        <ul>
            {filterdList.map((artist) => (
                <li key={artist.id}>{artist.Name}</li>
            ))}
        </ul>
    )
}

export default searchList