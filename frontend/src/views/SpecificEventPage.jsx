import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Ticket from "../components/Ticket";

function SpecificEventPage() {
	const { eventId } = useParams();
	const [event, setEvent] = useState({});

	const getSpecificEventInfo = async () => {
		fetch(`/data/events/GetSpecificEventInfo/${eventId}`)
			.then((response) => response.json())
			.then((data) => {
				setEvent(data);
			})
			.catch((err) => console.error(err));
	};

	useEffect(() => {
		getSpecificEventInfo();
	}, []);

	return (
		<Container>
			<LeftContainer>
				<EventInformation>
					<Heading>
						<h1>{event.ArtistName}</h1>
						<H2>{new Date(event.EventDate).toLocaleDateString("en-GB", { month: "long" })}</H2>
						<H2>{new Date(event.EventDate).toLocaleDateString("en-GB", { day: "numeric" })}</H2>
					</Heading>
					<img style={{ width: "80%", margin: "1em 10%" }} src={event.ArtistImage} />
				</EventInformation>
			</LeftContainer>

			<RightContainer>
				<Ticket event={event}></Ticket>
			</RightContainer>
		</Container>
	);
}

export default SpecificEventPage;

const Container = styled.div`
	display: flex;
	flex-direction: row;
	/* background-color: yellow; */
	min-height: calc(100vh - 70px);
`;

const LeftContainer = styled.div`
	/* height: 100%; */
	position: relative;
	/* background-color: red; */
	width: 40%;
`;

const RightContainer = styled.div`
	display: flex;
	flex-direction: column;
	/* background-color: blue; */
	width: 60%;
`;

const EventInformation = styled.div`
	position: absolute;
	top: 4em;
	bottom: 4em;
	background-color: white;
	right: 10%;
	left: 10%;
	box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

const Heading = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 10px;
`;

const H2 = styled.h2`
	margin: 0;
`;
