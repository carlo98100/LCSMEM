import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ConsertEventBoard from "../Components/ConsertEventBoard";
import LoadingPage from "./LoadingPage";

function ConsertPage() {
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
		try {
			const response = await fetch(`/data/events/${id}`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});
			const jsonData = await response.json();
			setForm(jsonData);
		} catch (err) {
			console.error(err);
		}
		setFetching(false);
	}

	async function GetArtistInformation(id) {
		try {
			const response = await fetch(`/data/Artist/${id}`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});
			const jsonData = await response.json();
			setArtistInformation(jsonData);
		} catch (err) {
			console.error(err);
		}
	}

	return fetching ? (
		<LoadingPage />
	) : (
		<Container>
			<LeftContainer>
				<ConsertImage src={artistInformation.Image} />
				<ConsertTitle>{artistInformation.Name}</ConsertTitle>

				<ConsertDescription>{artistInformation.Description}</ConsertDescription>
			</LeftContainer>

			<RightContainer>
				<ConsertEventBoard events={form} />
			</RightContainer>
		</Container>
	);
}

export default ConsertPage;

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