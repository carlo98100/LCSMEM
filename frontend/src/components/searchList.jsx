import { React, useEffect, useState } from 'react'

function searchList(props) {

const [artists, setArtists] = useState([]);   

useEffect(() => {
    GetArtists();
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
        console.log(jsonData)
    } catch (err) {
        console.error(err);
    }
}
    const filterdList = artists.filter((el) => {
        if (props.input === "") {
            return el;
        }
        else{
            return el.name.toLowerCase().includes(props.input) || el.genre.toLowerCase().includes(props.input);
        }
        console.log(filterdList);
    })

    return (
        <ul>
            {filterdList.map((artist) => (
                <li key={artist.id}>{artist.name}</li>
            ))}
        </ul>
    )
}

export default searchList