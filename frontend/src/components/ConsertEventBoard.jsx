import styled from "styled-components";
import ConsertEvent from "./ConsertEvent";

function ConsertEventBoard({ events }) {
	return (
		<Container>
			<EventsTitle>Upcoming events</EventsTitle>
			{events?.map?.((event, index) => {
				return <ConsertEvent event={event} key={index}></ConsertEvent>;
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
	/* margin-left: 20px;
	margin-ri */
	display: flex;
	flex-direction: column;
	align-items: center;
	/* box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important; */
`;