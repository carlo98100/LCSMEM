import React, { useEffect, useState } from 'react'
import styled from "styled-components";

const StreamButton = () => {

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
        <div>
            {videos.map(video => <videoLinks href={`/Stream/${video.id}`}>{video.name}</videoLinks>)}
        </div>
    </>
}

export default StreamButton

const videoLinks = styled.a`
color: black;
`