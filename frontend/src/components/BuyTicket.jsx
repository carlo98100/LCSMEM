import React from "react";
import { useState, useContext } from "react";
import styled from "styled-components";
import { addItemToCart, getCart } from "../CartUtils";
import ArtistContext from "../contexts/ArtistList";
import Input from "./Input";

function BuyTicket({ event }) {
	const [quantity, setQuantity] = useState(1);
	const { artists } = useContext(ArtistContext);
	const onSubmit = async (submitEvent) => {
		submitEvent.preventDefault();
		console.log(event);
	};

	function getArtist(event) {
		return artists.find((artist) => artist.Id === event.ArtistId);
	}

	const addToCart = () => {
		addItemToCart({
			id: event.Id,
			description: getArtist(event).Name,
			price: event.Price,
			quantity: quantity,
		});
	};

	return (
		<>
			<TicketBody>
				<Left>
					<Image></Image>
				</Left>
				<Center>
					<Date>
						<Day>TUESDAY</Day>
						<FullDate>{event.Date}</FullDate>
						<Year>2021</Year>
					</Date>
					<ArtistName>
						<h1>{getArtist(event).Name}</h1>
						<h2>Live</h2>
					</ArtistName>
					<Time>
						<p>
							8:00 PM <span>TO</span> 11:00 PM
						</p>
						<p>{event.City}</p>
					</Time>
				</Center>
				<Right>
					<EventName>{event.Name}</EventName>
					<Time>
						<p>
							8:00 PM <span>TO</span> 11:00 PM
						</p>
						<p>
							DOORS <span>@</span> 7:00 PM
						</p>
					</Time>
					<form onSubmit={onSubmit}>
						<AmountInput value={quantity} onChange={(e) => setQuantity(e.target.value)} label="Amount" type="number" min="1" />
						<BuyButton type="submit" value="Buy ticket" onClick={addToCart} />
					</form>
				</Right>
			</TicketBody>
		</>
	);
}

export default BuyTicket;

const TicketBody = styled.div`
	width: 80%;
	margin: 2% 0;
	display: flex;
	align-self: center;
	background: white;
	box-shadow: #ff9e07 0px 10px 40px;
`;

const Left = styled.div`
	width: 30%;
	display: flex;
`;

const Image = styled.div`
	height: 250px;
	width: 250px;
	background-image: url("https://www.bamse.se/wp-content/uploads/bamse-600x730.gif");
	background-size: contain;
	opacity: 0.85;
`;

const Center = styled.div`
	width: 40%;
	padding: 10px 30px;
	display: flex;
	flex-direction: column;
	text-align: center;
	justify-content: space-between;
	align-items: center;
`;

const Right = styled.div`
	width: 30%;
	border-left: 1px dashed #404040;
	height: 250px;
	padding: 10px 10px 10px 35px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
`;

const ArtistName = styled.div`
	h1 {
		margin: 0;
	}
`;

const EventName = styled.div`
	font-size: 18px;
`;

const Time = styled.div`
	padding: 10px 0;
	color: #ff9b00;
	text-align: center;
	display: flex;
	flex-direction: column;
	gap: 10px;
	font-weight: 700;
	p {
		margin: 0;
	}
	span {
		font-weight: 400;
		color: gray;
	}
`;

const Date = styled.p`
	font-weight: 700;
	border-top: 1px solid gray;
	border-bottom: 1px solid gray;
	padding: 5px 0;
	display: flex;
	align-items: center;
	justify-content: space-around;
	&:span {
		width: 100px;
	}
`;

const FullDate = styled.span`
	color: #ff9b00;
	font-size: 20px;
`;

const Day = styled.span`
	padding-right: 15px;
`;

const Year = styled.span`
	padding-left: 15px;
`;

const BuyButton = styled.input`
	background-color: #d83565;
	color: white;
	padding: 1em 3em;
	border: none;
	font-weight: bold;
	border-radius: 5px;
	position: absolute;
	bottom: 1em;
	left: 1em;
	right: 1em;

	&:hover {
		filter: brightness(1.25);
	}
`;

const AmountInput = styled(Input)`
	width: 30% !important;
	margin: auto !important;
`;
