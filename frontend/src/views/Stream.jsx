import React from 'react';
import VideoPlayer from '../components/VideoPlayer'
import styled from "styled-components";

const Stream = () => {
    
    return <>
        <Container>
            <h1>Stream Video</h1>
            <VideoPlayer/>
        </Container>
    </>
}

export default Stream

const Container = styled.div`
	display: flex;
	position: fixed;
	margin-top: 70px;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: #27476e;
	justify-content: center;
	align-content: center;
`;