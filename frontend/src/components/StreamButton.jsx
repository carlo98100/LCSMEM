import React, { useEffect, useState } from 'react'

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

    async function loadVideos() {
        for (let video of videos) { 
            <a>${video.name}</a>
        }
    }
    
    return loadVideos()
}

export default StreamButton