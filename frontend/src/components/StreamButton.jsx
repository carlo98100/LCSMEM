import React, { useEffect, useState } from 'react'
import Stream from '../views/Stream'

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
            {videos.map(video => <a href={`/Stream`}>{video.name}</a>)}
        </div>
    </>
}

export default StreamButton