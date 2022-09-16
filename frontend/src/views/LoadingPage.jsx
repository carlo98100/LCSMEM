import React from "react";
import styled from "styled-components";
import spinner from "../assets/Spinner-1s-200px.svg";

function LoadingPage() {
	return (
		<Container>
			<img src={spinner} />
		</Container>
	);
}

export default LoadingPage;

const Container = styled.div`
	display: flex;
	position: absolute;
	z-index: 100;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	justify-content: center;
	align-items: center;
	align-content: center;
`;