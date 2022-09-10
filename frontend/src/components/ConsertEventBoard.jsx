import React from "react";
import styled from "styled-components";
import ConsertEvent from "./ConsertEvent";

let fakeEvents = [
	{
		date: "2022-09-07",
		location: "Västanväg 51",
		type: "liveStream",
	},
	{
		date: "2022-10-07",
		location: "Stora Högestensgatan 51",
		type: "onSite",
	},
	{
		date: "2022-11-07",
		location: "Humorgatan 32",
		type: "liveStream",
	},
	{
		date: "2022-12-07",
		location: "Golfgatan 51",
		type: "liveStream",
	},
];

async function GetEventInformation(eventId) {
	console.log(eventId);
	try {
		const response = await fetch("http://localhost:3333/data/events/" + eventId, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});

		const jsonData = await response.json();

		console.log(jsonData);
		return jsonData;
	} catch (err) {
		console.error(err);
	}
}

function ConsertEventBoard(artistId) {
	const events = GetEventInformation();
	return (
		<Container>
			<EventsTitle>Upcoming events</EventsTitle>
			{events.map((item) => {
				return <ConsertEvent date={item.date} location={item.location} type={item.type}></ConsertEvent>;
			})}
		</Container>
	);
}

export default ConsertEventBoard;

const EventsTitle = styled.h1`
	text-align: center;
	background-color: gray;
	padding: 15px;
	margin: 0;
	width: 80%;
`;

const Container = styled.div`
	padding: 2em;
	margin: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
