import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import EventBoard from "../components/EventBoard";
import LoadingPage from "./LoadingPage";

function ArtistPage() {
	const { artistId } = useParams();
	const [form, setForm] = useState([]);
	const [artistInformation, setArtistInformation] = useState({});

	useEffect(() => {
		GetEventInformation(artistId);
		GetArtistInformation(artistId);
	}, []);

	const [fetching, setFetching] = useState(false);

	async function GetEventInformation(id) {
		setFetching(true);
		await fetch(`/data/events/${id}`)
			.then((response) => response.json())
			.then((data) => {
				setForm(data);
			})
			.catch((err) => console.error(err));
		setFetching(false);
	}

	async function GetArtistInformation(id) {
		await fetch(`/data/Artist/${id}`)
			.then((response) => response.json())
			.then((data) => {
				setArtistInformation(data);
			})
			.catch((err) => console.error(err));
	}

	return fetching ? (
		<LoadingPage />
	) : (
		<Container>
			<LeftContainer>
				<ArtistImage src={artistInformation.Image} />
				<ArtistTitle>{artistInformation.Name}</ArtistTitle>

				<ArtistDescription>{artistInformation.Description}</ArtistDescription>
			</LeftContainer>

			<RightContainer>
				<EventBoard events={form} />
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

const ArtistImage = styled.img`
	width: 100%;
	height: 40%;
`;

const ArtistTitle = styled.h1`
	display: inline-block;
	text-align: center;
	background-color: #eae6e7;
	padding: 15px;
	border-radius: 10px;
`;

const ArtistDescription = styled.p`
	font-size: 1.25em;
	/* margin: 2em; */
	margin-left: 20px;
	border: 2px solid green;
`;
