import React from 'react';
import VideoPlayer from '../components/StreamButton'
import styled from "styled-components";

const PickStream = () => {

	return (
		<Container>
			<VideoPlayer/>
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