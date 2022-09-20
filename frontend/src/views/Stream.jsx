import React from 'react';
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Stream = () => {

	const video = useParams();

	return (
		<VideoContainer>
			<video controls src={`/data/video-stream/${video.id}`}></video>
		</VideoContainer>
	)
}

export default Stream

const VideoContainer = styled.div`
background: 0f0f0f;
width: 90%;
padding: 5% 5%;
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
`;
