import React, { useEffect, useState } from 'react'

const VideoPlayer = () => {

    const [videos, setVideos] = useState([])

    useEffect(() => {        
        async function getVideos(){
            let videoList = await fetch('/data/videos')
            videoList = await videoList.json()
            console.log(videoList)
            setVideos(videoList)    
        }
        getVideos()
    },[])

    return <>
        <video controls>
            <source src="/data/video-stream/`${videos.id}" type="video/mp4" />
        </video>
    </>
}

export default VideoPlayer