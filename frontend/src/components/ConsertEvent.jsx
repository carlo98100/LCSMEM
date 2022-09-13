import React from "react";
import { RiComputerLine } from "react-icons/ri";
import { GiTempleDoor } from "react-icons/gi";
import styled from "styled-components";
import { parseBoolean } from "../utils";

function ConsertEvent({ event }) {
	var options = { month: "long", day: "numeric" };

	return (
		<Container>
			<DateContainer>
				<h2 style={{ margin: 0 }}>{new Date(event.eventDate).toLocaleDateString("en-GB", { day: "numeric" })}</h2>
				<h2 style={{ margin: 0 }}>{new Date(event.eventDate).toLocaleDateString("en-GB", { month: "long" })}</h2>
			</DateContainer>

			<LocationLink>{`${event.eventStreetName} ${event.eventStreetNumber}`}</LocationLink>

			{parseBoolean(event.IsLiveStream) ? <RiComputerLine size={40} /> : <GiTempleDoor size={40} />}
			<TicketsContainer>
				<h3>{`${event.AvailableTickets} / ${event.eventTotalAmountOfTickets}`}</h3>
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
