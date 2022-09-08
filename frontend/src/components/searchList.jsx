import { React, useState } from 'react'

const artists = [
    {
      name: "Queen",
      id: 1,
    },
    {
      name: "Pink Floyd",
      id: 2,
    },
    {
      name: "A$AP Rocky",
      id: 3,
    },
];

function searchList(props) {

    const filterdList = artists.filter((el) => {
        if (props.input === "") {
            return el;
        }
        else{
            return el.name.toLowerCase().includes(props.input);
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