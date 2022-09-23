import React from "react";
import { RiComputerLine } from "react-icons/ri";
import { GiTempleDoor } from "react-icons/gi";
import styled from "styled-components";
import { parseBoolean } from "../Utils";
import { useContext } from "react";
import TicketContext from "../contexts/TicketsList";

function ConsertEvent({ event }) {
	const { tickets } = useContext(TicketContext)

	if (!tickets?.length) return <></>

	console.log(tickets?.filter?.(ticket => ticket.EventId === event.Id).length)

	const soldTickets = tickets?.filter?.(ticket => ticket.EventId === event.Id).length
	return (
		<Container>
			<DateContainer>
				<h2 style={{ margin: 0 }}>{new Date(event.Date).toLocaleDateString("en-GB", { day: "numeric" })}</h2>
				<h2 style={{ margin: 0 }}>{new Date(event.Date).toLocaleDateString("en-GB", { month: "long" })}</h2>
			</DateContainer>

			<LocationLink>{`${event.StreetName} ${event.StreetNumber}`}</LocationLink>

			{parseBoolean(event.LiveStream) ? <RiComputerLine size={40} /> : <GiTempleDoor size={40} />}
			<TicketsContainer>
				<h3>{`${soldTickets}/ ${event.AmountOfTickets}`}</h3>
				<BuyTicketBtn>Se more</BuyTicketBtn>
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