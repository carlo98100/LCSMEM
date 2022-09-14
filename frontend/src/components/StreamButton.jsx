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
        <VideoLinks>
            {videos.map(video => <a href={`/Stream/${video.id}`}>{video.name}</a>)}
        </VideoLinks>
    </>
}

export default StreamButton

const VideoLinks = styled.div`
color: black;
`