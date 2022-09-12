import React from 'react';
import styled from "styled-components";

const Stream = () => {

	return (
		<Container>
			<h1>${video.name}</h1>
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