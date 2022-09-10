import React from "react";
import { FaUserCircle } from "react-icons/fa";
import styled from "styled-components";

export default function UserMenu({ icon, items }) {
	return (
		<Container>
			<FaUserCircle size={40} color={"#ECA400"} />
			<DropDownContainer>
				<p>asdasdasd</p>
				<p>asdasdasd</p>
				<p>asdaasdsd</p>
				<p>asdasd</p>
			</DropDownContainer>
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	height: 100%;
	display: flex;
	align-items: center;
	align-content: center;
	justify-content: center;
	background-color: transparent;
`;

const DropDownContainer = styled.div`
	position: absolute;
	bottom: 0;
	transform: translateY(100%);
`;
