import React, { useEffect, useState } from 'react'
import styled from "styled-components";

const StreamButton = (videoId) => {

    const [videos, setVideos] = useState([])

    useEffect(() => {
        async function getVideos() {
            let videoList = await fetch('/data/videos')
            videoList = await videoList.json()
            console.log(videoList)
            setVideos(videoList)
        }
        getVideos()
    }, [])

    return <>
        <videoLinks>
            {videos.map(video => <a href={`/Stream/${video.id}`}>{video.name}</a>)}
        </videoLinks>
    </>
}

export default StreamButton

const videoLinks = styled.div`
color: black;
`