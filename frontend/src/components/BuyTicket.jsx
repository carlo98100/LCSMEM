<<<<<<< HEAD
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { addItemToCart, getCart } from "../CartUtils";
import Input from "./Input";

function Ticket({ event }) {
	const onSubmit = async (submitEvent) => {
		submitEvent.preventDefault();
		console.log(event);
	};

	const [quantity, setQuantity] = useState(1);

	const addToCart = () => {
		addItemToCart({
			id: event.EventId,
			description: event.ArtistName,
			price: event.EventPrice,
			quantity: quantity,
		});
	};

	return (
		<>
			<div class="ticketbody"></div>
			<div class="ticket">
				<div class="left">
					<div class="image">
						<p class="admit-one">
							<span>ADMIT ONE</span>
							<span>ADMIT ONE</span>
							<span>ADMIT ONE</span>
						</p>
						{/* <div class="ticket-number">
							<p>#20030220</p>
						</div> */}
					</div>
					<div class="ticket-info">
						<p class="date">
							<span>{new Date(event.EventDate).toLocaleDateString("en-GB", { weekday: "long" })}</span>
							<span class="june-29">
								{new Date(event.EventDate).toLocaleDateString("en-GB", { month: "long" })}{" "}
								{new Date(event.EventDate).toLocaleDateString("en-GB", { day: "numeric" })}
							</span>
							<span>{new Date(event.EventDate).toLocaleDateString("en-GB", { year: "numeric" })}</span>
						</p>
						<div class="show-name">
							<h1>{event.ArtistName}</h1>
							{event.EventIsLiveStream ? <h2>LiveStream</h2> : <h2>Live</h2>}
						</div>
						<div class="time">
							<p>{`${event.EventStreetName} ${event.EventStreetNumber} ${event.EventCity}`}</p>
						</div>
					</div>
				</div>
				<div class="right">
					<p class="admit-one">
						<span>ADMIT ONE</span>
						<span>ADMIT ONE</span>
						<span>ADMIT ONE</span>
					</p>
					<div class="right-info-container">
						<div class="show-name">
							<h1>{event.ArtistName}</h1>
						</div>
						<div class="time">
							<p>{`Starts @ ${new Date(event.EventDate).toLocaleTimeString("en-GB")}`}</p>
							<p>{`DOORS @ ${new Date(new Date(event.EventDate).setHours(new Date(event.EventDate).getHours() - 1)).toLocaleTimeString("en-GB")}`}</p>
						</div>
					</div>
					<form onSubmit={onSubmit}>
						<AmountInput value={quantity} onChange={(e) => setQuantity(e.target.value)} label="Amount" type="number" min="1" />
						<BuyButton type="submit" value="Buy ticket" onClick={addToCart} />
					</form>
				</div>
			</div>
		</>
	);
}

export default Ticket;

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