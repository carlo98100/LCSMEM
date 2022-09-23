import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ConsertEventBoard from "../Components/ConsertEventBoard";
import ArtistContext from "../contexts/ArtistList";
import EventContext from "../contexts/EventList";

function ArtistPage() {
	const { artistId } = useParams();
	const { artists } = useContext(ArtistContext)
	const { events } = useContext(EventContext)

	if(!artists?.length || !events?.length ) return <></>

	const artist = artists?.find?.(artist => artist.Id == artistId)
	
	const artistEvents = events?.filter?.(event => event.ArtistId == artist.Id)
	console.log("artistEvents", artistEvents)

	return  (
		<Container>
			<LeftContainer>
				<ConsertImage src={artist.Image} />
				<ConsertTitle>{artist.Name}</ConsertTitle>

				<ConsertDescription>{artist.Description}</ConsertDescription>
			</LeftContainer>

			<RightContainer>
				<ConsertEventBoard events={artistEvents} />
			</RightContainer>
		</Container>
	);
}

export default ArtistPage;

const Container = styled.div`
	display: flex;
`;

const LeftContainer = styled.div`
	/* background-color: Red; */
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 60%;
`;

const RightContainer = styled.div`
	/* background-color: Blue; */
	/* height: calc(100vh - 70px); */
	width: 40%;
`;

const ConsertImage = styled.img`
	width: 100%;
	height: 40%;
`;

const ConsertTitle = styled.h1`
	display: inline-block;
	text-align: center;
	background-color: #eae6e7;
	padding: 15px;
	border-radius: 10px;
`;

const ConsertDescription = styled.p`
	font-size: 1.25em;
	/* margin: 2em; */
	margin-left: 20px;
	border: 2px solid green;
`;