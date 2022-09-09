import React, { useEffect, useState } from 'react'
import styled from "styled-components";

const VideoPlayer = () => {

    const [video, setVideo] = useState(null)

    useEffect(async () => {
        console.log(JSON.stringify(video));
        await fetch('/data/video-example')
            .then(res => {
                return res.json()
            }).then(data => {
                console.log(data)
                setVideo(data)
                console.log(video)
            })
    }, [])

    return <>
        <video controls muted autoPlay>
            {/* <source src={video.} type="video/mp4"></source> */}
        </video>
    </>
}

export default VideoPlayer