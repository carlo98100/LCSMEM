import React from "react";
import styled from "styled-components";

function Input({ label, ...rest }) {
	return (
		<Container>
			<StyledLabel>{label}</StyledLabel>
			<StyledInput {...rest} required />
		</Container>
	);
}

export default Input;

const Container = styled.div``;

const StyledLabel = styled.p`
	font-size: 1.25em;
`;

const StyledInput = styled.input`
	border-radius: 0.5em;
	width: 100%;
	padding: 0.5em 0;
	margin: 0;
`;
