import React, { useState, useEffect } from "react"
import styled from "styled-components"

const EventPage = () => {

    const { events, setEvents } = useState([])

    useEffect(() => {
        async function getEvents() {
            let eventList = await fetch('/data/events')
            eventList = await eventList.json()
            console.log(eventList)
            setEvents(eventList)
        }
        getEvents()
    }, [])

    return <>
        <div>
            {events.map(event => <h2>{event.name}</h2>
            )}
        </div>
    </>
}
export default EventPage

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