import React, { useEffect, useState } from 'react'

const VideoPlayer = () => {

    const [video, setVideo] = useState(null)

    useEffect(() => {
        fetch('/data/video-stream/1')
            .then(res => {
                return res.json()
            }).then(data => {
                console.log(data)
                setVideo(data)
                console.log(video)
            })
    }, [])

    return <>
        <video controls autoPlay>
            <source src="${video}" type="video/mp4" />
        </video>
    </>
}

export default VideoPlayer