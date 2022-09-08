import { React, useState } from 'react'

const artists = [
    {
      name: "Queen",
      id: 1,
      genre: "Rock",
    },
    {
      name: "Pink Floyd",
      id: 2,
      genre: "psychedelic"
    },
    {
      name: "50cent",
      id: 3,
      genre: "HipHop"
    }
];

function searchList(props) {

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