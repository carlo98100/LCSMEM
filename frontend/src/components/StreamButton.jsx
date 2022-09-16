import React from 'react'
import {  useNavigate } from "react-router-dom";
import styled from "styled-components";

function StreamButton({ VideoId }) {

    const navigate = useNavigate();

    return <>
        <VideoLink>
            <button onClick={() => navigate(`/Stream/${VideoId}`)}>Stream</button>
        </VideoLink>
    </>
}

export default StreamButton

const VideoLink = styled.div`
button {
    background: black;
    color: white;
    border: 2px solid;
    border-color: black;
    padding: 1em 2em;
    font-size: 1em;
    transform: scale(0.8);
    transition: color 0.2s, border-color 0.2s, box-shadow 0.2s, transform 0.2s;
    &:hover {
        border-color: red;
        color: red;
        box-shadow: 0 0.5em 0.5em -0.4em black;
        transform: scale(1) translateY(-0.2em);
        cursor: pointer;
    }
}
`