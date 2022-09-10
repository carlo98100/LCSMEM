import React from "react";
import { RiComputerLine } from "react-icons/ri";
import { GiTempleDoor } from "react-icons/gi";
import styled from "styled-components";

function getDate(dateTime) {
	let date = new Date(dateTime);
	let day = date.getDate();

	return day;
}

function getMonth(dateTime) {
	let date = new Date(dateTime);
	let month = months[date.getMonth()];

	return month;
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function ConsertEvent({ date, location, type, amountOfticketsAvailable, totalAmountOftickets }) {
	return (
		<Container>
			<DateContainer>
				<h2 style={{ margin: 0 }}>{getDate(date)}</h2>
				<h2 style={{ margin: 0 }}>{getMonth(date)}</h2>
			</DateContainer>

			<LocationLink>{location}</LocationLink>
			{/* <h1>{type}</h1> */}
			{type == "liveStream" ? <RiComputerLine size={40} /> : <GiTempleDoor size={40} />}
			<TicketsContainer>
				<h3>1 / 15</h3>
				<BuyTicketBtn>Buy ticket</BuyTicketBtn>
			</TicketsContainer>
		</Container>
	);
}

export default ConsertEvent;

const Container = styled.div`
	background-color: white;
	width: 80%;
	height: 5em;
	padding: 15px;
	border-bottom: 2px solid black;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const DateContainer = styled.div`
	text-align: center;
`;

const TicketsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const BuyTicketBtn = styled.button`
	font-size: 0.75em;
	padding: 0.5em 1em;
	border-radius: 1.25em;
	cursor: pointer;
	background-color: #eca400;
	border: none;
	margin-bottom: 1em;
`;

const LocationLink = styled.a`
	font-size: 1.17em;
	font-weight: bold;
`;
