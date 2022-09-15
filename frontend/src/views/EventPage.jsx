import React, { useContext } from "react"
import EventContext from "../context/eventList"
import styled from "styled-components"

const EventPage = () => {
	const { events } = useContext(EventContext)

	return <>
		<Container className="event-list">
			<h1>Event List</h1>
			{events.map((event) => 
			<h2 key={event.Id}>{event.Date}</h2>)}
		</Container>
	</>
}
export default EventPage

const Container = styled.div`
	background-color: white;
	text-align: center;
	padding: 15px;
	border-bottom: 2px solid black;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;