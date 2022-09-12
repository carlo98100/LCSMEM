import React from 'react';
import StreamButton from '../components/StreamButton'
import styled from "styled-components";

const PickStream = () => {

	return (
		<Container>
			<h1>Select a video</h1>
			<StreamButton/>
		</Container>
	)
}

export default PickStream

const Container = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	background-color: #27476e;
	justify-content: center;
	align-content: center;
`;