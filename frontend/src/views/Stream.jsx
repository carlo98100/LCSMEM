import React from 'react';
import video from '../components/VideoPlayer'
import styled from "styled-components";

const Stream = () => {

	return (
		<Container>
			<h1>Stream Video</h1>
			video(1)
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