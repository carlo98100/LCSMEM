import React from 'react';
import StreamButton from '../components/StreamButton'
import styled from "styled-components";

const Stream = () => {

	return (
		<Container>
			<h1>Stream Video</h1>
			<video controls> </video>
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