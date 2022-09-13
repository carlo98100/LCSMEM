import React from 'react';
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Stream = () => {

	const video = useParams();
	console.log(video)

	return (
		<Container>
			<video controls src={`/data/video-stream/${video.id}`}></video>
		</Container>
	)
}

export default Stream

const Container = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	background-color: #27476e;
	justify-content: center;
	align-content: center;
`;